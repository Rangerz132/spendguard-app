import { BiChevronLeft, BiTrash } from "react-icons/bi";
import Button from "../UI/Button";
import { BudgetCategoryType } from "./type/BudgetCategoryType";
import { useState } from "react";
import { useNavigate } from "react-router";
import { deleteBudgetCategory } from "../../services/supabase/budgetCategoryService";
import { deleteBudgetCategory as deleteBudgetCategoryRedux } from "../../store/budgetCategories/budgetCategoriesSlice";
import { ValidatorService } from "../../services/inputValidation";
import FieldError from "../Form/FieldError";

const BudgetCategoryEdit = (props: {
  budgetCategoryType: BudgetCategoryType;
  onCategoryEdit: () => void;
  onPrevious: () => void;
  onDeleteCategory: (deletedCategoryId: string) => void;
  onBudgetCategoryUpdate: (
    e: React.FormEvent<HTMLFormElement>,
    amount: number
  ) => void;
}) => {
  const [budgetCategoryAmount, setBudgetCategoryAmount] = useState<number>(
    props.budgetCategoryType.amount
  );

  const [errors, setErrors] = useState({ amount: "" });
  const navigate = useNavigate();

  const handleCategoryBudgetAmount = (amount: number) => {
    if (isNaN(amount)) {
      amount = 0;
    }
    setBudgetCategoryAmount(amount);
  };

  const handleDeleteCategoryBudget = async () => {
    deleteBudgetCategoryRedux(props.budgetCategoryType.id);
    await deleteBudgetCategory(props.budgetCategoryType.id);
    props.onDeleteCategory(props.budgetCategoryType.id);
    navigate(-1);
  };

  const validate = (amount: number) => {
    const newErrors = {
      amount: ValidatorService.cantBeLowerOrEqualThan(amount, 0),
    };

    setErrors(newErrors);

    return Object.values(newErrors).some((error) => error !== "");
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate(budgetCategoryAmount)) {
      console.log("Form contains errors, fix them first.");

      return;
    }

    props.onBudgetCategoryUpdate(e, budgetCategoryAmount);
  };

  return (
    <section>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row space-x-2 items-center ">
          {/** Back arrow */}
          <BiChevronLeft
            onClick={() => props.onPrevious()}
            className="icon text-white theme-light:text-black cursor-pointer"
          />
          {/** Title */}
          <h2 className="text-white theme-light:text-black">Edit category</h2>
        </div>
        {props.budgetCategoryType.budget_id !== "" &&
          props.budgetCategoryType.budget_id !== null && (
            <BiTrash
              className="icon text-cherry"
              onClick={handleDeleteCategoryBudget}
            />
          )}
      </div>

      <div className="card">
        <form
          onSubmit={(e) => handleOnSubmit(e)}
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
            <FieldError
              message={errors.amount}
              className="absolute right-0 top-0 text-right"
            />
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
