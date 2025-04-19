import { BiCalendar } from "react-icons/bi";
import { BiPulse } from "react-icons/bi";
import { BiMessageAltAdd } from "react-icons/bi";
import { BiHomeAlt, BiBarChartAlt } from "react-icons/bi";
import { RouteObject, createBrowserRouter } from "react-router";
import MainLayout from "../pages/layouts/MainLayout";
import Signin from "../pages/features/Auth/Signin";
import Signup from "../pages/features/Auth/Signup";
import Home from "../pages/features/Home/Home";
import AddActivity from "../pages/features/Activities/AddActivity";
import Budgets from "../pages/features/Budgets/Budgets";
import UpdateActivity from "../pages/features/Activities/UpdateActivity";
import Analytics from "../pages/features/Analytics/Analytics";
import Activities from "../pages/features/Activities/Activities";
import Budget from "../pages/features/Budgets/Budget";

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

const optionRoutes = [
  {
    path: "/updateActivity/:id",
    element: <UpdateActivity />,
    name: "Update Activity",
    id: "updateActivity",
    icon: null,
  },
  {
    path: "/budget/:id",
    element: <Budget />,
    name: "Budget",
    id: "budget",
    icon: null,
  },
];

const mainRoutes = {
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
      path: "/budgets",
      element: <Budgets />,
      name: "budgets",
      id: "budgets",
      icon: <BiCalendar />,
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
  ...authRoutes,
  ...optionRoutes,
  mainRoutes,
];

export const router = createBrowserRouter(routes);

export const allRoutes = mainRoutes.children!.map((route) => ({
  name: route.name,
  path: route.path,
  icon: route.icon,
}));

export const menuRoutes = mainRoutes
  .children!.filter((route) =>
    ["home", "addActivity", "budgets", "analytics", "activities"].includes(
      route.id!
    )
  )
  .map((route) => ({
    name: route.name!,
    path: route.path!,
    icon: route.icon!,
  }));
