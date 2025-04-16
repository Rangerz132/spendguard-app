import { BiPulse } from "react-icons/bi";
import { BiHighlight, BiMessageAltAdd } from "react-icons/bi";
import { BiHomeAlt, BiBarChartAlt } from "react-icons/bi";
import { RouteObject, createBrowserRouter } from "react-router";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import AddActivity from "../pages/AddActivity";
import UpdateActivity from "../pages/UpdateActivity";
import Analytics from "../pages/Analytics";
import Activities from "../pages/Activities";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const routeDefinitions = {
  root: {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/signin",
        element: <Signin />,
        name: "Signin",
        id: "signin",
        icon: null,
      },
      {
        path: "/signup",
        element: <Signup />,
        name: "Signup",
        id: "signup",
        icon: null,
      },
      {
        path: "/",
        element: <Home />,
        name: "Home",
        id: "home",
        icon: <BiHomeAlt />,
      },
      {
        path: "/addActivity",
        element: <AddActivity />,
        name: "Add Activity",
        id: "addActivity",
        icon: <BiMessageAltAdd />,
      },
      {
        path: "/updateActivity/:id",
        element: <UpdateActivity />,
        name: "Update Activity",
        id: "updateActivity",
        icon: <BiHighlight />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
        name: "Analytics",
        id: "analytics",
        icon: <BiPulse />,
      },
      {
        path: "/activities",
        element: <Activities />,
        name: "Activities",
        id: "activities",
        icon: <BiBarChartAlt />,
      },
    ],
  },
};

export const routes: RouteObject[] = [routeDefinitions.root];

export const router = createBrowserRouter(routes);

export const allRoutes = routeDefinitions.root.children.map((route) => ({
  name: route.name,
  path: route.path,
  icon: route.icon,
}));

export const menuRoutes = routeDefinitions.root.children
  .filter((route) =>
    ["home", "addActivity", "analytics", "activities"].includes(route.id)
  )
  .map((route) => ({
    name: route.name,
    path: route.path,
    icon: route.icon,
  }));
