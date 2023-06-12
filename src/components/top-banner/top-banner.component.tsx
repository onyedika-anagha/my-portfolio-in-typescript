import { memo } from "react";
import { useSelector } from "react-redux";
// import "boxicons";

import { selectInfo } from "../../store/data/data.selector";

import shape1 from "../../assets/img/slider/5/shape/slider-shape-4.png";
// import shape2 from "../../assets/img/slider/5/shape/slider-shape-1.png";
import shape3 from "../../assets/img/about/shape-one-dark.png";
import shape4 from "../../assets/img/about/shape-two-dark.png";
import Typed from "../toolkits/typed.component";
// import { Link } from "react-router-dom";
import { hostURL } from "../../utils/initial-state/states";
import SocialSvg from "../../utils/helper/socials";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const TopBanner = memo(() => {
  const siteInfo = useSelector(selectInfo);
  const { user, socials } = siteInfo;
  return user === null ? (
    <></>
  ) : (
    // <section className="slider__area pt-40 p-relative fix">
    //   <div className="slider__item-9">
    //     <div className="container">
    //       <div className="row align-items-end">
    //         <div className="col-xl-7 col-lg-6 col-md-7">
    //           <div className="slider__content-9">
    //             <span className="typed slider__title-pre-9">
    //               <Typed />
    //               <span className="typed-cursor animated wow flash">
    //                 |
    //               </span>{" "}
    //             </span>
    //             <br />
    //             <br />
    //             <h3 className="slider__title-9">
    //               Full Stack <br /> Web Developer
    //             </h3>
    //             {/* <p>
    //               Hi! I'm a UI/UX Designer - creating bold &amp; brave interface
    //               design for companies all across the world.
    //             </p> */}
    //             <div className="slider__btn-9 mb-85">
    //               <Link to="/contact" className="tp-btn-5 tp-link-btn-3">
    //                 Contact now
    //                 <span>
    //                   <i className="fa-regular fa-arrow-right" />
    //                 </span>
    //               </Link>
    //             </div>
    //             <div className="slider__social-9 d-flex flex-wrap align-items-center">
    //               <span>Connect via:</span>
    //               <ul>
    //                 {siteInfo.socials.map((item) => (
    //                   <li key={item.soc_id}>
    //                     <a
    //                       href={item.soc_link}
    //                       target="_blank"
    //                       rel="noopener noreferrer"
    //                     >
    //                       <span
    //                         className={`fab fa-${getIcon(item.soc_icon)}`}
    //                       ></span>
    //                     </a>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-xl-5 col-lg-6 col-md-5 order-first order-md-last ">
    //           <div className="slider__thumb-9 p-relative scene">
    //             <div className="slider__shape">
    //               <div className="slider__shape-20">
    //                 <img
    //                   className="layer slider__shape-8"
    //                   data-depth=".2"
    //                   src={shape1}
    //                   alt=""
    //                 />
    //               </div>
    //               <div className="slider__shape-21">
    //                 <img
    //                   className="layer slider__shape-5"
    //                   data-depth=".3"
    //                   src={shape2}
    //                   alt=""
    //                 />
    //               </div>
    //             </div>
    //             <img
    //               className="slider__thumb-9-main d-sm-none d-none d-lg-block "
    //               src={`${hostURL}/uploads/all/${user.profile_image}`}
    //               alt=""
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div
      className="section pp-scrollable slide slide-about a-slide-typed"
      data-name="about">
      <div className="slide-container">
        <div className="container">
          <div className="number-email-cv">
            <ul className="number-email">
              <li>
                Call me <a href={`tel:${user.tel}`}>{user.tel}</a>
              </li>
              <li>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </li>
            </ul>
            {/* <a
              href="#Contact"
              className="download-cv">
              Download CV <i className="fas fa-download" />
            </a> */}
          </div>
          <div className="flex flex-wrap items-center -mxa-15">
            <div className="lg:grow-0 lg:shrink-0 basisa-41 pxa-15">
              <div className="about-content pt-100 rpt-0 animate__animated delay5 animate__fadeInUp">
                <span className="sub-title mb-15 animate__animated delay3 animate__fadeInUp">
                  About Me
                </span>
                <h1 className="slide-title animate__animated delay5 animate__fadeInUp">
                  Hi,
                  <br /> I’m {user.name}
                  <span
                    className="text-typed a-typed a-typed-about"
                    data-text="Niharika"
                  />
                </h1>
                <h3 className="animate__animated delay7 animate__fadeInUp">
                  Software Developer
                </h3>
                <p className="animate__animated delay8 animate__fadeInUp">
                  {Typed()}
                </p>
                <a
                  href="#Contact"
                  className="theme-btn mt-45 rmt-25 animate__animated delay9 animate__fadeInUp">
                  hire me
                  <i className="flex items-center">
                    <ArrowLongRightIcon className="w-6 h-6" />
                  </i>
                </a>
                <div className="social-style-one mt-5 rmt-35 animate__animated delay10 animate__fadeInUp">
                  {socials.map((item, i) => (
                    <a
                      href={item.link}
                      key={i}
                      className="flex justify-center items-center"
                      style={{}}
                      target="_blank"
                      rel="noopener noreferrer">
                      <SocialSvg name={item.name} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:grow-0 lg:shrink-0 mt-5 lg:mt-0 basisa-58 pxa-15">
              <div className="about-image pt-100 rpt-50 lg:text-right">
                <div className="about-inner-images">
                  {/* <svg
                    viewBox="0 0 200 200"
                    className="animate__animated delay7 animate__fadeInUp"
                    xmlns="http://www.w3.org/2000/svg"
                    width={500}
                    height={500}>
                    <defs>
                      <mask id="profile-mask">
                        <path
                          d="M 0, 74.5 C 0, 49.91499999999999 49.91499999999999, 0 74.5, 0 S 149, 49.91499999999999 149, 74.5 99.08500000000001, 149 74.5, 149 0, 99.08500000000001 0, 74.5 "
                          fill="#F5F7FA"
                          transform="rotate(36, 100, 100) translate(25.5 25.5)"></path>
                      </mask>
                    </defs>
                    <image
                      href={`${hostURL}/uploads/all/${user.profile_image}`}
                      width="100%"
                      height="100%"
                      mask="url(#profile-mask)"
                    />
                  </svg> */}
                  <img
                    className="animate__animated delay7 animate__animate__fadeInUp h-auto max-w-full"
                    src={`${hostURL}/uploads/all/${user.profile_image}`}
                    alt="About"
                    style={{
                      borderRadius: "30% 70% 70% 30%/30% 30% 70% 70%",
                    }}
                    width={500}
                    height={500}
                  />
                  <img
                    className="shape-one animate__animated delay10 animate__bounceIn"
                    src={shape1}
                    alt="Shape"
                  />
                  <img
                    className="shape-three animate__animated delay10 animate__bounceIn"
                    src={shape3}
                    alt="Shape"
                  />
                  <img
                    className="shape-two animate__animated delay11 animate__bounceIn"
                    src={shape4}
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto absolute inset-0 z-[-1]">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: "auto",
          }}>
          <div style={{ width: "100%", height: "100%" }}>
            <canvas
              data-engine="three.js r150"
              width={1065}
              height={957}
              style={{ display: "block", width: 1065, height: 957 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default TopBanner;
