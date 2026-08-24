import type { NextPage } from 'next';
import Image from "next/image";
import styles from "./blended-learning.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";


const BlendedLearning: NextPage = () => {
  	return (
    		<>
			<Header />
			<main id="main-content" className={styles.blendedLearning} tabIndex={-1}>
      			
      			<nav className={styles.frameDiv} aria-label="Breadcrumb">
        				<div className={styles.resourcesWrapper}>
          					<div className={styles.useCases}>Resources</div>
        				</div>
        				<div className={styles.homeParent}>
          					<Image
									className={styles.arrowDown01Icon}
									src="/icons/arrow-right-double.svg"
									width={16}
									height={16}
									sizes="16px"
									alt=""
									aria-hidden="true"
								/>
          					<div className={styles.resourcesWrapper}>
            						<div className={styles.useCases}>Use cases</div>
          					</div>
        				</div>
        				<div className={styles.arrowRightDoubleGroup}>
          					<Image
									className={styles.arrowDown01Icon}
									src="/icons/arrow-right-double.svg"
									width={16}
									height={16}
									sizes="16px"
									alt=""
									aria-hidden="true"
								/>
          					<b className={styles.useCases}>Blended Learning</b>
        				</div>
      			</nav>
      			<section className={styles.blendedHero} aria-labelledby="blended-learning-title">
					<div className={styles.blendedHeroContent}>
						<div className={styles.blendedHeroBadge}>NeuroLXP Blended Learning</div>

						<h1 id="blended-learning-title" className={styles.blendedHeroTitle}>
							<span className={styles.blendedHeroTitleLine}>Bridge Classroom and</span>
							<span className={`${styles.blendedHeroTitleLine} ${styles.blendedHeroTitleAccent}`}>Digital Learning</span>
						</h1>

						<p className={styles.blendedHeroDescription}>
							Blend classroom and digital learning for flexible, engaging experiences.
						</p>
					</div>

					<div className={styles.blendedHeroVisual}>
						<div className={styles.blendedHeroImages}>
							<Image
								className={styles.blendedHeroImage}
								src="/images/first.webp"
								width={320}
								height={320}
								alt="Teacher presenting in a classroom"
								priority
							/>

							<div className={styles.blendedHeroPlus} aria-hidden="true">+</div>

							<Image
								className={styles.blendedHeroImage}
								src="/images/secondblend.webp"
								width={320}
								height={320}
								alt="Learner using virtual reality for digital learning"
								priority
							/>
						</div>

						<p className={styles.blendedHeroEquation}>
							<span className={styles.blendedHeroEquationBlue}>Classroom Learning + </span>
							<span className={styles.blendedHeroEquationPink}>Digital Learning</span>
							<span className={styles.blendedHeroEquationEquals}> = </span>
							<span className={styles.blendedHeroEquationGradient}>Blended Learning</span>
						</p>
					</div>
				</section>
				<section className={styles.howItWorksSection} aria-labelledby="how-it-works-title">
					<div className={styles.howItWorksHeader}>
						<div className={styles.howItWorksBadge}>How It Works</div>

						<h2 id="how-it-works-title" className={styles.howItWorksTitle}>
							<span>The Smarter Way to </span>
							<span className={styles.howItWorksTitleAccent}>Blend Learning</span>
						</h2>

						<p className={styles.howItWorksDescription}>
							NeuroLXP unifies classroom learning, digital content, assessments, and analytics.
						</p>
					</div>

					<div className={styles.howItWorksBody}>
						<div className={styles.howItWorksTimeline} aria-hidden="true">
							<div className={styles.howItWorksLine} />

							<div className={`${styles.howItWorksIcon} ${styles.howItWorksIconPink}`}>
								<Image
									src="/icons/alarm-clock.svg"
									width={44}
									height={44}
									alt=""
								/>
							</div>

							<div className={`${styles.howItWorksIcon} ${styles.howItWorksIconBlue}`}>
								<Image
									src="/icons/gauge.svg"
									width={44}
									height={44}
									alt=""
								/>
							</div>

							<div className={`${styles.howItWorksIcon} ${styles.howItWorksIconPurple}`}>
								<Image
									src="/icons/target-01purple.svg"
									width={44}
									height={44}
									alt=""
								/>
							</div>

							<div className={`${styles.howItWorksIcon} ${styles.howItWorksIconGreen}`}>
								<Image
									src="/icons/internetgreen.svg"
									width={44}
									height={44}
									alt=""
								/>
							</div>

							<div className={`${styles.howItWorksIcon} ${styles.howItWorksIconWine}`}>
								<Image
									src="/icons/waterfall-up-01.svg"
									width={44}
									height={44}
									alt=""
								/>
							</div>
						</div>

						<div className={styles.howItWorksCards}>
							<article className={`${styles.howItWorksCard} ${styles.howItWorksCardPink}`}>
								<p className={styles.howItWorksChallenge}>CHALLENGE 1</p>
								<h3>Use Classroom Time Better</h3>
								<p className={styles.howItWorksProblem}>
									Limited class time restricts deeper learning opportunities.
								</p>

								<div className={styles.howItWorksSolution}>
									<strong>HOW NEUROLXP HELPS</strong>
									<p>Move foundational learning online, maximize classroom time.</p>
								</div>
							</article>

							<article className={`${styles.howItWorksCard} ${styles.howItWorksCardBlue}`}>
								<p className={styles.howItWorksChallenge}>CHALLENGE 2</p>
								<h3>Support Every Learning Pace</h3>
								<p className={styles.howItWorksProblem}>
									Learners progress differently, requiring flexible learning support.
								</p>

								<div className={styles.howItWorksSolution}>
									<strong>HOW NEUROLXP HELPS</strong>
									<p>Learn independently with flexible digital practice.</p>
								</div>
							</article>

							<article className={`${styles.howItWorksCard} ${styles.howItWorksCardPurple}`}>
								<p className={styles.howItWorksChallenge}>CHALLENGE 3</p>
								<h3>Keep Learners Engaged</h3>
								<p className={styles.howItWorksProblem}>
									Traditional lectures can reduce engagement and retention.
								</p>

								<div className={styles.howItWorksSolution}>
									<strong>HOW NEUROLXP HELPS</strong>
									<p>Interactive learning boosts engagement beyond classrooms.</p>
								</div>
							</article>

							<article className={`${styles.howItWorksCard} ${styles.howItWorksCardGreen}`}>
								<p className={styles.howItWorksChallenge}>CHALLENGE 4</p>
								<h3>Extend Learning Beyond Class</h3>
								<p className={styles.howItWorksProblem}>
									Extend learning with structured digital experiences.
								</p>

								<div className={styles.howItWorksSolution}>
									<strong>HOW NEUROLXP HELPS</strong>
									<p>Access resources anytime for continuous learning.</p>
								</div>
							</article>

							<article className={`${styles.howItWorksCard} ${styles.howItWorksCardWine}`}>
								<p className={styles.howItWorksChallenge}>CHALLENGE 5</p>
								<h3>Track Progress &amp; Performance</h3>
								<p className={styles.howItWorksProblem}>
									Tracking learner engagement and progress is challenging.
								</p>

								<div className={styles.howItWorksSolution}>
									<strong>HOW NEUROLXP HELPS</strong>
									<p>Track learner progress and identify learning gaps.</p>
								</div>
							</article>
						</div>
					</div>
				</section>
				<section className={styles.blendedBenefitsSection} aria-labelledby="blended-benefits-title">
					<Image
						className={styles.blendedBenefitsBackground}
						src="/images/blended background.webp"
						alt=""
						fill
						sizes="(max-width: 900px) 100vw, 1280px"
						aria-hidden="true"
					/>

					<div className={styles.blendedBenefitsContent}>
						<div className={styles.blendedBenefitsIntro}>
							<div className={styles.blendedBenefitsBadge}>Benefits</div>

							<h2 id="blended-benefits-title" className={styles.blendedBenefitsTitle}>
								Benefits of Blended Learning<br />
								with NeuroLXP
							</h2>

							<p className={styles.blendedBenefitsDescription}>
								Institutions adopting blended learning<br />
								through NeuroLXP can:
							</p>
						</div>

						<div className={styles.blendedBenefitsList}>
							<div className={styles.blendedBenefitItem}>
								<div className={`${styles.blendedBenefitIcon} ${styles.blendedBenefitIconBlue}`}>
									<Image
										src="/icons/refresh-03blue.svg"
										width={40}
										height={40}
										alt=""
									/>
								</div>
								<p>Blend classroom and digital learning</p>
							</div>

							<div className={styles.blendedBenefitItem}>
								<div className={`${styles.blendedBenefitIcon} ${styles.blendedBenefitIconPink}`}>
									<Image
										src="/icons/target-02pink.svg"
										width={40}
										height={40}
										alt=""
									/>
								</div>
								<p>Increase learner engagement</p>
							</div>

							<div className={styles.blendedBenefitItem}>
								<div className={`${styles.blendedBenefitIcon} ${styles.blendedBenefitIconPurple}`}>
									<Image
										src="/icons/alarm-clock copy.svg"
										width={40}
										height={40}
										alt=""
									/>
								</div>
								<p>Enable self-paced learning</p>
							</div>

							<div className={styles.blendedBenefitItem}>
								<div className={`${styles.blendedBenefitIcon} ${styles.blendedBenefitIconOrange}`}>
									<Image
										src="/icons/idea-01orange.svg"
										width={40}
										height={40}
										alt=""
									/>
								</div>
								<p>Reinforce Knowledge Interactively</p>
							</div>

							<div className={styles.blendedBenefitItem}>
								<div className={`${styles.blendedBenefitIcon} ${styles.blendedBenefitIconGold}`}>
									<Image
										src="/icons/chart-line-data-02.svg"
										width={40}
										height={40}
										alt=""
									/>
								</div>
								<p>Track progress with learning analytics</p>
							</div>

							<div className={styles.blendedBenefitItem}>
								<div className={`${styles.blendedBenefitIcon} ${styles.blendedBenefitIconWine}`}>
									<Image
										src="/icons/globe-02red.svg"
										width={40}
										height={40}
										alt=""
									/>
								</div>
								<p>Extend learning beyond the classroom</p>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.blendedCtaSection} aria-labelledby="blended-cta-title">
					<div className={styles.blendedCtaHeader}>
						<div className={styles.blendedCtaBadge}>Smarter Blended Learning</div>

						<h2 id="blended-cta-title" className={styles.blendedCtaTitle}>
							<span>Transform Learning With </span>
							<span className={styles.blendedCtaTitleAccent}>NeuroLXP</span>
						</h2>

						<p className={styles.blendedCtaDescription}>
							Enhance teaching, support learners, and drive better outcomes.
						</p>

						<button className={styles.blendedCtaButton} type="button">
							Book a Demo
						</button>
					</div>

					<div className={styles.blendedCtaImageFrame}>
						<div className={styles.blendedCtaImageShell}>
							<Image
								className={styles.blendedCtaImage}
								src="/images/ellipse 412.webp"
								width={1280}
								height={726}
								sizes="(max-width: 900px) calc(100vw - 48px), 1280px"
								alt="Learner attending an online lesson using a laptop and headphones"
							/>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default BlendedLearning;
