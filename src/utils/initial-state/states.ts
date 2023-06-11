export const makeId = (length = 12) => {
    var result = "";
    var characters =
      "123456789123456789123456789123456789123456789QWERTYUIOPASDFGHJKLZXCVBNM";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  capitalizeFirstLetter = (str: string) => {
    const result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
  };
//

export const shareLink = (copyText: string, title: string) => {
  console.log(copyText);
  const uri = hostURL + copyText;
  //
  if (navigator.share) {
    navigator
      .share({
        title: title,
        url: uri,
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    navigator.clipboard.writeText(uri).then(() => {
      //   alertMessage("success", "Link Copied");
    });
  }
};

export const hostURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000"
    : "https://suretrending.com";
export const AUTH_TOKEN = "x-auth-token";
export const JWT_TOKEN_STRING = "x-jwt-token-encode-decode-string";
export const OTP_TOKEN = "_x-otp-token";
export const USER_IP_AND_LOCATION = "_x-user-ip-and-location";
export const NOTIFICATION_TONE = "_x-notification-tone";
export const TRANSACTION_DETAILS = "_x-transaction-details";

export const ipURL = "https://api.ipify.org?format=json",
  getLocationURL = (ip: string) => `https://ipwhois.app/json/${ip}`;

export const concatOutput = (str = "403207zvnx83596") => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if ((i = 0)) {
      newStr += str[i];
    } else if (i % 4 === 0) {
      newStr += "_";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};
