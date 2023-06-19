import { Link, NavLink, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserCircleIcon,
  AcademicCapIcon,
  LinkIcon,
  Square3Stack3DIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { usePopper } from "react-popper";
import { selectInfo } from "../../store/data/data.selector";
import { useSelector } from "react-redux";
import SocialSvg from "../../utils/helper/socials";

const BottomNavbar = () => {
  let [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const siteData = useSelector(selectInfo);
  let [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  let { styles, attributes } = usePopper(referenceElement, popperElement);
  const { services } = siteData,
    servicesNav = services?.map((service) => ({
      name: service.name,
      slug: service.slug,
      href: "/projects/type/" + service.slug,
      icon: SquaresPlusIcon,
    }));
  const routeName = useLocation().pathname,
    isActive = (url: string) => url === routeName;
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-neutral-200 rounded-full bottom-4 left-1/2 dark:bg-neutral-700 dark:border-neutral-600">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
              <NavLink
                to="/"
                data-tooltip-target="tooltip-home"
                type="button"
                className={({ isActive }) =>
                  `inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-neutral-50 dark:hover:bg-neutral-800 group ${
                    isActive ? "bg-neutral-50 dark:bg-neutral-800" : ""
                  }`
                }>
                <HomeIcon
                  className={`w-6 h-6 mb-1 text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
                    isActive("/") ? "text-blue-500" : ""
                  }`}
                />

                <span className="sr-only">Home</span>
              </NavLink>
              <div
                id="tooltip-home"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-neutral-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-neutral-700">
                Home
                <div
                  className="tooltip-arrow"
                  data-popper-arrow></div>
              </div>
              <NavLink
                to={"/about"}
                data-tooltip-target="tooltip-about"
                type="button"
                className={({ isActive }) =>
                  `inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-50 dark:hover:bg-neutral-800 group ${
                    isActive ? "bg-neutral-50 dark:bg-neutral-800" : ""
                  }`
                }>
                <UserCircleIcon
                  className={`w-6 h-6 mb-1 text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
                    isActive("/about") ? "text-blue-500" : ""
                  }`}
                />
                <span className="sr-only">About</span>
              </NavLink>
              <div
                id="tooltip-about"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-neutral-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-neutral-700">
                About
                <div
                  className="tooltip-arrow"
                  data-popper-arrow></div>
              </div>
              <div className="flex items-center justify-center">
                <NavLink
                  to={"/contact"}
                  data-tooltip-target="tooltip-new"
                  type="button"
                  className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                  <LinkIcon className="w-6 h-6 text-white" />
                  <span className="sr-only">Contact me</span>
                </NavLink>
              </div>
              <div
                id="tooltip-new"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-neutral-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-neutral-700">
                Create new item
                <div
                  className="tooltip-arrow"
                  data-popper-arrow></div>
              </div>
              {/* <NavLink
                  to={"/projects"}
                  data-tooltip-target="tooltip-portfolio"
                  type="button"
                  className={({ isActive }) =>
                    `inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-50 dark:hover:bg-neutral-800 group ${
                      isActive ? "bg-neutral-50 dark:bg-neutral-800" : ""
                    }`
                  }>
                  <Square3Stack3DIcon
                    className={`w-6 h-6 mb-1 text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
                      isActive("/projects") ? "text-blue-500" : ""
                    }`}
                  />
                  <span className="sr-only">Portfolio</span>
                </NavLink> */}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1">
                <Popover.Panel
                  ref={(ref) => setPopperElement(ref)}
                  style={styles.popper}
                  {...attributes.popper}
                  className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-2 bg-white p-7 lg:grid-cols-2">
                      {servicesNav?.map((item, i) => (
                        <div
                          key={i}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                          <div
                            className={`flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-bluo-50 group-hover:bg-white`}>
                            <item.icon
                              className="h-4 w-4 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <Popover.Button
                              as={Link}
                              to={item.href}
                              className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </Popover.Button>
                          </div>
                        </div>
                      ))}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div
                          className={`flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-bluo-50 group-hover:bg-white`}>
                          <SocialSvg
                            name="Github"
                            className="h-4 w-4 text-gray-600 group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <Popover.Button
                            as={Link}
                            to="/github-repos"
                            className="block font-semibold text-gray-900">
                            Github Repos
                            <span className="absolute inset-0" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
              <Popover.Button
                // ref={setReferenceElement}
                ref={(ref) => setReferenceElement(ref)}
                className={`
                ${open ? "" : "text-opacity-90"}
                inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-50 dark:hover:bg-neutral-800 group`}>
                <Square3Stack3DIcon
                  className={`w-6 h-6 mb-1 text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`}
                />
                <span className="sr-only">Portfolio</span>
              </Popover.Button>

              <div
                id="tooltip-portfolio"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-neutral-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-neutral-700">
                Portfolio
                <div
                  className="tooltip-arrow"
                  data-popper-arrow></div>
              </div>
              <NavLink
                to={"/certificates&education"}
                data-tooltip-target="tooltip-certificates"
                type="button"
                className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-neutral-50 dark:hover:bg-neutral-800 group">
                <AcademicCapIcon
                  className={`w-6 h-6 mb-1 text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
                    isActive("/certificates&education") ? "text-blue-500" : ""
                  }`}
                />
                <span className="sr-only">Certificates</span>
              </NavLink>
              <div
                id="tooltip-certificates"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-neutral-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-neutral-700">
                Certificates
                <div
                  className="tooltip-arrow"
                  data-popper-arrow></div>
              </div>
            </div>
          </div>
        )}
      </Popover>
    </>
  );
};

export default BottomNavbar;
