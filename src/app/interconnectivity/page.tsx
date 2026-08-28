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
      <main className="interconnectivity">
      <nav className="frameDiv" aria-label="Breadcrumb">
        <div className="featuresWrapper">
          <div className="addOnModules">Features</div>
        </div>
        <div className="homeParent">
          <Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
          <div className="featuresWrapper">
            <div className="addOnModules">Add-On Modules</div>
          </div>
        </div>
        <div className="arrowRightDoubleGroup">
          <Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
          <b className="addOnModules">Interconnectivity</b>
        </div>
      </nav>
      <div className="frameParent2">
        <div className="frameParent3">
          <div className="frameParent4">
            <div className="frameParent5">
              <div className="frameIcon">Learning Platform Integration</div>
              <b className="seamlessInterconnectivityWit">Seamless Interconnectivity with NeuroLXP</b>
            </div>
            <div className="connectLearnersEducators">Connect learners, educators, and ecosystems for unified, connected, and scalable learning.</div>
          </div>
          <BookDemoTrigger>
            <div className="frameWrapper">
              <div className="bookADemoWrapper">
                <b className="bookADemo">Book a Demo</b>
              </div>
            </div>
          </BookDemoTrigger>
        </div>
        <div className="ellipseParent">
          <div className="ellipseDiv" />
          <div className="hierarchySquare06Parent">
            <Image className="hierarchySquare06Icon" src="/icons/hierarchy.svg" width={60} height={60} sizes="100vw" alt="" />
            <div className="neurolxpWrapper">
              <b className="neurolxp">
                <span className="neurolxpTxt">
                  <span className="neurolxp2">NeuroLXP</span>
                  <span className="span">{` `}</span>
                  <span className="span2">{` `}</span>
                </span>
              </b>
            </div>
          </div>
          <Image className="smallHierarchyIcon" src="/icons/icon.svg" width={15} height={10} alt="" aria-hidden="true" />
          <div className="ellipseIcon" aria-hidden="true" />
          <div className="frameChild2" />
        </div>
        <div className="frameParent6">
          <div className="userGroup02Parent">
            <Image className="userGroup02Icon" src="/icons/userpink.svg" width={32} height={32} sizes="100vw" alt="" />
            <b className="learners">Learners</b>
          </div>
          <div className="bankParent">
            <Image className="userGroup02Icon" src="/icons/bankblue.svg" width={32} height={32} sizes="100vw" alt="" />
            <b className="learners">Educators</b>
          </div>
        </div>
        <div className="frameParent7">
          <div className="userGroup02Parent">
            <Image className="userGroup02Icon" src="/icons/plug.svg" width={32} height={32} sizes="100vw" alt="" />
            <b className="learners">Systems</b>
          </div>
          <div className="analyticsUpParent">
            <Image className="userGroup02Icon" src="/icons/analyticsyellow.svg" width={32} height={32} sizes="100vw" alt="" />
            <b className="learners">Insights</b>
          </div>
        </div>
      </div>
      <div className="interconnectivityChild" />
      <div className="frameParent8">
        <div className="frameParent9">
          <div className="coreFeaturesBadge">
            <span>Core Features</span>
          </div>
          <div className="oneConnectedPlatformForModParent">
            <b className="oneConnectedPlatform">
              One connected platform for modern learning ecosystems
              <br />
            </b>
            <div className="connectSystemsContent">Connect systems, content, tools, and people for seamless, collaborative learning.</div>
          </div>
        </div>
        <div className="frameParent10">
          <div className="frameWrapper2">
            <div className="rectangleParent">
              <div className="rectangleDiv" />
              <div className="frameChild4" />
              <div className="unifiedLearningEcosystemParent">
                <b className="unifiedLearningEcosystem">Unified Learning Ecosystem</b>
                <div className="enableSharingAnd">Connect systems content, and tools</div>
              </div>
              <div className="featureIconTop featureIconTopBlue">
                <Image className="featureCardIcon" src="/icons/links.svg" width={40} height={40} alt="Unified learning ecosystem" />
              </div>
              <div className="frameChild6" />
            </div>
          </div>
          <div className="frameWrapper3">
            <div className="rectangleGroup">
              <div className="rectangleDiv" />
              <div className="frameChild8" />
              <div className="frameChild4" />
              <div className="collaborativeLearningParent">
                <b className="unifiedLearningEcosystem">Collaborative Learning</b>
                <div className="enableSharingAnd">Enable sharing and peer learning</div>
              </div>
              <div className="featureIconTop featureIconTopPink">
                <Image className="featureCardIcon" src="/icons/hand.svg" width={40} height={40} alt="Collaborative learning" />
              </div>
            </div>
          </div>
          <div className="frameWrapper4">
            <div className="rectangleParent">
              <div className="rectangleDiv" />
              <div className="frameChild12" />
              <div className="frameChild4" />
              <div className="systemIntegrationsParent">
                <b className="unifiedLearningEcosystem">System Integrations</b>
                <div className="connectLmsHrms">Connect LMS, HRMS and tools</div>
              </div>
              <div className="featureIconTop featureIconTopPurple">
                <Image className="featureCardIcon" src="/icons/reloadcircle.svg" width={40} height={40} alt="System integrations" />
              </div>
            </div>
          </div>
          <div className="rectangleParent2">
            <div className="rectangleDiv" />
            <div className="frameChild16" />
            <div className="frameChild4" />
            <div className="systemIntegrationsParent">
              <b className="unifiedLearningEcosystem">Centralized Data and Insights</b>
              <div className="enableSharingAnd">Unify data for smarter decisions</div>
            </div>
            <div className="featureIconTop featureIconTopGreen">
              <Image className="featureCardIcon" src="/icons/analytic.svg" width={40} height={40} alt="Centralized data and insights" />
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent11">
        <div className="frameWrapper5">
          <div className="frameParent12">
            <div className="frameParent13">
              <div className="whyNeuroLxpBadge">
                <span className="whyNeuroLxpText">
                  Why NeuroLXP<sup className="whyNeuroLxpTm">TM</sup>
                </span>
              </div>
              <b className="breakSilosBuildContainer">
                <span className="breakSilosBuildContainer2">
                  <span className="breakSilos">{`Break Silos! `}</span>
                  <span className="buildConnectedLearning">Build Connected Learning!</span>
                </span>
              </b>
            </div>
            <div className="connectSystemsContent3">Connect systems, content, users, and data for smarter learning.</div>
          </div>
        </div>
        <div className="keyBenefitsParent">
          <b className="keyBenefits">{`Key Benefits `}</b>
          <div className="frameParent14">
            <div className="frameParent15">
              <div className="benefitIconFrame">
                <div className="benefitIconCircle benefitPink">
                  <Image className="benefitIconImage" src="/icons/monitor.svg" width={34} height={34} alt="One platform for learning activities" />
                </div>
              </div>
              <b className="onePlatformFor">One Platform for Learning Activities</b>
            </div>
            <div className="frameParent15">
              <div className="benefitIconFrame">
                <div className="benefitIconCircle benefitPurple">
                  <Image className="benefitIconImage" src="/icons/linkround.svg" width={34} height={34} alt="Seamless system integration" />
                </div>
              </div>
              <b className="seamlessSystemIntegration">Seamless System Integration</b>
            </div>
            <div className="frameParent15">
              <div className="benefitIconFrame">
                <div className="benefitIconCircle benefitBlue">
                  <Image className="benefitIconImage" src="/icons/hand.svg" width={34} height={34} alt="Better collaboration and engagement" />
                </div>
              </div>
              <b className="betterCollaborationAnd">Better Collaboration and Engagement</b>
            </div>
            <div className="frameParent15">
              <div className="benefitIconFrame">
                <div className="benefitIconCircle benefitTeal">
                  <Image className="benefitIconImage" src="/icons/analytic.svg" width={34} height={34} alt="Clearer learning performance insights" />
                </div>
              </div>
              <b className="clearerLearningPerformance">Clearer Learning Performance Insights</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent19">
        <div className="frameParent20">
          <div className="useCasesBadge">
            <span>Use Cases</span>
          </div>
          <div className="builtForDiverseLearningEnvParent">
            <b className="builtForDiverse">Built for Diverse Learning Environments</b>
            <div className="aConnectedPlatform">A connected platform for institutions, enterprises, skill development and flexible learning.</div>
          </div>
        </div>
        <div className="frameParent21">
          <div className="frameWrapper6">
            <div className="rectangleParent3">
              <div className="frameChild25" />
              <Image className="frameChild26" src="/images/img1-inter.webp" width={300} height={204} sizes="100vw" alt="Universities and Higher Education" />
              <b className="universitiesAndHigher">Universities and Higher Education</b>
            </div>
          </div>
          <div className="frameWrapper6">
            <div className="rectangleParent3">
              <div className="frameChild25" />
              <Image className="frameChild28" src="/images/img2-inter.webp" width={300} height={204} sizes="100vw" alt="Corporate Training Academies" />
              <b className="universitiesAndHigher">Corporate Training Academies</b>
            </div>
          </div>
          <div className="frameWrapper6">
            <div className="rectangleParent3">
              <div className="frameChild25" />
              <Image className="frameChild28" src="/images/img3-inter.webp" width={300} height={204} sizes="100vw" alt="Skill Development Centers" />
              <b className="universitiesAndHigher">Skill Development Centers</b>
            </div>
          </div>
          <div className="frameWrapper6">
            <div className="rectangleParent3">
              <div className="frameChild25" />
              <Image className="frameChild28" src="/images/img4-inter.webp" width={300} height={204} sizes="100vw" alt="Hybrid and Remote Learning" />
              <b className="universitiesAndHigher">{`Hybrid & Remote Learning`}</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent22">
        <div className="frameParent23">
          <div className="howItWorksBadge">
            <span className="howItWorksBadgeText">How it Works</span>
          </div>
          <div className="connectYourEcosystemInFourParent">
            <b className="builtForDiverse">Connect Your Ecosystem in Four Steps</b>
            <div className="connectSystemsPeople">Connect systems, people, and tools in four simple steps.</div>
          </div>
        </div>
        <div className="frameParent24">
          <div className="frameParent25">
            <div className="frameWrapper10">
              <div className="frameParent26">
                <div className="image20Parent">
                  <div className="image20" />
                  <div className="frameChild34" />
                  <div className="integrateExistingSystemsAndWrapper">
                    <b className="integrateExistingSystems">Integrate Existing Systems and Tools</b>
                  </div>
                </div>
                <div className="frameParent27">
                  <div className="image20Wrapper">
                    <div className="image202" />
                  </div>
                  <div className="div">1</div>
                </div>
              </div>
            </div>
            <div className="frameWrapper11">
              <div className="frameParent26">
                <div className="image20Parent">
                  <div className="image20" />
                  <div className="frameChild34" />
                  <div className="connectLearnersAndEducatorsWrapper">
                    <b className="connectLearnersAnd">
                      Connect Learners and Educators
                      <br />
                    </b>
                  </div>
                </div>
                <div className="frameParent27">
                  <div className="image20Wrapper">
                    <div className="image202" />
                  </div>
                  <div className="div2">2</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent30">
            <div className="frameWrapper10">
              <div className="frameParent26">
                <div className="image20Parent">
                  <div className="image20" />
                  <div className="frameChild34" />
                  <div className="connectLearnersAndEducatorsWrapper">
                    <b className="enableCollaborativeLearning">Enable Collaborative Learning</b>
                  </div>
                </div>
                <div className="frameParent32">
                  <div className="image20Wrapper">
                    <div className="image202" />
                  </div>
                  <div className="div2">3</div>
                </div>
              </div>
            </div>
            <div className="frameWrapper13">
              <div className="frameParent26">
                <div className="image20Parent">
                  <div className="image20" />
                  <div className="frameChild34" />
                  <div className="connectLearnersAndEducatorsWrapper">
                    <b className="integrateExistingSystems">Track Performance with Unified Analytics</b>
                  </div>
                </div>
                <div className="frameParent34">
                  <div className="image20Wrapper">
                    <div className="image202" />
                  </div>
                  <div className="div4">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="connectedLearningEcosystemParent">
        <b className="connectedLearningEcosystem">Connected Learning Ecosystem</b>
        <div className="frameParent35">
          <div className="frameParent36">
            <div className="frameWrapper14">
              <div className="frameParent37">
                <div className="ecosystemIconFrame">
                  <div className="ecosystemIconCircle ecosystemIconPink">
                    <Image className="ecosystemIconImage" src="/icons/student.svg" width={34} height={34} alt="Academic Learning" />
                  </div>
                </div>
                <b className="academicLearning">Academic Learning</b>
              </div>
            </div>
            <div className="frameWrapper14">
              <div className="frameParent37">
                <div className="ecosystemIconFrame">
                  <div className="ecosystemIconCircle ecosystemIconBlue">
                    <Image className="ecosystemIconImage" src="/icons/building-white.svg" width={34} height={34} alt="Training Ecosystems" />
                  </div>
                </div>
                <b className="trainingEcosystems">Training Ecosystems</b>
              </div>
            </div>
            <div className="frameWrapper14">
              <div className="frameParent37">
                <div className="ecosystemIconFrame">
                  <div className="ecosystemIconCircle ecosystemIconTeal">
                    <Image className="ecosystemIconImage" src="/icons/linkround.svg" width={34} height={34} alt="LMS Integration" />
                  </div>
                </div>
                <b className="lmsIntegration">LMS Integration</b>
              </div>
            </div>
          </div>
          <div className="frameParent40">
            <div className="frameWrapper14">
              <div className="frameParent37">
                <div className="ecosystemIconFrame">
                  <div className="ecosystemIconCircle ecosystemIconOrange">
                    <Image className="ecosystemIconImage" src="/icons/hand.svg" width={34} height={34} alt="Collaborative Learning" />
                  </div>
                </div>
                <b className="collaborativeLearning2">Collaborative Learning</b>
              </div>
            </div>
            <div className="frameWrapper14">
              <div className="frameParent37">
                <div className="ecosystemIconFrame">
                  <div className="ecosystemIconCircle ecosystemIconMaroon">
                    <Image className="ecosystemIconImage" src="/icons/monitor.svg" width={34} height={34} alt="Digital Learning" />
                  </div>
                </div>
                <b className="lmsIntegration">Digital Learning</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ellipseGroup">
        <Image className="frameChild43" src="/images/bg-inter.png" width={1286} height={540} sizes="100vw" alt="" />
        <div className="ellipseContainer">
          <div className="frameChild44" />
          <div className="frameParent43">
            <div className="readyToConnectYourLearningParent">
              <b className="readyToConnectContainer">
                <span className="breakSilos">{`Ready to Connect Your `}</span>
                <span className="learningBlue">Learning Ecosystem</span>
              </b>
              <div className="connectYourEcosystem2">Connect your ecosystem with NeuroLXP for collaborative data-driven learning.</div>
            </div>
            <BookDemoTrigger>
              <a className="bookDemoBtn">
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
