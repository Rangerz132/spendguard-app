import { Outlet } from "react-router";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import DetailOptionCard from "../components/DetailOption/DetailOptionCard";

const Layout = () => {
  return (
    <>
      <Header />
      <Menu />
      <DetailOptionCard />
      <div className="py-20">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
