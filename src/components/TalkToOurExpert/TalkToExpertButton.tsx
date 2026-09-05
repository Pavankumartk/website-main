"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import TalkToOurExpert from "@/components/TalkToOurExpert/TalkToOurExpert";
import { HeadphonesIcon } from "@/components/icons/Icons";
import styles from "./TalkToOurExpert.module.css";

type TalkToExpertButtonProps = {
  className?: string;
  portalTargetId?: string;
};

export default function TalkToExpertButton({
  className,
  portalTargetId,
}: TalkToExpertButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!portalTargetId) {
      setPortalTarget(null);
      return;
    }

    setPortalTarget(document.getElementById(portalTargetId));
  }, [portalTargetId]);

  const buttonClassName = [
    styles["talk-to-expert-fab"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const triggerButton = (
    <button
      type="button"
      className={buttonClassName}
      onClick={() => setIsOpen(true)}
    >
      <span
        className={styles["talk-to-expert-fab-icon-ring"]}
        aria-hidden="true"
      >
        <span className={styles["talk-to-expert-fab-icon-circle"]}>
          <HeadphonesIcon
            className={styles["talk-to-expert-fab-icon"]}
          />
        </span>
      </span>

      <span className={styles["talk-to-expert-fab-label"]}>
        Talk to our Expert
      </span>
    </button>
  );

  return (
    <>
      {portalTargetId
        ? portalTarget
          ? createPortal(triggerButton, portalTarget)
          : null
        : triggerButton}

      <TalkToOurExpert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}