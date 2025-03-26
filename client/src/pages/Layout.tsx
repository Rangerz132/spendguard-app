import { Outlet } from "react-router";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;
