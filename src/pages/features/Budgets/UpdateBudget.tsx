import { useParams } from "react-router";
import BudgetFormCard from "../../../components/Budget/BudgetFormCard";
import { BudgetType } from "../../../components/Budget/type/BudgetType";
import { useSelector } from "react-redux";
import { BudgetCategoryType } from "../../../components/Budget/type/BudgetCategoryType";
import { RootState } from "../../../store/store";

const UpdateBudget = () => {
  const { id } = useParams();
  const budget = useSelector((root: RootState) =>
    root.budgets.find((budget) => budget.id === id)
  );

  const handleOnSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    budget: BudgetType,
    budgetCategories: BudgetCategoryType[]
  ) => {
    e.preventDefault();
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
