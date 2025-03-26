import ActivitySlot from "./ActivitySlot";
import { musicCategoryType } from "./type/ActivityCategoryType";

const ActivityCard = () => {
  return (
    <div className="card flex flex-col space-y-3">
      <ActivitySlot
        data={{
          id: "41651",
          name: "Drake's new album",
          amount: 12.99,
          isExpense: true,
          category: musicCategoryType,
          createdAt: new Date(),
        }}
      />
      <ActivitySlot
        data={{
          id: "41651",
          name: "Drake's new album",
          amount: 12.99,
          isExpense: true,
          category: musicCategoryType,
          createdAt: new Date(),
        }}
      />
      <ActivitySlot
        data={{
          id: "41651",
          name: "Drake's new album",
          amount: 12.99,
          isExpense: true,
          category: musicCategoryType,
          createdAt: new Date(),
        }}
      />
      <ActivitySlot
        data={{
          id: "41651",
          name: "Drake's new album",
          amount: 12.99,
          isExpense: true,
          category: musicCategoryType,
          createdAt: new Date(),
        }}
      />
      <ActivitySlot
        data={{
          id: "41651",
          name: "Drake's new album",
          amount: 12.99,
          isExpense: true,
          category: musicCategoryType,
          createdAt: new Date(),
        }}
      />
      <ActivitySlot
        data={{
          id: "41651",
          name: "Drake's new album",
          amount: 12.99,
          isExpense: true,
          category: musicCategoryType,
          createdAt: new Date(),
        }}
      />
    </div>
  );
};

export default ActivityCard;
