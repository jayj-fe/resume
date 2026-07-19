"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsCvPage } from "@/hooks/use-is-cv-page";

const SCROLL_OFFSET_PX = 400;

export function ScrollToTopButton() {
  const isCvPage = useIsCvPage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isCvPage) {
      return;
    }

    function onScroll() {
      setIsVisible(window.scrollY > SCROLL_OFFSET_PX);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isCvPage]);

  function onClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (isCvPage || !isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="페이지 상단으로 이동"
      title="Top"
      className="scroll-to-top"
    >
      <ArrowUp size={20} aria-hidden />
    </button>
  );
}
