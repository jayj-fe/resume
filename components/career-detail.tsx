import type { ReactNode } from "react";
import { TechBadges } from "@/components/tech-badges";
import type { CareerProject } from "@/lib/types/career";

interface CareerSectionProps {
  label: string;
  children: ReactNode;
}

interface CareerListProps {
  items: string[];
}

interface CareerDetailProps {
  projects: CareerProject[];
}

function CareerSection({ label, children }: CareerSectionProps) {
  return (
    <div className="career-detail__section">
      <h4 className="career-detail__label">{label}</h4>
      <div className="career-detail__body">{children}</div>
    </div>
  );
}

function CareerList({ items }: CareerListProps) {
  return (
    <ul className="career-detail__list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function CareerDetail({ projects }: CareerDetailProps) {
  return (
    <section className="career-detail" aria-label="경력 상세">
      {projects.map((project) => (
        <article key={`${project.company}-${project.title}`} className="career-detail__item">
          <header>
            {/* <p className="career-detail__company"># {companyLabelBySlug[project.company]}</p> */}
            <h3 className="career-detail__title">{project.title}</h3>
            <p className="career-detail__period">
              <span className="sr-only">기간: </span>
              {project.period}
            </p>
          </header>

          <CareerSection label="역할">
            <CareerList items={project.role} />
          </CareerSection>

          <CareerSection label="주요이슈">
            <CareerList items={project.issues} />
          </CareerSection>

          <CareerSection label="업무">
            <CareerList items={project.tasks} />
          </CareerSection>

          {project.awards?.length ? (
            <CareerSection label="수상">
              <CareerList items={project.awards} />
            </CareerSection>
          ) : null}

          {project.notes?.map((note) => (
            <p key={note} className="career-detail__note">
              {note}
            </p>
          ))}

          {project.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="career-detail__link"
            >
              {link.label}
              <span className="sr-only"> 새 창에서 열기</span>
            </a>
          ))}

          <CareerSection label="사용기술">
            <TechBadges tech={project.tech} />
          </CareerSection>
        </article>
      ))}
    </section>
  );
}
