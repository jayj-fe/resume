import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { ScrollToTopButton } from "@/components/scroll-to-top";
import { siteUrl, toAbsoluteUrl, toCanonicalPath, withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jay.J | Front End Developer",
    template: "%s | Jay.J",
  },
  description:
    "프론트엔드 개발자 Jay.J의 이력서, 프로젝트 경험, 기술 기록을 정리한 포트폴리오입니다.",
  applicationName: "Jay.J Resume",
  authors: [{ name: "Jay.J", url: siteUrl }],
  creator: "Jay.J",
  publisher: "Jay.J",
  keywords: [
    "Jay.J",
    "Front End Developer",
    "Frontend Developer",
    "프론트엔드 개발자",
    "React",
    "Next.js",
    "이력서",
    "포트폴리오",
  ],
  alternates: {
    canonical: toCanonicalPath("/"),
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: toCanonicalPath("/"),
    siteName: "Jay.J",
    title: "Jay.J | Front End Developer",
    description:
      "프론트엔드 개발자 Jay.J의 이력서, 프로젝트 경험, 기술 기록을 정리한 포트폴리오입니다.",
    images: [
      {
        url: withBasePath("/favicons/logo-profile.png"),
        width: 512,
        height: 512,
        alt: "Jay.J 프로필 이미지",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Jay.J | Front End Developer",
    description:
      "프론트엔드 개발자 Jay.J의 이력서, 프로젝트 경험, 기술 기록을 정리한 포트폴리오입니다.",
    images: [withBasePath("/favicons/logo-profile.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: withBasePath("/favicons/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
      { url: withBasePath("/favicons/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
      { url: withBasePath("/favicons/favicon.ico") },
    ],
    apple: [
      {
        url: withBasePath("/favicons/apple-icon-180x180.png"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jay.J",
  url: siteUrl,
  description:
    "프론트엔드 개발자 Jay.J의 이력서, 프로젝트 경험, 기술 기록을 정리한 포트폴리오입니다.",
  inLanguage: "ko-KR",
  author: {
    "@type": "Person",
    name: "Jay.J",
    url: toAbsoluteUrl("/"),
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <JsonLd data={websiteJsonLd} />
        <a className="skip-link" href="#main-content">
          본문 바로가기
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
