"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import styles from "@/components/Footer/footer.module.css";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [arrowAnimationData, setArrowAnimationData] =
    useState<object | null>(null);

  const [mounted, setMounted] = useState(false);

  const [coords, setCoords] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const anchorRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    fetch("/animations/arrow-down-purple.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load arrow animation");
        }

        return response.json();
      })
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

    const button = buttonRef.current;

    if (!button) return;

    /*
     * Keep the original button placement.
     * Prevent page-level CSS from moving or hiding it behind the footer.
     */
    button.style.setProperty(
      "translate",
      "none",
      "important"
    );

    button.style.setProperty(
      "transform",
      "translate(-50%, -50%)",
      "important"
    );

    /*
     * Keep the complete chevron button visible
     * above the footer without changing its position.
     */
    button.style.setProperty(
      "z-index",
      "10000",
      "important"
    );

    return () => {
      button.style.removeProperty("translate");
      button.style.removeProperty("transform");
      button.style.removeProperty("z-index");
    };
  }, [mounted]);

  useLayoutEffect(() => {
    if (!mounted) return;

    const anchor = anchorRef.current;
    const footer = anchor?.closest("footer");

    if (!footer) return;

    let frameId = 0;

    const updatePosition = () => {
      window.cancelAnimationFrame(frameId);

      frameId = window.requestAnimationFrame(() => {
        const footerRect =
          footer.getBoundingClientRect();

        setCoords({
          /*
           * EXACT marked placement:
           * button centre sits on footer top edge.
           */
          top: footerRect.top,

          /*
           * Keep existing horizontal centre.
           */
          left:
            footerRect.left +
            footerRect.width / 2,
        });
      });
    };

    updatePosition();

    window.addEventListener(
      "resize",
      updatePosition
    );

    window.addEventListener(
      "scroll",
      updatePosition,
      true
    );

    window.addEventListener(
      "load",
      updatePosition
    );

    const resizeObserver =
      new ResizeObserver(updatePosition);

    resizeObserver.observe(footer);
    resizeObserver.observe(document.body);

    return () => {
      window.cancelAnimationFrame(frameId);

      window.removeEventListener(
        "resize",
        updatePosition
      );

      window.removeEventListener(
        "scroll",
        updatePosition,
        true
      );

      window.removeEventListener(
        "load",
        updatePosition
      );

      resizeObserver.disconnect();
    };
  }, [mounted]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <span
        ref={anchorRef}
        className={
          styles["scroll-top-anchor"]
        }
        aria-hidden="true"
      />

      {mounted &&
        createPortal(
          <button
            type="button"
            ref={buttonRef}
            className={`${
              styles["scroll-top-button"]
            }${
              isVisible
                ? ` ${
                    styles[
                      "scroll-top-button-visible"
                    ]
                  }`
                : ""
            }`}
            onClick={handleClick}
            aria-label="Scroll to top"
            style={{
              position: "fixed",

              top: coords?.top ?? 0,

              left: coords?.left ?? 0,

              visibility:
                coords && isVisible
                  ? "visible"
                  : "hidden",

              pointerEvents:
                coords && isVisible
                  ? "auto"
                  : "none",

              zIndex: 10000,
            }}
          >
            <span
              className={
                styles[
                  "scroll-top-button-inner"
                ]
              }
              aria-hidden="true"
            >
              {arrowAnimationData && (
                <Lottie
                  animationData={
                    arrowAnimationData
                  }
                  loop
                  autoplay
                  className={
                    styles[
                      "scroll-top-button-icon"
                    ]
                  }
                />
              )}
            </span>
          </button>,
          document.body
        )}
    </>
  );
}