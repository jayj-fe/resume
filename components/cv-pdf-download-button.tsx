"use client";

import { Download } from "lucide-react";

const PDF_FILE_TITLE = "Jay.J_CV";

export function CvPdfDownloadButton() {
  function onDownloadPdf() {
    const previousTitle = document.title;
    document.title = PDF_FILE_TITLE;
    window.print();
    document.title = previousTitle;
  }

  return (
    <button
      type="button"
      onClick={onDownloadPdf}
      aria-label="PDF로 다운로드"
      className="cv-pdf-download no-print inline-flex items-center gap-2 rounded-md border border-line bg-white px-4 py-2.5 text-sm font-bold text-ink transition hover:border-moss hover:text-moss dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-[#9bbf95] dark:hover:text-[#9bbf95]"
    >
      <Download size={16} aria-hidden />
      PDF 다운로드
    </button>
  );
}
