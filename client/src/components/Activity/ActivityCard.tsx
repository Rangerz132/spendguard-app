import ActivitySlot from "./ActivitySlot";
import {
  educationCategoryType,
  foodCategoryType,
  musicCategoryType,
  sportCategoryType,
  transportCategoryType,
} from "./type/ActivityCategoryType";

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
      <div className="w-full h-[0.5px] bg-white/10"></div>
      <ActivitySlot
        data={{
          id: "41651",
          name: "2nd university payment",
          amount: 1756.63,
          isExpense: true,
          category: educationCategoryType,
          createdAt: new Date(),
        }}
      />{" "}
      <div className="w-full h-[0.5px] bg-white/10"></div>
      <ActivitySlot
        data={{
          id: "41651",
          name: "Football",
          amount: 18.52,
          isExpense: true,
          category: sportCategoryType,
          createdAt: new Date(),
        }}
      />{" "}
      <div className="w-full h-[0.5px] bg-white/10"></div>
      <ActivitySlot
        data={{
          id: "41651",
          name: "Metro ticket",
          amount: 6.5,
          isExpense: true,
          category: transportCategoryType,
          createdAt: new Date(),
        }}
      />{" "}
      <div className="w-full h-[0.5px] bg-white/10"></div>
      <ActivitySlot
        data={{
          id: "41651",
          name: "Ramen ishin",
          amount: 17.99,
          isExpense: true,
          category: foodCategoryType,
          createdAt: new Date(),
        }}
      />{" "}
      <div className="w-full h-[0.5px] bg-white/10"></div>
      <ActivitySlot
        data={{
          id: "41651",
          name: "Ramen ishin",
          amount: 17.99,
          isExpense: true,
          category: foodCategoryType,
          createdAt: new Date(),
        }}
      />
    </div>
  );
};

export default ActivityCard;
