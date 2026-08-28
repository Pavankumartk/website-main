"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./assissments.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

const Assessments: NextPage = () => {
  const audienceCards = [
    {
      title: "Corporate Learning",
      subtitle: "and Development",
      image: "/images/Rectangle 77.webp",
      className: styles.audiencePurple,
    },
    {
      title: "Universities and Higher",
      subtitle: "Education",
      image: "/images/boy fifth image.webp",
      className: styles.audiencePink,
    },
    {
      title: "EdTech & Course",
      subtitle: "Providers",
      image: "/images/Rectangle 78-2.webp",
      className: styles.audienceOrange,
    },
    {
      title: "Schools and Online",
      subtitle: "Learning",
      image: "/images/Rectangle 78-3.webp",
      className: styles.audienceBlue,
    },
    {
      title: "Professional",
      subtitle: "Certification",
      image: "/images/fourth assessments.webp",
      className: styles.audienceGreen,
    },
  ];

  const cardCount = audienceCards.length;
  const [audiencePosition, setAudiencePosition] = useState(cardCount);
  const [audienceTransition, setAudienceTransition] = useState(true);
  const [audiencePaused, setAudiencePaused] = useState(false);

  useEffect(() => {
    if (audiencePaused) return;

    const intervalId = window.setInterval(() => {
      setAudienceTransition(true);
      setAudiencePosition((current) => current + 1);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, [audiencePaused]);

  const moveAudience = (direction: number) => {
    setAudienceTransition(true);
    setAudiencePosition((current) => current + direction);
  };

  const handleAudienceTransitionEnd = () => {
    if (audiencePosition >= cardCount * 2) {
      setAudienceTransition(false);
      setAudiencePosition(cardCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAudienceTransition(true));
      });
    } else if (audiencePosition <= 0) {
      setAudienceTransition(false);
      setAudiencePosition(cardCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAudienceTransition(true));
      });
    }
  };

  return (
    <>
      <Header />
      <main id="main-content" className={styles.assessments} tabIndex={-1}>
        <nav className={styles.frameDiv} aria-label="Breadcrumb">
          <div className={styles.featuresWrapper}>
            <div className={styles.learningEcoSystem}>Features</div>
          </div>
          <div className={styles.homeParent}>
            <Image className={styles.arrowDown01Icon} src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
            <div className={styles.featuresWrapper}>
              <div className={styles.learningEcoSystem}>{`Learning Eco-system `}</div>
            </div>
          </div>
          <div className={styles.arrowRightDoubleGroup}>
            <Image className={styles.arrowDown01Icon} src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
            <b className={styles.learningEcoSystem}>Assessments</b>
          </div>
        </nav>
        <div className={styles.frameParent2}>
          <div className={styles.ellipseParent}>
            <svg className={styles.frameInner} width="1328" height="621" viewBox="0 0 1328 621" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g filter="url(#assessmentsHeroOuterShadow)"><ellipse cx="664" cy="310.5" rx="640" ry="286.5" fill="#DFE6E9" /></g>
              <g filter="url(#assessmentsHeroInnerShadow)"><ellipse cx="664" cy="310.5" rx="608" ry="254.5" fill="#DFE6E9" /></g>
              <defs>
                <filter id="assessmentsHeroOuterShadow" x="0" y="0" width="1328" height="621" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="8" dy="8"/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="outer1"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-8" dy="-8"/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="outer1" result="outer2"/><feBlend mode="normal" in="SourceGraphic" in2="outer2" result="shape"/>
                </filter>
                <filter id="assessmentsHeroInnerShadow" x="32" y="32" width="1264" height="557" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="8" dy="8"/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="inner1"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-8" dy="-8"/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="inner1" result="inner2"/><feBlend mode="normal" in="SourceGraphic" in2="inner2" result="shape"/>
                </filter>
              </defs>
            </svg>
            <div className={styles.ellipseGroup}>
              <div className={styles.ellipseDiv} />
              <div className={styles.frameParent3}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameParent5}>
                      <div className={styles.heroAssessmentBadge}>Advanced Online Assessments</div>
                      <b className={styles.moreThan60Container}>
                        <span className={styles.blankLine}>{`More than 60 Assessment Formats in a Powerful `}</span>
                        <span className={styles.aiDrivenLms}>
                          AI-Driven LMS
                          <br />
                        </span>
                        <span className={styles.blankLine}>&nbsp;</span>
                      </b>
                    </div>
                    <div className={styles.neurolxpOffers60}>NeuroLXP offers 60+ assessment formats to evaluate knowledge measure skills, and boost engagement.</div>
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <BookDemoTrigger className={styles.heroBookDemoButton}>
                    Book a Demo
                  </BookDemoTrigger>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameParent7}>
                <div className={styles.wrapper}>
                  <b className={styles.b}>
                    60+
                    <br />
                  </b>
                </div>
                <div className={styles.assessmentFormatsWrapper}>
                  <div className={styles.assessmentFormats}>
                    Assessment Formats
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper4}>
              <div className={styles.frameParent7}>
                <div className={styles.wrapper}>
                  <b className={styles.b}>
                    AI
                    <br />
                    <br />
                  </b>
                </div>
                <div className={styles.assessmentFormatsWrapper}>
                  <div className={styles.assessmentFormats}>
                    Question Generation
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper5}>
              <div className={styles.frameParent9}>
                <div className={styles.container}>
                  <b className={styles.b}>
                    5+
                    <br />
                  </b>
                </div>
                <div className={styles.learningSectorsWrapper}>
                  <div className={styles.assessmentFormats}>
                    Learning Sectors
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent10}>
          <div className={styles.frameWrapper6}>
            <div className={styles.frameWrapper7}>
              <div className={styles.frameParent11}>
                <div className={styles.assessmentSectionBadge}>Why Assessments Matter</div>
                <div className={styles.modernLmsAssessmentsGoBeyoParent}>
                  <b className={styles.modernLmsAssessments}>
                    Modern LMS Assessments Go Beyond Simple Tests
                    <br />
                  </b>
                  <div className={styles.interactiveGamifiedAnd}>
                    Interactive, gamified, and adaptive assessments that measure critical thinking, knowledge, and problem-solving.
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent12}>
            <div className={styles.frameParent13}>
              <div className={styles.frameParent14}>
                <div className={styles.benefitCardTop} aria-hidden="true">
                  <Image className={styles.benefitIconCircle} src="/icons/social-blue-bg.svg" width={61} height={61} alt="" />
                  <Image className={styles.benefitIconGlyph} src="/icons/sparkles-star.svg" width={25} height={25} alt="" />
                </div>
                <div className={styles.frameWrapper8}>
                  <div className={styles.frameWrapper9}>
                    <div className={styles.frameWrapper10}>
                      <div className={styles.image20Parent}>
                        <div className={styles.image20} />
                        <div className={styles.interactiveAndEngaging}>
                          Interactive and Engaging
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent14}>
                <div className={styles.benefitCardTop} aria-hidden="true">
                  <Image className={styles.benefitIconCircle} src="/icons/social-gradient-bg.svg" width={61} height={61} alt="" />
                  <Image className={styles.benefitIconGlyph} src="/icons/target-11.svg" width={25} height={25} alt="" />
                </div>
                <div className={styles.frameWrapper11}>
                  <div className={styles.frameWrapper12}>
                    <div className={styles.frameWrapper10}>
                      <div className={styles.image20Group}>
                        <div className={styles.image20} />
                        <div className={styles.alignedWithLearning}>
                          Aligned with Learning Outcomes
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent14}>
                <div className={styles.benefitCardTop} aria-hidden="true">
                  <Image className={styles.benefitIconCircle} src="/icons/Ellipse 334-2-green.svg" width={61} height={61} alt="" />
                  <Image className={styles.benefitIconGlyph} src="/icons/globe-round.svg" width={25} height={25} alt="" />
                </div>
                <div className={styles.frameWrapper11}>
                  <div className={styles.frameWrapper12}>
                    <div className={styles.frameWrapper10}>
                      <div className={styles.image20Group}>
                        <div className={styles.image20} />
                        <div className={styles.onlineRemote}>{`Online & Remote Learning`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent17}>
              <div className={styles.frameParent14}>
                <div className={styles.image20Wrapper}>
                  <div className={styles.image20} />
                </div>
                <div className={styles.benefitCardTop} aria-hidden="true">
                  <Image className={styles.benefitIconCircle} src="/icons/Ellipse 334-1-purple.svg" width={61} height={61} alt="" />
                  <Image className={styles.benefitIconGlyph} src="/icons/chart-up.svg" width={25} height={25} alt="" />
                </div>
                <div className={styles.frameWrapper8}>
                  <div className={styles.frameWrapper9}>
                    <div className={styles.frameWrapper10}>
                      <div className={styles.image20Group}>
                        <div className={styles.image20} />
                        <div className={styles.scalableForEducation}>Scalable for Education and Corporate Training</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent14}>
                <div className={styles.benefitCardTop} aria-hidden="true">
                  <Image className={`${styles.benefitIconCircle} ${styles.benefitIconCircleInset}`} src="/icons/Ellipse 334-orange.svg" width={61} height={61} alt="" />
                  <Image className={styles.benefitIconGlyph} src="/icons/clipboard-list copy.svg" width={25} height={25} alt="" />
                </div>
                <div className={styles.frameWrapper8}>
                  <div className={styles.frameWrapper21}>
                    <div className={styles.frameWrapper10}>
                      <div className={styles.image20Group}>
                        <div className={styles.image20} />
                        <div className={styles.idealForExams}>Ideal for Exams and Skill Development</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.assessmentsChild} />
        <div className={styles.frameParent20}>
          <div className={styles.frameWrapper23}>
            <div className={styles.frameWrapper7}>
              <div className={styles.frameParent11}>
                <div className={styles.formatsSectionBadge}>Transform The Way You Assess</div>
                <div className={styles.modernLmsAssessmentsGoBeyoParent}>
                  <b className={styles.onlineAssessmentFormats}>
                    60+ Online Assessment Formats
                    <br />
                  </b>
                  <div className={styles.interactiveGamifiedAnd}>
                    NeuroLXP enables instructors to create flexible, engaging, and meaningful evaluation experiences across multiple learning contexts.
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent22}>
            <div className={styles.frameParent23}>
              <div className={styles.frameWrapper25}>
                <div className={styles.frameParent24}>
                  <div className={styles.frameWrapper26}>
                    <div className={styles.frameChild10} />
                  </div>
                  <div className={styles.frameWrapper27}>
                    <div className={styles.frameParent25}>
                      <Image className={`${styles.frameChild11} ${styles.formatCardIcon}`} src="/icons/clipboard-list1.svg" width={100} height={100} sizes="100px" alt="Popular online quiz formats" />
                      <b className={styles.popularOnlineQuiz}>
                        Popular Online Quiz Formats
                        <br />
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper28}>
                <div className={styles.frameParent26}>
                  <div className={styles.frameWrapper26}>
                    <div className={styles.frameChild10} />
                  </div>
                  <div className={styles.frameWrapper27}>
                    <div className={styles.frameParent25}>
                      <Image className={`${styles.frameChild11} ${styles.formatCardIcon}`} src="/icons/puzzle-pink.svg" width={100} height={100} sizes="100px" alt="Multimedia-based assessments" />

                      <b className={styles.popularOnlineQuiz}>
                        Multimedia-Based
                        <br />
                        Assessments
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper31}>
                <div className={styles.frameParent26}>
                  <div className={styles.frameWrapper26}>
                    <div className={styles.frameChild10} />
                  </div>
                  <div className={styles.frameWrapper27}>
                    <div className={styles.frameParent25}>
                      <Image className={`${styles.frameChild11} ${styles.formatCardIcon}`} src="/icons/images-green.svg" width={100} height={100} sizes="100px" alt="Multimedia-based assessments" />
                      <b className={styles.popularOnlineQuiz}>
                        Multimedia-Based Assessments
                        <br />
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent30}>
              <div className={styles.frameWrapper25}>
                <div className={styles.frameParent26}>
                  <div className={styles.frameWrapper26} />
                  <div className={styles.frameWrapper27}>
                    <div className={styles.frameParent25}>
                      <Image className={`${styles.frameChild11} ${styles.formatCardIcon}`} src="/icons/briefcase-01-orange.svg" width={100} height={100} sizes="100px" alt="Real-world application assessments" />
                      <b className={styles.popularOnlineQuiz}>
                        Real-World Application Assessments
                        <br />
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper36}>
                <div className={styles.frameParent26}>
                  <div className={styles.frameWrapper26}>
                    <div className={styles.frameChild10} />
                  </div>
                  <div className={styles.frameWrapper27}>
                    <div className={styles.frameParent25}>
                      <Image className={`${styles.frameChild11} ${styles.formatCardIcon}`} src="/icons/user-group-02 copyblue.svg" width={100} height={100} sizes="100px" alt="Collaborative and continuous learning" />
                      <b className={styles.popularOnlineQuiz}>
                        Collaborative and Continuous Learning
                        <br />
                        <br />
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.assessmentsInner}>
          <div className={styles.frameParent35}>
            <div className={styles.frameParent36}>
              <div className={styles.frameParent37}>
                <div className={styles.aiSectionBadge}>AI Intelligence</div>
                <b className={styles.aiPoweredAssessmentIntellig}>
                  <span className={styles.aiHeadingLine}>AI-Powered Assessment</span>
                  <span className={styles.aiHeadingLine}>Intelligence</span>
                </b>
              </div>
              <div className={styles.neurolxpGoesBeyond}>NeuroLXP goes beyond basic LMS testing with AI-driven assessments for smarter, adaptive learning.</div>
            </div>
            <div className={styles.frameParent38}>
              <div className={styles.frameParent39}>
                <div className={`${styles.image20Parent4} ${styles.aiHoverCard} ${styles.aiGenerateCard}`}>
                  <div className={styles.image207} />
                  <div className={styles.frameParent40}>
                    <Image className={`${styles.aiCardIcon} ${styles.aiCardIconBlue}`} src="/icons/file-question-mark.svg" width={60} height={60} sizes="60px" alt="Generate exam questions" />
                    <div className={styles.generateExamQuestions}>Generate Exam Questions</div>
                  </div>
                </div>
                <div className={`${styles.image20Parent5} ${styles.aiHoverCard} ${styles.aiPracticeCard}`}>
                  <div className={styles.image207} />
                  <div className={styles.frameParent40}>
                    <Image className={`${styles.aiCardIcon} ${styles.aiCardIconPink}`} src="/icons/clipboard-list copy.svg" width={60} height={60} sizes="60px" alt="Create practice quizzes" />
                    <div className={styles.createPracticeQuizzes}>
                      Create Practice Quizzes
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent39}>
                <div className={`${styles.image20Parent5} ${styles.aiHoverCard} ${styles.aiSmartCard}`}>
                  <div className={styles.image207} />
                  <div className={styles.frameParent40}>
                    <Image className={`${styles.aiCardIcon} ${styles.aiCardIconOrange}`} src="/icons/idea-01.svg" width={60} height={60} sizes="60px" alt="Recommend smart questions" />
                    <div className={styles.recommendSmartQuestions}>
                      Recommend Smart Questions
                      <br />
                    </div>
                  </div>
                </div>
                <div className={`${styles.image20Parent5} ${styles.aiHoverCard} ${styles.aiAdaptiveCard}`}>
                  <div className={styles.image207} />
                  <div className={styles.frameParent40}>
                    <Image className={`${styles.aiCardIcon} ${styles.aiCardIconPurple}`} src="/icons/target-02-heart.svg" width={60} height={60} sizes="60px" alt="Enable adaptive testing" />
                    <div className={styles.enableAdaptiveTesting}>Enable Adaptive Testing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={`${styles.frameParent45} ${styles.audienceSection}`} aria-labelledby="audience-section-title">
          <div className={styles.audienceHeader}>
            <div className={styles.audienceSectionBadge}>Who Can Benefit From NeuroLXP?</div>
            <h2 id="audience-section-title" className={styles.audienceTitle}>
              Designed for Every <span>Learning Need</span>
            </h2>
            <p className={styles.audienceDescription}>Modern digital learning with exams, assessments, skills evaluation, and certification.</p>
          </div>

          <div className={styles.audienceCarouselViewport} onMouseEnter={() => setAudiencePaused(true)} onMouseLeave={() => setAudiencePaused(false)} onFocusCapture={() => setAudiencePaused(true)} onBlurCapture={() => setAudiencePaused(false)}>
            <div className={`${styles.audienceCarouselTrack} ${audienceTransition ? "" : styles.audienceCarouselTrackNoTransition}`} style={{ "--audience-index": audiencePosition } as CSSProperties} onTransitionEnd={handleAudienceTransitionEnd}>
              {[...audienceCards, ...audienceCards, ...audienceCards].map((card, index) => {
                const isFeatured = index === audiencePosition + 1;
                return (
                  <article className={`${styles.audienceCard} ${card.className} ${isFeatured ? styles.audienceCardFeatured : ""}`} key={`${card.title}-${index}`}>
                    <div className={styles.audienceImageWrap}>
                      <Image className={styles.audienceImage} src={card.image} width={473} height={258} sizes="(max-width: 767px) 88vw, 473px" alt="" />
                    </div>
                    <div className={styles.audienceCardTitle}>
                      <span>{card.title}</span>
                      <span>{card.subtitle}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className={styles.audienceControls} role="group" aria-label="Audience carousel controls">
            <button type="button" className={styles.audienceArrowButton} onClick={() => moveAudience(-1)} aria-label="Show previous audience">
              <Image src="/icons/arrow-left-big.svg" width={40} height={40} alt="" aria-hidden="true" />
            </button>
            <div className={styles.audienceControlLine} aria-hidden="true" />
            <button type="button" className={styles.audienceArrowButton} onClick={() => moveAudience(1)} aria-label="Show next audience">
              <Image src="/icons/arrow-right-big.svg" width={40} height={40} alt="" aria-hidden="true" />
            </button>
          </div>
        </section>
        <div className={styles.frameParent49}>
          <div className={styles.frameWrapper45}>
            <div className={styles.frameWrapper46}>
              <div className={styles.aSmarterLmsForDigitalLearParent}>
                <b className={styles.aSmarterLms}>
                  A Smarter LMS for Digital Learning
                  <br />
                </b>
                <div className={styles.traditionalLmsPlatforms}>Traditional LMS platforms offer limited question types. NeuroLXP provides 60+ assessment formats for interactive, engaging online evaluations.</div>
              </div>
            </div>
          </div>
          <BookDemoTrigger className={styles.requestADemoWrapper}>
            <b className={styles.requestADemo}>Request a Demo</b>
          </BookDemoTrigger>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Assessments;