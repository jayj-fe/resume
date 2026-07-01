import { careerCompanies } from "@/lib/career";

export function CareerSidebar() {
  return (
    <aside className="blog-sidebar" aria-labelledby="career-sidebar-title">
      <h2 id="career-sidebar-title" className="blog-sidebar__title">Career</h2>
      <ul className="blog-sidebar__list">
        {careerCompanies.map((company) => (
          <li key={company.slug} className="blog-sidebar__text">
            # {company.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}
