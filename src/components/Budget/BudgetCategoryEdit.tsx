import BackArrowButton from "../UI/BackArrowButton";
import Button from "../UI/Button";
import { BudgetCategoryType } from "./type/BudgetCategoryType";

const BudgetCategoryEdit = (props: {
  budgetCategoryType: BudgetCategoryType;
}) => {
  return (
    <section>
      <div className="flex flex-row space-x-2 items-center ">
        {/** Back arrow */}
        <BackArrowButton path="/" />
        {/** Title */}
        <h2 className="text-white theme-light:text-black">Edit category</h2>
      </div>
      <div className="card">
        <form onSubmit={() => {}} className="flex flex-col space-y-4">
          {/** Category */}
          <div className="flex flex-col space-y-2 relative">
            <label className="text-white theme-light:text-black">
              Category
            </label>
            <input
              type="text"
              name="cateogry"
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
              placeholder={props.budgetCategoryType.amount.toString()}
              defaultValue={props.budgetCategoryType.amount || 0}
              className="capitalize "
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
