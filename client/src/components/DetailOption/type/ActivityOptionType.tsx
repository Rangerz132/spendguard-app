import { JSX } from "react";
import { BiTrash } from "react-icons/bi";
import { BiHighlight } from "react-icons/bi";

export type ActivityOptionType = {
  icon: JSX.Element;
  title: string;
  action: () => void;
};

export const activityModifyOption: ActivityOptionType = {
  icon: <BiHighlight />,
  title: "Modify the activity",
  action: () => {},
};

export const activityDeleteOption: ActivityOptionType = {
  icon: <BiTrash />,
  title: "Remove the activity",
  action: () => {},
};

export const activityOptions: ActivityOptionType[] = [
  activityModifyOption,
  activityDeleteOption,
];
