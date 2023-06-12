import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "./components/preloader/preloader.component";
import InitialState from "./utils/initial-state/initial-state";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Navigation = lazy(
  () => import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const About = lazy(() => import("./routes/about/about.component"));
const Contact = lazy(() => import("./routes/contact/contact.component"));
const Projects = lazy(() => import("./routes/projects/projects.component")),
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
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/certificates&education"
            element={<Certifications />}
          />
        </Route>
      </Routes>
      <ToastContainer />
    </Suspense>
  );
}

export default App;
