import Preloader from "../../components/preloader/preloader.component";
import { getRandomAnimate } from "../../components/project/project-item.component";
import { useEffect, useState } from "react";
import { GithubRepo } from "../../utils/initial-state/states";
import { Pagination } from "../../components/pagination/pagination.component";
// import gitPng from "../../assets/img/free-github-159-721954.png";
import { Card } from "flowbite-react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import GitLanguages from "../../components/project/git-languages.component";

const GithubProjects = () => {
  const [projectData, setProject] = useState<GithubRepo[] | null>(null),
    [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const getData = async (
    uri = `https://api.github.com/users/onyedika-anagha/repos`
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
      if (res != null) {
        setProject(
          res.filter(
            (project: GithubRepo) =>
              project.name !== "start-here-guidelines" &&
              project.name !== "onyedika-anagha"
          )
        );
        setLoading(false);
      }
    } catch (error) {
      console.log(error as Error);
    }
  };

  const itemsPerPage = 12;
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentData = projectData?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum: number) => setCurrentPage(pageNum);

  const nextPage = () => setCurrentPage(currentPage + 1);

  const prevPage = () => setCurrentPage(currentPage - 1);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (projectData == null) return <Preloader />;
  if (loading) return <Preloader />;
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
                    Git Repo
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
                  Github Public Repositories...
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
          <div className="projects mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {currentData?.map((data, i) => (
              <Card
                className={`project block animate__animated delay6 ${getRandomAnimate()}`}
                key={i}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>{data.name}</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {data.description}
                </p>
                <GitLanguages url={data.languages_url} />
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-btn mt-45 rmt-25 animate__animated delay9 animate__fadeInUp">
                  View Repo
                  <i className="flex items-center">
                    <ArrowLongRightIcon className="w-6 h-6" />
                  </i>
                </a>
              </Card>
            ))}
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalItems={projectData.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubProjects;
