import { useNavigate, useParams } from "react-router";
import BudgetFormCard from "../../../components/Budget/BudgetFormCard";
import { BudgetType } from "../../../components/Budget/type/BudgetType";
import { useDispatch, useSelector } from "react-redux";
import { BudgetCategoryType } from "../../../components/Budget/type/BudgetCategoryType";
import { RootState } from "../../../store/store";
import { updateBudget as updateBudgetRedux } from "../../../store/budgets/budgetsSlice";
import { setStatus } from "../../../store/status/statusSlice";
import { updateBudget } from "../../../services/supabase/budgetService";
import { setBudgetCategories } from "../../../store/budgetCategories/budgetCategoriesSlice";
import {
  createBudgetCategories,
  updateBudgetCategories,
} from "../../../services/supabase/budgetCategoryService";

const UpdateBudget = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const budget = useSelector((root: RootState) =>
    root.budgets.find((budget) => budget.id === id)
  );

  const handleOnSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    budget: BudgetType,
    budgetCategories: BudgetCategoryType[]
  ) => {
    e.preventDefault();

    try {
      await updateBudget(budget);
      dispatch(updateBudgetRedux(budget));
      await createBudgetCategories(budgetCategories);
      dispatch(setBudgetCategories(budgetCategories));
      await updateBudgetCategories(budgetCategories);

      dispatch(
        setStatus({
          message: "You successfully updated a budget.",
          isShowed: true,
          isValid: true,
        })
      );
      navigate(-1);
    } catch (error) {
      console.log("An error occurred when updating a budget:", error);
      setStatus({
        message: "An error occurred when updating a budget.",
        isShowed: true,
        isValid: false,
      });
    }
  };

  return (
    <div className="wrapper page-wrapper py-6">
      <section>
        <BudgetFormCard onSubmit={handleOnSubmit} initialBudget={budget} />
      </section>
    </div>
  );
};

export default UpdateBudget;
