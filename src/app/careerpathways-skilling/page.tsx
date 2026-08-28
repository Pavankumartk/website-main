"use client";

import type { NextPage } from 'next';
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./careerpathways-skilling.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";


const CareerPathwaysSkilling: NextPage = () => {
  	const router = useRouter();
	const targetAudienceItems = [
		{
			title: "Training Institutes",
			image: "/images/seminar.webp",
			accentClass: styles.targetAudienceBlue,
		},
		{
			title: "Universities",
			image: "/images/building.webp",
			accentClass: styles.targetAudiencePink,
		},
		{
			title: "Corporate Learning",
			image: "/images/business.webp",
			accentClass: styles.targetAudiencePurple,
		},
		{
			title: "EdTech Providers",
			image: "/images/careers.webp",
			accentClass: styles.targetAudienceOrange,
		},
	];
	const [targetAudienceIndex, setTargetAudienceIndex] = useState(1);

	const moveTargetAudience = (direction: number) => {
		setTargetAudienceIndex((currentIndex) =>
			(currentIndex + direction + targetAudienceItems.length) %
			targetAudienceItems.length
		);
	};

	const getTargetAudienceItem = (offset: number) =>
		targetAudienceItems[
			(targetAudienceIndex + offset + targetAudienceItems.length) %
				targetAudienceItems.length
		];

  	return (
        <>
            <Header />
    		<div className={styles.careerPathwaysSkilling}>
			<title>Career Pathways &amp; Skilling | NeuroLXP</title>
      			
      			<div className={styles.frameDiv}>
        				<div className={styles.featuresWrapper}>
          					<div className={styles.learningEcoSystem}>Features</div>
        				</div>
        				<div className={styles.homeParent}>
          					<Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg"  width={16} height={16} sizes="100vw" alt="" />
          					<div className={styles.featuresWrapper}>
            						<div className={styles.learningEcoSystem}>{`Learning Eco-system `}</div>
          					</div>
        				</div>
        				<div className={styles.arrowRightDoubleGroup}>
          					<Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg"  width={16} height={16} sizes="100vw" alt="" />
          					<strong className={styles.learningEcoSystem}>{`Career Pathways & Skilling`}</strong>
        				</div>
      			</div>
      			<div className={styles.frameParent2}>
        				<div className={styles.frameWrapper}>
          					<Image className={styles.frameIcon} src="/images/group.webp" width={934} height={532} sizes="100vw" alt="" />
        				</div>
        				<div className={styles.frameWrapper2}>
          					<div className={styles.frameParent3}>
            						<div className={styles.frameWrapper3}>
              							<div className={styles.frameWrapper4}>
                								<div className={styles.frameParent4}>
                  									<div className={styles.frameParent5}>
                    										<div className={styles.frameChild2}>Career Pathways &amp; Skilling</div>
                    										<h1 style={{ display: "contents" }}><strong className={styles.buildSkillsFollowContainer}>
                      											<span className={styles.buildSkillsFollow}>Build Skills! Follow Your Path!</span>
                      											<span className={styles.becomeCareerReady}>Become Career Ready!</span>
                    										</strong></h1>
                  									</div>
                  									<div className={styles.neurolxpConnectsLearning}>NeuroLXP connects learning, skills, and career goals through personalized industry-aligned pathways.</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.frameParent6}>
								<BookDemoTrigger className={`${styles.frameChild3} ${styles.heroActionButton} ${styles.bookDemoButton}`}>
									Book a Demo
								</BookDemoTrigger>
								<button
									type="button"
									className={`${styles.frameWrapper5} ${styles.heroActionButton} ${styles.startLearningButton}`}
									onClick={() => router.push("/HomePage")}
								>
									Start Learning
								</button>
							</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameParent7}>
        				<div className={styles.frameParent8}>
          					<div className={styles.frameChild4Title}>Learning-To-Career Journey</div>
          					<div className={styles.fromLearningToCareerReadinParent}>
            						<h2 style={{ display: "contents" }}><strong className={styles.fromLearningTo}>From Learning to Career Readiness</strong></h2>
            						<div className={styles.turnLearningInto}>Turn learning into measurable skills and meaningful career outcomes.</div>
          					</div>
        				</div>
        				<div className={styles.frameParent9}>
          					<div className={styles.frameParent10}>
            						<div className={styles.frameChild5} />
            						<div className={styles.frameWrapper6}>
              							<div className={styles.rectangleParent}>
                								<div className={styles.rectangleDiv} />
                								<div className={styles.buildStrongCoreKnowledgeAnWrapper}>
                  									<div className={styles.buildStrongCore}>Build Strong Core Knowledge and Skills</div>
                								</div>
                								<div className={styles.learnWrapper}>
                  									<h3 style={{ display: "contents" }}><strong className={styles.learn}>Learn</strong></h3>
                								</div>
                								<div className={styles.frameChild6} />
              							</div>
            						</div>
          					</div>
          					<div className={styles.frameParent10}>
            						<div className={styles.frameChild5} />
            						<div className={styles.frameWrapper6}>
              							<div className={styles.rectangleParent}>
                								<div className={styles.frameChild8} />
                								<div className={styles.frameChild9} />
                								<div className={styles.buildStrongCoreKnowledgeAnWrapper}>
                  									<div className={styles.developPracticalJobReady}>Develop Practical Job-Ready Skills</div>
                								</div>
                								<div className={styles.buildSkillsWrapper}>
                  									<h3 style={{ display: "contents" }}><strong className={styles.buildSkills}>Build Skills</strong></h3>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.frameParent10}>
            						<div className={styles.frameChild5} />
            						<div className={styles.frameWrapper6}>
              							<div className={styles.rectangleParent}>
                								<div className={styles.frameChild8} />
                								<div className={styles.frameChild12} />
                								<div className={styles.buildStrongCoreKnowledgeAnWrapper}>
                  									<div className={styles.validateSkillsAnd}>Validate Skills and  Certifications</div>
                								</div>
                								<div className={styles.proveCompetencyWrapper}>
                  									<h3 style={{ display: "contents" }}><strong className={styles.proveCompetency}>Prove Competency</strong></h3>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.frameParent10}>
            						<div className={styles.frameChild5} />
            						<div className={styles.frameWrapper6}>
              							<div className={styles.rectangleParent}>
                								<div className={styles.frameChild14} />
                								<div className={styles.frameChild15} />
                								<div className={styles.buildStrongCoreKnowledgeAnWrapper}>
                  									<div className={styles.trackProgressToward}>Track Progress Toward Career Readiness</div>
                								</div>
                								<div className={styles.careerReadyWrapper}>
                  									<h3 style={{ display: "contents" }}><strong className={styles.careerReady}>Career Ready</strong></h3>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.careerPathwaysSkillingChild} />
      			<div className={styles.frameParent14}>
        				<div className={styles.frameWrapper10}>
          					<div className={styles.frameParent15}>
            						<div className={styles.frameChild16Title}>Skill Development</div>
            						<div className={styles.fromLearningToCareerReadinParent}>
              							<h2 style={{ display: "contents" }}><strong className={styles.fromLearningTo}>Build Skills That Matter</strong></h2>
              							<div className={styles.createIndustryAlignedLearni}>Create industry-aligned learning experiences that move beyond theory and develop practical expertise.</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameParent16}>
          					<div className={styles.frameParent17}>
            						<div className={styles.rectangleParent3}>
              							<div className={styles.frameChild17} />
              							<div className={styles.frameChild18} />
              							<div className={styles.coreKnowledgeParent}>
                								<h3 style={{ display: "contents" }}><strong className={styles.coreKnowledge}>Core Knowledge</strong></h3>
                								<div className={styles.buildFoundationsThrough}>Build Foundations Through Targeted Learning</div>
              							</div>
              							<div className={styles.wrapper}>
                								<strong className={styles.b}>01</strong>
              							</div>
            						</div>
            						<div className={styles.rectangleParent4}>
              							<div className={styles.frameChild17} />
              							<div className={styles.frameChild18} />
              							<div className={styles.coreKnowledgeParent}>
                								<h3 style={{ display: "contents" }}><strong className={styles.skillDevelopment}>Skill Development</strong></h3>
                								<div className={styles.developTechnicalAnd}>Develop Technical and Professional Competencies</div>
              							</div>
              							<div className={styles.container}>
                								<strong className={styles.b}>02</strong>
              							</div>
            						</div>
            						<div className={styles.rectangleParent5}>
              							<div className={styles.frameChild17} />
              							<div className={styles.frameChild18} />
              							<div className={styles.coreKnowledgeParent}>
                								<h3 style={{ display: "contents" }}><strong className={styles.practiceAndApply}>Practice and Apply</strong></h3>
                								<div className={styles.applyKnowledgeThrough}>Apply Knowledge Through Real-World Practice</div>
              							</div>
              							<div className={styles.frame}>
                								<strong className={styles.b3}>03</strong>
              							</div>
            						</div>
          					</div>
          					<div className={styles.frameParent18}>
            						<div className={styles.rectangleParent3}>
              							<div className={styles.frameChild17} />
              							<div className={styles.frameChild18} />
              							<div className={styles.coreKnowledgeParent}>
                								<h3 style={{ display: "contents" }}><strong className={styles.assessAndValidate}>Assess and Validate</strong></h3>
                								<div className={styles.measureSkillsThrough}>Measure Skills Through Practical Assessments</div>
              							</div>
              							<div className={styles.frameChild25} />
              							<div className={styles.frameWrapper11}>
                								<div className={styles.frameWrapper12}>
                  									<div className={styles.frameWrapper12}>
                    										<div className={styles.frameWrapper12}>
                      											<strong className={styles.b3}>04</strong>
                    										</div>
                  									</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.rectangleParent7}>
              							<div className={styles.frameChild17} />
              							<div className={styles.frameChild18} />
              							<div className={styles.coreKnowledgeParent}>
                								<h3 style={{ display: "contents" }}><strong className={styles.practiceAndApply}>Certify and Progress</strong></h3>
                								<div className={styles.recognizeAchievementsAnd}>Recognize Achievements and Track Career Readiness</div>
              							</div>
              							<div className={styles.wrapper3}>
                								<strong className={styles.b3}>05</strong>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameParent19}>
        				<div className={styles.frameParent20}>
          					<div className={styles.frameParent21}>
            						<div className={styles.frameChild28Title}>Personalized Pathways</div>
            						<h2 style={{ display: "contents" }}><strong className={styles.personalizedLearningAnd}>Personalized Learning and Career Pathways</strong></h2>
          					</div>
          					<div className={styles.guideLearnersThrough}>Guide learners through structured pathways aligned with their skills, interests, and career goals.</div>
        				</div>
        				<div className={styles.rectangleParent8}>
          					<div className={styles.frameChild29} />
          					<div className={styles.frameParent22}>
            						<div className={`${styles.pathwayItem} ${styles.pathwayItemPink}`}>
              							<Image
                								className={`${styles.pathwayArrow} ${styles.pathwayArrowPink}`}
                                                src="/icons/arrowpink.svg" 
                								width={30}
                								height={30}
                								alt=""
              							/>
              							<span>Follow Guided Learning Journeys</span>
            						</div>
            						<div className={`${styles.pathwayItem} ${styles.pathwayItemTeal}`}>
              							<Image
                								className={`${styles.pathwayArrow} ${styles.pathwayArrowTeal}`}
                                   src="/icons/arrowdarkgreen.svg"
                								width={30}
                								height={30}
                								alt=""
              							/>
              							<span>Identify Required Skills and Competencies</span>
            						</div>
            						<div className={`${styles.pathwayItem} ${styles.pathwayItemOrange}`}>
              							<Image
                								className={`${styles.pathwayArrow} ${styles.pathwayArrowOrange}`}
                                   src="/icons/arrowbrown.svg"
                								width={30}
                								height={30}
                								alt=""
              							/>
              							<span>Track Courses &amp; Milestones</span>
            						</div>
            						<div className={`${styles.pathwayItem} ${styles.pathwayItemGreen}`}>
              							<Image
                								className={`${styles.pathwayArrow} ${styles.pathwayArrowGreen}`}
                                   src="/icons/arrowgreen.svg"
                								width={30}
                								height={30}
                								alt=""
              							/>
              							<span>Monitor Career Readiness</span>
            						</div>
            						<div className={`${styles.pathwayItem} ${styles.pathwayItemBlue}`}>
              							<Image
                								className={`${styles.pathwayArrow} ${styles.pathwayArrowBlue}`}
                                  src="/icons/arrowblue.svg"
                								width={30}
                								height={30}
                								alt=""
              							/>
              							<span>Build Personalized Development Plans</span>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameParent23}>
        				<div className={styles.frameWrapper10}>
          					<div className={styles.frameParent15}>
            						<div className={styles.frameChild35Title}>Progress &amp; Competency Tracking</div>
            						<div className={styles.fromLearningToCareerReadinParent}>
              							<h2 style={{ display: "contents" }}><strong className={styles.fromLearningTo}>Track Skills! Measure Progress!</strong></h2>
              							<div className={styles.giveLearnersAnd}>Give learners and educators clear visibility into skill development and career readiness.</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.learningAnalyticsParent}>
          					<div className={styles.learningAnalytics}>
            						<div className={styles.learningAnalytics2} />
            						<div className={styles.trackPanelContent}>
              							<div className={styles.trackTitlePill}>Track</div>
              							<div className={styles.trackItemsGrid}>
                								<div className={`${styles.trackItem} ${styles.trackItemPink}`}>
                  									<Image
                    										className={`${styles.trackItemIcon} ${styles.trackItemIconPink}`}
                    										src="/icons/arrowpink.svg"
                    										width={30}
                    										height={30}
                    										alt=""
                  									/>
                  									<span>Skill Development</span>
                								</div>
                								<div className={`${styles.trackItem} ${styles.trackItemOrange}`}>
                  									<Image
                    										className={`${styles.trackItemIcon} ${styles.trackItemIconOrange}`}
                    										src="/icons/arrowbrown.svg"
                    										width={30}
                    										height={30}
                    										alt=""
                  									/>
                  									<span>Learning Milestones</span>
                								</div>
                								<div className={`${styles.trackItem} ${styles.trackItemBlue}`}>
                  									<Image
                    										className={`${styles.trackItemIcon} ${styles.trackItemIconBlue}`}
                    										src="/icons/arrowblue.svg"
                    										width={30}
                    										height={30}
                    										alt=""
                  									/>
                  									<span>Competency Growth</span>
                								</div>
                								<div className={`${styles.trackItem} ${styles.trackItemTeal}`}>
                  									<Image
                    										className={`${styles.trackItemIcon} ${styles.trackItemIconTeal}`}
                    										src="/icons/arrowdarkgreen.svg"
                    										width={30}
                    										height={30}
                    										alt=""
                  									/>
                  									<span>Certifications &amp; Awards</span>
                								</div>
                								<div className={`${styles.trackItem} ${styles.trackItemPurple}`}>
                  									<Image
                    										className={`${styles.trackItemIcon} ${styles.trackItemIconPurple}`}
                    										src="/icons/arrowpurple.svg"
                    										width={30}
                    										height={30}
                    										alt=""
                  									/>
                  									<span>Assessment Performance</span>
                								</div>
                								<div className={`${styles.trackItem} ${styles.trackItemNavy}`}>
                  									<Image
                    										className={`${styles.trackItemIcon} ${styles.trackItemIconNavy}`}
                    										src="/icons/arrownavy.svg"
                    										width={30}
                    										height={30}
                    										alt=""
                  									/>
                  									<span>Career Readiness</span>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.frameParent29}>
            						<div className={styles.frameParent30}>
              							<div className={styles.ellipseParent}>
                								<div className={styles.ellipseDiv} />
                								<div className={styles.frameChild42} />
                								<div className={styles.frameChild43} />
                								<div className={styles.parent}>
                  									<strong className={styles.b6}>89%</strong>
                  									<h3 style={{ display: "contents" }}><strong className={styles.technicalSkills}>Technical Skills</strong></h3>
                								</div>
                								<svg className={`${styles.progressRing} ${styles.progressRingTechnical}`} viewBox="0 0 176 176" aria-hidden="true" focusable="false">
									<circle className={styles.progressRingTrack} cx="88" cy="88" r="72" />
									<circle className={styles.progressRingValue} cx="88" cy="88" r="72" pathLength="452.39" />
								</svg>
              							</div>
              							<div className={styles.ellipseGroup}>
                								<div className={styles.ellipseDiv} />
                								<div className={styles.frameChild45} />
                								<svg className={`${styles.progressRing} ${styles.progressRingPractical}`} viewBox="0 0 176 176" aria-hidden="true" focusable="false">
									<circle className={styles.progressRingTrack} cx="88" cy="88" r="72" />
									<circle className={styles.progressRingValue} cx="88" cy="88" r="72" pathLength="452.39" />
								</svg>
                								<div className={styles.frameChild43} />
                								<div className={styles.group}>
                  									<strong className={styles.b7}>78%</strong>
                  									<h3 style={{ display: "contents" }}><strong className={styles.practicalSkills}>Practical Skills</strong></h3>
                								</div>
              							</div>
            						</div>
            						<div className={styles.ellipseParent}>
              							<div className={styles.ellipseDiv} />
              							<div className={styles.frameChild48} />
              							<div className={styles.frameChild43} />
              							<div className={styles.parent2}>
                								<strong className={styles.b8}>84%</strong>
                								<h3 style={{ display: "contents" }}><strong className={styles.careerReadiness}>Career Readiness</strong></h3>
              							</div>
              							<svg className={`${styles.progressRing} ${styles.progressRingCareer}`} viewBox="0 0 176 176" aria-hidden="true" focusable="false">
									<circle className={styles.progressRingTrack} cx="88" cy="88" r="72" />
									<circle className={styles.progressRingValue} cx="88" cy="88" r="72" pathLength="452.39" />
								</svg>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.careerPathwaysSkillingInner}>
					<div className={styles.aiRecommendationsFrame}>
						<div className={styles.aiRecommendationsContent}>
							<div className={styles.aiRecommendationsLeft}>
								<div className={styles.aiRecommendationsHeadingGroup}>
									<div className={styles.aiRecommendationsPill}>
										AI Recommendations
									</div>
									<h2 className={styles.aiRecommendationsTitle}>
										AI-Guided Learning Recommendations
									</h2>
								</div>
								<p className={styles.aiRecommendationsDescription}>
									Use intelligent insights to help learners identify the right next step in their learning journey. NeuroLXP can help surface:
								</p>
							</div>

							<div className={styles.aiRecommendationsList}>
								<div className={styles.aiRecommendationItem}>
									<div className={styles.aiRecommendationIconFrame}>
										<div className={styles.aiRecommendationIconInner}>
											<Image
												className={styles.aiRecommendationIcon}
												 src="/icons/compass.svg" 
												width={34}
												height={34}
												alt=""
											/>
										</div>
									</div>
									<h3>Relevant Courses &amp; Tracks</h3>
								</div>

								<div className={styles.aiRecommendationItem}>
									<div className={styles.aiRecommendationIconFrame}>
										<div className={styles.aiRecommendationIconInner}>
											<Image
												className={styles.aiRecommendationIcon}
												 src="/icons/chartuppink.svg" 
												width={32}
												height={32}
												alt=""
											/>
										</div>
									</div>
									<h3>Skills to Improve</h3>
								</div>

								<div className={styles.aiRecommendationItem}>
									<div className={styles.aiRecommendationIconFrame}>
										<div className={styles.aiRecommendationIconInner}>
											<Image
												className={styles.aiRecommendationIcon}
												 src="/icons/target-purple.svg" 
												width={32}
												height={32}
												alt=""
											/>
										</div>
									</div>
									<h3>Career-Aligned Learning</h3>
								</div>

								<div className={styles.aiRecommendationItem}>
									<div className={styles.aiRecommendationIconFrame}>
										<div className={styles.aiRecommendationIconInner}>
											<Image
												className={styles.aiRecommendationIcon}
												 src="/icons/certificateorange.svg" 
												width={32}
												height={32}
												alt=""
											/>
										</div>
									</div>
									<h3>Career-Boosting Certifications</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.frameParent39}>
        				<div className={styles.frameWrapper10}>
          					<div className={styles.frameParent15}>
            						<div className={`${styles.frameChild55} ${styles.practicalLearningPill}`}>Practical Learning</div>
            						<div className={styles.fromLearningToCareerReadinParent}>
              							<h2 style={{ display: "contents" }}><strong className={styles.fromLearningTo}>
                								<span className={styles.learnThrough}>{`Learn Through `}</span>
                								<span className={styles.realWorldPractice}>Real-World Practice</span>
              							</strong></h2>
              							<div className={styles.giveLearnersAnd}>Turn knowledge into practical expertise through engaging learning experiences.</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameParent41}>
          					<div className={styles.frameParent26}>
            						<div className={styles.rectangleParent3}>
              							<div className={styles.frameChild56} />
              							<div className={styles.frameChild57} />
              							<strong className={styles.b9}>01</strong>
              							<div className={styles.interactiveActivitiesParent}>
                								<h3 style={{ display: "contents" }}><strong className={styles.assessAndValidate}>Interactive Activities</strong></h3>
                								<div className={styles.buildFoundationsThrough}>Build understanding through active participation</div>
              							</div>
            						</div>
            						<div className={styles.rectangleParent10}>
              							<div className={styles.frameChild56} />
              							<div className={styles.frameChild57} />
              							<strong className={styles.b10}>02</strong>
              							<div className={styles.scenarioLearningParent}>
                								<h3 style={{ display: "contents" }}><strong className={styles.scenarioLearning}>Scenario Learning</strong></h3>
                								<div className={styles.applyKnowledgeThrough}>Apply knowledge to realistic situations</div>
              							</div>
            						</div>
            						<div className={styles.rectangleParent11}>
              							<div className={styles.frameChild56} />
              							<div className={styles.frameChild57} />
              							<strong className={styles.b11}>03</strong>
              							<div className={styles.scenarioLearningParent}>
                								<h3 style={{ display: "contents" }}><strong className={styles.coreKnowledge}>Simulations</strong></h3>
                								<div className={styles.applyKnowledgeThrough}>Practise skills in safe controlled environments</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.frameParent43}>
            						<div className={styles.rectangleParent3}>
              							<div className={styles.frameChild56} />
              							<div className={styles.frameChild57} />
              							<strong className={styles.b12}>04</strong>
              							<div className={styles.interactiveActivitiesParent}>
                								<h3 style={{ display: "contents" }}><strong className={styles.coreKnowledge}>{`Projects & Cases`}</strong></h3>
                								<div className={styles.buildFoundationsThrough}>Develop Problem-Solving and Practical Skills</div>
              							</div>
            						</div>
            						<div className={styles.rectangleParent7}>
              							<div className={styles.frameChild56} />
              							<div className={styles.frameChild57} />
              							<strong className={styles.b13}>05</strong>
              							<div className={styles.scenarioLearningParent}>
                								<h3 style={{ display: "contents" }}><strong className={styles.coreKnowledge}>Skill Tests</strong></h3>
                								<div className={styles.applyKnowledgeThrough}>Measure competency beyond traditional testing</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameParent44}>
        				<div className={styles.frameParent45}>
          					<div className={`${styles.frameChild66} ${styles.analyticsReportingPill}`}>Analytics &amp; Reporting</div>
          					<h2 style={{ display: "contents" }}><strong className={styles.measureWhatMatters}>Measure What Matters</strong></h2>
          					<div className={styles.learningAnalyticsHelp}>Learning analytics help educators track learner progress, skill mastery, and career readiness.<br/><br/><br/><br/></div>
        				</div>
        				<div className={styles.frameParent46}>
          					<div className={styles.frameParent47}>
            						<div className={`${styles.frameChild54} ${styles.analyticsCheckOuter}`}>
									<div className={styles.analyticsCheckInner}>
										<Image
											className={styles.analyticsCheckIcon}
											src="/icons/greenmarkicon.svg"
											width={34}
											height={34}
											alt=""
										/>
									</div>
								</div>
            						<div className={styles.trackSkillAcquisition}>Track skill acquisition</div>
          					</div>
          					<div className={styles.frameParent48}>
            						<div className={`${styles.frameChild54} ${styles.analyticsCheckOuter}`}>
									<div className={styles.analyticsCheckInner}>
										<Image
											className={styles.analyticsCheckIcon}
											src="/icons/greenmarkicon.svg"
											width={34}
											height={34}
											alt=""
										/>
									</div>
								</div>
            						<div className={styles.identifyCompetencyGaps}>Identify competency gaps</div>
          					</div>
          					<div className={styles.frameParent48}>
            						<div className={`${styles.frameChild54} ${styles.analyticsCheckOuter}`}>
									<div className={styles.analyticsCheckInner}>
										<Image
											className={styles.analyticsCheckIcon}
											src="/icons/greenmarkicon.svg"
											width={34}
											height={34}
											alt=""
										/>
									</div>
								</div>
            						<div className={styles.monitorLearnerProgress}>Monitor learner progress</div>
          					</div>
          					<div className={styles.frameParent48}>
            						<div className={`${styles.frameChild54} ${styles.analyticsCheckOuter}`}>
									<div className={styles.analyticsCheckInner}>
										<Image
											className={styles.analyticsCheckIcon}
											src="/icons/greenmarkicon.svg"
											width={34}
											height={34}
											alt=""
										/>
									</div>
								</div>
            						<div className={styles.measureAssessmentPerformance}>Measure assessment performance</div>
          					</div>
          					<div className={styles.frameParent48}>
            						<div className={`${styles.frameChild54} ${styles.analyticsCheckOuter}`}>
									<div className={styles.analyticsCheckInner}>
										<Image
											className={styles.analyticsCheckIcon}
											src="/icons/greenmarkicon.svg"
											width={34}
											height={34}
											alt=""
										/>
									</div>
								</div>
            						<div className={styles.trackCredentials}>Track Credentials</div>
          					</div>
          					<div className={styles.frameParent48}>
            						<div className={`${styles.frameChild54} ${styles.analyticsCheckOuter}`}>
									<div className={styles.analyticsCheckInner}>
										<Image
											className={styles.analyticsCheckIcon}
											src="/icons/greenmarkicon.svg"
											width={34}
											height={34}
											alt=""
										/>
									</div>
								</div>
            						<div className={styles.evaluateCareerReadiness}>Evaluate career readiness</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameParent53}>
        				<div className={styles.frameParent54}>
          					<div className={styles.frameWrapper17}>
            						<div className={styles.frameParent15}>
              							<div className={styles.targetAudiencesPill}>Target Audiences</div>
              							<div className={styles.fromLearningToCareerReadinParent}>
                								<h2 style={{ display: "contents" }}><strong className={styles.fromLearningTo}>Connect Education with Industry</strong></h2>
                								<div className={styles.alignLearningProgrammes}>Align learning programmes with the skills and competencies required in the modern workforce.</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.targetAudienceCarousel}>
						<div className={styles.targetAudienceCards} aria-live="polite">
							{[-1, 0, 1].map((offset) => {
								const item = getTargetAudienceItem(offset);
								const positionClass =
									offset === 0
										? styles.targetAudienceCardCenter
										: offset < 0
											? styles.targetAudienceCardLeft
											: styles.targetAudienceCardRight;

								return (
									<div
										className={`${styles.targetAudienceCard} ${positionClass} ${item.accentClass}`}
										key={`${item.title}-${targetAudienceIndex}-${offset}`}
									>
										<div className={styles.targetAudienceImageFrame}>
											<Image
												className={styles.targetAudienceImage}
												src={item.image}
												width={473}
												height={315}
												sizes="100vw"
												alt={item.title}
											/>
										</div>
										<div className={styles.targetAudienceTitle}>{item.title}</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
        				<div className={styles.neurolxpNavigation} role="navigation" aria-label="Career pathway navigation">
        					<div className={styles.neurolxpNavigationBar} aria-hidden="true" />

        					<button
        						type="button"
        						className={`${styles.neurolxpNavButton} ${styles.neurolxpNavLeft}`}
        						onClick={() => moveTargetAudience(-1)}
        						aria-label="Show previous target audience"
        					>
        						<span className={styles.neurolxpNavInner}>
        							<Image
        								src="/icons/arrow-left-big.svg"
        								alt=""
        								width={42}
        								height={42}
        							/>
        						</span>
        					</button>

        					<button
        						type="button"
        						className={`${styles.neurolxpNavButton} ${styles.neurolxpNavRight}`}
        						onClick={() => moveTargetAudience(1)}
        						aria-label="Show next target audience"
        					>
        						<span className={styles.neurolxpNavInner}>
        							<Image
        								src="/icons/arrow-right-big.svg"
        								alt=""
        								width={42}
        								height={42}
        							/>
        						</span>
        					</button>
        				</div>
      			</div>
      			<div className={styles.frameParent64}>
        				<div className={styles.frameChild79Title}>NeuroLXP<sup style={{fontSize:"0.45em",verticalAlign:"top",marginLeft:"2px",fontWeight:700,lineHeight:1}}>TM</sup></div>
        				<div className={styles.frameParent65}>
          					<div className={styles.frameParent66}>
            						<div className={styles.frameWrapper18}>
              							<div className={styles.turnLearningIntoCareerGrowParent}>
                								<h2 style={{ display: "contents" }}><strong className={styles.turnLearningIntoContainer}>
                  									<span className={styles.buildSkillsFollow}>{`Turn Learning into `}</span>
                  									<span className={styles.becomeCareerReady}>Career Growth</span>
                								</strong></h2>
                								<div className={styles.neurolxpConnectsLearning2}>NeuroLXP connects learning, skills, and career readiness helping<br />learners move from education to employment.</div>
              							</div>
            						</div>
            						<div className={styles.frameWrapper19}>
              							<div className={styles.frameWrapper20}>
                								<div className={styles.buildSkillsShapeCareersEWrapper}>
                  									<h2 style={{ display: "contents" }}><strong className={styles.buildSkillsShape}>Build Skills!  Shape Careers!  Empower Futures!</strong></h2>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.frameWrapper21}>
            						<BookDemoTrigger className={styles.frameChild80}>
									Book a Demo
								</BookDemoTrigger>
          					</div>
        				</div>
      			</div>
      			
    		</div>
            <Footer />
        </>
    );
};

export default CareerPathwaysSkilling ;
