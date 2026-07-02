import fs from "fs";
import path from "path";
import sharp from "sharp";

const PROJECT_ROOT = process.cwd();
const SOURCE = path.join(PROJECT_ROOT, "public/favicons/logo.png");
const TMP = path.join(PROJECT_ROOT, ".favicon-tmp");
const FAV = path.join(PROJECT_ROOT, "public/favicons");
const APP = path.join(PROJECT_ROOT, "app");

const OUTSIDE_WALL_LIGHTNESS = 115;

function getLightness(red, green, blue) {
  return (red + green + blue) / 3;
}

function isWall(red, green, blue) {
  return getLightness(red, green, blue) < OUTSIDE_WALL_LIGHTNESS;
}

function createOutsideMask(width, height, pixels) {
  const outside = new Uint8Array(width * height);
  const queue = [];

  function tryPush(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) {
      return;
    }

    const index = y * width + x;

    if (outside[index]) {
      return;
    }

    const offset = index * 4;

    if (isWall(pixels[offset], pixels[offset + 1], pixels[offset + 2])) {
      return;
    }

    outside[index] = 1;
    queue.push(index);
  }

  for (let x = 0; x < width; x += 1) {
    tryPush(x, 0);
    tryPush(x, height - 1);
  }

  for (let y = 0; y < height; y += 1) {
    tryPush(0, y);
    tryPush(width - 1, y);
  }

  while (queue.length > 0) {
    const index = queue.pop();
    const x = index % width;
    const y = Math.floor(index / width);

    tryPush(x - 1, y);
    tryPush(x + 1, y);
    tryPush(x, y - 1);
    tryPush(x, y + 1);
  }

  return outside;
}

async function createTransparentSquareLogo() {
  const { data, info } = await sharp(SOURCE)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = Buffer.from(data);
  const outsideMask = createOutsideMask(info.width, info.height, pixels);

  for (let index = 0; index < outsideMask.length; index += 1) {
    if (!outsideMask[index]) {
      continue;
    }

    pixels[index * 4 + 3] = 0;
  }

  const trimmed = await sharp(pixels, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 1 })
    .png()
    .toBuffer();

  const meta = await sharp(trimmed).metadata();
  const size = Math.max(meta.width, meta.height);
  const padding = Math.round(size * 0.08);

  return sharp(trimmed)
    .extend({
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .resize(size + padding * 2, size + padding * 2, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
}

function createIco(pngBuffers) {
  const images = pngBuffers.map((buffer) => {
    const width = buffer[16] || 256;
    const height = buffer[28] === 0 ? width : buffer[28] || 256;

    return { data: buffer, width: width || 256, height: height || 256 };
  });

  const count = images.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const parts = [Buffer.alloc(headerSize)];

  parts[0].writeUInt16LE(0, 0);
  parts[0].writeUInt16LE(1, 2);
  parts[0].writeUInt16LE(count, 4);

  images.forEach((image, index) => {
    const entryOffset = 6 + index * 16;
    parts[0].writeUInt8(image.width >= 256 ? 0 : image.width, entryOffset);
    parts[0].writeUInt8(image.height >= 256 ? 0 : image.height, entryOffset + 1);
    parts[0].writeUInt8(0, entryOffset + 2);
    parts[0].writeUInt8(0, entryOffset + 3);
    parts[0].writeUInt16LE(1, entryOffset + 4);
    parts[0].writeUInt16LE(32, entryOffset + 6);
    parts[0].writeUInt32LE(image.data.length, entryOffset + 8);
    parts[0].writeUInt32LE(offset, entryOffset + 12);
    parts.push(image.data);
    offset += image.data.length;
  });

  return Buffer.concat(parts);
}

async function resizePng(source, size) {
  return sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
}

async function main() {
  fs.mkdirSync(TMP, { recursive: true });

  const squareLogo = await createTransparentSquareLogo();
  await sharp(squareLogo).png().toFile(path.join(TMP, "logo-transparent.png"));

  const sizes = [16, 32, 48, 57, 60, 70, 72, 76, 96, 114, 120, 144, 150, 152, 180, 192, 310, 512];
  const pngBySize = new Map();

  for (const size of sizes) {
    pngBySize.set(size, await resizePng(squareLogo, size));
  }

  const ico = createIco([
    pngBySize.get(16),
    pngBySize.get(32),
    pngBySize.get(48),
  ]);

  fs.writeFileSync(path.join(TMP, "favicon.ico"), ico);
  fs.writeFileSync(path.join(APP, "favicon.ico"), ico);
  fs.writeFileSync(path.join(APP, "icon.png"), pngBySize.get(512));
  fs.writeFileSync(path.join(APP, "apple-icon.png"), pngBySize.get(180));
  fs.writeFileSync(path.join(FAV, "logo-profile.png"), pngBySize.get(512));

  const copyMap = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "favicon-96x96.png": 96,
    "favicon.ico": null,
    "android-icon-36x36.png": 36,
    "android-icon-48x48.png": 48,
    "android-icon-72x72.png": 72,
    "android-icon-96x96.png": 96,
    "android-icon-144x144.png": 144,
    "android-icon-192x192.png": 192,
    "apple-icon-57x57.png": 57,
    "apple-icon-60x60.png": 60,
    "apple-icon-72x72.png": 72,
    "apple-icon-76x76.png": 76,
    "apple-icon-114x114.png": 114,
    "apple-icon-120x120.png": 120,
    "apple-icon-144x144.png": 144,
    "apple-icon-152x152.png": 152,
    "apple-icon-180x180.png": 180,
    "apple-icon.png": 180,
    "apple-icon-precomposed.png": 180,
    "ms-icon-144x144.png": 144,
    "ms-icon-150x150.png": 150,
    "ms-icon-310x310.png": 310,
    "ms-icon-70x70.png": 70,
  };

  for (const [filename, size] of Object.entries(copyMap)) {
    const output = path.join(FAV, filename);

    if (filename === "favicon.ico") {
      fs.writeFileSync(output, ico);
      continue;
    }

    if (size === 36) {
      fs.writeFileSync(output, await resizePng(squareLogo, 36));
      continue;
    }

    fs.writeFileSync(output, pngBySize.get(size));
  }

  fs.rmSync(TMP, { recursive: true, force: true });
  console.log("Favicons generated.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
