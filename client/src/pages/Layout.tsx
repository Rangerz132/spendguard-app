import { Outlet } from "react-router";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import DetailOptionCard from "../components/DetailOption/DetailOptionCard";
import { OverlayContextProvider } from "../contexts/OverlayContext";
import Overlay from "../components/Overlay/Overlay";
import StatusCard from "../components/Status/StatusCard";
import Sidebar from "../components/Sidebar/Sidebar";
import { SettingsContextProvider } from "../contexts/SettingsContext";

const Layout = () => {
  return (
    <>
      <OverlayContextProvider>
        <SettingsContextProvider>
          <Header />
          <Menu />
          <Sidebar />
          <Overlay />
          <DetailOptionCard />
          <StatusCard />
          <div className="py-20">
            <Outlet />
          </div>
        </SettingsContextProvider>
      </OverlayContextProvider>
    </>
  );
};

export default Layout;
