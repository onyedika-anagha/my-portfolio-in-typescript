import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
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
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  MoonIcon,
} from "@heroicons/react/20/solid";
import logo from "../../assets/img/01.png";
import logoWhite from "../../assets/img/logo-light.png";
import { selectTheme } from "../../store/theme/theme.selector";
import { setTheme } from "../../store/theme/theme.action";
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
    name: "Partners",
    href: "/partners",
    current: false,
  },
  {
    name: "Blogs",
    href: "/blog",
    current: false,
  },
  {
    name: "Courses",
    href: "/courses",
    current: false,
  },
  {
    name: "Contact Us",
    href: "/contact",
    current: false,
  },
];
const Sidebar = () => {
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
                <Link
                  className="ttnc-logo inline-block text-primary-6000 flex-shrink-0"
                  to="/">
                  {theme === "dark" ? (
                    <img
                      src={logoWhite}
                      alt="logo"
                      srcSet={logoWhite}
                      style={{
                        width: "auto",
                        height: 40,
                      }}
                    />
                  ) : (
                    <img
                      src={logo}
                      alt="logo"
                      srcSet={logo}
                      style={{
                        width: "auto",
                        height: 40,
                      }}
                    />
                  )}
                </Link>
                <div className="flex flex-col mt-5 text-slate-600 dark:text-slate-300 text-sm">
                  <span>
                    Discover the most outstanding articles on all topics of
                    life. Write your stories and share them
                  </span>
                  <div className="flex justify-between items-center mt-4">
                    <nav className="nc-SocialsList flex space-x-3 text-2xl text-neutral-6000 dark:text-neutral-300 ">
                      <a
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xl"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook">
                        <div>
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_61)">
                              <path
                                d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <a
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xl"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Twitter">
                        <div>
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_80)">
                              <path
                                d="M15.1003 43.5C33.2091 43.5 43.1166 28.4935 43.1166 15.4838C43.1166 15.0619 43.1072 14.6307 43.0884 14.2088C45.0158 12.815 46.679 11.0886 48 9.11066C46.205 9.90926 44.2993 10.4308 42.3478 10.6575C44.4026 9.42588 45.9411 7.491 46.6781 5.21159C44.7451 6.35718 42.6312 7.16528 40.4269 7.60128C38.9417 6.02318 36.978 4.97829 34.8394 4.62816C32.7008 4.27803 30.5064 4.64216 28.5955 5.66425C26.6846 6.68635 25.1636 8.30947 24.2677 10.2827C23.3718 12.2559 23.1509 14.4693 23.6391 16.5807C19.725 16.3842 15.8959 15.3675 12.4 13.5963C8.90405 11.825 5.81939 9.33893 3.34594 6.29909C2.0888 8.46655 1.70411 11.0314 2.27006 13.4722C2.83601 15.9131 4.31013 18.047 6.39281 19.44C4.82926 19.3904 3.29995 18.9694 1.93125 18.2119V18.3338C1.92985 20.6084 2.7162 22.8132 4.15662 24.5736C5.59704 26.334 7.60265 27.5412 9.8325 27.99C8.38411 28.3863 6.86396 28.4441 5.38969 28.1588C6.01891 30.1149 7.24315 31.8258 8.89154 33.0527C10.5399 34.2796 12.5302 34.9613 14.5847 35.0025C11.0968 37.7423 6.78835 39.2283 2.35313 39.2213C1.56657 39.2201 0.780798 39.1719 0 39.0769C4.50571 41.9676 9.74706 43.5028 15.1003 43.5Z"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <a
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xl"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Linkedin">
                        <div>
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_68)">
                              <path
                                d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <a
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xl"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram">
                        <div>
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_63)">
                              <path
                                d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                                fill="currentColor"
                              />
                              <path
                                d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                                fill="currentColor"
                              />
                              <path
                                d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                        </div>
                      </a>
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
                <div className="mt-5">
                  <form
                    action=""
                    method="POST"
                    className="flex-1 text-slate-900 dark:text-slate-200">
                    <div className="bg-slate-50 dark:bg-slate-800 flex items-center space-x-1 py-2 px-4 rounded-xl h-full">
                      <svg
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 22L20 20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        type="search"
                        placeholder="Type and press enter"
                        className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-sm "
                      />
                    </div>
                    <input
                      type="submit"
                      hidden
                      defaultValue=""
                    />
                  </form>
                </div>
              </div>
              <ul className="flex flex-col py-6 px-2 space-y-1">
                {navigation.map((item, index) => (
                  <li
                    key={index}
                    className="text-slate-900 dark:text-white"
                    data-headlessui-state="">
                    <Link
                      to={item.href}
                      className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                      onClick={closeSidebar}>
                      <span className="block w-full">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between py-6 px-5 space-x-2">
                <a
                  className="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 !px-10  "
                  href="/">
                  Buy this template
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure.Panel>
  );
};

export default Sidebar;
