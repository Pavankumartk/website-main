"use client";

import type { NextPage } from 'next';
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./ngo.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";
const NGO: NextPage = () => {
    const topVideoRef = useRef<HTMLVideoElement>(null);
    const [isTopVideoPlaying, setIsTopVideoPlaying] = useState(false);
    const bottomVideoRef = useRef<HTMLVideoElement>(null);
    const [isBottomVideoPlaying, setIsBottomVideoPlaying] = useState(false);
    const [openSupportCards, setOpenSupportCards] = useState<number[]>([]);

    const toggleSupportCard = (index: number) => {
        setOpenSupportCards((current) =>
            current.includes(index)
                ? current.filter((cardIndex) => cardIndex !== index)
                : [...current, index]
        );
    };

    const toggleBottomVideo = () => {
        const video = bottomVideoRef.current;
        if (!video) return;
        if (video.paused) void video.play();
        else video.pause();
    };

    const toggleTopVideo = () => {
        const video = topVideoRef.current;
        if (!video) return;

        if (video.paused) {
            void video.play();
        } else {
            video.pause();
        }
    };
    return (
        <>
            <Header />
        <main className={styles.ngoPage} aria-label="Nonprofit organizations page">
            <title>Nonprofit Organizations
                 (NGOs) | NeuroLXP</title>
            <div className={`${styles.ngo} ${openSupportCards.length > 0 ? styles.supportCardsExpanded : ""}`}>
                <div className={styles.ngoInner}>
                    <div className={styles.image20Parent}>
                        <div className={styles.image20} aria-hidden="true" />
                        <div className={styles.image21} aria-hidden="true" />
                        <video
                            className={styles.image61Icon}
                            ref={topVideoRef}
                            src="/videos/ngo.mp4"
                            preload="metadata"
                            muted
                            autoPlay
                            loop
                            aria-hidden="true"
                            playsInline
                            onClick={toggleTopVideo}
                            onPlay={() => setIsTopVideoPlaying(true)}
                            onPause={() => setIsTopVideoPlaying(false)}
                            onEnded={() => setIsTopVideoPlaying(false)}
                        />
                        {/* {!isTopVideoPlaying && (
                            <button
                                type="button"
                                className={`${styles.frameItem} ${styles.videoPlayButton}`}
                                onClick={toggleTopVideo}
                                aria-label="Play nonprofit organizations video"
                            >
                                <Image
                                    className={styles.videoPlayIcon}
                                    src="/icons/videosymbol.svg"
                                    width={106}
                                    height={106}
                                    sizes="106px"
                                    alt=""
                                    aria-hidden="true"
                                />
                            </button>
                        )} */}
                        <div className={styles.frameDiv}>
                            <div className={styles.frameParent2}>
                                <div className={styles.frameParent3}>
                                    <div className={styles.frameInner}>Nonprofit Organizations (NGOs)</div>
                                    <h1 className={styles.empoweringNgosThroughContainer} style={{ margin: 0, fontWeight: 700 }}>
                                        <span className={styles.empowering}>Empowering</span>
                                        <span className={styles.ngos}> NGOs<br /></span>
                                        <span className={styles.empowering}>Through Learning<br /></span>
                                    </h1>
                                </div>
                                <div className={styles.empoweringNonprofitsThrough}>Empowering nonprofits through scalable digital learning.</div>
                            </div>
                            <BookDemoTrigger className={styles.frameWrapper}>
                                <div className={styles.bookADemoWrapper}>
                                    <div className={styles.bookADemo}>Book a Demo</div>
                                </div>
                            </BookDemoTrigger>
                        </div>
                    </div>
                </div>
                <div className={styles.frameParent4}>
                    <div className={styles.ourCustomersWrapper}>
                        <div className={styles.industriesWeServe}>Our Customers</div>
                    </div>
                    <div className={styles.homeParent}>
                        <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" />
                        <div className={styles.ourCustomersWrapper}>
                            <div className={styles.industriesWeServe}>Industries we Serve</div>
                        </div>
                    </div>
                    <div className={styles.arrowRightDoubleGroup}>
                        <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" />
                        <b className={styles.industriesWeServe}>Nonprofit Organizations</b>
                    </div>
                </div>
                <div className={styles.frame}>
                    <div className={styles.frameInner2}>
                        <div className={styles.frameWrapper2}>
                            <div className={styles.missionDrivenLearningParent}>
                                <h2 className={styles.missionDrivenLearning} style={{ margin: 0, fontWeight: 700 }}>Mission-Driven Learning</h2>
                                <div className={styles.empowerStaffVolunteers}>Empower staff, volunteers partners, and beneficiaries with scalable digital learning that builds skills, shares knowledge and drives lasting social impact.</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.frameInner3}>
                        <div className={styles.frameWrapper3}>
                            <div className={styles.frameWrapper4}>
                                <div className={styles.missionDrivenLearningParent}>
                                    <h2 className={styles.scaleYourImpact} style={{ margin: 0, fontWeight: 700 }}>Scale your Impact</h2>
                                    <div className={styles.deliverStructuredTraining}>Deliver structured training capacity building, and measurable learning through one platform that empowers nonprofits to grow and achieve their mission.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.frameParent5}>
                    <div className={styles.frameParent6}>
                        <div className={styles.frameIcon}>Key Challenges</div>
                        <div className={styles.howNeurolxpSupportsNgosParent}>
                            <h2 className={styles.howNeurolxpSupports} style={{ margin: 0, fontWeight: 700 }}>How NeuroLXP Supports NGOs</h2>
                            <div className={styles.neurolxpHelpsNonprofits}>NeuroLXP helps nonprofits deliver scalable training, build skills, and maximize social impact.<br /><br /></div>
                        </div>
                    </div>
                    <div className={styles.frameParent7}>
                        <div className={`${styles.frameWrapper5} ${styles.supportCard} ${openSupportCards.includes(0) ? styles.supportCardOpen : ""}`}>
                            <div className={styles.supportCardContent}>
                                <div className={`${styles.supportIconOuter} ${styles.distributedStaffIconSection}`}>
                                    <Image className={`${styles.supportIcon} ${styles.distributedStaffIcon}`} src="/icons/group-green.svg" width={90.03} height={90.03} sizes="40.03px" alt="" aria-hidden="true" />
                                </div>
                                <h3 id="support-card-title-0" className={styles.supportCardTitle} style={{ margin: 0, fontWeight: 700 }}>Distributed Staff Teams</h3>
                                <button type="button" className={styles.supportArrowButton} onClick={() => toggleSupportCard(0)} aria-expanded={openSupportCards.includes(0)} aria-label={`${openSupportCards.includes(0) ? "Hide" : "Show"} Distributed Staff Teams details`} aria-controls="support-card-details-0">
                                    <Image className={styles.arrowDownDoubleIcon} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                                </button>
                                <div id="support-card-details-0" className={styles.supportCardDetails} role="region" aria-labelledby="support-card-title-0" aria-hidden={!openSupportCards.includes(0)}><div className={styles.supportCardPeak} aria-hidden="true" /><p>Consistent learning across teams.</p></div>
                            </div>
                        </div>

                        <div className={`${styles.frameWrapper5} ${styles.supportCard} ${openSupportCards.includes(1) ? styles.supportCardOpen : ""}`}>
                            <div className={styles.supportCardContent}>
                                <div className={`${styles.supportIconOuter} ${styles.limitedTrainingIconSection}`}>
                                    <Image className={`${styles.supportIcon} ${styles.limitedTrainingIcon}`} src="/icons/iconsidea-blue.svg" width={90.03} height={90.03} sizes="40.03px" alt="" aria-hidden="true" />
                                </div>
                                <h3 id="support-card-title-1" className={styles.supportCardTitle} style={{ margin: 0, fontWeight: 700 }}>Limited Training Resources</h3>
                                <button type="button" className={styles.supportArrowButton} onClick={() => toggleSupportCard(1)} aria-expanded={openSupportCards.includes(1)} aria-label={`${openSupportCards.includes(1) ? "Hide" : "Show"} Limited Training Resources details`} aria-controls="support-card-details-1">
                                    <Image className={styles.arrowDownDoubleIcon} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                                </button>
                                <div id="support-card-details-1" className={styles.supportCardDetails} role="region" aria-labelledby="support-card-title-1" aria-hidden={!openSupportCards.includes(1)}><div className={styles.supportCardPeak} aria-hidden="true" /><p>Create once, train everywhere.</p></div>
                            </div>
                        </div>

                        <div className={`${styles.frameWrapper5} ${styles.supportCard} ${openSupportCards.includes(2) ? styles.supportCardOpen : ""}`}>
                            <div className={styles.supportCardContent}>
                                <div className={`${styles.supportIconOuter} ${styles.knowledgeTransferIconSection}`}>
                                    <Image className={`${styles.supportIcon} ${styles.knowledgeTransferIcon}`} src="/icons/bookReading.svg" width={90.03} height={90.03} sizes="40.03px" alt="" aria-hidden="true" />
                                </div>
                                <h3 id="support-card-title-2" className={styles.supportCardTitle} style={{ margin: 0, fontWeight: 700 }}>Knowledge Transfer</h3>
                                <button type="button" className={styles.supportArrowButton} onClick={() => toggleSupportCard(2)} aria-expanded={openSupportCards.includes(2)} aria-label={`${openSupportCards.includes(2) ? "Hide" : "Show"} Knowledge Transfer details`} aria-controls="support-card-details-2">
                                    <Image className={styles.arrowDownDoubleIcon} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                                </button>
                                <div id="support-card-details-2" className={styles.supportCardDetails} role="region" aria-labelledby="support-card-title-2" aria-hidden={!openSupportCards.includes(2)}><div className={styles.supportCardPeak} aria-hidden="true" /><p>Capture &amp; share knowledge.</p></div>
                            </div>
                        </div>

                        <div className={`${styles.frameWrapper5} ${styles.supportCard} ${openSupportCards.includes(3) ? styles.supportCardOpen : ""}`}>
                            <div className={styles.supportCardContent}>
                                <div className={`${styles.supportIconOuter} ${styles.trainingImpactIconSection}`}>
                                    <Image className={`${styles.supportIcon} ${styles.trainingImpactIcon}`} src="/icons/chart-purple.svg" width={90.03} height={90.03} sizes="40.03px" alt="" aria-hidden="true" />
                                </div>
                                <h3 id="support-card-title-3" className={styles.supportCardTitle} style={{ margin: 0, fontWeight: 700 }}>Measuring Training Impact</h3>
                                <button type="button" className={styles.supportArrowButton} onClick={() => toggleSupportCard(3)} aria-expanded={openSupportCards.includes(3)} aria-label={`${openSupportCards.includes(3) ? "Hide" : "Show"} Measuring Training Impact details`} aria-controls="support-card-details-3">
                                    <Image className={styles.arrowDownDoubleIcon} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                                </button>
                                <div id="support-card-details-3" className={styles.supportCardDetails} role="region" aria-labelledby="support-card-title-3" aria-hidden={!openSupportCards.includes(3)}><div className={styles.supportCardPeak} aria-hidden="true" /><p>Measure Real Learning Impact.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.image20Group}>
                    <div className={styles.image202} aria-hidden="true" />
                    <div className={styles.image21Parent}>
                        <div className={styles.image212} aria-hidden="true" />
                        <div className={styles.wrapperPexelsMbaClassroom2}>
                            <Image className={styles.pexelsMbaClassroom215566522Icon} src="/images/workingimage.webp" width={781} height={552} sizes="100vw" alt="People collaborating with laptops" />
                        </div>
                        <div className={styles.ellipseDiv} aria-hidden="true" />
                        <div className={styles.frameWrapper9}>
                            <div className={styles.frameWrapper10}>
                                <div className={styles.frameWrapper11}>
                                    <div className={styles.frameParent16}>
                                        <div className={styles.frameParent17}>
                                            <div className={styles.frameChild6}>How NeuroLXP Helps</div>
                                            <h2 className={styles.collaborativeLearning} style={{ margin: 0, fontWeight: 700 }}>Collaborative Learning<br /></h2>
                                        </div>
                                        <div className={styles.createOnceTrainContainer}>
                                            <span className={styles.createOnceTrain}>{`Create once, train everywhere Empower teams, share knowledge, and measure impact `}</span>
                                            <span className={styles.createOnceTrain} style={{ fontWeight: 400 }}>all on one platform</span>
                                            <span className={styles.createOnceTrain}>.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.frameParent18}>
                    <div className={styles.frameParent6}>
                        <div className={styles.frameChild7}>Learning Use Cases</div>
                        <div className={styles.howNeurolxpSupportsNgosParent}>
                            <h2 className={styles.howNeurolxpSupports} style={{ margin: 0, fontWeight: 700 }}>
                                <span className={styles.empowering}>{`How `}</span>
                                <span className={styles.ngos}>NGOs</span>
                                <span className={styles.empowering}> Can Use NeuroLXP<br /></span>
                            </h2>
                            <div className={styles.neurolxpHelpsNonprofits}>Explore how NeuroLXP helps nonprofits train, collaborate, and create lasting impact through engaging digital learning.</div>
                        </div>
                    </div>
                    <div className={styles.frameParent20}>
                        <div className={styles.frameParent21}>
                            <div className={styles.frameParent22}>
                                <div className={styles.frameWrapper12}>
                                    <div className={styles.frameWrapper13}>
                                        <div className={styles.frameWrapper13}>
                                            <div className={styles.volunteerOnboardingWrapper}>
                                                <div className={styles.volunteerOnboarding}>Volunteer Onboarding</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.useCaseCheckWrap} aria-hidden="true">
                                    <Image className={styles.frameChild8} src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />
                                </div>
                            </div>
                            <div className={styles.frameParent22}>
                                <div className={styles.frameWrapper12}>
                                    <div className={styles.frameWrapper13}>
                                        <div className={styles.frameWrapper13}>
                                            <div className={styles.volunteerOnboardingWrapper} />
                                        </div>
                                    </div>
                                    <div className={styles.volunteerOnboarding}>Community Learning</div>
                                </div>
                                <div className={styles.useCaseCheckWrap} aria-hidden="true">
                                    <Image className={styles.frameChild8} src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />
                                </div>
                            </div>
                            <div className={styles.frameParent22}>
                                <div className={styles.frameWrapper12}>
                                    <div className={styles.frameWrapper13}>
                                        <div className={styles.frameWrapper13}>
                                            <div className={styles.volunteerOnboardingWrapper}>
                                                <div className={styles.leadershipTraining}>Leadership Training</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.useCaseCheckWrap} aria-hidden="true">
                                    <Image className={styles.frameChild8} src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.frameParent21}>
                            <div className={styles.frameParent22}>
                                <div className={styles.frameWrapper12}>
                                    <div className={styles.frameWrapper13}>
                                        <div className={styles.frameWrapper13}>
                                            <div className={styles.volunteerOnboardingWrapper}>
                                                <div className={styles.leadershipTraining}>Beneficiary Training</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.useCaseCheckWrap} aria-hidden="true">
                                    <Image className={styles.frameChild8} src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />
                                </div>
                            </div>
                            <div className={styles.frameParent22}>
                                <div className={styles.frameWrapper12}>
                                    <div className={styles.frameWrapper13}>
                                        <div className={styles.frameWrapper13}>
                                            <div className={styles.volunteerOnboardingWrapper}>
                                                <div className={styles.leadershipTraining}>Advocacy Training</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.useCaseCheckWrap} aria-hidden="true">
                                    <Image className={styles.frameChild8} src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />
                                </div>
                            </div>
                            <div className={styles.frameParent22}>
                                <div className={styles.frameWrapper12}>
                                    <div className={styles.frameWrapper13}>
                                        <div className={styles.frameWrapper13}>
                                            <div className={styles.volunteerOnboardingWrapper}>
                                                <div className={styles.leadershipTraining}>Compliance Training</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.useCaseCheckWrap} aria-hidden="true">
                                    <Image className={styles.frameChild8} src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.ngoChild}>
                    <div className={styles.frameWrapper29}>
                        <div className={styles.frameParent30}>
                            <div className={styles.frameParent31}>
                                <div className={styles.frameChild15}>NeuroLXP Benefits</div>
                                <h2 className={styles.benefitsForNgosContainer} style={{ margin: 0, fontWeight: 700 }}>
                                    <span className={styles.empowering}>{`Benefits for `}</span>
                                    <span className={styles.ngos}>{`NGOs `}</span>
                                    <span className={styles.empowering}>Organizations<br /></span>
                                </h2>
                                <div className={styles.neurolxpHelpsNonprofits2}>NeuroLXP helps nonprofits build stronger teams, empower communities, and amplify social impact through structured learning.<br /><br /><br /><br /></div>
                            </div>
                            <div className={styles.frameParent32}>
                                <div className={styles.frameParent33}>
                                    <div className={styles.frameChild16}><div className={styles.benefitCheckInner} aria-hidden="true"><Image className={styles.benefitCheckIcon} src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>
                                    <div className={styles.empoweredTeams}>Empowered Teams</div>
                                </div>
                                <div className={styles.frameParent33}>
                                    <div className={styles.frameChild16}><div className={styles.benefitCheckInner} aria-hidden="true"><Image className={styles.benefitCheckIcon} src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>
                                    <div className={styles.missionDrivenGrowth}>Mission-Driven Growth</div>
                                </div>
                                <div className={styles.frameParent33}>
                                    <div className={styles.frameChild16}><div className={styles.benefitCheckInner} aria-hidden="true"><Image className={styles.benefitCheckIcon} src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>
                                    <div className={styles.higherLearnerEngagement}>Higher Learner Engagement</div>
                                </div>
                                <div className={styles.frameParent33}>
                                    <div className={styles.frameChild19}><div className={styles.benefitCheckInner} aria-hidden="true"><Image className={styles.benefitCheckIcon} src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>
                                    <div className={styles.smarterLearningManagement}>Smarter Learning Management</div>
                                </div>
                                <div className={styles.frameParent33}>
                                    <div className={styles.frameChild16}><div className={styles.benefitCheckInner} aria-hidden="true"><Image className={styles.benefitCheckIcon} src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>
                                    <div className={styles.measurableSocialImpact}>Measurable Social Impact</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.frameParent38}>
                    <div className={styles.frameParent39}>
                        <div className={styles.frameChild21}>NeuroLXP<sup className={styles.neurolxpTrademark}>TM</sup></div>
                        <div className={styles.enablingLearningForSocialIParent}>
                            <h2 className={styles.enablingLearningFor} style={{ margin: 0, fontWeight: 700 }}>Enabling Learning for Social Impact</h2>
                            <div className={styles.withFlexibleLearning}>With flexible learning tools, collaborative knowledge sharing, and scalable training capabilities, NeuroLXP helps nonprofit organizations build stronger teams, empower communities, and amplify their social impact through learning.<br /><br /><br /><br /></div>
                        </div>
                    </div>
                    <div className={styles.frameWrapper30}>
                        <div className={styles.happyStudentsGraduationCereParent}>
                            <div className={styles.happyStudentsGraduationCere} aria-hidden="true" />
                            <video className={styles.groupTeenagersDiscussingUniIcon} ref={bottomVideoRef} src="/videos/ngo1.mp4" preload="metadata" playsInline muted autoPlay loop onClick={toggleBottomVideo} aria-hidden="true" onPlay={() => setIsBottomVideoPlaying(true)} onPause={() => setIsBottomVideoPlaying(false)} onEnded={() => setIsBottomVideoPlaying(false)} />
                            {!isBottomVideoPlaying && (
                                <button type="button" className={`${styles.frameChild22} ${styles.videoPlayButton}`} onClick={toggleBottomVideo} aria-label="Play NeuroLXP social impact video">
                                    <Image className={styles.videoPlayIcon} src="/icons/videosymbol.svg" width={106} height={106} sizes="106px" alt="" aria-hidden="true" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
            <Footer />
        </>
    );
};

export default NGO;