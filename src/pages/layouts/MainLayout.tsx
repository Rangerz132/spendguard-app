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
import { getUserActivities } from "../../services/supabase/activityService";
import { setBudgets } from "../../store/budgets/budgetsSlice";
import { getUserBudgets } from "../../services/supabase/budgetService";
import { getUserBudgetCategories } from "../../services/supabase/budgetCategoryService";
import { setBudgetCategories } from "../../store/budgetCategories/budgetCategoriesSlice";
import BudgetOptionCard from "../../components/Option/BudgetOption/BudgetOptionCard";
import { ThemeContextProvider } from "../../contexts/ThemeContext";
import { getProfils } from "../../services/supabase/profilService";
import { setProfils, setUserProfil } from "../../store/profils/profilSlices";
import supabase from "../../config/supabaseConfig";
import { ProfilType } from "../../components/Profil/ProfilType";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const activities = await getUserActivities();
      dispatch(setActivities(activities));

      const budgets = await getUserBudgets();
      dispatch(setBudgets(budgets));

      const budgetCategories = await getUserBudgetCategories();
      dispatch(setBudgetCategories(budgetCategories));

      const profils = await getProfils();
      dispatch(setProfils(profils));

      const { data } = await supabase.auth.getUser();
      const currentProfil = profils.find(
        (profil) => profil.user_id === data.user?.id
      );
      dispatch(setUserProfil(currentProfil as ProfilType));
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <PrivateLayout>
        <ThemeContextProvider>
          <OverlayContextProvider>
            <SettingsContextProvider>
              <Header />
              <Menu />
              <Sidebar />
              <Overlay />
              <ActivityOptionCard />
              <BudgetOptionCard />
              <StatusCard />
              <div className="py-16">
                <Outlet />
              </div>
            </SettingsContextProvider>
          </OverlayContextProvider>
        </ThemeContextProvider>
      </PrivateLayout>
    </>
  );
};

export default MainLayout;
