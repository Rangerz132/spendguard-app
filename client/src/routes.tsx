import { BiPulse } from "react-icons/bi";
import { BiHighlight, BiMessageAltAdd } from "react-icons/bi";
import { BiHomeAlt, BiBarChartAlt } from "react-icons/bi";
import { RouteObject, createBrowserRouter } from "react-router";
<BiHomeAlt />;
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Activities from "./pages/Activities";
import Layout from "./pages/Layout";
import AddActivity from "./pages/AddActivity";
import UpdateActivity from "./pages/UpdateActivity";

const routeDefinitions = {
  root: {
    path: "/",
    element: <Layout />,
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
