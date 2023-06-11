import { useEffect, useState } from "react";

const BackToTop = () => {
  const [scrollUp, setScrollUp] = useState("none");
  useEffect(() => {
    const handleScroll = (event) => {
      var scroll = window.scrollY;
      // console.log(scroll);
      if (scroll < 445) {
        setScrollUp("");
      } else {
        setScrollUp("back-to-top-btn-show");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {/* back to top start */}
      <div className={`back-to-top-wrapper ${scrollUp}`}>
        <button
          id="back_to_top"
          type="button"
          className="back-to-top-btn"
          onClick={goToTop}
        >
          <svg
            width={12}
            height={7}
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6L6 1L1 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* back to top end */}
    </>
  );
};

export default BackToTop;
