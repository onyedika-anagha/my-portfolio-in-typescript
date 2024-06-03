import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { selectProject } from "../../store/projects/project.selector";
// import { Project } from "../../store/projects/project.types";
import { hostURL } from "../../utils/initial-state/states";
import Preloader from "../../components/preloader/preloader.component";
import { Project } from "../../store/projects/project.types";
import bg from "../../assets/img/triangle_background1-565c33125c4aa93d2e467490bb380d5a.jpg";

type ProjectType = null | Project;
const defaultProject: ProjectType = null;
const ProjectDetail = () => {
  const [project, setProject] = useState<ProjectType>(defaultProject);
  const { slug } = useParams();
  const getProject = async () => {
    try {
      const result = await fetch(`${hostURL}/api/project/${slug}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }),
        res = await result.json();
      if (res.data != null) {
        const data: Project = res.data[0];
        setProject(data);
      }
    } catch (error) {
      console.log(error as Error);
    }
  };
  //   console.log("project: ", project);

  useEffect(() => {
    if (slug != null) {
      getProject();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  if (project == null) return <Preloader />;
  return (
    <>
      <section
        className="relative table w-full py-32 lg:py-40 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
        }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        <div
          className="container"
          style={{ position: "inherit" }}>
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-3 text-3xl leading-normal font-medium text-white">
              {project.title}
            </h3>
            <ul className="list-none">
              <li className="inline font-semibold text-white/60 me-2">
                {" "}
                <span className="text-white">Client :</span>{" "}
                {project.client.name}
              </li>
              <li className="inline font-semibold text-white/60">
                {" "}
                <span className="text-white">Type :</span>{" "}
                {project.service.name}
              </li>
            </ul>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-neutral-900">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      {/* End Hero */}
      {/* Start Section*/}
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="grid grid-cols-1 gap-[30px]">
                {project.images.map((image, i) => (
                  <img
                    src={`${hostURL}/uploaded/file/${image}`}
                    className="rounded-md"
                    alt="thumb"
                    key={i}
                  />
                ))}
              </div>
              {/*end grid*/}
            </div>
            {/*end col*/}
            <div className="lg:col-span-7 md:col-span-6">
              <div className="sticky top-20">
                <div className="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-12 animate__animated delay6 animate__fadeInUp">
                    <div className="work-details">
                      <h4 className="text-xl font-semibold mb-3 border-b border-gray-100 dark:border-gray-700 pb-3">
                        Project Name : {project.title}
                      </h4>
                      <div className="project_desc text-slate-400" dangerouslySetInnerHTML={{ __html:  project.description}}>

                      </div>
                      {/* <p
                        className="text-slate-400"
                        style={{ whiteSpace: "pre-line" }}>
                        {project.description}
                      </p> */}
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="lg:col-span-7 animate__animated delay6 animate__fadeInUp">
                    <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-md">
                      <h5 className="text-lg font-semibold border-b border-gray-100 dark:border-gray-700 pb-3 mb-3">
                        Project Info :
                      </h5>
                      <dl className="grid grid-cols-12 mb-0">
                        <dt className="md:col-span-4 col-span-5 mt-2">
                          Client :
                        </dt>
                        <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                          {project.client.name}
                        </dd>
                        <dt className="md:col-span-4 col-span-5 mt-2">
                          Category :
                        </dt>
                        <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                          {project.service.name}
                        </dd>
                        {project.site_link != null && (
                          <>
                            <dt className="md:col-span-4 col-span-5 mt-2">
                              Link :
                            </dt>
                            <dd
                              className="md:col-span-8 col-span-7 mt-2 text-slate-400"
                              style={{ overflowWrap: "break-word" }}>
                              <a
                                href={project.site_link}
                                target="_blank"
                                rel="noopener noreferrer">
                                {project.site_link}
                              </a>
                            </dd>
                          </>
                        )}

                        {project.github_link != null && (
                          <>
                            <dt className="md:col-span-4 col-span-5 mt-2">
                              Github Repo :
                            </dt>
                            <dd
                              className="md:col-span-8 col-span-7 mt-2 text-slate-400"
                              style={{ overflowWrap: "break-word" }}>
                              <a
                                href={project.github_link}
                                target="_blank"
                                rel="noopener noreferrer">
                                {project.github_link}
                              </a>
                            </dd>
                          </>
                        )}
                      </dl>
                    </div>
                  </div>

                  <div className="lg:col-span-7 animate__animated delay6 animate__fadeInUp">
                    <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                      Stacks :
                    </h5>

                    <ul className="list-none text-center mt-6">
                      {project.stack.map((stack, i) => (
                        <li
                          className="inline-block m-2"
                          key={i}>
                          <a
                            href="#!"
                            className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                            {stack}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/*end col*/}
                </div>
                {/*end grid*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 text-center">
            {/* <span className="text-slate-400 mb-4">
              Available for freelance projects
            </span> */}
            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Do you have any project? <br /> Let's talk.
            </h3>
            <div className="mt-6">
              <Link
                to="/contact"
                className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">
                <i className="uil uil-phone" /> Contact us
              </Link>
            </div>
            <br />
            <br />
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
    </>
  );
};

export default ProjectDetail;
