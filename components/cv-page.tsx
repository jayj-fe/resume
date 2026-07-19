import type { ReactNode } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { CareerDetail } from "@/components/career-detail";
import { CvPdfDownloadButton } from "@/components/cv-pdf-download-button";
import { careerProjects } from "@/lib/career";

const profile = {
  name: "이정재",
  englishName: "Jay.J",
  title: "Front End Developer",
  email: "jayj.fe@gmail.com",
  github: "https://github.com/jayj-fe",
  linkedin: "https://www.linkedin.com/in/jeongjae-lee-279749219/",
} as const;

const careers = [
  { label: "한국일보사", period: "2023.07 ~" },
  { label: "위트플러스", period: "2017.02 ~ 2023.06" },
  { label: "시도우", period: "2015.11 ~ 2016.11" },
] as const;

const projects = [
  {
    title: "쩝쩝박사",
    href: "https://food-blog-appvercel.vercel.app/home",
    period: "2026.02 ~",
    description:
      "맛집 블로그를 작성하고 AI로 자동으로 영상을 만들어 유튜브 숏츠까지 자동 업로드 되는 서비스.",
  },
  {
    title: "캐시나무",
    href: "https://cashnamu.com/main.do",
    period: "2023.09 ~ 2025.12",
    description: "쇼핑하면 적립금이 모이고 적립금을 캐시백 해주는 서비스.",
  },
  {
    title: "대진표(NPM)",
    href: "https://www.npmjs.com/package/dol-match-bracket",
    period: "2023.08 ~ 2023.09",
    description: "토너먼트 대진표를 만드는 자바스크립트 라이브러리",
  },
] as const;

const awards = [
  {
    title: '42회 관훈언론상 "저널리즘 혁신 부문" 수상',
    href: "http://www.kwanhun.com/page/brd2_list.php?kind=05",
    period: "2024.12",
    projectTitle: "세월호 참사 10주기 - 그날의 책임자들, 저울은 공정했을까",
    projectHref: "https://interactive.hankookilbo.com/v/sewol",
    projectPeriod: "2024.02 ~ 2024.04",
  },
  {
    title: '41회 관훈언론상 "저널리즘 혁신 부문" 수상',
    href: "http://www.kwanhun.com/page/brd2_list.php?kind=05",
    period: "2023.12",
    projectTitle: "<미씽> 사라진 당신을 찾아서",
    projectHref: "https://interactive.hankookilbo.com/v/dementia",
    projectPeriod: "2023.08 ~ 2023.09",
  },
  {
    title: '제6회 한국 데이터저널리즘 어워드 "올해의 데이터 시각화 상" 수상',
    href: "http://datajournalismawards.kr/2023-winner7/",
    period: "2023.11",
    projectTitle: "<미씽> 사라진 당신을 찾아서",
    projectHref: "https://interactive.hankookilbo.com/v/dementia/chapter2.html",
    projectPeriod: "2023.08 ~ 2023.09",
  },
  {
    title: '웹 어워드 코리아 2022 "쇼핑몰부문 통합 대상" 수상',
    href: "http://www.i-award.or.kr/Web/Assess/FinalCandidateView.aspx?REG_SEQNO=12385",
    period: "2022.12",
    projectTitle: "와인나라",
    projectHref: "https://www.winenara.com/shop/main",
    projectPeriod: "2022.02 ~ 2022.04",
  },
] as const;

const sectionTitleClassName =
  "text-2xl font-black tracking-tight text-ink sm:text-3xl dark:text-white";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-bold text-ink underline decoration-transparent underline-offset-4 transition hover:decoration-current dark:text-white"
    >
      {children}
      <span className="sr-only"> 새 창에서 열기</span>
    </a>
  );
}

export function CvPage() {
  return (
    <section className="cv-page mx-auto w-full max-w-6xl px-5 pb-20 pt-12 sm:px-8 lg:pt-16">
      <div className="mb-8 flex justify-end no-print">
        <CvPdfDownloadButton />
      </div>

      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          {profile.title}
        </p>
        <h1 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl dark:text-white">
          {profile.name}
          <span className="ml-3 text-xl font-bold text-slate-500 sm:text-2xl dark:text-slate-400">
            {profile.englishName}
          </span>
        </h1>

        <ul className="mt-6 flex flex-col gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition hover:text-ink dark:hover:text-white"
            >
              <Mail size={16} aria-hidden />
              {profile.email}
            </a>
          </li>
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-ink dark:hover:text-white"
            >
              <Github size={16} aria-hidden />
              github.com/jayj-fe
              <span className="sr-only"> 새 창에서 열기</span>
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-ink dark:hover:text-white"
            >
              <Linkedin size={16} aria-hidden />
              LinkedIn
              <span className="sr-only"> 새 창에서 열기</span>
            </a>
          </li>
        </ul>
      </header>

      <div className="mt-14 w-full max-w-[80%] space-y-12 sm:mt-16">
        <section aria-labelledby="cv-career-summary-title">
          <h2 id="cv-career-summary-title" className={sectionTitleClassName}>
            Career
          </h2>
          <ul className="mt-4 grid gap-3">
            {careers.map((career) => (
              <li
                key={career.label}
                className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3 text-sm dark:border-slate-800"
              >
                <span className="font-bold text-ink dark:text-white">{career.label}</span>
                <span className="text-slate-500 dark:text-slate-400">{career.period}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="cv-project-title">
          <h2 id="cv-project-title" className={sectionTitleClassName}>
            Project
          </h2>
          <ul className="mt-4 grid gap-5">
            {projects.map((project) => (
              <li
                key={project.title}
                className="border-b border-line pb-4 text-sm dark:border-slate-800"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <ExternalLink href={project.href}>{project.title}</ExternalLink>
                  <span className="text-slate-500 dark:text-slate-400">{project.period}</span>
                </div>
                <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="cv-awards-title">
          <h2 id="cv-awards-title" className={sectionTitleClassName}>
            Awards
          </h2>
          <ul className="mt-4 grid gap-6">
            {awards.map((award) => (
              <li
                key={`${award.title}-${award.period}`}
                className="border-b border-line pb-5 text-sm dark:border-slate-800"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <ExternalLink href={award.href}>{award.title}</ExternalLink>
                  <span className="shrink-0 text-slate-500 dark:text-slate-400">{award.period}</span>
                </div>
                <ul className="mt-2 grid gap-1 text-slate-600 dark:text-slate-300">
                  <li>
                    프로젝트명 :{" "}
                    <ExternalLink href={award.projectHref}>{award.projectTitle}</ExternalLink>
                  </li>
                  <li>
                    프로젝트기간 :{" "}
                    <span className="font-semibold text-slate-500 dark:text-slate-400">
                      {award.projectPeriod}
                    </span>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section
        className="cv-career-detail mt-20 w-full sm:mt-24 lg:mt-32"
        aria-labelledby="cv-career-detail-title"
      >
        <h2 id="cv-career-detail-title" className={`mb-10 sm:mb-12 ${sectionTitleClassName}`}>
          상세 경력 사항
        </h2>
        <CareerDetail projects={careerProjects} />
      </section>
    </section>
  );
}
