import { PropsWithChildren } from "react";
import PagePiling from "../../components/components/PagePiling";
import { getInitialView } from "../../utils/helper/helper";
import TopBanner from "../../components/top-banner/top-banner.component";
import { selectInfo } from "../../store/data/data.selector";
import { useSelector } from "react-redux";
import Preloader from "../../components/preloader/preloader.component";
import { hostURL } from "../../utils/initial-state/states";
import servicepng from "../../assets/img/5154267.png";
import shape3 from "../../assets/img/about/shape-one-dark.png";
import shape4 from "../../assets/img/about/shape-two-dark.png";
import HomeSkills from "../../components/skills/home.component";

export type FooProps = {
  variant: number;
};
function PageSection(props: PropsWithChildren<FooProps>) {
  return (
    <div className={`page-section variant-${props.variant}`}>
      {props.children}
    </div>
  );
}
const Home = () => {
  const initialView = getInitialView();
  const siteInfo = useSelector(selectInfo);
  const onViewChange = (view: string | number) => {
    // eslint-disable-next-line no-restricted-globals
    history.replaceState({}, "", `${window.location.origin}?view=${view}`);
  };
  if (siteInfo.user == null) return <Preloader />;
  return (
    <PagePiling
      initialView={initialView}
      onViewChange={onViewChange}>
      <PageSection variant={1}>
        <TopBanner />
      </PageSection>
      <PageSection variant={2}>
        <div
          className="section pp-scrollable slide slide-services slide-light slide-services a-slide-typed"
          data-name="services">
          <div className="slide-container">
            <div className="container">
              <div className="flex flex-wrap items-center -mxa-15">
                <div className="lg:grow-0 lg:shrink-0 basisa-58 pxa-15">
                  <div className="service-image animate__animated delay4 animate__fadeInUp">
                    <span className="sub-title mb-75">Services</span>
                    <div className="service-inner-images">
                      <img
                        src={servicepng}
                        alt="Service"
                      />
                      <img
                        className="shape-one animate__animated delay6 animate__bounceIn"
                        src={shape3}
                        alt="shape"
                      />
                      <img
                        className="shape-two animate__animated delay8 animate__bounceIn"
                        src={shape4}
                        alt="shape"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:grow-0 lg:shrink-0 basisa-41 pxa-15">
                  <div className="service-content pt-100 rpt-55 animate__animated delay5 animate__fadeInUp">
                    <div className="section-title mb-25">
                      <h2 className="slide-title animate__animated delay5 animate__fadeInUp">
                        What{" "}
                        <span
                          className="text-typed a-typed a-typed-services"
                          data-text="Services"
                        />{" "}
                        Know Best.
                      </h2>
                    </div>
                    {/* <p className="animate__animated delay6 animate__fadeInUp">
                      I always want to be able to meet the goals of my clients,
                      I value my services as a designer through my work. You may
                      like my <b>services.</b>
                    </p> */}
                    <div className="our-services animate__animated delay8 animate__fadeInUp">
                      {siteInfo.services.map((service, i) => (
                        <div
                          className="service-item"
                          key={i}>
                          <div className="icon">
                            <img
                              src={`${hostURL}/uploaded/file/${service.image}`}
                              alt="Icon"
                            />
                          </div>
                          <h4>{service.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection variant={3}>
        <HomeSkills />
      </PageSection>
      <PageSection variant={4}>
        <h1>Portfolio</h1>
        <p>A portfolio of previous work is always nice.</p>
      </PageSection>
    </PagePiling>
  );
};

export default Home;
