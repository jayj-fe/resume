import { ArrowUpRight, Code2, Layers, Sparkles } from "lucide-react";
import { careers, skills } from "@/lib/resume";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-12 sm:px-8 lg:pt-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-moss dark:text-[#9bbf95]">
            Front End Developer
          </p>
          <h1 className="text-4xl font-black leading-tight text-ink sm:text-6xl dark:text-white">
            Jay.J
            <span className="block text-2xl font-bold text-clay sm:text-4xl">
              인터랙티브한 웹 경험을 구현합니다.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            한국일보 서비스와 CMS 유지운영, 선거/기획/인터랙티브 페이지 개발을
            중심으로 일해온 프론트엔드 개발자입니다. 읽기 좋은 UI와 움직임이 있는
            콘텐츠, 운영 가능한 구조 사이의 균형을 중요하게 봅니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:jayj.fe@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-moss dark:bg-white dark:text-midnight dark:hover:bg-[#dfe7dc]"
            >
              Contact
              <ArrowUpRight size={16} aria-hidden />
            </a>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-bold text-ink transition hover:border-moss hover:text-moss dark:border-slate-700 dark:text-white dark:hover:border-[#9bbf95] dark:hover:text-[#9bbf95]"
            >
              Blog
              <ArrowUpRight size={16} aria-hidden />
            </a>
          </div>
        </div>

        <aside className="rounded-lg border border-line bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            Focus
          </h2>
          <div className="mt-5 space-y-5">
            {[
              ["Interactive", "Three.js, Astro, React 기반 인터랙티브 페이지"],
              ["Operation", "뉴스 서비스와 CMS의 안정적인 유지운영"],
              ["UI Build", "접근성과 반응형을 고려한 웹/모바일 구축"],
            ].map(([title, description], index) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#eef3eb] text-moss dark:bg-slate-800 dark:text-[#9bbf95]">
                  {[Sparkles, Layers, Code2].map((Icon) => (
                    <Icon key={Icon.name} size={18} aria-hidden />
                  ))[index]}
                </span>
                <div>
                  <h3 className="font-bold text-ink dark:text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <section className="mt-16 grid gap-8 lg:grid-cols-[260px_1fr]">
        <h2 className="text-2xl font-black text-ink dark:text-white">Career</h2>
        <div className="space-y-6">
          {careers.map((career) => (
            <article
              key={career.company}
              className="rounded-lg border border-line bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-black text-ink dark:text-white">
                    {career.company}
                  </h3>
                  <p className="mt-1 font-semibold text-moss dark:text-[#9bbf95]">
                    {career.role}
                  </p>
                </div>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {career.period}
                </p>
              </div>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {career.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {career.projects.map((project) =>
                  project.href ? (
                    <a
                      key={project.name}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-line px-3 py-2 text-xs font-bold text-ink transition hover:border-moss hover:text-moss dark:border-slate-700 dark:text-white dark:hover:border-[#9bbf95] dark:hover:text-[#9bbf95]"
                    >
                      {project.name}
                      <ArrowUpRight size={13} aria-hidden />
                    </a>
                  ) : (
                    <span
                      key={project.name}
                      className="rounded-md bg-[#eef3eb] px-3 py-2 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {project.name}
                    </span>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[260px_1fr]">
        <h2 className="text-2xl font-black text-ink dark:text-white">Skills</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-lg border border-line bg-white px-4 py-3 text-sm font-bold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
