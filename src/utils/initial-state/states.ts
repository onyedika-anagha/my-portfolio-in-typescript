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
    ? "https://app.onyedikaanagha.dev"
    : "https://app.onyedikaanagha.dev";
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

export interface GithubRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: null | string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null | string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: Language | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: any[];
  visibility: Visibility;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: DefaultBranch;
}

export enum DefaultBranch {
  Main = "main",
  Master = "master",
}

export enum Language {
  CSS = "CSS",
  JavaScript = "JavaScript",
  Scss = "SCSS",
  TypeScript = "TypeScript",
}

export interface Owner {
  login: Login;
  id: number;
  node_id: NodeID;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: GistsURL;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: EventsURL;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersOnyedikaAnaghaEventsPrivacy = "https://api.github.com/users/onyedika-anagha/events{/privacy}",
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersOnyedikaAnaghaGistsGistID = "https://api.github.com/users/onyedika-anagha/gists{/gist_id}",
}

export enum Login {
  OnyedikaAnagha = "onyedika-anagha",
}

export enum NodeID {
  MDQ6VXNlcjgyNTQ2MjAy = "MDQ6VXNlcjgyNTQ2MjAy",
}

export enum Type {
  User = "User",
}

export enum Visibility {
  Public = "public",
}
