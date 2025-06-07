import Headphones from "../../pages/Headphones";
import Home from "../../pages/Home";
import Speakers from "../../pages/Speakers";
import Earphones from "../../pages/Earphones";

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
];

export default routes;
