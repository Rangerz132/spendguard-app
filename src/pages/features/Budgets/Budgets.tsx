import { useSelector } from "react-redux";
import EmptyCard from "../../../components/Card/EmptyCard";
import LinkButton from "../../../components/UI/LinkButton";
import { useNavigate } from "react-router";
import { RootState } from "../../../store/store";
import BudgetLimitCard from "../../../components/Budget/BudgetLimitCard";
import { BiPlus } from "react-icons/bi";

const Budgets = () => {
  const navigate = useNavigate();
  const budgets = useSelector((root: RootState) => root.budgets);

  return (
    <div className="wrapper page-wrapper">
      <section>
        {/** Title */}
        <div className="flex flex-row items-center justify-between">
          {/** Title */}
          <h2 className="text-white theme-light:text-black">Budgets</h2>
          <LinkButton path={"/addBudget"}>
            <BiPlus className="icon text-theme-dark-grey" />
          </LinkButton>
        </div>
        {budgets.length > 0 ? (
          budgets.map((budget) => (
            <BudgetLimitCard
              budget={budget}
              budgetTitle={budget.name || budget.id}
              key={budget.id}
              onClick={() => navigate(`/budget/${budget.id}`)}
            />
          ))
        ) : (
          <EmptyCard
            title={"You don't have any budget"}
            description={"Your budget statistics would appear here"}
            button={
              <LinkButton path={"/addBudget"} className="cta">
                Add a new budget
              </LinkButton>
            }
          />
        )}
      </section>
    </div>
  );
};

export default Budgets;
