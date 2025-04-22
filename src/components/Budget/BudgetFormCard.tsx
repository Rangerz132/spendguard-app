import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BudgetType } from "./type/BudgetType";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { ValidatorService } from "../../services/inputValidation";
import supabase from "../../config/supabaseConfig";
import FieldError from "../Form/FieldError";
import Button from "../UI/Button";
import BudgetCategorySelection from "./BudgetCategorySelection";
import BudgetCategoryEdit from "./BudgetCategoryEdit";
import { BiPlus } from "react-icons/bi";
import { BudgetCategoryType } from "./type/BudgetCategoryType";
import BackArrowButton from "../UI/BackArrowButton";
import { ActivityCategoryType } from "../Activity/type/ActivityCategoryType";
import EmptyCard from "../Card/EmptyCard";
import BudgetCategoryNewCard from "./BudgetCategoryNewCard";

const BudgetFormCard = (props: {
  initialBudget?: BudgetType;
  onSubmit: (e: React.FormEvent<HTMLFormElement>, budget: BudgetType) => void;
}) => {
  const [budget, setBudget] = useState<BudgetType>(
    props.initialBudget || {
      id: uuidv4(),
      name: "",
      description: "",
      created_at: new Date().toISOString(),
      user_id: null,
    }
  );
  const [isAddingCategory, setIsAddingCategory] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] =
    useState<BudgetCategoryType | null>(null);
  const [budgetCategories, setBudgetCategories] = useState<
    BudgetCategoryType[]
  >([]);

  useEffect(() => {
    console.log(budgetCategories);
  }, [budgetCategories]);

  const [errors, setErrors] = useState({ name: "" });
  const { session } = useAuthContext(AuthContext);

  const updateBudget = (key: string, value: any) => {
    setBudget({ ...budget, [key]: value });
  };

  const handleCategorySelection = (
    e: React.FormEvent<HTMLFormElement>,
    category: ActivityCategoryType
  ) => {
    e.preventDefault();
    const newBudgetCategory = {
      id: "",
      created_at: null,
      category: category.name,
      amount: 0,
      user_id: "",
      budget_id: "",
    };
    setSelectedCategory(newBudgetCategory);
  };

  const handleBudgetCategoryUpdate = (
    e: React.FormEvent<HTMLFormElement>,
    amount: number
  ) => {
    e.preventDefault();
    setIsAddingCategory(false);

    const updatedCategory = { ...selectedCategory, amount };
    setBudgetCategories(
      (prevState) => [...prevState, updatedCategory] as BudgetCategoryType[]
    );
    setSelectedCategory(null);
    setSelectedCategory(null);
  };

  const validate = (activity: BudgetType) => {
    const newErrors = {
      name: ValidatorService.minCharacters(activity.name as string, 3),
    };

    setErrors(newErrors);

    return Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data } = await supabase.auth.getUser();
    const userId = data.user?.id;

    const updatedBudget = { ...budget, user_id: userId as string };

    if (validate(updatedBudget)) {
      console.log("Form contains errors, fix them first.");
      return;
    }

    props.onSubmit(e, updatedBudget);
  };

  return (
    <>
      {!isAddingCategory && (
        <div className="flex flex-col space-y-4">
          {/** Header */}
          <div className="flex flex-row space-x-2 items-center">
            {/** Back arrow */}
            <BackArrowButton path="/" />
            {/** Title */}
            <h2 className="text-white theme-light:text-black">
              Create a new budget
            </h2>
          </div>
          <form
            className="flex flex-col space-y-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="card">
              <div className="flex flex-col space-y-4">
                {/** Description */}
                <div className="flex flex-col space-y-2 relative">
                  <label className="text-white theme-light:text-black">
                    <span className="text-indigo">*</span> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter a name..."
                    defaultValue={props.initialBudget?.name || ""}
                    onChange={(e) =>
                      updateBudget(e.currentTarget.name, e.currentTarget.value)
                    }
                  ></input>
                  <FieldError
                    message={errors.name}
                    className="absolute right-0 top-0 text-right"
                  />
                </div>
                {/** Description */}
                <div className="flex flex-col space-y-2">
                  <label className="text-white theme-light:text-black">
                    Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Enter a description..."
                    defaultValue={props.initialBudget?.description || ""}
                    onChange={(e) =>
                      updateBudget(e.currentTarget.name, e.currentTarget.value)
                    }
                  ></textarea>
                </div>
                {/** Date */}
                <div className="flex flex-row items-center justify-between">
                  {/** Date From*/}
                  <div className="flex flex-col space-y-2">
                    <label className="text-white theme-light:text-black">
                      <span className="text-indigo">*</span> From
                    </label>
                    <input
                      name="description"
                      type="date"
                      onChange={(e) =>
                        updateBudget(
                          e.currentTarget.name,
                          e.currentTarget.value
                        )
                      }
                    ></input>
                  </div>
                  {/** Date To*/}
                  <div className="flex flex-col space-y-2">
                    <label className="text-white theme-light:text-black">
                      <span className="text-indigo">*</span> To
                    </label>
                    <input
                      name="description"
                      type="date"
                      onChange={(e) =>
                        updateBudget(
                          e.currentTarget.name,
                          e.currentTarget.value
                        )
                      }
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            {/** Categories */}
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row items-center justify-between">
                {/** Title */}
                <h2 className="text-white theme-light:text-black">
                  Categories
                </h2>
                {/** Add category button */}
                <Button onClick={() => setIsAddingCategory(true)}>
                  <BiPlus className="icon text-theme-dark-grey" />
                </Button>
              </div>
              {/** List of current categories */}
              {budgetCategories.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {budgetCategories.map((budgetCategory) => (
                    <BudgetCategoryNewCard
                      budgetCategory={budgetCategory}
                      key={budgetCategory.category}
                    />
                  ))}
                </div>
              ) : (
                <EmptyCard
                  title={"You don't have any activities"}
                  description={
                    "List of activities you've created will appear here."
                  }
                  button={
                    <Button
                      onClick={() => setIsAddingCategory(true)}
                      className="cta"
                    >
                      Add activity
                    </Button>
                  }
                />
              )}
            </div>

            {/** Add budget button */}
            <Button className="cta">Add budget</Button>
          </form>
        </div>
      )}

      {/** Budget Category Selection */}
      {isAddingCategory && !selectedCategory && (
        <BudgetCategorySelection
          onCategorySelect={handleCategorySelection}
          onPrevious={() => setIsAddingCategory(false)}
          usedBudgetCategories={budgetCategories}
        />
      )}

      {/** Budget Category Edit */}
      {selectedCategory && (
        <BudgetCategoryEdit
          budgetCategoryType={selectedCategory}
          onCategoryEdit={() => {}}
          onPrevious={() => {
            setSelectedCategory(null);
          }}
          onBudgetCategoryUpdate={(e, amount) =>
            handleBudgetCategoryUpdate(e, amount)
          }
        />
      )}
    </>
  );
};

export default BudgetFormCard;
