import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/theme/theme-slice";
import { selectTheme } from "../../store/theme/theme.selector";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      dispatch(themeActions.changeMode("dark"));
    }
    if (theme === "dark") {
      document.querySelector("html").classList.add("active-dark-mode");
    } else {
      document.querySelector("html").classList.remove("active-dark-mode");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const toggleTheme = (mode) => {
    dispatch(themeActions.changeMode(mode));
    localStorage.setItem("theme", mode);
  };

  return (
    <>
      {/* back to top start */}
      <div className={`theme-toggle theme-toggle-btn-show`}>
        {theme === "dark" ? (
          <button
            type="button"
            className="back-to-top-btn"
            onClick={() => toggleTheme("light")}
          >
            <i className="fa fa-lightbulb"></i>
          </button>
        ) : (
          <button
            type="button"
            className="back-to-top-btn"
            onClick={() => toggleTheme("dark")}
          >
            <i className="fa fa-moon"></i>
          </button>
        )}
      </div>
      {/* back to top end */}
    </>
  );
};

export default ThemeToggle;
