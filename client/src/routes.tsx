import { BiHomeAlt, BiBookmarkAlt, BiBarChartAlt } from "react-icons/bi";
import { RouteObject, createBrowserRouter } from "react-router";
<BiHomeAlt />;
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Activites from "./pages/Activites";
import Layout from "./pages/Layout";

const routeDefinitions = {
  root: {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, name: "Home", icon: <BiHomeAlt /> },
      {
        path: "/analytics",
        element: <Analytics />,
        name: "Analytics",
        icon: <BiBookmarkAlt />,
      },
      {
        path: "/activites",
        element: <Activites />,
        name: "Activities",
        icon: <BiBarChartAlt />,
      },
    ],
  },
};

export const routes: RouteObject[] = [routeDefinitions.root];
export const router = createBrowserRouter(routes);

export const menuRoutes = routeDefinitions.root.children.map((route) => ({
  name: route.name,
  path: route.path,
  icon: route.icon,
}));
