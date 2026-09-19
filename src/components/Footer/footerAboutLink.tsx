"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import type { SimpleLink } from "../../data/navigation";
import styles from "./footer.module.css";

export default function FooterAboutLink({
  link,
}: {
  link: SimpleLink;
}) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const hashIndex = link.href.indexOf("#");

    if (hashIndex === -1) return;

    const targetPath = link.href.slice(0, hashIndex) || "/";
    const targetId = link.href.slice(hashIndex + 1);

    // If destination is on another page,
    // allow Next.js to navigate normally.
    if (pathname !== targetPath) return;

    const targetEl = document.getElementById(targetId);

    if (!targetEl) return;

    event.preventDefault();

    targetEl.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    window.history.pushState(null, "", link.href);

    // Wait until smooth scrolling reaches the card.
    window.setTimeout(() => {
      // Remove first so clicking the same link again
      // restarts the animation.
      targetEl.classList.remove(
        styles["footer-target-highlight"]
      );

      void targetEl.offsetWidth;

      targetEl.classList.add(
        styles["footer-target-highlight"]
      );

      // Return the card to its original design.
      window.setTimeout(() => {
        targetEl.classList.remove(
          styles["footer-target-highlight"]
        );
      }, 1800);
    }, 500);
  };

  return (
    <Link
      href={link.href}
      className={styles["nlxp-footer-link"]}
      onClick={handleClick}
    >
      {link.label}
    </Link>
  );
}