import Image from "next/image";
import { Mail } from "lucide-react";
import { CareerDetail } from "@/components/career-detail";
import { CareerSidebar } from "@/components/career-sidebar";
import { JsonLd } from "@/components/json-ld";
import { careerProjects } from "@/lib/career";
import { toAbsoluteUrl } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jay.J",
  jobTitle: "Front End Developer",
  email: "jayj.fe@gmail.com",
  url: toAbsoluteUrl("/"),
  image: toAbsoluteUrl("/favicons/logo-profile.png"),
  sameAs: [
    "https://github.com/jayj-fe",
    "https://www.linkedin.com/in/jeongjae-lee-279749219/",
  ],
};

export function ResumeHome() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-12 sm:px-8 lg:pt-16">
      <JsonLd data={personJsonLd} />
      <div className="flex w-full max-w-[640px] items-center gap-4 sm:gap-10">
        <aside className="flex-shrink-0" aria-label="프로필 이미지">
          <div className="relative aspect-square h-[96px] w-[96px] sm:h-[160px] sm:w-[160px]">
            <Image
              src="/favicons/logo-profile.png"
              alt="Jay.J 프로필 이미지"
              fill
              sizes="(min-width: 640px) 160px, 96px"
              className="object-contain"
              priority
            />
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl dark:text-white">
            Jay.J
          </h1>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:mt-4 sm:text-sm dark:text-slate-400">
            Front End Developer
          </p>
          <a
            href="mailto:jayj.fe@gmail.com"
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-600 transition hover:text-slate-900 sm:mt-8 sm:text-sm dark:text-slate-400 dark:hover:text-slate-200"
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
