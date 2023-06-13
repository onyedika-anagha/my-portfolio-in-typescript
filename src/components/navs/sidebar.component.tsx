import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/20/solid";
import { selectTheme } from "../../store/theme/theme.selector";
import { setTheme } from "../../store/theme/theme.action";
import { selectInfo } from "../../store/data/data.selector";
import SocialSvg from "../../utils/helper/socials";
type NavData = {
  name: string;
  href: string;
  current: boolean;
};
const navigation: NavData[] = [
  { name: "Home", href: "/", current: true },
  {
    name: "About",
    href: "/about",
    current: false,
  },
  {
    name: "Contact me",
    href: "/contact",
    current: false,
  },
  {
    name: "Experience & Education",
    href: "/certificates&education",
    current: false,
  },
  {
    name: "Projects",
    href: "/projects",
    current: false,
  },
  {
    name: "Blog (coming soon)",
    href: "/blog",
    current: false,
  },
];
const Sidebar = () => {
  const siteData = useSelector(selectInfo);
  const theme = useSelector(selectTheme),
    dispatch = useDispatch(),
    closeBtn = useRef<HTMLButtonElement>(null),
    closeSidebar = () => {
      if (closeBtn.current) {
        closeBtn.current.click();
      }
    },
    switchTheme = (mode: string) => dispatch(setTheme(mode));

  return (
    <Disclosure.Panel
      className="relative z-100"
      // style={isOpen ? {} : { display: "none" }}
    >
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <Disclosure.Button
          as="div"
          className="fixed inset-0 bg-neutral-900 bg-opacity-50 opacity-100"
          ref={closeBtn}
          // onClick={setIsOpen}
        />
      </Transition.Child>

      <div className="fixed animate__animated animate__slideInLeft inset-y-0 left-0 w-screen max-w-sm overflow-y-auto z-100 opacity-100 translate-x-0">
        <div className="flex min-h-full">
          <div className="w-full max-w-sm overflow-hidden transition-all">
            <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
              <div className="py-6 px-5">
                <div className="ttnc-logo inline-block text-primary-6000 flex-shrink-0">
                  <span
                    style={{
                      width: "auto",
                      height: 40,
                    }}
                  />
                </div>
                <div className="flex flex-col mt-5 text-slate-600 dark:text-slate-300 text-sm">
                  <span>Discover interesting details about me.</span>
                  <div className="flex justify-between items-center mt-4">
                    <nav className="nc-SocialsList flex space-x-3 text-2xl text-neutral-6000 dark:text-neutral-300 ">
                      {siteData.socials?.map((item, i) => (
                        <a
                          key={i}
                          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xl"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Facebook">
                          <div>
                            <SocialSvg
                              name={item.name}
                              className="w-5 h-5"
                            />
                          </div>
                        </a>
                      ))}
                    </nav>
                    <span className="block">
                      {theme === "dark" ? (
                        <button
                          className="self-center text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center bg-neutral-100 dark:bg-neutral-800"
                          onClick={() => switchTheme("light")}>
                          <span className="sr-only">Disable dark mode</span>
                          <MoonIcon
                            className="w-7 h-7"
                            aria-hidden="true"
                          />
                        </button>
                      ) : (
                        <button
                          onClick={() => switchTheme("dark")}
                          className="self-center text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                          <span className="sr-only">Enable dark mode</span>
                          <SunIcon
                            className="w-7 h-7"
                            aria-hidden="true"
                          />
                        </button>
                      )}
                    </span>
                  </div>
                </div>
                <span className="absolute right-2 top-2 p-1">
                  <Disclosure.Button className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700  focus:outline-none">
                    <span className="sr-only">Close</span>

                    <XMarkIcon className="w-5 h-5" />
                  </Disclosure.Button>
                </span>
              </div>
              <ul className="flex flex-col py-6 px-2 space-y-1">
                {navigation.map((item, index) => (
                  <li
                    key={index}
                    className="text-slate-900 dark:text-white"
                    data-headlessui-state="">
                    <NavLink
                      to={item.href}
                      className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                      onClick={closeSidebar}>
                      <span className="block w-full">{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Disclosure.Panel>
  );
};

export default Sidebar;
