import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/theme.selector";
import skillspng from "../../assets/img/undraw_product_iteration_kjok.svg";
import { selectInfo } from "../../store/data/data.selector";
import TagCanvas from "tag-canvas";
import { screenSize } from "../../utils/helper/helper";
import shape1 from "../../assets/img/slider/5/shape/slider-shape-4.png";
import shape2 from "../../assets/img/slider/5/shape/slider-shape-1.png";
import { _sizes } from "../../utils/helper/states";

// const TagCanvas = require("tag-canvas");
const HomeSkills = () => {
  const theme = useSelector(selectTheme);
  const siteInfo = useSelector(selectInfo);

  useEffect(() => {
    try {
      // console.log(TagCanvas.Start);

      const color = theme !== "dark" ? "#2c0045" : "#fff";
      TagCanvas.Start("myCanvas", "tags", {
        // textColour: "#08FDD8",
        textColour: color,
        outlineThickness: 0.5,
        outlineColour: "#FE0853",
        maxSpeed: 0.06,
        freezeActive: true,
        shuffleTags: true,
        shape: "sphere",
        zoom: 0.8,
        noSelect: true,
        textFont: null,
        pinchZoom: true,
        wheelZoom: false,
        freezeDecel: true,
        fadeIn: 3000,
        initial: [0.3, -0.1],
        depth: 1.1,
      });
    } catch (e) {
      // something went wrong, hide the canvas container
      const myCanvas = document.getElementById("myCanvasContainer");
      if (myCanvas != null) {
        myCanvas.style.display = "none";
      }
    }
  }, [theme]);
  if (siteInfo.stack == null) return <></>;
  const skillMap = siteInfo.stack.map((item, i) => (
    <li key={i}>
      <li>
        <a href="#!"
          className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{item.name}</a>
      </li>
    </li>
  ));
  const stackMap = siteInfo.stack.map((item, i) => <span key={i}
    className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 mt-1 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
    {item.name}
  </span>
  )
  const canvasWidth = screenSize.width > _sizes.mobileL ? 500 : screenSize.width - 20
  return (
    <div
      className="section pp-scrollable slide slide-skills a-slide-typed"
      data-name="skills">
      <div className="slide-container">
        <div className="container">
          <div className="flex flex-wrap items-center -mxa-15">
            <div className="lg:grow-0 lg:shrink-0 basisa-41 pxa-15">
              <div className="skill-content animate__animated delay5 animate__fadeInUp">
                <div className="section-title mb-25">
                  <span className="sub-title mb-45">Skills</span>
                  <h2 className="slide-title animate__animated delay5 animate__fadeInUp">
                    SKILLS &
                    STACKS
                    <span
                      className="text-typed a-typed a-typed-skills"
                      data-text="skills."
                    />
                  </h2>
                </div>
                <p className="animate__animated delay6 animate__fadeInUp flex flex-wrap">
                  {stackMap}
                </p>
                <div className="bar-list a-progressbar pt-5 animate__animated delay9 animate__fadeInUp">
                  <div className="brand__info container">
                    <div id="myCanvasContainer">
                      <canvas
                        height="500"
                        width={canvasWidth}
                        id="myCanvas"></canvas>
                    </div>
                    <div
                      id="tags"
                      style={{ display: "none" }}>
                      <ul>{skillMap}</ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grow-0 lg:shrink-0 basisa-58 pxa-15 w-full">
              <div className="skill-image pt-55 lg:text-right animate__animated delay4 animate__fadeInUp">
                <div className="skill-images-inner">
                  <img
                    src={skillspng}
                    alt="Skills"
                  />
                  <img
                    className="shape-one animate__animated delay6 bounceIn"
                    src={shape1}
                    alt="shape"
                  />
                  <img
                    className="shape-two animate__animated delay8 bounceIn"
                    src={shape2}
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSkills;
