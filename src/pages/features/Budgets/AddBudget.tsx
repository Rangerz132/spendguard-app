import BudgetFormCard from "../../../components/Budget/BudgetFormCard";
import BackArrowButton from "../../../components/UI/BackArrowButton";

const AddBudget = () => {
  return (
    <div className="wrapper page-wrapper py-6">
      <section>
        <BudgetFormCard onSubmit={() => {}} />
      </section>
    </div>
  );
};

export default AddBudget;
