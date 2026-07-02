import type { Metadata } from "next";
import { ResumeHome } from "@/components/resume-home";
import { toCanonicalPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "프론트엔드 개발자 Jay.J의 경력, 주요 프로젝트, 기술 스택을 정리한 이력서입니다.",
  alternates: {
    canonical: toCanonicalPath("/"),
  },
  openGraph: {
    title: "Resume | Jay.J",
    description:
      "프론트엔드 개발자 Jay.J의 경력, 주요 프로젝트, 기술 스택을 정리한 이력서입니다.",
    url: toCanonicalPath("/"),
  },
};

export default function HomePage() {
  return <ResumeHome />;
}
