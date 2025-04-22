import { BiChevronLeft } from "react-icons/bi";
import Button from "../UI/Button";
import { BudgetCategoryType } from "./type/BudgetCategoryType";
import { useState } from "react";

const BudgetCategoryEdit = (props: {
  budgetCategoryType: BudgetCategoryType;
  onCategoryEdit: () => void;
  onPrevious: () => void;
  onBudgetCategoryUpdate: (
    e: React.FormEvent<HTMLFormElement>,
    amount: number
  ) => void;
}) => {
  const [budgetCategoryAmount, setBudgetCategoryAmount] = useState<number>(
    props.budgetCategoryType.amount
  );

  const handleCategoryBudgetAmount = (amount: number) => {
    if (isNaN(amount)) {
      amount = 0;
    }
    setBudgetCategoryAmount(amount);
  };

  return (
    <section>
      <div className="flex flex-row space-x-2 items-center ">
        {/** Back arrow */}
        <BiChevronLeft
          onClick={() => props.onPrevious()}
          className="icon text-white theme-light:text-black cursor-pointer"
        />
        {/** Title */}
        <h2 className="text-white theme-light:text-black">Edit category</h2>
      </div>
      <div className="card">
        <form
          onSubmit={(e) =>
            props.onBudgetCategoryUpdate(e, budgetCategoryAmount)
          }
          className="flex flex-col space-y-4"
        >
          {/** Category */}
          <div className="flex flex-col space-y-2 relative">
            <label className="text-white theme-light:text-black">
              Category
            </label>
            <input
              type="text"
              name="category"
              disabled
              defaultValue={props.budgetCategoryType.category}
              className="capitalize"
            ></input>
          </div>
          {/** Amount */}
          <div className="flex flex-col space-y-2 relative">
            <label className="text-white theme-light:text-black">Amount</label>
            <input
              type="number"
              name="amount"
              defaultValue={props.budgetCategoryType.amount || 0}
              placeholder="0"
              className="capitalize "
              onChange={(e) =>
                handleCategoryBudgetAmount(parseInt(e.target.value))
              }
            ></input>
          </div>
          <Button className="cta" type="submit">
            Save
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BudgetCategoryEdit;
