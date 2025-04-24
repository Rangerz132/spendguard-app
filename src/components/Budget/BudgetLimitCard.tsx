import { BudgetType } from "./type/BudgetType";
import Gauge from "../UI/Gauge";
import { format } from "date-fns";
import useBudgets from "../../hooks/useBudgets";

const BudgetLimitCard = (props: {
  budget: BudgetType;
  budgetTitle: string;
  onClick?: () => void;
}) => {
  const { getMaxAmountByBudget, getCurrentAmountByBudget } = useBudgets();

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
              {props.budget.to as string}
            </p>
          </div>
          {/** Amount */}
          <div className="flex flex-row items-end space-x-1">
            <h1 className="text-white theme-light:text-black ">
              ${getCurrentAmountByBudget(props.budget.id)}
            </h1>
            <h3 className="text-theme-dark-grey theme-light:text-theme-light-dark-grey">
              /{getMaxAmountByBudget(props.budget.id)}
            </h3>
          </div>
        </div>
        {/** Gauge */}
        <div className="flex flex-col space-y-2">
          <Gauge
            value={getCurrentAmountByBudget(props.budget.id)}
            maxValue={getMaxAmountByBudget(props.budget.id)}
          />
          <div className="flex flex-row items-center justify-between text-theme-dark-grey theme-light:text-theme-light-dark-grey ">
            <p className="text-xs">0</p>
            <p className="text-xs">{getMaxAmountByBudget(props.budget.id)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetLimitCard;
