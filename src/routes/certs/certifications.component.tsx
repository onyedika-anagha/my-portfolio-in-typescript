import { useSelector } from "react-redux";
import { selectInfo } from "../../store/data/data.selector";
import EducationItem from "../../components/education/education.component";
import ExperienceItem from "../../components/experience/experience-item.component";

const Certifications = () => {
  const siteData = useSelector(selectInfo),
    { education, experience } = siteData;
  return (
    <div className="section pp-scrollable slide slide-resume slide-light pt-2">
      <div className="slide-container">
        <div className="container">
          <div className="flex flex-wrap -mxa-15">
            <div className="lg:grow-0 lg:shrink-0 lg:basis-1/2 pxa-15">
              <div className="educations rmb-55">
                <div className="section-title mb-45 animate__animated delay2 animate__fadeInUp">
                  <span className="sub-title mb-45">qualification</span>
                  <h2 className="slide-title animate__animated delay5 animate__fadeInUp">
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
                <div className="section-title mb-45 animate__animated delay4 animate__fadeInUp">
                  <span className="sub-title mb-45">Experience</span>
                  <h2 className="slide-title animate__animated delay5 animate__fadeInUp">
                    My Experiences
                  </h2>
                </div>
                <div className="edu-experi-wrap">
                  {experience?.map((item) => (
                    <ExperienceItem
                      item={item}
                      key={item.id}
                    />
                  ))}
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
