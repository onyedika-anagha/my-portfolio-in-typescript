import { NavLink, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserCircleIcon,
  AcademicCapIcon,
  LinkIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

const BottomNavbar = () => {
  const routeName = useLocation().pathname,
    isActive = (url: string) => url === routeName;
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <NavLink
          to="/"
          data-tooltip-target="tooltip-home"
          type="button"
          className={({ isActive }) =>
            `inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group ${
              isActive ? "bg-gray-50 dark:bg-gray-800" : ""
            }`
          }>
          <HomeIcon
            className={`w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
              isActive("/") ? "text-blue-500" : ""
            }`}
          />

          <span className="sr-only">Home</span>
        </NavLink>
        <div
          id="tooltip-home"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
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
            `inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${
              isActive ? "bg-gray-50 dark:bg-gray-800" : ""
            }`
          }>
          <UserCircleIcon
            className={`w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
              isActive("/about") ? "text-blue-500" : ""
            }`}
          />
          <span className="sr-only">About</span>
        </NavLink>
        <div
          id="tooltip-about"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
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
            <span className="sr-only">New item</span>
          </NavLink>
        </div>
        <div
          id="tooltip-new"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Create new item
          <div
            className="tooltip-arrow"
            data-popper-arrow></div>
        </div>
        <NavLink
          to={"/projects"}
          data-tooltip-target="tooltip-portfolio"
          type="button"
          className={({ isActive }) =>
            `inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${
              isActive ? "bg-gray-50 dark:bg-gray-800" : ""
            }`
          }>
          <Square3Stack3DIcon
            className={`w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
              isActive("/projects") ? "text-blue-500" : ""
            }`}
          />
          <span className="sr-only">Portfolio</span>
        </NavLink>
        <div
          id="tooltip-portfolio"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Portfolio
          <div
            className="tooltip-arrow"
            data-popper-arrow></div>
        </div>
        <NavLink
          to={"/certificates&education"}
          data-tooltip-target="tooltip-certificates"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <AcademicCapIcon
            className={`w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
              isActive("/certificates&education") ? "text-blue-500" : ""
            }`}
          />
          <span className="sr-only">Certificates</span>
        </NavLink>
        <div
          id="tooltip-certificates"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Certificates
          <div
            className="tooltip-arrow"
            data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
