import { Outlet } from "react-router";
import Menu from "../components/Menu/Menu";

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;
