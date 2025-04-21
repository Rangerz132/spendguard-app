import { useSelector } from "react-redux";
import EmptyCard from "../../../components/Card/EmptyCard";
import LinkButton from "../../../components/UI/LinkButton";
import { useNavigate } from "react-router";
import { RootState } from "../../../store/store";

const Budgets = () => {
  const navigate = useNavigate();
  const budgets = useSelector((root: RootState) => root.budgets);

  return (
    <div className="wrapper page-wrapper">
      {budgets.length > 0 ? (
        <section>
          {/** Title */}
          <h2 className="text-white theme-light:text-black">Budgets</h2>
          {/** List of budgets */}
          {budgets.map((budget) => (
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
          <LinkButton path={"/addBudget"}>Add a new budget</LinkButton>
        </section>
      ) : (
        <EmptyCard
          title={"You don't have any budget"}
          description={"Your budget statistics would appear here"}
          button={<LinkButton path={"/budget"}>Add a new budget</LinkButton>}
        />
      )}
    </div>
  );
};

export default Budgets;
