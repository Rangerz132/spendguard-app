import { BiCrown } from "react-icons/bi";
import { BiCloset } from "react-icons/bi";
import { BiLandscape } from "react-icons/bi";
import { BiJoystickAlt } from "react-icons/bi";
import { BiIdCard } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiCapsule } from "react-icons/bi";
import { BiBowlHot } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { BiMusic } from "react-icons/bi";
import { BiBus } from "react-icons/bi";
import { BiBall } from "react-icons/bi";

export type ActivityCategoryType = {
  name: string;
  icon: any;
  color: string;
};

export const getFullCategory = (name: string): ActivityCategoryType => {
  return (
    categoryTypes.find((category) => category.name === name) ?? {
      name,
      icon: null,
      color: "#000",
    }
  );
};

export const foodCategoryType: ActivityCategoryType = {
  name: "food",
  icon: <BiBowlHot />,
  color: "#FFE57F", // soft orange
};

export const musicCategoryType: ActivityCategoryType = {
  name: "music",
  icon: <BiMusic />,
  color: "#A67FFF", // purple
};

export const educationCategoryType: ActivityCategoryType = {
  name: "education",
  icon: <BiBook />,
  color: "#7FBFFF", // pastel blue
};

export const sportCategoryType: ActivityCategoryType = {
  name: "sport",
  icon: <BiBall />,
  color: "#FF1A1A", // red
};

export const transportCategoryType: ActivityCategoryType = {
  name: "transport",
  icon: <BiBus />,
  color: "#FF8A65", // soft orange
};

export const healthCategoryType: ActivityCategoryType = {
  name: "health",
  icon: <BiCapsule />,
  color: "#4DB6AC", // teal
};

export const entertainmentCategoryType: ActivityCategoryType = {
  name: "entertainment",
  icon: <BiJoystickAlt />,
  color: "#FFD54F", // golden yellow
};

export const homeCategoryType: ActivityCategoryType = {
  name: "home",
  icon: <BiHomeAlt2 />,
  color: "#81C784", // green
};

export const travelCategoryType: ActivityCategoryType = {
  name: "travel",
  icon: <BiLandscape />,
  color: "#64B5F6", // sky blue
};

export const clotheCategoryType: ActivityCategoryType = {
  name: "clothe",
  icon: <BiCloset />,
  color: "#F06292", // pink
};

export const personalCareCategoryType: ActivityCategoryType = {
  name: "personal Care",
  icon: <BiIdCard />,
  color: "#F06292", // pink
};

export const subscriptionsCategoryType: ActivityCategoryType = {
  name: "subscriptions",
  icon: <BiCrown />,
  color: "#90A4AE", // greyish blue
};

export const categoryTypes: ActivityCategoryType[] = [
  foodCategoryType,
  musicCategoryType,
  educationCategoryType,
  sportCategoryType,
  transportCategoryType,
  healthCategoryType,
  entertainmentCategoryType,
  homeCategoryType,
  travelCategoryType,
  clotheCategoryType,
  personalCareCategoryType,
  subscriptionsCategoryType,
];
