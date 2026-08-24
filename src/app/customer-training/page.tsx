import type { NextPage } from "next";
import Image from "next/image";
import styles from "./customer-training.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const CustomerTraining: NextPage = () => {
  return (
    <>
      <Header />
      <main className={styles.customerTraining}>
      <nav className={styles.frameDiv} aria-label="Breadcrumb">
        <div className={styles.resourcesWrapper}>
          <div className={styles.useCases}>Resources</div>
        </div>
        <Image className={styles.breadcrumbArrow} src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
        <div className={styles.resourcesWrapper}>
          <div className={styles.useCases}>Use cases</div>
        </div>
        <Image className={styles.breadcrumbArrow} src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
        <b className={styles.useCases}>Customer Training</b>
      </nav>
      <div className={styles.frameParent2}>
        <section className={styles.vectorParent} aria-labelledby="customer-training-title">
          <Image className={styles.polygonIcon} src="/images/customer-training-hero.webp" width={1280} height={450} sizes="(max-width: 1280px) 100vw, 1280px" alt="" aria-hidden="true" priority />
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.frameIcon}>Customer Training</div>
                <div className={styles.turnProductKnowledgeIntoCuParent}>
                  <h1 id="customer-training-title" className={styles.turnProductKnowledgeContainer}>
                    <span className={styles.turnProductKnowledge}>Turn Product Knowledge into </span>
                    <span className={styles.customerSuccess}>Customer Success</span>
                  </h1>
                  <p className={styles.neurolxpDeliversScalable}>NeuroLXP delivers scalable customer training that drives product adoption, engagement, and success.</p>
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <button className={styles.frameChild2} type="button">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.frameParent5}>
          <div className={styles.frameWrapper3}>
            <div className={styles.empowerCustomersDriveAdoptWrapper}>
              <b className={styles.empowerCustomersDrive}>
                Empower Customers! Drive Adoption! Build Success!
                <br />
              </b>
            </div>
          </div>
          <div className={styles.neurolxpDeliversSelfService}>NeuroLXP delivers self-service customer learning with courses, tutorials, and analytics.</div>
        </div>
      </div>
      <Image className={styles.customerTrainingChild} src="/images/customer-training-divider.svg" width={1440} height={5} sizes="100vw" alt="" aria-hidden="true" />
      <div className={styles.image20Parent}>
        <div className={styles.image20} />
        <div className={styles.frameParent6}>
          <div className={styles.frameWrapper4}>
            <div className={styles.frameWrapper5}>
              <div className={styles.frameParent7}>
                <div className={styles.frameParent8}>
                  <div className={styles.frameIcon}>Customer Training</div>
                  <div className={styles.turnProductKnowledgeIntoCuParent}>
                    <b className={styles.turnProductKnowledgeContainer}>
                      <span className={styles.turnProductKnowledge}>{`Turn Product Knowledge into `}</span>
                      <span className={styles.customerSuccess}>Customer Success</span>
                    </b>
                    <div className={styles.neurolxpDeliversScalable}>NeuroLXP delivers scalable customer training that drives product adoption, engagement, and success.</div>
                  </div>
                </div>
                <div className={styles.frameChild4} />
              </div>
            </div>
          </div>
          <div className={styles.frameParent9}>
            <div className={styles.frameParent10}>
              <div className={styles.frameParent11}>
                <div className={styles.frameParent12}>
                  <div className={styles.frameChild5} />
                  <div className={styles.frameParent13}>
                    <div className={styles.challenge1Parent}>
                      <b className={styles.challenge1}>Challenge 1</b>
                      <b className={styles.simplifyProducts}>Simplify Products</b>
                    </div>
                    <div className={styles.helpCustomersLearn}>Help customers learn products and features faster.</div>
                  </div>
                </div>
                <div className={styles.frameParent14}>
                  <div className={styles.frameChild6} />
                  <div className={styles.frameParent13}>
                    <div className={styles.challenge1Parent}>
                      <b className={styles.challenge1}>Challenge 3</b>
                      <b className={styles.simplifyProducts}>
                        Drive Adoption
                        <br />
                      </b>
                    </div>
                    <div className={styles.helpCustomersLearn}>Guide customers to discover more product value.</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent16}>
                <div className={styles.frameParent12}>
                  <div className={styles.frameChild7} />
                  <div className={styles.frameParent13}>
                    <div className={styles.challenge1Parent}>
                      <b className={styles.challenge1}>Challenge 2</b>
                      <b className={styles.simplifyProducts}>
                        Reduce Support
                        <br />
                      </b>
                    </div>
                    <div className={styles.helpCustomersLearn}>Enable self-service learning and fewer support requests.</div>
                  </div>
                </div>
                <div className={styles.frameParent19}>
                  <div className={styles.frameChild8} />
                  <div className={styles.frameParent13}>
                    <div className={styles.challenge1Parent}>
                      <b className={styles.challenge1}>Challenge 4</b>
                      <b className={styles.simplifyProducts}>
                        Scale Globally
                        <br />
                      </b>
                    </div>
                    <div className={styles.helpCustomersLearn}>Deliver consistent training to customers worldwide.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent21}>
              <div className={styles.frameChild9} />
              <div className={styles.frameParent13}>
                <div className={styles.challenge1Parent}>
                  <b className={styles.challenge1}>Challenge 5</b>
                  <b className={styles.simplifyProducts}>
                    Track Outcomes
                    <br />
                  </b>
                </div>
                <div className={styles.helpCustomersLearn}>Measure progress, completion, and learning performance.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.frameParent23}>
        <div className={styles.frameParent24}>
          <div className={styles.frameParent25}>
            <div className={styles.benefitsBadge}>Benefits</div>
            <b className={styles.benefitsOfCustomer}>
              Benefits of Customer Training
              <br />
              with NeuroLXP
            </b>
          </div>

          <p className={styles.improveProductAdoption}>Improve product adoption, reduce support needs, and drive customer success.</p>
        </div>

        <div className={styles.frameParent26}>
          <div className={styles.frameParent27}>
            <div className={styles.benefitIconOuter}>
              <div className={styles.benefitIconInner}>
                <Image className={styles.benefitIcon} src="/icons/chart-upblue.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className={styles.increaseProductUsage}>Increase product usage</div>
          </div>

          <div className={styles.frameParent28}>
            <div className={styles.benefitIconOuter}>
              <div className={styles.benefitIconInner}>
                <Image className={styles.benefitIcon} src="/icons/headset-pink.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className={styles.lowerSupportRequests}>Lower support requests</div>
          </div>

          <div className={styles.frameParent28}>
            <div className={styles.benefitIconOuter}>
              <div className={styles.benefitIconInner}>
                <Image className={styles.benefitIcon} src="/icons/scale.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className={styles.trainAtScale}>Train at scale</div>
          </div>

          <div className={styles.frameParent28}>
            <div className={styles.benefitIconOuter}>
              <div className={styles.benefitIconInner}>
                <Image className={styles.benefitIcon} src="/icons/idea-01orange.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className={styles.unlockProductValue}>Unlock product value</div>
          </div>

          <div className={styles.frameParent28}>
            <div className={styles.benefitIconOuter}>
              <div className={styles.benefitIconInner}>
                <Image className={styles.benefitIcon} src="/icons/chart-column-big.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className={styles.measureLearning}>Measure learning</div>
          </div>

          <div className={styles.frameParent28}>
            <div className={styles.benefitIconOuter}>
              <div className={styles.benefitIconInner}>
                <Image className={styles.benefitIcon} src="/icons/agreement-02.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className={styles.strengthenEngagement}>Strengthen engagement</div>
          </div>
        </div>
      </div>

      <div className={styles.frameParent50}>
        <div className={styles.frameParent51}>
          <div className={styles.frameParent4}>
            <div className={styles.frameChild27}>Drive Customer Success</div>
            <div className={styles.turnProductKnowledgeIntoCuParent}>
              <b className={styles.turnCustomerEducationContainer}>
                <span className={styles.turnProductKnowledge}>{`Turn Customer Education into `}</span>
                <span className={styles.customerSuccess}>Customer Success</span>
              </b>
              <div className={styles.neurolxpDeliversScalable}>NeuroLXP drives customer success through structured learning, self-service training, and actionable analytics.</div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <button className={styles.frameChild2} type="button">
              Book a Demo
            </button>
          </div>
        </div>
        <Image className={styles.frameChild29} src="/images/rectangle 73(1).webp" width={935} height={498} sizes="(max-width: 935px) 100vw, 935px" alt="Customer Success" priority />
      </div>
      </main>
      <Footer />
    </>
  );
};

export default CustomerTraining;
