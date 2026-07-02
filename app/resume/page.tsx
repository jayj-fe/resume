import Image from "next/image";
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { CareerDetail } from "@/components/career-detail";
import { CareerSidebar } from "@/components/career-sidebar";
import { careerProjects } from "@/lib/career";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "프론트엔드 개발자 Jay.J의 경력, 주요 프로젝트, 기술 스택을 정리한 이력서입니다.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume | Jay.J",
    description:
      "프론트엔드 개발자 Jay.J의 경력, 주요 프로젝트, 기술 스택을 정리한 이력서입니다.",
    url: "/resume",
  },
};

export default function ResumePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-12 sm:px-8 lg:pt-16">
      <div className="flex w-full max-w-[640px] items-center gap-6 sm:gap-10">
        <aside className="flex-shrink-0" aria-label="프로필 이미지">
          <div className="relative aspect-square h-[120px] w-[120px] sm:h-[160px] sm:w-[160px]">
            <Image
              src="/favicons/logo-profile.png"
              alt="Jay.J 프로필 이미지"
              fill
              sizes="(min-width: 640px) 160px, 120px"
              className="object-contain"
              priority
            />
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <h1 className="text-4xl font-black leading-tight text-ink sm:text-6xl dark:text-white">
            Jay.J
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Front End Developer
          </p>
          <a
            href="mailto:jayj.fe@gmail.com"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <Mail size={16} aria-hidden />
            jayj.fe@gmail.com
          </a>
        </div>
      </div>

      <section className="blog-shell !px-0 !pt-0 mt-20 sm:mt-24 lg:mt-32">
        <CareerSidebar />
        <div className="min-w-0">
          <CareerDetail projects={careerProjects} />
        </div>
      </section>
    </section>
  );
}
