import { Outlet } from "react-router";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import DetailOptionCard from "../components/DetailOption/DetailOptionCard";
import { OverlayContextProvider } from "../contexts/OverlayContext";
import Overlay from "../components/Overlay/Overlay";
import StatusCard from "../components/Status/StatusCard";

const Layout = () => {
  return (
    <>
      <OverlayContextProvider>
        <Header />
        <Menu />
        <Overlay />
        <DetailOptionCard />
        <StatusCard />
        <div className="py-20">
          <Outlet />
        </div>
      </OverlayContextProvider>
    </>
  );
};

export default Layout;
