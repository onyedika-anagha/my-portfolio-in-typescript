export const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "America/Los_Angeles",
});
export const greeting = (firstName: string) => {
  var nowTime = new Date();
  const hour = nowTime.getHours();

  //   console.log(nowTime);
  if (hour >= 20) {
    return `Good Night ${firstName}  , Have a good night rest.`;
  } else if (hour > 17) {
    return `Good Evening ${firstName} , Hope you enjoyed your day?`;
  } else if (hour > 11) {
    return `Good Afternoon ${firstName} , How is your day going?`;
  } else if (hour < 12) {
    return `Good Morning ${firstName} , How was your night?`;
  }
};

export const getTime = (params: string | Date) => {
  const anyDate = new Date(`${params}`);
  return anyDate.toDateString();
};
export const getInitialView = () => {
  const params = new URLSearchParams(window.location.search);
  const initialView = params.get("view"),
    initView = initialView == null ? 0 : parseInt(initialView);
  return initView;
};
export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const makeId = (length = 12) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789JKLMNOPQRSTUVWXYZ0123456789JKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  screenSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  },smallScreenThreshold = 768,
  isSmallScreen = screenSize.width < smallScreenThreshold;
