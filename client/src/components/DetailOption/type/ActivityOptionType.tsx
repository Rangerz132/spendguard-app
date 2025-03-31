import { JSX } from "react";
import { BiTrash } from "react-icons/bi";
import { BiHighlight } from "react-icons/bi";
import { ActivityType } from "../../Activity/type/ActivityType";
import APIService from "../../../api/APIService";

export type ActivityOptionType = {
  icon: JSX.Element;
  title: string;
  action: (activityType: ActivityType) => void;
};

export const activityModifyOption: ActivityOptionType = {
  icon: <BiHighlight />,
  title: "Modify the activity",
  action: () => {},
};

export const activityDeleteOption: ActivityOptionType = {
  icon: <BiTrash />,
  title: "Remove the activity",
  action: async (activityType: ActivityType) => {
    return APIService.deleteActivity(activityType.id);
  },
};

export const activityOptions: ActivityOptionType[] = [
  activityModifyOption,
  activityDeleteOption,
];
