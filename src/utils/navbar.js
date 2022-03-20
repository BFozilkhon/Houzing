import Generic from "../component/Generic";
import Home from "../component/Home";

export const data = [
  {
    id: 1,
    title: "HOME",
    pathname: "/home",
    Component: Home,
    hidden: true,
    child: [],
  },
  {
    id: 2,
    title: "Buy",
    pathname: "/buy",
    Component: Generic,
    child: [],
  },
  {
    id: 3,
    title: "Sell",
    pathname: "/sell",
    Component: Generic,
    child: [],
  },
  {
    id: 4,
    title: "Rent",
    pathname: "/pages",
    Component: Generic,
    child: [],
  },
  {
    id: 5,
    title: "Find Realtors",
    pathname: "/find-realtors",
    Component: Generic,
    child: [],
  },
  {
    id: 6,
    title: "My Properties",
    pathname: "/my-properties",
    Component: Generic,
    isPrivate: true,
    child: [],
  },

  {
    id: 7,
    title: "Register As Realtor",
    pathname: "/register-as-realtor",
    Component: Generic,
    child: [],
  },
];
