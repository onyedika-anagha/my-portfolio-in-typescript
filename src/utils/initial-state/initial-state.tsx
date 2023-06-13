import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { toast } from "react-toastify";

import { selectTheme } from "../../store/theme/theme.selector";
import { setTheme } from "../../store/theme/theme.action";
import { fetchData } from "../../store/data/data.actions";
import { toast } from "react-toastify";
import { fetchProjectData } from "../../store/projects/project.actions";

export const alertMessage = (type: string, msg: string) => {
  const theme =
    localStorage._theme != null
      ? localStorage._theme
      : window.matchMedia("(prefers-color-scheme: dark)")
      ? "dark"
      : "light";
  const toastC =
    type === "error"
      ? toast.error
      : type === "info"
      ? toast.info
      : type === "success"
      ? toast.success
      : type === "warn"
      ? toast.warn
      : toast;
  toastC(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme,
  });
};

export const getRoundedFormat = (num: number) => {
    return Math.round((num + Number.EPSILON) * 1000000) / 1000000;
  },
  compareDates = (_d1: Date, _d2: Date) => {
    console.log(_d1, _d2);
    const d1 = new Date(`${_d1}`),
      d2 = new Date(`${_d2}`);
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };
const InitialState = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html != null) {
      if (theme === "dark") {
        localStorage.setItem("_theme", "dark");
        html.classList.add("dark");
      } else {
        localStorage.setItem("_theme", "light");
        html.classList.remove("dark");
      }
    }
  }, [theme, dispatch]);
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchProjectData());
    // if (
    //   !("theme" in localStorage) &&
    //   window.matchMedia("(prefers-color-scheme: dark)").matches
    // ) {
    //   const _theme = localStorage.getItem("theme"),
    //     newTheme = _theme == null ? "dark" : _theme;
    //   console.log("newTheme: ", newTheme);

    //   dispatch(setTheme(newTheme));
    // } else {
    //   const _theme = localStorage.getItem("theme"),
    //     newTheme = _theme == null ? "light" : _theme;
    //   console.log("newTheme: ", _theme);
    //   dispatch(setTheme(newTheme));
    // }
  }, [dispatch]);

  return <></>;
};

export default InitialState;
