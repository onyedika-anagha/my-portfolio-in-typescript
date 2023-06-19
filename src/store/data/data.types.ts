export enum DATA_ACTION_TYPES {
  FETCH_DATA = "data/FETCH_DATA",
  SET_DATA = "data/SET_DATA",
  SET_IS_LOADING = "data/SET_IS_LOADING",
}
export interface DataTypes {
  user: User;
  services: Service[];
  socials: Social[];
  stack: Stack[];
  experience: Experience[];
  education: Education[];
}

export interface Education {
  id: number;
  school: string;
  program: string;
  start_time: Date;
  end_time: Date;
}

export interface Experience {
  id: number;
  company: string;
  start_time: Date;
  end_time: Date | null;
  position: string;
  type: string;
  note: string | null;
}

export interface Service {
  name: string;
  image: string;
  slug: string;
  desc: string;
}

export interface Social {
  name: string;
  link: string;
}

export interface Stack {
  name: string;
  image: string;
  percentage: number;
}

export interface User {
  name: string;
  email: string;
  tel: string;
  profile_image: string;
  bio: string;
}
