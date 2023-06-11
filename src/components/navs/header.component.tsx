import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/theme.selector";
import { setTheme } from "../../store/theme/theme.action";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Sidebar from "./sidebar.component";

const Header = () => {
  const theme = useSelector(selectTheme),
    dispatch = useDispatch(),
    // setIsOpen = () => dispatch(sidebarActions.setIsOpen(true)),
    switchTheme = (mode: string) => dispatch(setTheme(mode));

  return (
    <Disclosure>
      <header
        className="header bg-gray-800 dark:bg-slate-900"
        id="header">
        <div className="container-fluid">
          <div className="brand">
            <a
              href="#About"
              className="brand-name">
              <b>it's</b> Me
            </a>
          </div>
          <div className="lets-chat">
            <span className="text-slate-700 dark:text-slate-300">
              Let's Chat
            </span>
            <button>
              <i
                className="fab fa-rocketchat"
                style={{ color: "#1D2043" }}
              />
            </button>
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
