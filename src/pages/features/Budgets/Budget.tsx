import { BiPlus } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BudgetType } from "../../../components/Budget/type/BudgetType";
import { getBudgetById } from "../../../services/supabase/budgetService";
import BackArrowButton from "../../../components/UI/BackArrowButton";
import { BudgetCategoryType } from "../../../components/Budget/type/BudgetCategoryType";
import { getBudgetCategoriesByBudgetId } from "../../../services/supabase/budgetCategoryService";
import BudgetCategoryCard from "../../../components/Budget/BudgetCategoryCard";
import { format } from "date-fns";
import Gauge from "../../../components/UI/Gauge";
import LinkButton from "../../../components/UI/LinkButton";
import BudgetLimitCard from "../../../components/Budget/BudgetLimitCard";

const Budget = () => {
  const [budget, setBudget] = useState<BudgetType | null>(null);
  const [budgetCategories, setBudgetCategories] = useState<
    BudgetCategoryType[]
  >([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchBudget = async () => {
      if (!id) {
        return;
      }

      const specificBudget = await getBudgetById(id);
      if (specificBudget) {
        const budgetCategoryList = await getBudgetCategoriesByBudgetId(
          specificBudget.id
        );

        if (budgetCategoryList.length > 0) {
          setBudgetCategories(budgetCategoryList);
        }
      }

      setBudget(specificBudget);
    };

    fetchBudget();
  }, [id]);

  return (
    <div>
      {budget && (
        <div className="wrapper page-wrapper py-6">
          {/** Header*/}
          <div>
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
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row items-center justify-between">
              {/** Title */}
              <h2 className="text-white theme-light:text-black">
                Budget categories
              </h2>
              <LinkButton path={""}>
                <BiPlus className="icon text-theme-dark-grey" />
              </LinkButton>
            </div>

            {/** Budget Category list */}
            <div className="grid grid-cols-2 gap-4">
              {budgetCategories.map((budgetCategory) => (
                <BudgetCategoryCard
                  data={budgetCategory}
                  key={budgetCategory.id}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Budget;
