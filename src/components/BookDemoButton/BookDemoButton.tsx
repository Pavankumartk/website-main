"use client";

import { useState } from "react";
import BookDemoModal from "@/components/Bookademo/BookDemoModal";
import styles from "./BookDemoButton.module.css";

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true" focusable="false">
      <rect x="3" y="4.5" width="14" height="12.5" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M6.5 3V6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M13.5 3V6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M3 8.5H17" stroke="currentColor" strokeWidth="1.25" />
      <path d="M7.5 12.5L9.1 14L13 10.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BookDemoButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className={styles["book-demo-fab"]} onClick={() => setIsOpen(true)}>
        <span className={styles["book-demo-fab-icon-ring"]} aria-hidden="true">
          <span className={styles["book-demo-fab-icon-circle"]}>
            <CalendarIcon className={styles["book-demo-fab-icon"]} />
          </span>
        </span>
        {/* <span className={styles["book-demo-fab-label"]}>Book a Demo</span> */}
      </button>
      {isOpen && <BookDemoModal onClose={() => setIsOpen(false)} />}
    </>
  );
}