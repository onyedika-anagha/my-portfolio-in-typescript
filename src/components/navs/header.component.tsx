import { useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/theme.selector";
import { Disclosure } from "@headlessui/react";
import Sidebar from "./sidebar.component";
import { useEffect, useState } from "react";
import { _sizes } from "../../utils/helper/states";
import logoLight from "../../assets/img/logo-light.png";
import logoDark from "../../assets/img/logo-dark.png";
import { Link } from "react-router-dom";
import { selectWhatsapp } from "../../store/data/data.selector";
import SocialSvg from "../../utils/helper/socials";
const getClass = () => {
  return window.innerWidth > _sizes.laptop ? "" : "mobile-view";
};
const Header = () => {
  const [isSticky, setIsSticky] = useState(getClass());
  const theme = useSelector(selectTheme),
    whatsapp = useSelector(selectWhatsapp),
    // dispatch = useDispatch(),
    // setIsOpen = () => dispatch(sidebarActions.setIsOpen(true)),
    _logo = theme === "dark" ? logoLight : logoDark,
    logo = window.innerWidth > _sizes.laptop ? _logo : logoLight;
  useEffect(() => {
    const handleScroll = (event: Event) => {
      var scroll = window.scrollY,
        screenWidth = window.innerWidth;
      if (screenWidth > _sizes.laptop) {
        if (scroll < 150) {
          setIsSticky("");
        } else {
          setIsSticky("header-sticky");
        }
      } else {
        setIsSticky("mobile-view");
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);
  return (
    <Disclosure>
      <header
        className={`header bg-gray-800 dark:bg-neutral-900 ${isSticky}`}
        id="header">
        <div className="backdrop" />
        <div className="container-fluid">
          <div className="brand">
            <Link
              to="/"
              className="brand-name">
              <img
                src={logo}
                width={127}
                alt="Onyedika Anagha"
              />
            </Link>
          </div>
          <div className="lets-chat">
            {whatsapp != null && (
              <a
                href={whatsapp.link}
                target="_blank"
                rel="noopener noreferrer">
                <button className="flex justify-center items-center">
                  <SocialSvg
                    name={whatsapp.name}
                    className="w-5 h-5"
                  />
                </button>
              </a>
            )}
          </div>
          <Disclosure.Button className="nav-toggle-btn a-nav-toggle">
            <span className="hamburger">
              <span className="top-bun" />
              <span className="meat" />
              <span className="bottom-bun" />
            </span>
          </Disclosure.Button>
          <div className="hide-menu a-nav-toggle" />

          {/* <div className="menu">
          <div className="menu-lang">
            <a
              href="#"
              className="menu-lang-item active">
              Eng.
            </a>
            <a
              href="#"
              className="menu-lang-item">
              Fra.
            </a>
            <a
              href="#"
              className="menu-lang-item">
              Ara.
            </a>
          </div>
          <div
            className="menu-main mt-100"
            id="accordion">
            <ul id="menuMain">
              <li
                data-menuanchor="About"
                className="active">
                <a href="#About">About</a>
              </li>
              <li data-menuanchor="Services">
                <a href="#Services">Services</a>
              </li>
              <li data-menuanchor="Skills">
                <a href="#Skills">Skills</a>
              </li>
              <li data-menuanchor="Resume">
                <a href="#Resume">Resume</a>
              </li>
              <li data-menuanchor="Portfolio">
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li data-menuanchor="Testimonials">
                <a href="#Testimonials">Testimonials</a>
              </li>
              <li data-menuanchor="Weapons">
                <a href="#Weapons">Weapons</a>
              </li>
              <li data-menuanchor="Contact">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="menu-ornament" />
        </div> */}
        </div>
      </header>
      <Sidebar />
    </Disclosure>
  );
};

export default Header;
