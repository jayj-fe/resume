import Link from "next/link";
import { ArrowUpRight, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:text-slate-300">
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:jayj.fe@gmail.com"
            className="inline-flex items-center gap-2 transition hover:text-moss dark:hover:text-[#9bbf95]"
          >
            <Mail size={16} aria-hidden />
            jayj.fe@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
