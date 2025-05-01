import { useNavigate } from "react-router";
import BudgetFormCard from "../../../components/Budget/BudgetFormCard";
import { BudgetType } from "../../../components/Budget/type/BudgetType";
import { useDispatch } from "react-redux";
import { addBudget } from "../../../store/budgets/budgetsSlice";
import { BudgetCategoryType } from "../../../components/Budget/type/BudgetCategoryType";
import { addBudgetCategory } from "../../../store/budgetCategories/budgetCategoriesSlice";
import { createBudget } from "../../../services/supabase/budgetService";
import { createBudgetCategories } from "../../../services/supabase/budgetCategoryService";
import { setStatus } from "../../../store/status/statusSlice";

const AddBudget = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    budget: BudgetType,
    budgetCategories: BudgetCategoryType[]
  ) => {
    e.preventDefault();

    try {
      dispatch(addBudget(budget));

      for (let i = 0; i < budgetCategories.length; i++) {
        dispatch(addBudgetCategory(budgetCategories[i]));
      }

      await createBudget(budget);
      await createBudgetCategories(budgetCategories);
      navigate("/budgets");
      dispatch(
        setStatus({
          message: "You successfully created a new budget",
          isShowed: true,
          isValid: true,
        })
      );
    } catch (error) {
      console.log("An error occurred when creating a new budget:", error);
      dispatch(
        setStatus({
          message: "An error occurred when creating a new budget",
          isShowed: true,
          isValid: false,
        })
      );
    }
  };

  return (
    <div className="wrapper page-wrapper py-6">
      <section>
        <BudgetFormCard onSubmit={handleOnSubmit} />
      </section>
    </div>
  );
};

export default AddBudget;
