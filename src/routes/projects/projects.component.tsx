import { useSelector } from "react-redux";
import { selectProject } from "../../store/projects/project.selector";
import Preloader from "../../components/preloader/preloader.component";
import ProjectItem from "../../components/project/project-item.component";

const Projects = () => {
  const projectData = useSelector(selectProject),
    { projects, meta } = projectData;
  if (projects == null || meta == null) return <Preloader />;
  return (
    <div
      className="section pp-scrollable slide slide-portfolio a-slide-typed"
      data-name="portfolio">
      <div className="slide-container">
        <div className="container">
          <div className="flex flex-wrap items-center -mxa-15 justify-between m-b25a">
            <div className="col-xl-5 lg:grow-0 lg:shrink-0 basisa-41 pxa-15">
              <div className="portfolio-content">
                <div className="section-title m-b35a">
                  <span className="sub-title m-b45a animate__animated delay5 animate__fadeInUp">
                    Portfolio
                  </span>
                  <h2 className="slide-title animate__animated delay6 animate__fadeInUp">
                    Want to see what I've done?{" "}
                    <span
                      className="text-typed a-typed a-typed-portfolio"
                      data-text="Works."
                    />
                  </h2>
                </div>
                <p className="animate__animated delay7 animate__fadeInUp">
                  My journey both little and big, personal projects and others.{" "}
                  {/* <b>
                    <a href="#">see here.</a>
                  </b> */}
                </p>
              </div>
            </div>
            <div className="col-xl-5 lg:grow-0 lg:shrink-0 basisa-41 pxa-15">
              <div className="counter-wrap rmb-15 animate__animated delay9 animate__fadeInUp">
                <div className="success-box">
                  <span
                    className="count-text lass-than-ten"
                    data-speed={3000}
                    data-stop={7}>
                    7
                  </span>
                  <h6>Years of Experience</h6>
                </div>
                <div className="success-box">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={120}>
                    {meta.total}
                  </span>
                  <h6>Projects</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="projects mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectItem
                item={project}
                key={project.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
