import { useSelector } from "react-redux";
import { selectInfo } from "../../store/data/data.selector";
import Preloader from "../../components/preloader/preloader.component";
import { hostURL } from "../../utils/initial-state/states";
import shape1 from "../../assets/img/slider/5/shape/slider-shape-4.png";
import shape2 from "../../assets/img/slider/5/shape/slider-shape-1.png";
import bgShape from "../../assets/img/bg-shape.png";

const About = () => {
  const siteData = useSelector(selectInfo);
  if (siteData.user == null) return <Preloader />;
  const { user } = siteData;

  const stackMap = siteData.stack.map((item, i) => (
    <span
      key={i}
      className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
      {item.name}
    </span>
  ));
  return (
    <div
      className="section pp-scrollable slide slide-services slide-light slide-services a-slide-typed  dark:bg-neutral-800"
      data-name="services">
      <div className="slide-container">
        <div className="container">
          <div className="flex flex-wrap items-center -mxa-15">
            <div className="lg:grow-0 lg:shrink-0 basisa-58 pxa-15">
              <div className="service-image animate__animated delay4 animate__fadeInUp">
                <span className="sub-title mb-75">About</span>
                <div
                  className="service-inner-images"
                  style={{
                    background: `url(${bgShape}) no-repeat`,
                    backgroundSize: "cover",
                  }}>
                  <img
                    className="h-auto max-w-full rounded-lg "
                    src={`${hostURL}/uploads/all/${user.profile_image}`}
                    alt="Onyedika Anagha"
                    // width={300}
                    // height={300}
                  />
                  <img
                    className="shape-one animate__animated delay6 animate__bounceIn"
                    src={shape2}
                    alt="shape"
                  />
                  <img
                    className="shape-two animate__animated delay8 animate__bounceIn"
                    src={shape1}
                    alt="shape2"
                  />
                </div>
              </div>
            </div>
            <div className="lg:grow-0 lg:shrink-0 basisa-41 pxa-15">
              <div className="service-content pt-100 rpt-55 animate__animated delay5 animate__fadeInUp">
                <div className="section-title mb-25">
                  <h2 className="slide-title animate__animated delay5 animate__fadeInUp">
                    <span
                      className="text-typed a-typed a-typed-services"
                      data-text="Services"
                    />{" "}
                    About me.
                  </h2>
                </div>
                <p className="animate__animated delay6 animate__fadeInUp">
                  {user.bio}
                </p>
                <div className="animate__animated delay8 animate__fadeInUp">
                  {stackMap}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
