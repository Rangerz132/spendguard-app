import { Outlet } from "react-router";
import PrivateLayout from "./PrivateLayout";
import { OverlayContextProvider } from "../../contexts/OverlayContext";
import { SettingsContextProvider } from "../../contexts/SettingsContext";
import Overlay from "../../components/Overlay/Overlay";
import ActivityOptionCard from "../../components/Option/ActivityOption/ActivityOptionCard";
import StatusCard from "../../components/Status/StatusCard";
import BudgetOptionCard from "../../components/Option/BudgetOption/BudgetOptionCard";
import { ThemeContextProvider } from "../../contexts/ThemeContext";

const DynamicLayout = () => {
  return (
    <>
      <PrivateLayout>
        <ThemeContextProvider>
          <OverlayContextProvider>
            <SettingsContextProvider>
              <Overlay />
              <ActivityOptionCard />
              <BudgetOptionCard />
              <StatusCard />
              <Outlet />
            </SettingsContextProvider>
          </OverlayContextProvider>
        </ThemeContextProvider>
      </PrivateLayout>
    </>
  );
};

export default DynamicLayout;
