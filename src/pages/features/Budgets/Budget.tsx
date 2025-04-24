import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BudgetType } from "../../../components/Budget/type/BudgetType";
import BackArrowButton from "../../../components/UI/BackArrowButton";
import { BudgetCategoryType } from "../../../components/Budget/type/BudgetCategoryType";
import BudgetCategoryCard from "../../../components/Budget/BudgetCategoryCard";
import BudgetLimitCard from "../../../components/Budget/BudgetLimitCard";
import useBudgets from "../../../hooks/useBudgets";
import CustomStackedBarChart from "../../../components/Chart/CustomStackedBarChart";

const Budget = () => {
  const { id } = useParams();
  const { getBudgetById, getBudgetCategoriesByBudgetId } = useBudgets();
  const [budget, setBudget] = useState<BudgetType | null>(null);
  const [budgetCategories, setBudgetCategories] = useState<
    BudgetCategoryType[] | null
  >(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    setBudget(getBudgetById(id));
    setBudgetCategories(getBudgetCategoriesByBudgetId(id));
  }, [id]);

  return (
    <div>
      {budget && (
        <div className="wrapper page-wrapper py-6">
          {/** Header*/}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-2 items-center">
              {/** Back arrow */}
              <BackArrowButton path="/budgets" />
              {/** Title */}
              <h2 className="text-white theme-light:text-black">
                {budget.name}
              </h2>
            </div>
            {/** Description */}
            <p className="text-theme-dark-grey theme-light:text-theme-light-dark-grey">
              {budget.description}
            </p>
          </div>
          {/** Total */}
          <BudgetLimitCard budget={budget} budgetTitle={"Your limit"} />
          {/** Categories */}
          <div className="flex flex-col space-y-4">
            {/** Title */}
            <h2 className="text-white theme-light:text-black">
              Budget categories
            </h2>

            {/** Budget category list */}
            <div className="grid grid-cols-2 gap-4">
              {budgetCategories &&
                budgetCategories.map((budgetCategory) => (
                  <BudgetCategoryCard
                    data={budgetCategory}
                    key={budgetCategory.id}
                  />
                ))}
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {/** Title */}
            <h2 className="text-white theme-light:text-black">Trends</h2>
            {/** Budget category portion */}
            <div className="card">
              <div className="card-inner">
                {/** Chart title */}
                <h3 className="text-theme-dark-grey theme-light:text-theme-light-dark-grey">
                  Expenses Category trends
                </h3>
                <CustomStackedBarChart />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Budget;
