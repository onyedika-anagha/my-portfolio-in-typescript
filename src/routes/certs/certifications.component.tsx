import { useSelector } from "react-redux";
import { selectInfo } from "../../store/data/data.selector";
import EducationItem from "../../components/education/education.component";

const Certifications = () => {
  const siteData = useSelector(selectInfo),
    { education, experience } = siteData;
  return (
    <div className="section pp-scrollable slide slide-resume slide-light">
      <div className="slide-container">
        <div className="container">
          <div className="flex flex-wrap items-center -mxa-15">
            <div className="lg:grow-0 lg:shrink-0 lg:basis-1/2 pxa-15">
              <div className="educations rmb-55">
                <div className="section-title mb-45 animate-element delay2 fadeInUp">
                  <span className="sub-title mb-45">qualification</span>
                  <h2 className="slide-title animate-element delay5 fadeInUp">
                    my education
                  </h2>
                </div>
                <div className="edu-experi-wrap">
                  {education?.map((edu) => (
                    <EducationItem
                      institution={edu}
                      key={edu.id}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:grow-0 lg:shrink-0 lg:basis-1/2 pxa-15">
              <div className="experiecnes">
                <div className="section-title mb-45 animate-element delay4 fadeInUp">
                  <span className="sub-title mb-45">Experiecne</span>
                  <h2 className="slide-title animate-element delay5 fadeInUp">
                    My Experiecne
                  </h2>
                </div>
                <div className="edu-experi-wrap">
                  <div className="edu-experi-item beahance animate-element delay7 fadeInUp">
                    <span className="years">2016-2018</span>
                    <div className="vacancy-content">
                      <span className="title">Beahance</span>
                      <h4 className="subject">Uniq Web Design</h4>
                      <p>
                        After finishing my studies, I first concentrated on my
                        work in <a href="https://www.behance.net/">Behance</a>,
                        here I worked as a web designer for 2 years. It was
                        really a big experience for me.
                      </p>
                    </div>
                  </div>
                  <div className="edu-experi-item dribbble animate-element delay10 fadeInUp">
                    <span className="years">2018-2020</span>
                    <div className="vacancy-content">
                      <span className="title">Dribbble</span>
                      <h4 className="subject">Product Designer</h4>
                      <p>
                        After working well for two years at{" "}
                        <a href="https://dribbble.com/">dribbble</a>, I got the
                        opportunity to work in one of the best market dribbles
                        in the world, and there I am now working as a podcast
                        designer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
