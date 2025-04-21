import BudgetFormCard from "../../../components/Budget/BudgetFormCard";
import BackArrowButton from "../../../components/UI/BackArrowButton";

const AddBudget = () => {
  return (
    <div className="wrapper page-wrapper py-6">
      <section>
        {/** Header */}
        <div className="flex flex-row space-x-2 items-center">
          {/** Back arrow */}
          <BackArrowButton path="/" />
          {/** Title */}
          <h2 className="text-white theme-light:text-black">
            Create a new budget
          </h2>
        </div>
        <BudgetFormCard onSubmit={() => {}} />
      </section>
    </div>
  );
};

export default AddBudget;
