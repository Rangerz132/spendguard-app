import { Outlet } from "react-router";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Menu />

      {/**<Overlay /> */}
      <div className="py-20">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
