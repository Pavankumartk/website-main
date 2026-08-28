"use client";

import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./goals-progress.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

const GoalSettingsAndProgressTracking: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".goalSettingsAndProgressTra");
    if (!root) return;

    const arrow = root.querySelector<HTMLElement>(".flatLayStatisticsPresentatiIcon");
    const flowLines = Array.from(root.querySelectorAll<HTMLElement>(".image21Parent, .image21Group, .image21Container, .image21Parent2, .image21Parent3"));

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setProgress = (element: HTMLElement, progress: number) => {
      const safeProgress = Math.min(1, Math.max(0, progress));
      element.style.setProperty("--scroll-reveal", safeProgress.toFixed(4));
    };

    const update = () => {
      if (reducedMotion.matches) {
        if (arrow) setProgress(arrow, 1);
        flowLines.forEach((line) => setProgress(line, 1));
        return;
      }

      const viewportHeight = window.innerHeight;

      if (arrow) {
        const rect = arrow.getBoundingClientRect();
        const start = viewportHeight * 0.88;
        const end = viewportHeight * 0.28;
        setProgress(arrow, (start - rect.top) / (start - end));
      }

      flowLines.forEach((line) => {
        const rect = line.getBoundingClientRect();
        const start = viewportHeight * 0.9;
        const end = viewportHeight * 0.48;
        setProgress(line, (start - rect.top) / (start - end));
      });
    };

    let frameId = 0;
    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <Header />
      <main id="main-content" className={styles.goalSettingsAndProgressTra}>
        <nav className={styles.frameDiv} aria-label="Breadcrumb">
          <div className={styles.featuresWrapper}>
            <p className={styles.learning}>Features</p>
          </div>
          <div className={styles.homeParent}>
            <Image className={styles.arrowDown01Icon} src="/icons/arrow-right-double.svg" width={12} height={12} sizes="12px" alt="" aria-hidden="true" style={{ display: "block", flexShrink: 0 }} />
            <div className={styles.featuresWrapper}>
              <p className={styles.learning}>Learning</p>
            </div>
          </div>
          <div className={styles.arrowRightDoubleGroup}>
            <Image className={styles.arrowDown01Icon} src="/icons/arrow-right-double.svg" width={12} height={12} sizes="12px" alt="" aria-hidden="true" style={{ display: "block", flexShrink: 0 }} />
            <p className={styles.learning}>Goals and Tracking</p>
          </div>
        </nav>

        <svg className={styles.goalCombinedPolygons} width="1275" height="816" viewBox="0 0 1275 816" fill="none" aria-hidden="true" focusable="false">
          <g filter="url(#filter0_ii_4_11)">
            <path d="M630.033 0L1260.07 178V534L630.033 712L-0.000305176 534V178L630.033 0Z" fill="#DFE6E9" />
            <path d="M630.033 0L1260.07 178V534L630.033 712L-0.000305176 534V178L630.033 0Z" fill="url(#pattern0_4_11)" fillOpacity="0.05" />
          </g>

          <g filter="url(#filter1_ii_4_11)">
            <path d="M638.033 426L1260.07 523.5V718.5L638.033 816L1.93756 718.5V523.5L638.033 426Z" fill="#DFE6E9" />
          </g>

          <defs>
            <filter id="filter0_ii_4_11" x="-8" y="-8" width="1276.07" height="728" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="8" dy="8" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_11" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-8" dy="-8" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_innerShadow_4_11" result="effect2_innerShadow_4_11" />
            </filter>

            <pattern id="pattern0_4_11" patternContentUnits="objectBoundingBox" width="0.038488" height="0.13764">
              <use xlinkHref="#image0_4_11" transform="scale(0.000687285 0.00140449)" />
            </pattern>

            <filter id="filter1_ii_4_11" x="-6.0625" y="418" width="1288.19" height="406" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="8" dy="8" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_11" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-8" dy="-8" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_innerShadow_4_11" result="effect2_innerShadow_4_11" />
            </filter>

            <image id="image0_4_11" width="56" height="98" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABiCAYAAAAFkxCPAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABYdJREFUeAHtW81WGzcUvpoZ7+kTFLZtTiA9XWRX5wkKuzRgd2ghpztg152HJzDseoobJsa4OdnEeQKTXTdt4PAA+BHosbNJRqNItnHGY2n+JEOUo2+DsXTH9xvpzr0jfUIwJ2xUtkj0/9ZJA+VpVwULvnAYgrrDENQdhqDuMAR1hyGoO+ZC0HV3FyAnXPe3RZgDlBPcqG55OBxcQU7gEHfXK1u7oBgOKMLGxlYZWeiYELJICtgzO/o6Ua9Ut3cQIK/Z/PM5KID0CLKpRV99uoCgy5yMtxMC59Thcvz7EIebBEhvtj9ZDEnoVyrbxyqmbeF3MBZnQdj3gKAdfg9yDcTyWq2jw6TrrK/TaWkRNmqLwHfwwLadQ9//owcFYEMBjGLl/StKrgwCpwZ9vPby5bM3ade6vPzvn2+/WX6NbLRASa5wujykI726svz99cXFvxeQE7lGkMUZWKhO59EKtwOBszAM9tpt/1xk7zhOTzQajx+7i7T9mHpV5rUjhHokJJutVuMMMiITQRYLAQ6O6ccyr53FkgWWe3Jy9EZkjzGu0X7u6EeRb9v2vojokye/uHREa+Jpm2w/3TcBozgb7NJOO/RhwcltLM7QwWAQHHY6/nVO+2v664etZsMT/T4d8Rrtw1LHgsD7/ST7URcB6FPMBUTqfGLDUfPf9fEej9jIuaeryGL2s0/WKQfotEtKC2za2iWbjaZbxB7NOkbjDEENBNORxRm9qCeajqn2YnQc29lLik9KtCuctpSobdmP4vYTgvE4iWOYs0LwTk//4t6prGkjDPH/MvGVNz6RbJwxsPJMbM8uAV7UXnbaua67EATODmXjAR+T+Ea0NLoSxwnpBB/w3osXfo/XGi3P+OZwFgTBpsh+mBZKTp1+XOW1K4nP+ArzjWNJcSabNuKQTQvV6taPmJADnn2MYHJ5pao8E0G2bOPdKPv+8nfeyDcWJ/gnUXmlsjwTQbZsu7x8ex63RzSOuklxIlueFcW4bHtF7xz3d1l84QDW2u2jc5H9KD4FUB1nRSEbnzMEVaSNeWBctnnCDoKybYqgbHk2bxTJnxOCw7fyguXZbSNL2XbSPFpin6NrMuV4x7Ty7K4wfiAuieIzWniI12Ro2qDT8cHnRi6KdvuZX7LxA+arqE90it7Knvm8IPLfrGzrDkNQdxiCusMQ1B2GoO4wBHWHIag7DEHdYQjqDkNQdxiCusMQ1B1COSUTFjhWcOD7d7PRkhU3u2Eg0HAmLd3XcFh6W60+/Rk+U7Bd56H4lgx1OVxMRpBttPA2MdiWWaW67fFENneFqNiI8EaO7obdfJzaf1ApgpsHRmKloE4EshPebhhnhze7yAZuCTK7zsIdJFk1kiqki/qSxUqIaaOTph1t/yGE0BdNW4ozx3Y2VU9bWVHgjYhiIgQqIrKJQlV8yoqN4vafhEAZRTa2PcwsDznXXpHRVjPH7t2/9zsh7/8WiY2KiJW4WrU0bbTq+JQV9SWJldB65der29JuxqFCC55mP3yKymqj84ro1MRZtrQxSROy0y6rPSbhVxZ9OorERuxm9PvBvkhslFeshASO5tZGR+2TRHRCZDhzUSRtCBO9bHyl2X/yK9+ZC559klgp5dxEctk2fNoCeZ7h7AOnXerMRar9xEfIANXxKX/mIrk8m/INciBJGz1G6tmHUqn0deEzFwVEgYXkWqrLtnlqwQsdr+Npo2PIXLaxpRGZ8iwN0oK7bGcfyG6z2Xgd/V62PMsK6TO8YwfWkrSbtNjtQPxmjo7EzlxvkjZaasS3yg4pM+0m/eOztEAQcdPy3yxGcXbaahQ6cyGC8nVR+gayjz/gR5ATgz5eKnqgJAlzWfgtEjfzErqbpXvdYQjqDkNQdxiCusMQ1B2GoO74CEFnnMSO0ihEAAAAAElFTkSuQmCC" />
          </defs>
        </svg>

        <div className={styles.goalSettingsAndProgressTraInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <p className={styles.frameItem}>Goal Setting &amp; Progress Tracking</p>
                <h1 className={styles.setClearGoals}>Set Clear Goals! Track Progress! Achieve It!</h1>
              </div>
              <p className={styles.neurolxpHelpsLearners}>NeuroLXP helps learners set goals, create personalized plans, and track progress for continuous improvement and better outcomes.</p>
            </div>
          </div>
        </div>
        <div className={styles.polygonParent}>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent6}>
                  <div className={styles.wrapper}>
                    <p className={styles.b}>
                      38%
                      <br />
                    </p>
                  </div>
                  <div className={styles.progressVisibilityWrapper}>
                    <p className={styles.progressVisibility}>
                      Progress Visibility
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.frameParent6}>
                  <div className={styles.wrapper}>
                    <p className={styles.b}>
                      50%
                      <br />
                    </p>
                  </div>
                  <div className={styles.progressVisibilityWrapper}>
                    <p className={styles.progressVisibility}>Career Growth</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.frameWrapper4}>
                <div className={styles.frameParent9}>
                  <div className={styles.wrapper}>
                    <p className={styles.b}>95%</p>
                  </div>
                  <div className={styles.progressVisibilityWrapper}>
                    <p className={styles.progressVisibility}>
                      Personalization
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper5}>
                <div className={styles.frameParent10}>
                  <div className={styles.wrapper}>
                    <p className={styles.b}>
                      30%
                      <br />
                    </p>
                  </div>
                  <div className={styles.progressVisibilityWrapper}>
                    <p className={styles.progressVisibility}>
                      Efficiency Gain
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent11}>
          <div className={styles.frameParent12}>
            <p className={styles.frameIcon}>The Challenge</p>
            <h2 className={styles.turningLearningGoalsContainer}>
              <span className={styles.turningLearningGoals}>{`Turning Learning Goals into `}</span>
              <span className={styles.measurableProgress}>Measurable Progress</span>
            </h2>
            <p className={styles.unclearGoalsCompeting}>Unclear goals, competing priorities, and limited progress visibility can hinder learner motivation and outcomes.</p>
            <Image className={styles.flatLayStatisticsPresentatiIcon} src="/images/flat-lay-statistics-presentation-with-chart-arrows 1.webp" width={707} height={331} sizes="(min-width: 901px) 520px, 100vw" alt="Learning progress arrows chart" />
          </div>
          <div className={styles.frameParent13}>
            <div className={styles.frameWrapper6}>
              <div className={styles.alert01Parent}>
                <div className={styles.challengeIconCircle}>
                  <Image className={styles.alert01Icon} src="/icons/compass.svg" width={42} height={42} sizes="42px" alt="" aria-hidden="true" />
                </div>
                <div className={styles.lackOfClarityParent}>
                  <h3 className={styles.lackOfClarityContainer}>
                    <span className={styles.lack}>{`Lack `}</span>
                    <span className={styles.of}>of</span>
                    <span className={styles.lack}> Clarity</span>
                  </h3>
                  <p className={styles.unclearGoalsHinder}>Unclear goals hinder focused learning plans</p>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper7}>
              <div className={styles.alert01Parent}>
                <div className={styles.challengeIconCircle}>
                  <Image className={styles.alert01Icon} src="/icons/target-01-1-pink-big.svg" width={36} height={36} sizes="36px" alt="" aria-hidden="true" />
                </div>
                <div className={styles.lackOfClarityParent}>
                  <h3 className={styles.prioritization}>Prioritization</h3>
                  <p className={styles.competingGoalsReduce}>Competing goals reduce focus and increase overwhelm</p>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper8}>
              <div className={styles.alert01Parent}>
                <div className={styles.challengeIconCircle}>
                  <Image className={styles.alert01Icon} src="/icons/chart-02.svg" width={36} height={36} sizes="36px" alt="" aria-hidden="true" />
                </div>
                <div className={styles.lackOfClarityParent}>
                  <h3 className={styles.prioritization}>Progress Visibility</h3>
                  <p className={styles.limitedInsightsMake}>Limited insights make improvement difficult to track</p>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper9}>
              <div className={styles.alert01Parent}>
                <div className={styles.challengeIconCircle}>
                  <Image className={styles.alert01Icon} src="/icons/alert-01-1.svg" width={36} height={36} sizes="36px" alt="" aria-hidden="true" />
                </div>

                <div className={styles.lackOfClarityParent}>
                  <h3 className={styles.executionGaps}>Execution Gaps</h3>
                  <p className={styles.unclearGoalsHinder}>Distractions and procrastination derail plans</p>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper10}>
              <div className={styles.alert01Parent}>
                <div className={styles.challengeIconCircle}>
                  <Image className={styles.alert01Icon} src="/icons/message-multiple-02.svg" width={36} height={36} sizes="36px" alt="" aria-hidden="true" />
                </div>
                <div className={styles.lackOfClarityParent}>
                  <h3 className={styles.adaptability}>Adaptability</h3>
                  <p className={styles.unclearGoalsHinder}>Changing goals require flexible, adjustable plans</p>
                </div>
              </div>
            </div>
          </div>
          <Image className={styles.flatLayStatisticsPresentatiIcon} src="/images/flat-lay-statistics-presentation-with-chart-arrows 1.webp" width={707} height={331} sizes="100vw" alt="Learning progress arrows chart" />
        </div>
        <div className={styles.frameParent18}>
          <div className={styles.frameParent19}>
            <p className={styles.frameChild7}>Adaptive Learning Experience</p>
            <h2 className={styles.turningLearningGoalsContainer}>Learning That Adapts With You</h2>
            <p className={styles.unclearGoalsCompeting}>NeuroLXP continuously connects goals, plans, and progress to create a more personalized learning experience.</p>
          </div>
          <div className={styles.frameParent20}>
            <div className={styles.checkmarkSquare04Parent}>
              <span className={`${styles.adaptiveCheckCircle} ${styles.adaptiveBlue}`} aria-hidden="true">
                <span className={styles.adaptiveInnerRing}>
                  <Image className={styles.adaptiveCheckIcon} src="/icons/checkmark-circle-04-1.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" />
                </span>
              </span>
              <p className={styles.adaptivePaths}>Adaptive Paths</p>
            </div>
            <div className={styles.frameParent22}>
              <span className={`${styles.adaptiveCheckCircle} ${styles.adaptivePink}`} aria-hidden="true">
                <span className={styles.adaptiveInnerRing}>
                  <Image className={styles.adaptiveCheckIcon} src="/icons/checkmark-circle-04-2.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" />
                </span>
              </span>
              <p className={styles.smartRecommendations}>Smart Recommendations</p>
            </div>
            <div className={styles.frameParent22}>
              <span className={`${styles.adaptiveCheckCircle} ${styles.adaptivePurple}`} aria-hidden="true">
                <span className={styles.adaptiveInnerRing}>
                  <Image className={styles.adaptiveCheckIcon} src="/icons/checkmark-circle-04-3.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" />
                </span>
              </span>
              <p className={styles.personalizedFeedback}>Personalized Feedback</p>
            </div>
            <div className={styles.frameParent22}>
              <span className={`${styles.adaptiveCheckCircle} ${styles.adaptiveOrange}`} aria-hidden="true">
                <span className={styles.adaptiveInnerRing}>
                  <Image className={styles.adaptiveCheckIcon} src="/icons/checkmark-circle-04.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" />
                </span>
              </span>
              <p className={styles.continuousImprovement}>Continuous Improvement</p>
            </div>
          </div>
        </div>
        <div className={styles.frameParent25}>
          <div className={styles.frameParent26}>
            <div className={styles.frameWrapper11}>
              <div className={styles.frameWrapper12}>
                <div className={styles.frameParent2}>
                  <div className={styles.frameParent3}>
                    <p className={styles.frameChild12}>Goal Setting &amp; Planning</p>
                    <h2 className={styles.setClearGoals}>From Aspirations to Action</h2>
                  </div>
                  <p className={styles.neurolxpHelpsLearners2}>NeuroLXP helps learners turn academic and career aspirations into clear, achievable goals with structured planning and personalized guidance.</p>
                </div>
              </div>
            </div>
            <div className={styles.frameParent29}>
              <div className={styles.frameParent30}>
                <div className={styles.polygonGroup}>
                  <svg className={styles.polygonIcon} width="371" height="371" viewBox="0 0 371 371" fill="none" aria-hidden="true" focusable="false">
                    <g filter="url(#outerHexShadow-1)">
                      <path d="M185.5 24L299.698 71.3023L347 185.5L299.698 299.698L185.5 347L71.3023 299.698L24 185.5L71.3023 71.3023L185.5 24Z" fill="#DFE6E9" />
                    </g>
                    <g filter="url(#innerHexShadow-1)">
                      <path d="M183 56L274.924 94.0761L313 186L274.924 277.924L183 316L91.0761 277.924L53 186L91.0761 94.0761L183 56Z" fill="#DFE6E9" />
                    </g>
                    <defs>
                      <filter id="outerHexShadow-1" x="0" y="0" width="371" height="371" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="8" dy="8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-8" dy="-8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                      </filter>
                      <filter id="innerHexShadow-1" x="45" y="48" width="276" height="276" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="8" dy="8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-8" dy="-8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                      </filter>
                    </defs>
                  </svg>
                  <div className={styles.frameParent31}>
                    <div className={styles.frameParent32}>
                      <div className={styles.featureIconHex}>
                        <svg className={styles.featureIconHexSvg} width="74" height="74" viewBox="0 0 74 74" fill="none" aria-hidden="true" focusable="false">
                          <g filter="url(#featureIconHexFilter1)">
                            <path d="M37 0L63.1629 10.837L74 37L63.1629 63.1629L37 74L10.837 63.1629L0 37L10.837 10.837L37 0Z" fill="#DFE6E9" />
                          </g>
                          <defs>
                            <filter id="featureIconHexFilter1" x="-2" y="-2" width="78" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dx="2" dy="2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                              <feBlend mode="normal" in2="shape" result="effect1InnerShadow" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dx="-2" dy="-2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend mode="normal" in2="effect1InnerShadow" result="effect2InnerShadow" />
                            </filter>
                          </defs>
                        </svg>
                        <Image className={styles.frameChild14} src="/icons/target-01-pink.svg" width={46} height={46} sizes="46px" alt="Personalized goals" />
                      </div>
                      <h3 className={styles.personalizedGoals}>Personalized Goals</h3>
                    </div>
                    <p className={styles.setAcademicAnd}>
                      Set academic and
                      <br />
                      career goals
                    </p>
                  </div>
                </div>
                <div className={styles.polygonContainer}>
                  <svg className={styles.polygonIcon} width="371" height="371" viewBox="0 0 371 371" fill="none" aria-hidden="true" focusable="false">
                    <g filter="url(#outerHexShadow-2)">
                      <path d="M185.5 24L299.698 71.3023L347 185.5L299.698 299.698L185.5 347L71.3023 299.698L24 185.5L71.3023 71.3023L185.5 24Z" fill="#DFE6E9" />
                    </g>
                    <g filter="url(#innerHexShadow-2)">
                      <path d="M183 56L274.924 94.0761L313 186L274.924 277.924L183 316L91.0761 277.924L53 186L91.0761 94.0761L183 56Z" fill="#DFE6E9" />
                    </g>
                    <defs>
                      <filter id="outerHexShadow-2" x="0" y="0" width="371" height="371" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="8" dy="8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-8" dy="-8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                      </filter>
                      <filter id="innerHexShadow-2" x="45" y="48" width="276" height="276" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="8" dy="8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-8" dy="-8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                      </filter>
                    </defs>
                  </svg>
                  <div className={styles.frameParent31}>
                    <div className={styles.frameParent32}>
                      <div className={styles.featureIconHex}>
                        <svg className={styles.featureIconHexSvg} width="74" height="74" viewBox="0 0 74 74" fill="none" aria-hidden="true" focusable="false">
                          <g filter="url(#featureIconHexFilter2)">
                            <path d="M37 0L63.1629 10.837L74 37L63.1629 63.1629L37 74L10.837 63.1629L0 37L10.837 10.837L37 0Z" fill="#DFE6E9" />
                          </g>
                          <defs>
                            <filter id="featureIconHexFilter2" x="-2" y="-2" width="78" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dx="2" dy="2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                              <feBlend mode="normal" in2="shape" result="effect1InnerShadow" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dx="-2" dy="-2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend mode="normal" in2="effect1InnerShadow" result="effect2InnerShadow" />
                            </filter>
                          </defs>
                        </svg>
                        <Image className={styles.frameChild14} src="/icons/ai-sparkles.svg" width={46} height={46} sizes="46px" alt="Smart suggestions" />
                      </div>
                      <h3 className={styles.smartSuggestions}>Smart Suggestions</h3>
                    </div>
                    <p className={styles.setAcademicAnd}>Get relevant goal recommendations</p>
                  </div>
                </div>
                <div className={styles.polygonParent2}>
                  <svg className={styles.polygonIcon} width="371" height="371" viewBox="0 0 371 371" fill="none" aria-hidden="true" focusable="false">
                    <g filter="url(#outerHexShadow-3)">
                      <path d="M185.5 24L299.698 71.3023L347 185.5L299.698 299.698L185.5 347L71.3023 299.698L24 185.5L71.3023 71.3023L185.5 24Z" fill="#DFE6E9" />
                    </g>
                    <g filter="url(#innerHexShadow-3)">
                      <path d="M183 56L274.924 94.0761L313 186L274.924 277.924L183 316L91.0761 277.924L53 186L91.0761 94.0761L183 56Z" fill="#DFE6E9" />
                    </g>
                    <defs>
                      <filter id="outerHexShadow-3" x="0" y="0" width="371" height="371" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="8" dy="8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-8" dy="-8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                      </filter>
                      <filter id="innerHexShadow-3" x="45" y="48" width="276" height="276" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="8" dy="8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-8" dy="-8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                      </filter>
                    </defs>
                  </svg>
                  <div className={styles.frameParent31}>
                    <div className={styles.frameParent36}>
                      <div className={styles.featureIconHex}>
                        <svg className={styles.featureIconHexSvg} width="74" height="74" viewBox="0 0 74 74" fill="none" aria-hidden="true" focusable="false">
                          <g filter="url(#featureIconHexFilter3)">
                            <path d="M37 0L63.1629 10.837L74 37L63.1629 63.1629L37 74L10.837 63.1629L0 37L10.837 10.837L37 0Z" fill="#DFE6E9" />
                          </g>
                          <defs>
                            <filter id="featureIconHexFilter3" x="-2" y="-2" width="78" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dx="2" dy="2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                              <feBlend mode="normal" in2="shape" result="effect1InnerShadow" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dx="-2" dy="-2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend mode="normal" in2="effect1InnerShadow" result="effect2InnerShadow" />
                            </filter>
                          </defs>
                        </svg>
                        <Image className={styles.frameChild14} src="/icons/calendar-03.svg" width={46} height={46} sizes="46px" alt="Plan and schedule" />
                      </div>
                      <h3 className={styles.planSchedule}>{`Plan & Schedule`}</h3>
                    </div>
                    <p className={styles.scheduleLearningAnd}>Schedule learning and milestones</p>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent37}>
                <div className={styles.polygonGroup}>
                  <svg className={styles.polygonIcon} width="371" height="371" viewBox="0 0 371 371" fill="none" aria-hidden="true" focusable="false">
                    <g filter="url(#outerHexShadow-4)">
                      <path d="M185.5 24L299.698 71.3023L347 185.5L299.698 299.698L185.5 347L71.3023 299.698L24 185.5L71.3023 71.3023L185.5 24Z" fill="#DFE6E9" />
                    </g>
                    <g filter="url(#innerHexShadow-4)">
                      <path d="M183 56L274.924 94.0761L313 186L274.924 277.924L183 316L91.0761 277.924L53 186L91.0761 94.0761L183 56Z" fill="#DFE6E9" />
                    </g>
                    <defs>
                      <filter id="outerHexShadow-4" x="0" y="0" width="371" height="371" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="8" dy="8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-8" dy="-8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                      </filter>
                      <filter id="innerHexShadow-4" x="45" y="48" width="276" height="276" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="8" dy="8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-8" dy="-8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                      </filter>
                    </defs>
                  </svg>
                  <div className={styles.frameParent31}>
                    <div className={styles.frameParent32}>
                      <div className={styles.featureIconHex}>
                        <svg className={styles.featureIconHexSvg} width="74" height="74" viewBox="0 0 74 74" fill="none" aria-hidden="true" focusable="false">
                          <g filter="url(#featureIconHexFilter4)">
                            <path d="M37 0L63.1629 10.837L74 37L63.1629 63.1629L37 74L10.837 63.1629L0 37L10.837 10.837L37 0Z" fill="#DFE6E9" />
                          </g>
                          <defs>
                            <filter id="featureIconHexFilter4" x="-2" y="-2" width="78" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dx="2" dy="2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                              <feBlend mode="normal" in2="shape" result="effect1InnerShadow" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dx="-2" dy="-2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend mode="normal" in2="effect1InnerShadow" result="effect2InnerShadow" />
                            </filter>
                          </defs>
                        </svg>
                        <Image className={styles.frameChild14} src="/icons/university-usergroup.svg" width={46} height={46} sizes="46px" alt="Team plans" />
                      </div>
                      <h3 className={styles.smartSuggestions}>Team Plans</h3>
                    </div>
                    <p className={styles.setAcademicAnd}>
                      Share plans with mentors
                      <br />
                      and peers.
                    </p>
                  </div>
                </div>
                <div className={styles.polygonParent4}>
                  <svg className={styles.polygonIcon} width="371" height="371" viewBox="0 0 371 371" fill="none" aria-hidden="true" focusable="false">
                    <g filter="url(#outerHexShadow-5)">
                      <path d="M185.5 24L299.698 71.3023L347 185.5L299.698 299.698L185.5 347L71.3023 299.698L24 185.5L71.3023 71.3023L185.5 24Z" fill="#DFE6E9" />
                    </g>
                    <g filter="url(#innerHexShadow-5)">
                      <path d="M183 56L274.924 94.0761L313 186L274.924 277.924L183 316L91.0761 277.924L53 186L91.0761 94.0761L183 56Z" fill="#DFE6E9" />
                    </g>
                    <defs>
                      <filter id="outerHexShadow-5" x="0" y="0" width="371" height="371" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="8" dy="8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-8" dy="-8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                      </filter>
                      <filter id="innerHexShadow-5" x="45" y="48" width="276" height="276" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="8" dy="8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-8" dy="-8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                      </filter>
                    </defs>
                  </svg>
                  <div className={styles.frameParent31}>
                    <div className={styles.frameParent32}>
                      <div className={styles.featureIconHex}>
                        <svg className={styles.featureIconHexSvg} width="74" height="74" viewBox="0 0 74 74" fill="none" aria-hidden="true" focusable="false">
                          <g filter="url(#featureIconHexFilter5)">
                            <path d="M37 0L63.1629 10.837L74 37L63.1629 63.1629L37 74L10.837 63.1629L0 37L10.837 10.837L37 0Z" fill="#DFE6E9" />
                          </g>
                          <defs>
                            <filter id="featureIconHexFilter5" x="-2" y="-2" width="78" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dx="2" dy="2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                              <feBlend mode="normal" in2="shape" result="effect1InnerShadow" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dx="-2" dy="-2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend mode="normal" in2="effect1InnerShadow" result="effect2InnerShadow" />
                            </filter>
                          </defs>
                        </svg>
                        <Image className={styles.frameChild26} src="/icons/message-multiple-02.svg" width={46} height={46} sizes="46px" alt="Review and improve" />
                      </div>
                      <h3 className={styles.reviewImprove}>{`Review & Improve`}</h3>
                    </div>
                    <p className={styles.reviewRefineAnd}>
                      Review, refine and
                      <br />
                      improve{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper11}>
            <div className={styles.frameWrapper12}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <p className={styles.frameChild27}>Progress Tracking</p>
                  <h2 className={styles.setClearGoals}>See Your Progress! Know What’s Next</h2>
                </div>
                <p className={styles.trackPerformanceEngagement}>Track performance, engagement, and achievements with real-time insights for better learning decisions.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent44}>
          <div className={styles.frameParent45}>
            <div className={styles.frameParent46}>
              <div className={styles.image20Parent}>
                <div className={styles.image20} />
                <div className={styles.frameParent47}>
                  <div className={styles.image21Parent}>
                    <div className={styles.image21} />
                    <h3 className={styles.increasedMotivation}>Increased Motivation</h3>
                  </div>
                  <div className={styles.trackMilestonesAndLearningWrapper}>
                    <p className={styles.trackMilestonesAnd}>Track milestones and learning activity</p>
                  </div>
                </div>
              </div>
              <div className={styles.image20Group}>
                <div className={styles.image20} />
                <div className={styles.frameParent47}>
                  <div className={styles.image21Group}>
                    <div className={styles.image21} />
                    <h3 className={styles.performanceAnalytics}>Performance Analytics</h3>
                  </div>
                  <div className={styles.trackMilestonesAndLearningWrapper}>
                    <p className={styles.trackMilestonesAnd}>Identify strengths and learning gaps</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent49}>
              <div className={styles.image20Parent}>
                <div className={styles.image20} />
                <div className={styles.frameParent47}>
                  <div className={styles.image21Container}>
                    <div className={styles.image21} />
                    <h3 className={styles.competencyAssessment}>Competency Assessment</h3>
                  </div>
                  <div className={styles.trackMilestonesAndLearningWrapper}>
                    <p className={styles.trackMilestonesAnd}>Measure skills and competencies</p>
                  </div>
                </div>
              </div>
              <div className={styles.image20Parent2}>
                <div className={styles.image20} />
                <div className={styles.frameParent47}>
                  <div className={styles.image21Parent2}>
                    <div className={styles.image21} />
                    <h3 className={styles.behavioralInsights}>Behavioral Insights</h3>
                  </div>
                  <div className={styles.trackMilestonesAndLearningWrapper}>
                    <p className={styles.trackMilestonesAnd}>Understand engagement and learning patterns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.image20Parent3}>
            <div className={styles.image20} />
            <div className={styles.frameParent47}>
              <div className={styles.image21Parent3}>
                <div className={styles.image21} />
                <h3 className={styles.predictiveAnalytics}>Predictive Analytics</h3>
              </div>
              <div className={styles.trackMilestonesAndLearningWrapper}>
                <p className={styles.trackMilestonesAnd}>Spot challenges early and act proactively</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent53}>
          <div className={styles.frameWrapper15}>
            <div className={styles.frameWrapper16}>
              <div className={styles.frameWrapper17}>
                <div className={styles.frameParent54}>
                  <p className={styles.frameChild28}>Key Benefits</p>
                  <h2 className={styles.whyGoalSetting}>{`Why Goal Setting & Progress Tracking Matter`}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent55}>
            <div className={styles.peopleTakingPartBusinessEvParent}>
              <div className={styles.peopleTakingPartBusinessEv} />
              <div className={styles.image216} />
              <div className={styles.groupYoungBusinesspeopleUsi} />
              <div className={styles.rectangleIcon} aria-hidden="true" />
              <div className={styles.collageCustomerExperienceCoParent}>
                <Image className={styles.collageCustomerExperienceCoIcon} src="/images/cheerful-diverse-people-showing-graph-tablet 1.webp" width={606} height={473} sizes="100vw" alt="Goal setting and progress growth chart" />
                <div className={styles.frameWrapper18}>
                  <div className={styles.frameParent56}>
                    <div className={styles.starParent}>
                      <Image className={styles.starIcon} src="/icons/hand-pointing-right.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" />
                      <p className={styles.clearDirection}>Clear Direction</p>
                    </div>
                    <div className={styles.starParent}>
                      <Image className={styles.starIcon} src="/icons/hand-pointing-right.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" />
                      <p className={styles.clearDirection}>Higher Motivation</p>
                    </div>
                    <div className={styles.starParent}>
                      <Image className={styles.starIcon} src="/icons/hand-pointing-right.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" />
                      <p className={styles.clearDirection}>Better Time Management</p>
                    </div>
                    <div className={styles.starParent}>
                      <Image className={styles.starIcon} src="/icons/hand-pointing-right.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" />
                      <p className={styles.clearDirection}>Data-Driven Decisions</p>
                    </div>
                    <div className={styles.starParent}>
                      <Image className={styles.starIcon} src="/icons/hand-pointing-right.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" />
                      <p className={styles.clearDirection}>Continuous Improvement</p>
                    </div>
                    <div className={styles.starParent}>
                      <Image className={styles.starIcon} src="/icons/hand-pointing-right.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" />
                      <p className={styles.careerReadiness}>Career Readiness</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.image206} />
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <Image className={styles.rectangle} src="/images/Frame 2095586948.webp" width={1280} height={505} sizes="100vw" alt="" aria-hidden="true" />
          <div className={styles.image207} />
          <div className={styles.frameParent57}>
            <div className={styles.progressWithPurposeParent}>
              <h2 className={styles.progressWithPurpose}>{`Progress With Purpose `}</h2>
              <p className={styles.neurolxpHelpsLearners3}>
                NeuroLXP helps learners track progress adapt, and achieve better outcomes.
                <br />
                <br />
                <br />
              </p>
            </div>
            <div className={styles.frameWrapper19}>
              <BookDemoTrigger className={styles.frameWrapper20}>
                <span className={styles.bookADemoWrapper}>
                  <span className={styles.bookADemo}>Book a Demo</span>
                </span>
              </BookDemoTrigger>
            </div>
          </div>
          <Image className={styles.handHoldingWoodenCubeWithIcon} src="/images/hand-holding-wooden-cube-with-target 1.webp" width={601} height={500} sizes="100vw" alt="Business professional selecting an idea" />
        </div>
        <div className={styles.frameParent75}>
          <div className={styles.frameParent76}>
            <div className={styles.wrapper}>
              <div className={styles.frameWrapper23}>
                <div className={styles.frameParent54}>
                  <p className={styles.frameChild39}>Personalized Learning Journey</p>
                  <h2 className={styles.setClearGoals}>One Connected Learning Journey</h2>
                </div>
              </div>
            </div>
            <div className={styles.frameParent78}>
              <div className={styles.frameParent79}>
                <div className={styles.checkmarkSquare04Parent}>
                  <Image className={styles.checkmarkSquare04Icon} src="/icons/checkmark-square-04.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                  <h3
                    className={styles.setGoals}
                    role="button"
                    tabIndex={0}
                    onClick={() => router.push("/HomePage")}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        router.push("/HomePage");
                      }
                    }}
                  >Set Goals</h3>
                </div>
                <div className={styles.checkmarkSquare04Parent}>
                  <Image className={styles.checkmarkSquare04Icon} src="/icons/checkmark-square-04.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                  <h3
                    className={styles.learn}
                    role="button"
                    tabIndex={0}
                    onClick={() => router.push("/HomePage")}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        router.push("/HomePage");
                      }
                    }}
                  >Learn</h3>
                </div>
              </div>
              <div className={styles.frameParent80}>
                <div className={styles.checkmarkSquare04Parent}>
                  <Image className={styles.checkmarkSquare04Icon} src="/icons/checkmark-square-04.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                  <h3
                    className={styles.trackProgress}
                    role="button"
                    tabIndex={0}
                    onClick={() => router.push("/HomePage")}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        router.push("/HomePage");
                      }
                    }}
                  >Track Progress</h3>
                </div>
                <div className={styles.checkmarkSquare04Parent}>
                  <Image className={styles.checkmarkSquare04Icon} src="/icons/checkmark-square-04.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                  <h3
                    className={styles.analyzePerformance}
                    role="button"
                    tabIndex={0}
                    onClick={() => router.push("/HomePage")}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        router.push("/HomePage");
                      }
                    }}
                  >Analyze Performance</h3>
                </div>
              </div>
              <div className={styles.frameParent81}>
                <div className={styles.checkmarkSquare04Parent}>
                  <Image className={styles.checkmarkSquare04Icon} src="/icons/checkmark-square-04.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                  <h3
                    className={styles.createPlans}
                    role="button"
                    tabIndex={0}
                    onClick={() => router.push("/HomePage")}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        router.push("/HomePage");
                      }
                    }}
                  >Create Plans</h3>
                </div>
                <div className={styles.checkmarkSquare04Parent}>
                  <Image className={styles.checkmarkSquare04Icon} src="/icons/checkmark-square-04.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                  <h3
                    className={styles.adaptImprove}
                    role="button"
                    tabIndex={0}
                    onClick={() => router.push("/HomePage")}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        router.push("/HomePage");
                      }
                    }}
                  >{`Adapt & Improve`}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent82}>
            <div className={styles.frameParent83}>
              <p className={styles.frameChild40}>Trust &amp; Intelligence</p>
              <h2 className={styles.turningLearningGoalsContainer}>Personalized!<br/>Intelligent! Secure!</h2>
            </div>
            <div className={styles.frameParent84}>
              <div className={styles.frameParent85}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.frameChild41} />
                  <div className={styles.aiBookParent}>
                    <Image className={styles.aiBookIcon} src="/icons/ai-book-blue.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" style={{ width: 24, height: 24, objectFit: "contain", display: "block", flexShrink: 0 }} />
                    <h3 className={styles.aiMl}>AI / ML Powered</h3>
                  </div>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.frameChild41} />
                  <div className={styles.analyticsUpParent}>
                    <Image className={styles.aiBookIcon} src="/icons/analytics-up.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" style={{ width: 24, height: 24, objectFit: "contain", display: "block", flexShrink: 0 }} />
                    <h3 className={styles.learningAnalytics}>Learning Analytics</h3>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent85}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.frameChild41} />
                  <div className={styles.analyticsUpParent}>
                    <Image className={styles.aiBookIcon} src="/icons/shield-check.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" style={{ width: 24, height: 24, objectFit: "contain", display: "block", flexShrink: 0 }} />
                    <h3 className={styles.aiMl}>Privacy First</h3>
                  </div>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.frameChild41} />
                  <div className={styles.analyticsUpParent}>
                    <Image className={styles.aiBookIcon} src="/icons/activity-01.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" style={{ width: 24, height: 24, objectFit: "contain", display: "block", flexShrink: 0 }} />
                    <h3 className={styles.realTimeInsights}>Real-Time Insights</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default GoalSettingsAndProgressTracking;