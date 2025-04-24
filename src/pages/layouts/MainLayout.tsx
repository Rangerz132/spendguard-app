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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActivities } from "../../store/activities/activitiesSlice";
import { getActivities } from "../../services/supabase/activityService";
import { setBudgets } from "../../store/budgets/budgetsSlice";
import { getBudgets } from "../../services/supabase/budgetService";
import { getBudgetCategories } from "../../services/supabase/budgetCategoryService";
import { setBudgetCategories } from "../../store/budgetCategories/budgetCategoriesSlice";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchActivities = async () => {
      const activities = await getActivities();
      dispatch(setActivities(activities));

      const budgets = await getBudgets();
      dispatch(setBudgets(budgets));

      const budgetCategories = await getBudgetCategories();
      dispatch(setBudgetCategories(budgetCategories));
    };

    fetchActivities();
  }, [dispatch]);

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
