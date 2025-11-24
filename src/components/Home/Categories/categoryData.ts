import { FaCarSide, FaCouch, FaGift, FaTshirt } from "react-icons/fa";
import { GiBrickWall, GiChemicalDrop, GiFactory, GiLipstick, GiWheat } from "react-icons/gi";
import { MdCategory, MdDevices } from "react-icons/md";

const data = [
  {
    title: "Televisions",
    id: 1,
    img: "/images/categories/categories-01.png",
  },
  {
    title: "Laptop & PC",
    id: 2,
    img: "/images/categories/categories-02.png",
  },
  {
    title: "Mobile & Tablets",
    id: 3,
    img: "/images/categories/categories-03.png",
  },
  {
    title: "Games & Videos",
    id: 4,
    img: "/images/categories/categories-04.png",
  },
  {
    title: "Home Appliances",
    id: 5,
    img: "/images/categories/categories-05.png",
  },
  {
    title: "Health & Sports",
    id: 6,
    img: "/images/categories/categories-06.png",
  },
  {
    title: "Watches",
    id: 7,
    img: "/images/categories/categories-07.png",
  },
  {
    title: "Televisions",
    id: 8,
    img: "/images/categories/categories-04.png",
  },
];

// export default data;

const categoriesWithIcons = [
//   {
//     title: "Toutes les catégories",
//     id: 1,
//     icon: MdCategory,
//   },
//   {
//     title: "Agriculture & Produits agricoles",
//     id: 2,
//     icon: GiWheat,
//   },
  {
    title: "Vêtements & Mode",
    id: 3,
    icon: FaTshirt,
  },
  {
    title: "Électronique & Informatique",
    id: 4,
    icon: MdDevices,
  },
  {
    title: "Automobile & Moto",
    id: 5,
    icon: FaCarSide,
  },
  {
    title: "Beauté & Soins personnels",
    id: 6,
    icon: GiLipstick,
  },
  {
    title: "Maison & Décoration",
    id: 7,
    icon: FaCouch,
  },
  {
    title: "Cadeaux, Artisanat & Jouets",
    id: 8,
    icon: FaGift,
  },
  {
    title: "Machines & Outils industriels",
    id: 9,
    icon: GiFactory,
  },
  {
    title: "Matériaux bruts & Construction",
    id: 10,
    icon: GiBrickWall,
  },
  {
    title: "Produits chimiques",
    id: 11,
    icon: GiChemicalDrop,
  },
];

export  {categoriesWithIcons, data} ;

