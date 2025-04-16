import { Outlet } from "react-router";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";

import { OverlayContextProvider } from "../contexts/OverlayContext";
import Overlay from "../components/Overlay/Overlay";
import StatusCard from "../components/Status/StatusCard";
import Sidebar from "../components/Sidebar/Sidebar";
import { SettingsContextProvider } from "../contexts/SettingsContext";
import ActivityOptionCard from "../components/Option/ActivityOption/ActivityOptionCard";
import { AuthContextProvider } from "../contexts/AuthContext";

const Layout = () => {
  return (
    <>
      <AuthContextProvider>
        <OverlayContextProvider>
          <SettingsContextProvider>
            <Header />
            <Menu />
            <Sidebar />
            <Overlay />
            <ActivityOptionCard />
            <StatusCard />
            <div className="py-20">
              <Outlet />
            </div>
          </SettingsContextProvider>
        </OverlayContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default Layout;
