"use client";

import Link from "next/link";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsCvPage } from "@/hooks/use-is-cv-page";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
] as const;

export function Header() {
  const isCvPage = useIsCvPage();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setDarkMode(shouldUseDark);
  }, []);

  function onToggleTheme() {
    const nextTheme = !darkMode;
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
    setDarkMode(nextTheme);
  }

  if (isCvPage) {
    return null;
  }

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur dark:border-slate-800 dark:bg-midnight/90">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-base font-black text-ink dark:text-white">
          Jay.J
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-white hover:text-moss dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-[#9bbf95]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/jayj-fe"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-md text-slate-700 transition hover:bg-white hover:text-moss dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-[#9bbf95]"
          >
            <Github size={18} aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/jeongjae-lee-279749219/?skipRedirect=true"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-md text-slate-700 transition hover:bg-white hover:text-moss dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-[#9bbf95]"
          >
            <Linkedin size={18} aria-hidden />
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={darkMode ? "라이트 모드로 변경" : "다크 모드로 변경"}
            title={darkMode ? "Light mode" : "Dark mode"}
            className="flex h-9 w-9 items-center justify-center rounded-md text-slate-700 transition hover:bg-white hover:text-moss dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-[#9bbf95]"
          >
            {darkMode ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
          </button>
        </nav>
      </div>
    </header>
  );
}
