import Headphones from "../../pages/Headphones";
import Home from "../../pages/Home";
import Speakers from "../../pages/Speakers";
import Earphones from "../../pages/Earphones";
import ProductDetail from "../../pages/ProductDetail";
import Checkout from "../../pages/Checkout";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Headphones",
    path: "/headphones",
    component: Headphones,
  },
  {
    name: "Speakers",
    path: "/speakers",
    component: Speakers,
  },
  {
    name: "Earphones",
    path: "/earphones",
    component: Earphones,
  },
  {
    name: "Product Detail",
    path: "/products/:productId",
    component: ProductDetail,
  },
  {
    name: "Checkout",
    path: "/checkout",
    component: Checkout,
  },
];

export default routes;
