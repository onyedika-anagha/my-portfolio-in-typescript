export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "category/FETCH_CATEGORIES_FAILED",
}

export type CategoryItem = {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  quantity: number;
  customized: boolean;
  available: boolean;
  description: string;
  imageUrl: string;
  images: string[];
  colors: string[];
};

export type Category = {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};
