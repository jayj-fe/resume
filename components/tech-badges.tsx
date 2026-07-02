import { getBadgeTextColor, getTechBadgeItems } from "@/lib/tech-stack";

interface TechBadgesProps {
  tech: string;
}

export function TechBadges({ tech }: TechBadgesProps) {
  const items = getTechBadgeItems(tech);

  return (
    <ul className="tech-badges" aria-label="사용 기술 목록">
      {items.map((item) => {
        const backgroundColor = `#${item.hex}`;
        const textColor = getBadgeTextColor(item.hex);

        return (
          <li key={item.key}>
            <span
              className="tech-badge"
              style={{ backgroundColor, color: textColor }}
              aria-label={item.label}
            >
              {item.path ? (
                <svg
                  className="tech-badge__icon"
                  viewBox="0 0 24 24"
                  aria-hidden
                  focusable="false"
                >
                  <path d={item.path} fill="currentColor" />
                </svg>
              ) : (
                <span className="tech-badge__dot" aria-hidden />
              )}
              <span className="tech-badge__label">{item.label}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
