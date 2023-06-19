export enum PROJECT_ACTION_TYPES {
  FETCH_DATA = "PROJECT/FETCH_DATA",
  SET_DATA = "PROJECT/SET_DATA",
  SET_IS_LOADING = "PROJECT/SET_IS_LOADING",
}

export interface ProjectData {
  data: Project[] | null;
  links: Links | null;
  meta: Meta | null;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  images: string[];
  service: Service;
  site_link: null | string;
  github_link: null | string;
  stack: string[];
  client: Client;
  status: string;
  published: number;
}

export interface Client {
  name: string;
  tel: string;
  email: string;
}

export interface Service {
  name: string;
  slug: string;
  image: string;
  desc: string;
}

export interface Links {
  first: string;
  last: string;
  prev: null | string;
  next: null | string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}
