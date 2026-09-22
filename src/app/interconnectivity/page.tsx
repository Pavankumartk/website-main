"use client";

import type { NextPage } from "next";
import Image from "next/image";
import "./inter.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

const Interconnectivity: NextPage = () => {
  return (
    <>
      <Header />
      <main className="interconnectivity interPage">
      <nav className="frameDiv interPage" aria-label="Breadcrumb">
        <div className="featuresWrapper interPage">
          <div className="addOnModules interPage">Features</div>
        </div>
        <div className="homeParent interPage">
          <Image className="arrowDown01Icon interPage" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
          <div className="featuresWrapper interPage">
            <div className="addOnModules interPage">Add-On Modules</div>
          </div>
        </div>
        <div className="arrowRightDoubleGroup interPage">
          <Image className="arrowDown01Icon interPage" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
          <b className="addOnModules interPage">Interconnectivity</b>
        </div>
      </nav>
      <div className="frameParent2 interPage">
        <div className="frameParent3 interPage">
          <div className="frameParent4 interPage">
            <div className="frameParent5 interPage">
              <div className="frameIcon interPage">Learning Platform Integration</div>
              <b className="seamlessInterconnectivityWit interPage">Seamless Interconnectivity with NeuroLXP</b>
            </div>
            <div className="connectLearnersEducators interPage">Connect learners, educators, and ecosystems for unified, connected, and scalable learning.</div>
          </div>
          <BookDemoTrigger>
            <div className="frameWrapper interPage">
              <div className="bookADemoWrapper interPage">
                <b className="bookADemo interPage">Book a Demo</b>
              </div>
            </div>
          </BookDemoTrigger>
        </div>
        <div className="ellipseParent interPage">
          <div className="ellipseDiv interPage" />
          <div className="hierarchySquare06Parent interPage">
            <Image className="hierarchySquare06Icon interPage" src="/icons/hierarchy.svg" width={60} height={60} sizes="100vw" alt="" />
            <div className="neurolxpWrapper interPage">
              <b className="neurolxp interPage">
                <span className="neurolxpTxt interPage">
                  <span className="neurolxp2 interPage">NeuroLXP</span>
                  <span className="span interPage">{` `}</span>
                  <span className="span2 interPage">{` `}</span>
                </span>
              </b>
            </div>
          </div>
          <Image className="smallHierarchyIcon interPage" src="/icons/icon.svg" width={15} height={10} alt="" aria-hidden="true" />
          <div className="ellipseIcon interPage" aria-hidden="true" />
          <div className="frameChild2 interPage" />
        </div>
        <div className="frameParent6 interPage">
          <div className="userGroup02Parent interPage">
            <Image className="userGroup02Icon interPage" src="/icons/userpink.svg" width={32} height={32} sizes="100vw" alt="" />
            <b className="learners interPage">Learners</b>
          </div>
          <div className="bankParent interPage">
            <Image className="userGroup02Icon interPage" src="/icons/bankblue.svg" width={32} height={32} sizes="100vw" alt="" />
            <b className="learners interPage">Educators</b>
          </div>
        </div>
        <div className="frameParent7 interPage">
          <div className="userGroup02Parent interPage">
            <Image className="userGroup02Icon interPage" src="/icons/plug.svg" width={32} height={32} sizes="100vw" alt="" />
            <b className="learners interPage">Systems</b>
          </div>
          <div className="analyticsUpParent interPage">
            <Image className="userGroup02Icon interPage" src="/icons/analyticsyellow.svg" width={32} height={32} sizes="100vw" alt="" />
            <b className="learners interPage">Insights</b>
          </div>
        </div>
      </div>
      <div className="interconnectivityChild interPage" />
      <div className="frameParent8 interPage">
        <div className="frameParent9 interPage">
          <div className="coreFeaturesBadge interPage">
            <span>Core Features</span>
          </div>
          <div className="oneConnectedPlatformForModParent interPage">
            <b className="oneConnectedPlatform interPage">
              One connected platform for modern learning ecosystems
              <br />
            </b>
            <div className="connectSystemsContent interPage">Connect systems, content, tools, and people for seamless, collaborative learning.</div>
          </div>
        </div>
        <div className="frameParent10 interPage">
          <div className="frameWrapper2 interPage">
            <div className="rectangleParent interPage">
              <div className="rectangleDiv interPage" />
              <div className="frameChild4 interPage" />
              <div className="unifiedLearningEcosystemParent interPage">
                <b className="unifiedLearningEcosystem interPage">Unified Learning Ecosystem</b>
                <div className="enableSharingAnd interPage">Connect systems content, and tools</div>
              </div>
              <div className="featureIconTop featureIconTopBlue interPage">
                <Image className="featureCardIcon interPage" src="/icons/links.svg" width={40} height={40} alt="Unified learning ecosystem" />
              </div>
              <div className="frameChild6 interPage" />
            </div>
          </div>
          <div className="frameWrapper3 interPage">
            <div className="rectangleGroup interPage">
              <div className="rectangleDiv interPage" />
              <div className="frameChild8 interPage" />
              <div className="frameChild4 interPage" />
              <div className="collaborativeLearningParent interPage">
                <b className="unifiedLearningEcosystem interPage">Collaborative Learning</b>
                <div className="enableSharingAnd interPage">Enable sharing and peer learning</div>
              </div>
              <div className="featureIconTop featureIconTopPink interPage">
                <Image className="featureCardIcon interPage" src="/icons/hand.svg" width={40} height={40} alt="Collaborative learning" />
              </div>
            </div>
          </div>
          <div className="frameWrapper4 interPage">
            <div className="rectangleParent interPage">
              <div className="rectangleDiv interPage" />
              <div className="frameChild12 interPage" />
              <div className="frameChild4 interPage" />
              <div className="systemIntegrationsParent interPage">
                <b className="unifiedLearningEcosystem interPage">System Integrations</b>
                <div className="connectLmsHrms interPage">Connect LMS, HRMS and tools</div>
              </div>
              <div className="featureIconTop featureIconTopPurple interPage">
                <Image className="featureCardIcon interPage" src="/icons/reloadcircle.svg" width={40} height={40} alt="System integrations" />
              </div>
            </div>
          </div>
          <div className="rectangleParent2 interPage">
            <div className="rectangleDiv interPage" />
            <div className="frameChild16 interPage" />
            <div className="frameChild4 interPage" />
            <div className="systemIntegrationsParent interPage">
              <b className="unifiedLearningEcosystem interPage">Centralized Data and Insights</b>
              <div className="enableSharingAnd interPage">Unify data for smarter decisions</div>
            </div>
            <div className="featureIconTop featureIconTopGreen interPage">
              <Image className="featureCardIcon interPage" src="/icons/analytic.svg" width={40} height={40} alt="Centralized data and insights" />
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent11 interPage">
        <div className="frameWrapper5 interPage">
          <div className="frameParent12 interPage">
            <div className="frameParent13 interPage">
              <div className="whyNeuroLxpBadge interPage">
                <span className="whyNeuroLxpText interPage">
                  Why NeuroLXP<sup className="whyNeuroLxpTm interPage">TM</sup>
                </span>
              </div>
              <b className="breakSilosBuildContainer interPage">
                <span className="breakSilosBuildContainer2 interPage">
                  <span className="breakSilos interPage">{`Break Silos! `}</span>
                  <span className="buildConnectedLearning interPage">Build Connected Learning!</span>
                </span>
              </b>
            </div>
            <div className="connectSystemsContent3 interPage">Connect systems, content, users, and data for smarter learning.</div>
          </div>
        </div>
        <div className="keyBenefitsParent interPage">
          <b className="keyBenefits interPage">{`Key Benefits `}</b>
          <div className="frameParent14 interPage">
            <div className="frameParent15 interPage">
              <div className="benefitIconFrame interPage">
                <div className="benefitIconCircle benefitPink interPage">
                  <Image className="benefitIconImage interPage" src="/icons/monitor.svg" width={34} height={34} alt="One platform for learning activities" />
                </div>
              </div>
              <b className="onePlatformFor interPage">One Platform for Learning Activities</b>
            </div>
            <div className="frameParent15 interPage">
              <div className="benefitIconFrame interPage">
                <div className="benefitIconCircle benefitPurple interPage">
                  <Image className="benefitIconImage interPage" src="/icons/linkround.svg" width={34} height={34} alt="Seamless system integration" />
                </div>
              </div>
              <b className="seamlessSystemIntegration interPage">Seamless System Integration</b>
            </div>
            <div className="frameParent15 interPage">
              <div className="benefitIconFrame interPage">
                <div className="benefitIconCircle benefitBlue interPage">
                  <Image className="benefitIconImage interPage" src="/icons/hand.svg" width={34} height={34} alt="Better collaboration and engagement" />
                </div>
              </div>
              <b className="betterCollaborationAnd interPage">Better Collaboration and Engagement</b>
            </div>
            <div className="frameParent15 interPage">
              <div className="benefitIconFrame interPage">
                <div className="benefitIconCircle benefitTeal interPage">
                  <Image className="benefitIconImage interPage" src="/icons/analytic.svg" width={34} height={34} alt="Clearer learning performance insights" />
                </div>
              </div>
              <b className="clearerLearningPerformance interPage">Clearer Learning Performance Insights</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent19 interPage">
        <div className="frameParent20 interPage">
          <div className="useCasesBadge interPage">
            <span>Use Cases</span>
          </div>
          <div className="builtForDiverseLearningEnvParent interPage">
            <b className="builtForDiverse interPage">Built for Diverse Learning Environments</b>
            <div className="aConnectedPlatform interPage">A connected platform for institutions, enterprises, skill development and flexible learning.</div>
          </div>
        </div>
        <div className="frameParent21 interPage">
          <div className="frameWrapper6 interPage">
            <div className="rectangleParent3 interPage">
              <div className="frameChild25 interPage" />
              <Image className="frameChild26 interPage" src="/images/img1-inter.webp" width={300} height={204} sizes="100vw" alt="Universities and Higher Education" />
              <b className="universitiesAndHigher interPage">Universities and Higher Education</b>
            </div>
          </div>
          <div className="frameWrapper6 interPage">
            <div className="rectangleParent3 interPage">
              <div className="frameChild25 interPage" />
              <Image className="frameChild28 interPage" src="/images/img2-inter.webp" width={300} height={204} sizes="100vw" alt="Corporate Training Academies" />
              <b className="universitiesAndHigher interPage">Corporate Training Academies</b>
            </div>
          </div>
          <div className="frameWrapper6 interPage">
            <div className="rectangleParent3 interPage">
              <div className="frameChild25 interPage" />
              <Image className="frameChild28 interPage" src="/images/img3-inter.webp" width={300} height={204} sizes="100vw" alt="Skill Development Centers" />
              <b className="universitiesAndHigher interPage">Skill Development Centers</b>
            </div>
          </div>
          <div className="frameWrapper6 interPage">
            <div className="rectangleParent3 interPage">
              <div className="frameChild25 interPage" />
              <Image className="frameChild28 interPage" src="/images/img4-inter.webp" width={300} height={204} sizes="100vw" alt="Hybrid and Remote Learning" />
              <b className="universitiesAndHigher interPage">{`Hybrid & Remote Learning`}</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent22 interPage">
        <div className="frameParent23 interPage">
          <div className="howItWorksBadge interPage">
            <span className="howItWorksBadgeText interPage">How it Works</span>
          </div>
          <div className="connectYourEcosystemInFourParent interPage">
            <b className="builtForDiverse interPage">Connect Your Ecosystem in Four Steps</b>
            <div className="connectSystemsPeople interPage">Connect systems, people, and tools in four simple steps.</div>
          </div>
        </div>
        <div className="frameParent24 interPage">
          <div className="frameParent25 interPage">
            <div className="frameWrapper10 interPage">
              <div className="frameParent26 interPage">
                <div className="image20Parent interPage">
                  <div className="image20 interPage" />
                  <div className="frameChild34 interPage" />
                  <div className="integrateExistingSystemsAndWrapper interPage">
                    <b className="integrateExistingSystems interPage">Integrate Existing Systems and Tools</b>
                  </div>
                </div>
                <div className="frameParent27 interPage">
                  <div className="image20Wrapper interPage">
                    <div className="image202 interPage" />
                  </div>
                  <div className="div interPage">1</div>
                </div>
              </div>
            </div>
            <div className="frameWrapper11 interPage">
              <div className="frameParent26 interPage">
                <div className="image20Parent interPage">
                  <div className="image20 interPage" />
                  <div className="frameChild34 interPage" />
                  <div className="connectLearnersAndEducatorsWrapper interPage">
                    <b className="connectLearnersAnd interPage">
                      Connect Learners and Educators
                      <br />
                    </b>
                  </div>
                </div>
                <div className="frameParent27 interPage">
                  <div className="image20Wrapper interPage">
                    <div className="image202 interPage" />
                  </div>
                  <div className="div2 interPage">2</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent30 interPage">
            <div className="frameWrapper10 interPage">
              <div className="frameParent26 interPage">
                <div className="image20Parent interPage">
                  <div className="image20 interPage" />
                  <div className="frameChild34 interPage" />
                  <div className="connectLearnersAndEducatorsWrapper interPage">
                    <b className="enableCollaborativeLearning interPage">Enable Collaborative Learning</b>
                  </div>
                </div>
                <div className="frameParent32 interPage">
                  <div className="image20Wrapper interPage">
                    <div className="image202 interPage" />
                  </div>
                  <div className="div2 interPage">3</div>
                </div>
              </div>
            </div>
            <div className="frameWrapper13 interPage">
              <div className="frameParent26 interPage">
                <div className="image20Parent interPage">
                  <div className="image20 interPage" />
                  <div className="frameChild34 interPage" />
                  <div className="connectLearnersAndEducatorsWrapper interPage">
                    <b className="integrateExistingSystems interPage">Track Performance with Unified Analytics</b>
                  </div>
                </div>
                <div className="frameParent34 interPage">
                  <div className="image20Wrapper interPage">
                    <div className="image202 interPage" />
                  </div>
                  <div className="div4 interPage">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="connectedLearningEcosystemParent interPage">
        <b className="connectedLearningEcosystem interPage">Connected Learning Ecosystem</b>
        <div className="frameParent35 interPage">
          <div className="frameParent36 interPage">
            <div className="frameWrapper14 interPage">
              <div className="frameParent37 interPage">
                <div className="ecosystemIconFrame interPage">
                  <div className="ecosystemIconCircle ecosystemIconPink interPage">
                    <Image className="ecosystemIconImage interPage" src="/icons/student.svg" width={34} height={34} alt="Academic Learning" />
                  </div>
                </div>
                <b className="academicLearning interPage">Academic Learning</b>
              </div>
            </div>
            <div className="frameWrapper14 interPage">
              <div className="frameParent37 interPage">
                <div className="ecosystemIconFrame interPage">
                  <div className="ecosystemIconCircle ecosystemIconBlue interPage">
                    <Image className="ecosystemIconImage interPage" src="/icons/building-white.svg" width={34} height={34} alt="Training Ecosystems" />
                  </div>
                </div>
                <b className="trainingEcosystems interPage">Training Ecosystems</b>
              </div>
            </div>
            <div className="frameWrapper14 interPage">
              <div className="frameParent37 interPage">
                <div className="ecosystemIconFrame interPage">
                  <div className="ecosystemIconCircle ecosystemIconTeal interPage">
                    <Image className="ecosystemIconImage interPage" src="/icons/linkround.svg" width={34} height={34} alt="LMS Integration" />
                  </div>
                </div>
                <b className="lmsIntegration interPage">LMS Integration</b>
              </div>
            </div>
          </div>
          <div className="frameParent40 interPage">
            <div className="frameWrapper14 interPage">
              <div className="frameParent37 interPage">
                <div className="ecosystemIconFrame interPage">
                  <div className="ecosystemIconCircle ecosystemIconOrange interPage">
                    <Image className="ecosystemIconImage interPage" src="/icons/hand.svg" width={34} height={34} alt="Collaborative Learning" />
                  </div>
                </div>
                <b className="collaborativeLearning2 interPage">Collaborative Learning</b>
              </div>
            </div>
            <div className="frameWrapper14 interPage">
              <div className="frameParent37 interPage">
                <div className="ecosystemIconFrame interPage">
                  <div className="ecosystemIconCircle ecosystemIconMaroon interPage">
                    <Image className="ecosystemIconImage interPage" src="/icons/monitor.svg" width={34} height={34} alt="Digital Learning" />
                  </div>
                </div>
                <b className="lmsIntegration interPage">Digital Learning</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ellipseGroup interPage">
        <Image className="frameChild43 interPage" src="/images/bg-inter.png" width={1286} height={540} sizes="100vw" alt="" />
        <div className="ellipseContainer interPage">
          <div className="frameChild44 interPage" />
          <div className="frameParent43 interPage">
            <div className="readyToConnectYourLearningParent interPage">
              <b className="readyToConnectContainer interPage">
                <span className="breakSilos interPage">{`Ready to Connect Your `}</span>
                <span className="learningBlue interPage">Learning Ecosystem</span>
              </b>
              <div className="connectYourEcosystem2 interPage">Connect your ecosystem with NeuroLXP for collaborative data-driven learning.</div>
            </div>
            <BookDemoTrigger>
              <a className="bookDemoBtn interPage">
                Book a Demo
              </a>
            </BookDemoTrigger>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
};

export default Interconnectivity;
