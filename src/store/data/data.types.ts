export enum DATA_ACTION_TYPES {
  FETCH_DATA = "data/FETCH_DATA",
  SET_DATA = "data/SET_DATA",
  SET_IS_LOADING = "data/SET_IS_LOADING",
}

export type DataTypes = {
  user: User;
  socials: SocialMedia[];
  services: ServiceType[];
  stack: Stack[];
};

export type User = {
  name: string;
  email: string;
  tel: string;
  profile_image: string;
  bio: string | null;
};
export type SocialMedia = {
  name: string;
  link: string;
};

export type ServiceType = {
  name: string;
  image: string | null;
  slug: string;
  desc: string | null;
};
export type Stack = {
  name: string;
  image: string | null;
  percentage: string | number;
};
