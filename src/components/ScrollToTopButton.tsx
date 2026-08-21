"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import styles from "@/components/Footer/footer.module.css";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [arrowAnimationData, setArrowAnimationData] = useState<object | null>(null);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);

  const anchorRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    fetch("/animations/arrow-down-purple.json")
      .then((response) => response.json())
      .then((data) => setArrowAnimationData(data))
      .catch(() => setArrowAnimationData(null));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;

    function updatePosition() {
      const anchor = anchorRef.current;
      if (!anchor) return;

      /*
       * IMPORTANT:
       * Use the actual shared footer as the positioning reference.
       * This keeps the button exactly on the page/footer boundary
       * on every page, screen width and browser zoom level.
       */
      const footer = anchor.closest("footer");

      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const buttonHeight = buttonRef.current?.offsetHeight ?? 91.96;

      setCoords({
        /*
         * Half of the button remains above the footer line
         * and half remains inside the footer.
         */
        top: footerRect.top - buttonHeight / 2,

        /*
         * Exact horizontal center of the footer.
         */
        left: footerRect.left + footerRect.width / 2,
      });
    }

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [mounted, isVisible]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/*
       * This anchor stays inside the shared Footer.
       * No visual layer/design is added by this element.
       */}
      <span
        ref={anchorRef}
        className={styles["scroll-top-anchor"]}
        aria-hidden="true"
      />

      {mounted &&
        createPortal(
          <button
            type="button"
            ref={buttonRef}
            className={`${styles["scroll-top-button"]}${
              isVisible
                ? ` ${styles["scroll-top-button-visible"]}`
                : ""
            }`}
            onClick={handleClick}
            aria-label="Scroll to top"
            style={{
              position: "fixed",
              top: coords?.top ?? 0,
              left: coords?.left ?? 0,
              transform: "translateX(-50%)",
              visibility: coords ? "visible" : "hidden",
              zIndex: 10001,
            }}
          >
            <span
              className={styles["scroll-top-button-inner"]}
              aria-hidden="true"
            >
              {arrowAnimationData && (
                <Lottie
                  animationData={arrowAnimationData}
                  loop
                  autoplay
                  className={styles["scroll-top-button-icon"]}
                />
              )}
            </span>
          </button>,
          document.body
        )}
    </>
  );
}
