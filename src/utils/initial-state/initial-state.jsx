import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { toast } from "react-toastify";

import { selectTheme } from "../../store/theme/theme.selector";
import { setTheme } from "../../store/theme/theme.action";

// export const alertMessage = (type, msg) => {
//     const theme =
//         localStorage.theme != null
//             ? localStorage.theme
//             : window.matchMedia("(prefers-color-scheme: dark)")
//                 ? "dark"
//                 : "light";
//     const toastC =
//         type === "error"
//             ? toast.error
//             : type === "info"
//                 ? toast.info
//                 : type === "success"
//                     ? toast.success
//                     : type === "warn"
//                         ? toast.warn
//                         : toast;
//     toastC(msg, {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: theme,
//     });
// };

export const getRoundedFormat = (num) => {
    return Math.round((num + Number.EPSILON) * 1000000) / 1000000;
},
    compareDates = (_d1, _d2) => {
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
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [theme, dispatch]);
    useEffect(() => {
        // dispatch(fetchSiteInfo());
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            dispatch(setTheme("dark"));
        } else {
            dispatch(setTheme("light"));
        }
    }, [dispatch]);

    return <></>
};

export default InitialState;
