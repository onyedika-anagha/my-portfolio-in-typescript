import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "./components/preloader/preloader.component";
import InitialState from "./utils/initial-state/initial-state";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import PageNotFound from "./components/toolkits/404.component";

const Navigation = lazy(
  () => import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const About = lazy(() => import("./routes/about/about.component"));
const Blog = lazy(() => import("./routes/blog/blog.component"));
const Contact = lazy(() => import("./routes/contact/contact.component"));
const Projects = lazy(() => import("./routes/projects/projects.component")),
  GithubProjects = lazy(() => import("./routes/projects/git-repo.component")),
  ProjectDetail = lazy(
    () => import("./routes/projects/project-detail.component")
  ),
  BlogDetail = lazy(() => import("./routes/blog/blog-detail.component")),
  Certifications = lazy(
    () => import("./routes/certs/certifications.component")
  );

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      {/* <GlobalStyle /> */}
      <InitialState />
      <Routes>
        <Route
          path="/"
          element={<Navigation />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path="about"
            element={<About />}
          />
          <Route path="blog">
            <Route
              index
              element={<Blog />}
            />
            <Route
              path=":slug"
              element={<BlogDetail />}
            />
          </Route>
          <Route
            path="contact"
            element={<Contact />}
          />
          <Route
            path="github-repos"
            element={<GithubProjects />}
          />

          <Route
            path="projects/type/:slug"
            element={<Projects />}
          />
          <Route
            path="project/:slug"
            element={<ProjectDetail />}
          />
          <Route
            path="certificates&education"
            element={<Certifications />}
          />
        </Route>
        <Route
          path="/*"
          element={<PageNotFound />}
        />
      </Routes>
      <ToastContainer />
    </Suspense>
  );
}

export default App;
