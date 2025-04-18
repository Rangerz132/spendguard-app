import { useEffect, useState } from "react";
import { BudgetType } from "../../../components/Budget/type/BudgetType";
import { getBudgets } from "../../../services/supabase/budgetService";
import EmptyCard from "../../../components/Card/EmptyCard";
import LinkButton from "../../../components/UI/LinkButton";
import { useNavigate } from "react-router";

const Budgets = () => {
  const [budgets, setBudgets] = useState<BudgetType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBudgets = async () => {
      const budgetList = await getBudgets();
      setBudgets(budgetList);
    };

    fetchBudgets();
  }, []);

  return (
    <div className="wrapper page-wrapper">
      {budgets.length > 0 ? (
        <section>
          {/** Title */}
          <h2 className="text-white theme-light:text-black">Budgets</h2>
          {/** List of budgets */}
          {budgets.reverse().map((budget) => (
            <div
              className="card"
              key={budget.id}
              onClick={() => navigate(`/budget/${budget.id}`)}
            >
              <div className="card-inner">
                {/** Chart title */}
                <h3 className="text-theme-dark-grey theme-light:text-theme-light-dark-grey">
                  {budget.name}
                </h3>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <EmptyCard
          title={"You don't have any budget"}
          description={"Your budget statistics would appear here"}
          button={<LinkButton path={"/budget"}>Add a budget</LinkButton>}
        />
      )}
    </div>
  );
};

export default Budgets;
