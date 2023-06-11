import { toast } from "react-toastify";

export const alertMessage = (type, msg) => {
  const theme =
    localStorage.theme !== null
      ? localStorage.theme
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
