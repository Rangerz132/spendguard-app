import { BudgetType } from "./type/BudgetType";
import Gauge from "../UI/Gauge";
import { format } from "date-fns";
import useBudgets from "../../hooks/useBudgets";

const BudgetLimitCard = (props: {
  budget: BudgetType;
  budgetTitle: string;
  onClick?: () => void;
}) => {
  const { getAmountByBudget } = useBudgets();

  return (
    <div className="card" onClick={props.onClick}>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row justify-between items-center">
            {/** Title */}
            <h3 className="text-theme-dark-grey theme-light:text-theme-light-dark-grey">
              {props.budgetTitle}
            </h3>
            {/** Date limit */}
            <p className="text-theme-dark-grey theme-light:text-theme-light-dark-grey text-xs">
              {/** TODO: Set limit date instead */}
              {format(
                new Date(props.budget.created_at as string),
                "dd-MM-yyyy"
              )}
            </p>
          </div>
          {/** Amount */}
          <div className="flex flex-row items-end space-x-1">
            <h1 className="text-white theme-light:text-black ">$200</h1>
            <h3 className="text-theme-dark-grey theme-light:text-theme-light-dark-grey">
              /{getAmountByBudget(props.budget.id)}
            </h3>
          </div>
        </div>
        {/** Gauge */}
        <div className="flex flex-col space-y-2">
          <Gauge value={200} maxValue={300} />
          <div className="flex flex-row items-center justify-between text-theme-dark-grey theme-light:text-theme-light-dark-grey ">
            <p className="text-xs">0</p>
            <p className="text-xs">300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetLimitCard;
