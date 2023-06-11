import {
  Category,
  CategoryItem,
} from "../../store/categories/categories.types";
import image1 from "../../assets/img/product/product-1.jpg";
import image2 from "../../assets/img/product/product-2.jpg";
import image3 from "../../assets/img/product/product-3.jpg";
import image4 from "../../assets/img/product/product-4.jpg";

import banner1 from "../../assets/img/banner/img1-top.jpg";
import banner2 from "../../assets/img/banner/img2-top.jpg";
import banner3 from "../../assets/img/banner/img3-top.jpg";
import banner4 from "../../assets/img/banner/img4-top.jpg";
import { makeId, slugify } from "./helper";

export const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const products: CategoryItem[] = [
    {
      id: makeId(),
      name: "Perfect Diamond Jewelry",
      price: 5000,
      oldPrice: 7000,
      quantity: 1,
      customized: false,
      available: true,
      description: "Perfect Diamond Jewelry",
      imageUrl: image1,
      images: [image1, image2, image3],
      colors: ["#964B00", "#a23hhe", "#000", "#1a1a1a"],
    },
    {
      id: makeId(),
      name: "Handmade Golden Necklace",
      price: 5000,
      oldPrice: 5000,
      quantity: 1,
      customized: false,
      available: true,
      description: "Perfect Diamond Jewelry",
      imageUrl: image2,
      images: [image1, image1, image1],
      colors: ["#fff", "#b0c4de", "#000", "#1a1a1a"],
    },
    {
      id: makeId(),
      name: "Diamond Exclusive Ornament",
      price: 5000,
      oldPrice: 5000,
      quantity: 1,
      customized: false,
      available: true,
      description: "Perfect Diamond Jewelry",
      imageUrl: image3,
      images: [image1, image1, image1],
      colors: ["#fff", "#a23hhe", "#964B00", "#b0c4de"],
    },
    {
      id: makeId(),
      name: "Diamond Jewelry",
      price: 5000,
      oldPrice: 5000,
      quantity: 1,
      customized: false,
      available: true,
      description: "Perfect Diamond Jewelry",
      imageUrl: image4,
      images: [image1, image1, image1],
      colors: ["#964B00", "#a23hhe", "#b0c4de", "#1a1a1a"],
    },
    {
      id: makeId(),
      name: "Handmade Golden Necklace",
      price: 5000,
      oldPrice: 5000,
      quantity: 1,
      customized: false,
      available: true,
      description: "Perfect Diamond Jewelry",
      imageUrl: image2,
      images: [image1, image1, image1],
      colors: ["#fff", "#b0c4de", "#000", "#1a1a1a"],
    },
    {
      id: makeId(),
      name: "Diamond Exclusive Ornament",
      price: 5000,
      oldPrice: 5000,
      quantity: 1,
      customized: false,
      available: true,
      description: "Perfect Diamond Jewelry",
      imageUrl: image3,
      images: [image1, image1, image1],
      colors: ["#fff", "#a23hhe", "#964B00", "#b0c4de"],
    },
    {
      id: makeId(),
      name: "Diamond Jewelry",
      price: 5000,
      oldPrice: 5000,
      quantity: 1,
      customized: false,
      available: true,
      description: "Perfect Diamond Jewelry",
      imageUrl: image4,
      images: [image1, image1, image1],
      colors: ["#964B00", "#a23hhe", "#b0c4de", "#1a1a1a"],
    },
  ],
  categories: Category[] = [
    {
      id: makeId(),
      title: "Customized Necklace",
      slug: slugify("Customized Necklace"),
      imageUrl: banner1,
      items: products,
    },
    {
      id: makeId(),
      title: "Hats and Caps",
      slug: slugify("Hats and Caps"),
      imageUrl: banner2,
      items: products,
    },
    {
      id: makeId(),
      title: "Jewelries",
      slug: slugify("Jewelries"),
      imageUrl: banner3,
      items: products,
    },
    {
      id: makeId(),
      title: "Nails",
      slug: slugify("Nails"),
      imageUrl: banner4,
      items: products,
    },
  ];
