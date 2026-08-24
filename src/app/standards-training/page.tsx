import type { NextPage } from 'next';
import Image from "next/image";
import styles from "./standard.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";


const StandardsTraining: NextPage = () => {
	return (
		<>
			<Header />
			<a className={styles.skipLink} href="#main-content">Skip to main content</a>
			<main id="main-content" className={styles.standardsTraining} tabIndex={-1}>
			<nav className={styles.frameDiv} aria-label="Breadcrumb">
				<div className={styles.resourcesWrapper}>
					<div className={styles.useCases}>Resources</div>
				</div>
				<div className={styles.homeParent}>
					<Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
					<div className={styles.resourcesWrapper}>
						<div className={styles.useCases}>Use cases</div>
					</div>
				</div>
				<div className={styles.arrowRightDoubleGroup}>
					<Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
					<b className={styles.useCases}>Standards Training</b>
				</div>
			</nav>
			<div className={styles.frameParent2}>
				<div className={styles.frameParent3}>
					<div className={styles.image21Parent}>
						<div className={styles.image21} />
						<div className={styles.groupYoungBusinesspeopleUsi} />
						<div className={styles.frameParent4}>
							<div className={styles.frameParent5}>
								<div className={styles.frameParent6}>
									<div className={styles.frameIcon}>Standards Training</div>
									<h1 className={styles.buildIndustryReadyLearningContainer}>
										<span className={styles.build}>{`Build `}</span>
										<span className={styles.industryReady}>{`Industry-Ready `}</span>
										<span className={styles.build}>Learning</span>
									</h1>
								</div>
								<div className={styles.improveLearningQuality}>Improve learning quality, outcomes, and industry alignment.</div>
							</div>
							<div className={styles.frameChild2}>
								<span>Book a Demo</span>
							</div>
						</div>
					</div>
					<div className={styles.image20} />
					<div className={styles.frameParent7}>
						<div className={styles.outcomeBasedLearningWrapper}>
							<b className={styles.outcomeBasedLearning}>Outcome-Based Learning</b>
						</div>

						<div className={styles.flowArrow} aria-hidden="true">↓</div>

						<div className={styles.facultyDevelopmentWrapper}>
							<b className={styles.facultyDevelopment}>Faculty Development</b>
						</div>

						<div className={styles.flowArrow} aria-hidden="true">↓</div>

						<div className={styles.accreditationReadyWrapper}>
							<b className={styles.outcomeBasedLearning}>Accreditation Ready</b>
						</div>
					</div>
				</div>
				<div className={styles.frameParent8}>
					<div className={styles.whyStandardsTrainingParent}>
						<h2 className={styles.whyStandardsTraining}>Why Standards Training?</h2>
						<div className={styles.createAConsistent}>Create a consistent learning environment with structured curricula, effective teaching practices, and measurable outcomes.</div>
					</div>
					<div className={styles.frameParent9}>
						<div className={styles.frameParent10}>
							<div className={styles.frameParent11}>
								<div className={styles.iconCircle}><div className={`${styles.iconCircleInner} ${styles.iconPink}`}><Image src="/icons/targetwhite.svg" width={34} height={34} alt="" /></div></div>
								<b className={styles.alignWithIndustry}>Align with Industry Standards</b>
							</div>
							<div className={styles.frameParent11}>
								<div className={styles.iconCircle}><div className={`${styles.iconCircleInner} ${styles.iconPurple}`}><Image src="/icons/chartwhite.svg" width={34} height={34} alt="" /></div></div>
								<b className={styles.improveLearningOutcomes}>Improve Learning Outcomes</b>
							</div>
						</div>
						<div className={styles.frameParent10}>
							<div className={styles.frameParent11}>
								<div className={styles.iconCircle}><div className={`${styles.iconCircleInner} ${styles.iconBlue}`}><Image src="/icons/awards.svg" width={34} height={34} alt="" /></div></div>
								<b className={styles.supportAccreditationAnd}>Support accreditation and compliance</b>
							</div>
							<div className={styles.frameParent11}>
								<div className={styles.iconCircle}><div className={`${styles.iconCircleInner} ${styles.iconGreen}`}><Image src="/icons/globe-round.svg" width={34} height={34} alt="" /></div></div>
								<b className={styles.scaleFutureReadyLearning}>Scale Future-Ready Learning</b>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.standardsTrainingChild} />
			<div className={styles.frameParent16}>
				<div className={styles.resourcesWrapper}>
					<div className={styles.frameParent17}>
						<div className={styles.frameParent18}>
							<div className={styles.benefitsBadge}><span>Benefits</span></div>
							<h2 className={styles.benefitsOfEmployee}>Benefits of Employee Induction with NeuroLXP</h2>
						</div>
						<div className={styles.organizationsCanAchieve}>Organizations can achieve several advantages through digital onboarding:</div>
					</div>
				</div>
				<div className={styles.frameParent19}>
					<div className={styles.frameParent20}>
						<div className={styles.benefitIcon}><Image src="/icons/librarypink.svg" width={46} height={46} alt="" /></div>
						<div className={styles.standardisedCurriculumParent}>
							<b className={styles.standardisedCurriculum}>Standardised Curriculum</b>
							<div className={styles.alignLearningWith}>Align learning with quality standards.</div>
						</div>
					</div>
					<div className={styles.frameParent21}>
						<div className={styles.benefitIcon}><Image src="/icons/teacher-blue.svg" width={46} height={46} alt="" /></div>
						<div className={styles.standardisedCurriculumParent}>
							<b className={styles.standardisedCurriculum}>Faculty Development</b>
							<div className={styles.alignLearningWith}>Empower educators with modern tools.</div>
						</div>
					</div>
					<div className={styles.frameParent22}>
						<div className={styles.benefitIcon}><Image src="/icons/analyticspurple.svg" width={46} height={46} alt="" /></div>
						<div className={styles.standardisedCurriculumParent}>
							<b className={styles.standardisedCurriculum}>Assessment and Evaluation</b>
							<div className={styles.alignLearningWith}>Measure outcomes with analytics.</div>
						</div>
					</div>
					<div className={styles.frameParent23}>
						<div className={styles.benefitIcon}><Image src="/icons/award.svg" width={46} height={46} alt="" /></div>
						<div className={styles.standardisedCurriculumParent}>
							<b className={styles.standardisedCurriculum}>Accreditation Support</b>
							<div className={styles.alignLearningWith}>Simplify compliance and reporting.</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.frameParent24}>
				<div className={styles.frameParent25}>
					<div className={styles.benefitsBadge}><span>Benefits</span></div>
					<div className={styles.turnStandardsIntoLearningEParent}>
						<h2 className={styles.turnStandardsIntoContainer}>
							<span className={styles.turnStandardsInto}>Turn Standards into</span>
							<span className={styles.learningExcellence}> Learning Excellence<br /></span>
						</h2>
						<div className={styles.neurolxpHelpsInstitutions}>NeuroLXP helps institutions improve learning quality, outcomes, and academic consistency.</div>
					</div>
				</div>
				<div className={styles.frameParent26}>
					<div className={styles.frameParent27}>
						<div className={styles.frameWrapper2}>
							<div className={styles.rectangleParent}>
								<div className={styles.rectangleDiv} />
								<div className={styles.frameParent28}>
									<div className={styles.frameParent29}>
										<div className={styles.checkIconCircle}><Image src="/icons/green.svg" width={24} height={24} alt="" /></div>
										<div className={styles.structuredLearning}>Structured Learning</div>
									</div>
									<div className={styles.frameParent29}>
										<div className={styles.checkIconCircle}><Image src="/icons/green.svg" width={24} height={24} alt="" /></div>
										<div className={styles.structuredLearning}>Skill Development</div>
									</div>
									<div className={styles.frameParent29}>
										<div className={styles.checkIconCircle}><Image src="/icons/green.svg" width={24} height={24} alt="" /></div>
										<div className={styles.transparentAssessments}>Transparent Assessments</div>
									</div>
									<div className={styles.frameParent29}>
										<div className={styles.checkIconCircle}><Image src="/icons/green.svg" width={24} height={24} alt="" /></div>
										<div className={styles.structuredLearning}>Career Readiness</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.frameWrapper3}>
							<div className={styles.frameWrapper4}>
								<div className={styles.vectorParent}>
									<div className={styles.rectangleIcon} />
									<div className={styles.frameParent33}>
										<div className={styles.wrapper}>
											<b className={styles.b}>01</b>
										</div>
										<div className={styles.forLearners}>For Learners</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.frameParent27}>
						<div className={styles.frameWrapper2}>
							<div className={styles.rectangleParent}>
								<div className={styles.rectangleDiv} />
								<div className={styles.frameParent28}>
									<div className={styles.frameParent29}>
										<div className={styles.checkIconCircle}><Image src="/icons/green.svg" width={24} height={24} alt="" /></div>
										<div className={styles.transparentAssessments}>Academic Consistency</div>
									</div>
									<div className={styles.frameParent29}>
										<div className={styles.checkIconCircle}><Image src="/icons/green.svg" width={24} height={24} alt="" /></div>
										<div className={styles.structuredLearning}>Better Outcomes</div>
									</div>
									<div className={styles.frameParent29}>
										<div className={styles.checkIconCircle}><Image src="/icons/green.svg" width={24} height={24} alt="" /></div>
										<div className={styles.structuredLearning}>Easy Accreditation</div>
									</div>
									<div className={styles.frameParent29}>
										<div className={styles.checkIconCircle}><Image src="/icons/green.svg" width={24} height={24} alt="" /></div>
										<div className={styles.structuredLearning}>Scalable Delivery</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.frameWrapper6}>
							<div className={styles.frameWrapper7}>
								<div className={styles.vectorGroup}>
									<div className={styles.rectangleIcon} />
									<div className={styles.frameParent33}>
										<div className={styles.wrapper}>
											<b className={styles.b}>02</b>
										</div>
										<div className={styles.forLearners}>For Institutions</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.frameParent27}>
						<div className={styles.frameWrapper2}>
							<div className={styles.rectangleParent}>
								<div className={styles.rectangleDiv} />
								<div className={styles.frameParent28}>
									<div className={styles.frameParent29}>
										<div className={styles.checkIconCircle}><Image src="/icons/green.svg" width={24} height={24} alt="" /></div>
										<div className={styles.structuredLearning}>Modern Resources</div>
									</div>
									<div className={styles.frameParent29}>
										<div className={styles.checkIconCircle}><Image src="/icons/green.svg" width={24} height={24} alt="" /></div>
										<div className={styles.structuredLearning}>Standardised Tools</div>
									</div>
									<div className={styles.frameParent29}>
										<div className={styles.checkIconCircle}><Image src="/icons/green.svg" width={24} height={24} alt="" /></div>
										<div className={styles.structuredLearning}>Better Engagement</div>
									</div>
									<div className={styles.frameParent29}>
										<div className={styles.checkIconCircle}><Image src="/icons/green.svg" width={24} height={24} alt="" /></div>
										<div className={styles.structuredLearning}>Data Insights</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.frameWrapper6}>
							<div className={styles.frameWrapper7}>
								<div className={styles.vectorGroup}>
									<div className={styles.rectangleIcon} />
									<div className={styles.frameParent33}>
										<div className={styles.wrapper}>
											<b className={styles.b}>03</b>
										</div>
										<div className={styles.forLearners}>For Faculty</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.peopleTakingPartBusinessEv} />
			<div className={styles.image212} />
			<div className={styles.groupYoungBusinesspeopleUsi2} />
			
			<div className={styles.image202} />
			<div className={styles.frameParent48}>
				<div className={styles.frameParent49}>
					<div className={styles.frameWrapper11}>
						<div className={styles.buildAFutureReadyLearningParent}>
							<h2 className={styles.turnStandardsIntoContainer}>Build a Future-Ready Learning Ecosystem</h2>
							<div className={styles.neurolxpHelpsInstitutions}>NeuroLXP standardises learning, improves outcomes, and enables scalable education.</div>
						</div>
					</div>
					<div className={styles.frameWrapper12}>
						<span className={styles.frameChild29}>Book a Demo</span>
					</div>
				</div>
				<div className={styles.ellipseImageFrame}>
					<Image
						className={styles.ellipseBg}
						src="/images/bg-training.webp"
						width={1216}
						height={555}
						sizes="(max-width: 1286px) 94vw, 1216px"
						alt="Students collaborating in a learning environment"
						priority
					/>
					<Image
						className={styles.frameChild30}
						src="/images/ellipsecircle.webp"
						width={1286}
						height={540}
						sizes="(max-width: 1286px) 100vw, 1286px"
						alt=""
						aria-hidden="true"
						priority
					/>
				</div>
			</div>
			</main>
			<Footer />
		</>
	);
};

export default StandardsTraining;
