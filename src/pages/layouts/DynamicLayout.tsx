import { Outlet } from "react-router";
import PrivateLayout from "./PrivateLayout";
import { OverlayContextProvider } from "../../contexts/OverlayContext";
import { SettingsContextProvider } from "../../contexts/SettingsContext";

import Overlay from "../../components/Overlay/Overlay";
import ActivityOptionCard from "../../components/Option/ActivityOption/ActivityOptionCard";
import StatusCard from "../../components/Status/StatusCard";
import BudgetOptionCard from "../../components/Option/BudgetOption/BudgetOptionCard";

const DynamicLayout = () => {
  return (
    <>
      <PrivateLayout>
        <OverlayContextProvider>
          <SettingsContextProvider>
            <Overlay />
            <ActivityOptionCard />
            <BudgetOptionCard />
            <StatusCard />
            <Outlet />
          </SettingsContextProvider>
        </OverlayContextProvider>
      </PrivateLayout>
    </>
  );
};

export default DynamicLayout;
