import { BiCalendar } from "react-icons/bi";
import { BiPulse } from "react-icons/bi";
import { BiHighlight, BiMessageAltAdd } from "react-icons/bi";
import { BiHomeAlt, BiBarChartAlt } from "react-icons/bi";
import { RouteObject, createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import AddActivity from "../pages/AddActivity";
import UpdateActivity from "../pages/UpdateActivity";
import Analytics from "../pages/Analytics";
import Activities from "../pages/Activities";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import MainLayout from "../pages/MainLayout";
import Budget from "../pages/Budget";

const authRoutes = [
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];

const appRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
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
      path: "/budget",
      element: <Budget />,
      name: "budget",
      id: "budget",
      icon: <BiCalendar />,
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
};

export const routes: RouteObject[] = [
  ...authRoutes, // Not wrapped in Layout
  appRoutes, // Wrapped in Layout
];

export const router = createBrowserRouter(routes);

// Only export routes that are under layout for menus
export const allRoutes = appRoutes.children!.map((route) => ({
  name: route.name,
  path: route.path,
  icon: route.icon,
}));

export const menuRoutes = appRoutes
  .children!.filter((route) =>
    ["home", "addActivity", "budget", "analytics", "activities"].includes(
      route.id!
    )
  )
  .map((route) => ({
    name: route.name!,
    path: route.path!,
    icon: route.icon!,
  }));
