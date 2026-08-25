import type { NextPage } from "next";
import Image from "next/image";
import styles from "./help.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const HelpAndSupport: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.helpAndSupport}>
        <div className={styles.frameDiv}>
          <div className={styles.resourcesWrapper}>
            <div className={styles.resources2}>Resources</div>
          </div>
          <div className={styles.arrowRightDoubleParent}>
            <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
            <b className={styles.resources2}>Help and Support</b>
          </div>
        </div>

        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.frameParent4}>
              <div className={styles.frameParent5}>
                <div className={styles.frameIcon}>Help &amp; Support</div>
                <b className={styles.empoweringYouAtContainer}>
                  <span className={styles.empoweringYouAt}>{`Empowering You at `}</span>
                  <span className={styles.everyStep}>Every Step</span>
                </b>
              </div>
              <div className={styles.reliableSupportFor}>Reliable support for administrators educators, and learners.</div>
            </div>
            <a className={styles.frameChild2} href="/book-a-demo">Book a Demo</a>
          </div>

          <div className={styles.frameParent6}>
            <Image className={styles.frameChild3} src="/images/bghelp.png" width={736} height={486} sizes="(max-width: 768px) 100vw, 736px" alt="" />
            <div className={styles.welcomeSign1Wrapper}>
              <Image className={styles.welcomeSign1Icon} src="/images/image1.webp" width={642} height={440} sizes="(max-width: 768px) 100vw, 642px" alt="Help and support representative" />
            </div>
          </div>
        </div>

        <div className={styles.comprehensiveSupportParent}>
          <b className={styles.comprehensiveSupport}>Comprehensive Support</b>
          <div className={styles.frameParent7}>
            <div className={`${styles.supportCard} ${styles.supportCardPurple}`}>
              <div className={styles.supportCardInner}>
                <div className={styles.supportCardContent}>
                  <b className={styles.supportCardTitle}>Technical<br />Support</b>
                  <div className={styles.supportCardText}>Resolve platform and<br />technical issues</div>
                </div>
                <div className={styles.supportCardAccent} />
              </div>
            </div>

            <div className={`${styles.supportCard} ${styles.supportCardPink}`}>
              <div className={styles.supportCardInner}>
                <div className={styles.supportCardContent}>
                  <b className={styles.supportCardTitle}>User<br />Onboarding</b>
                  <div className={styles.supportCardText}>Get started with<br />guided assistance</div>
                </div>
                <div className={styles.supportCardAccent} />
              </div>
            </div>

            <div className={`${styles.supportCard} ${styles.supportCardGreen}`}>
              <div className={styles.supportCardInner}>
                <div className={styles.supportCardContent}>
                  <b className={styles.supportCardTitle}>Feature<br />Guidance</b>
                  <div className={styles.supportCardText}>Explore Platform<br />Features</div>
                </div>
                <div className={styles.supportCardAccent} />
              </div>
            </div>

            <div className={`${styles.supportCard} ${styles.supportCardBlue}`}>
              <div className={styles.supportCardInner}>
                <div className={styles.supportCardContent}>
                  <b className={styles.supportCardTitle}>Technical<br />Help</b>
                  <div className={styles.supportCardText}>Quickly resolve<br />common issues</div>
                </div>
                <div className={styles.supportCardAccent} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.helpAndSupportInner}>
          <Image
            className={styles.helpAndSupportBg}
            src="/images/helpandsupportbg.webp"
            fill
            sizes="100vw"
            alt=""
            aria-hidden="true"
          />

          <div className={styles.frameParent8}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent9}>
                <div className={styles.knowledgeResourcesWrapper}>
                  <b className={styles.knowledgeResources}>Knowledge &amp; Resources</b>
                </div>
                <div className={styles.accessPracticalResources}>Access practical resources to manage and use NeuroLXP effectively</div>
              </div>
            </div>

            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent10}>
                <div className={styles.frameParent11}>
                  <div className={`${styles.resourceIcon} ${styles.resourceIconPink}`}>
                    <div className={styles.resourceIconInner}><Image src="/icons/compasswhite.svg" width={34} height={34} alt="" /></div>
                  </div>
                  <b className={styles.gettingStartedGuides}>Getting Started Guides</b>
                </div>

                <div className={styles.frameParent11}>
                  <div className={`${styles.resourceIcon} ${styles.resourceIconPurple}`}>
                    <div className={styles.resourceIconInner}><Image src="/icons/book-plus.svg" width={34} height={34} alt="" /></div>
                  </div>
                  <b className={styles.courseCreationTutorials}>Course Creation Tutorials</b>
                </div>

                <div className={styles.frameParent11}>
                  <div className={`${styles.resourceIcon} ${styles.resourceIconBlue}`}>
                    <div className={styles.resourceIconInner}><Image src="/icons/chart-up.svg" width={34} height={34} alt="" /></div>
                  </div>
                  <b className={styles.assessmentReporting}>Assessment &amp; Reporting Guides</b>
                </div>

                <div className={styles.frameParent11}>
                  <div className={`${styles.resourceIcon} ${styles.resourceIconTeal}`}>
                    <div className={styles.resourceIconInner}><Image src="/icons/foldernew.svg" width={34} height={34} alt="" /></div>
                  </div>
                  <b className={styles.contentManagementResources}>Content Management Resources</b>
                </div>

                <div className={styles.frameParent11}>
                  <div className={`${styles.resourceIcon} ${styles.resourceIconGold}`}>
                    <div className={styles.resourceIconInner}><Image src="/icons/settingswhite.svg" width={34} height={34} alt="" /></div>
                  </div>
                  <b className={styles.contentManagementResources}>Platform Configuration Guides</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.helpAndSupportChild}>
          <div className={styles.frameParent16}>
            <div className={styles.frameChild13}>
              <span className={styles.neurolxpBadgeText}>NeuroLXP</span>
              <sup className={styles.neurolxpBadgeTm}>TM</sup>
            </div>
            <div className={styles.supportForYourLearningEcosParent}>
              <b className={styles.supportForYour}>Support for Your Learning Ecosystem</b>
              <div className={styles.fromOnboardingTo}>{`From onboarding to daily management, NeuroLXP supports every learning journey. `}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpAndSupport;
