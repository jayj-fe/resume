import type { Metadata } from "next";
import { CvPage } from "@/components/cv-page";
import { toCanonicalPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "CV",
  description: "프론트엔드 개발자 Jay.J의 인적사항과 경력 상세입니다.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: toCanonicalPath("/cv"),
  },
};

export default function CvRoutePage() {
  return <CvPage />;
}
