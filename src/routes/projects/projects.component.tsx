import Preloader from "../../components/preloader/preloader.component";
import ProjectItem from "../../components/project/project-item.component";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProjectData } from "../../store/projects/project.types";
import { hostURL } from "../../utils/initial-state/states";
import noData from "../../assets/img/undraw_void_-3-ggu.svg";
import PagePagination from "../../components/pagination/pagination.component";

const Projects = () => {
  const [projectData, setProject] = useState<ProjectData>();
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const getData = async (
      uri = `${hostURL}/api/get/projects-by-service/${slug}`
    ) => {
      setLoading(true);
      try {
        const result = await fetch(uri, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }),
          res = await result.json();
        if (res.data != null) {
          const data: ProjectData = res;
          setProject(data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error as Error);
      }
    },
    handlePaginate = (url: string | null, active: boolean) => {
      if (active) return false;
      if (url != null) getData(url);
    };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  if (projectData == null) return <Preloader />;
  if (loading) return <Preloader />;
  const { data, meta } = projectData,
    projects = data;
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
                    30
                  </span>
                  <h6>Projects</h6>
                </div>
              </div>
            </div>
          </div>
          {projects != null && projects.length > 0 ? (
            <>
              <div className="projects mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectItem
                    item={project}
                    key={project.id}
                  />
                ))}
              </div>
              {meta != null && meta.total > meta.per_page && (
                <PagePagination
                  handlePaginate={handlePaginate}
                  links={meta.links}
                />
              )}
            </>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}>
              <img
                src={noData}
                alt="no data"
                width={"60%"}
              />
              <h2 className="slide-title animate__animated delay6 animate__fadeInUp mt-5">
                No Project found
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
