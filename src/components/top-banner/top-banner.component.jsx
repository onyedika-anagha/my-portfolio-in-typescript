import { memo } from "react";
import { useSelector } from "react-redux";
// import "boxicons";

import { selectInfo } from "../../store/data/data.selector";

import shape1 from "../../assets/img/slider/5/shape/slider-shape-4.png";
import shape2 from "../../assets/img/slider/5/shape/slider-shape-1.png";
import Typed from "../toolkits/typed.component";
import { defaultUri } from "../../utils/helpers/helper";
import { Link } from "react-router-dom";

export const getIcon = (icon) => {
  const name = icon.replace("bx bxl-", "");
  return name;
};

const TopBanner = memo(() => {
  const siteInfo = useSelector(selectInfo);
  const { user } = siteInfo;
  return siteInfo === null ? (
    <></>
  ) : (
    <section className="slider__area pt-40 p-relative fix">
      <div className="slider__item-9">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-7 col-lg-6 col-md-7">
              <div className="slider__content-9">
                <span className="typed slider__title-pre-9">
                  <Typed />
                  <span className="typed-cursor animated wow flash">
                    |
                  </span>{" "}
                </span>
                <br />
                <br />
                <h3 className="slider__title-9">
                  Full Stack <br /> Web Developer
                </h3>
                {/* <p>
                  Hi! I'm a UI/UX Designer - creating bold &amp; brave interface
                  design for companies all across the world.
                </p> */}
                <div className="slider__btn-9 mb-85">
                  <Link to="/contact" className="tp-btn-5 tp-link-btn-3">
                    Contact now
                    <span>
                      <i className="fa-regular fa-arrow-right" />
                    </span>
                  </Link>
                </div>
                <div className="slider__social-9 d-flex flex-wrap align-items-center">
                  <span>Connect via:</span>
                  <ul>
                    {siteInfo.socials.map((item) => (
                      <li key={item.soc_id}>
                        <a
                          href={item.soc_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span
                            className={`fab fa-${getIcon(item.soc_icon)}`}
                          ></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-5 order-first order-md-last ">
              <div className="slider__thumb-9 p-relative scene">
                <div className="slider__shape">
                  <div className="slider__shape-20">
                    <img
                      className="layer slider__shape-8"
                      data-depth=".2"
                      src={shape1}
                      alt=""
                    />
                  </div>
                  <div className="slider__shape-21">
                    <img
                      className="layer slider__shape-5"
                      data-depth=".3"
                      src={shape2}
                      alt=""
                    />
                  </div>
                </div>
                <img
                  className="slider__thumb-9-main d-sm-none d-none d-lg-block "
                  src={`${defaultUri}/dashboard-assets/images/faces/${user.profile_image}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default TopBanner;
