import { Outlet } from "react-router";
import PrivateLayout from "./PrivateLayout";
import { OverlayContextProvider } from "../../contexts/OverlayContext";
import { SettingsContextProvider } from "../../contexts/SettingsContext";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Sidebar from "../../components/Sidebar/Sidebar";
import Overlay from "../../components/Overlay/Overlay";
import ActivityOptionCard from "../../components/Option/ActivityOption/ActivityOptionCard";
import StatusCard from "../../components/Status/StatusCard";

const MainLayout = () => {
  return (
    <>
      <PrivateLayout>
        <OverlayContextProvider>
          <SettingsContextProvider>
            <Header />
            <Menu />
            <Sidebar />
            <Overlay />
            <ActivityOptionCard />
            <StatusCard />
            <div className="py-16">
              <Outlet />
            </div>
          </SettingsContextProvider>
        </OverlayContextProvider>
      </PrivateLayout>
    </>
  );
};

export default MainLayout;
