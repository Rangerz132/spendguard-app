import { JSX } from "react";
import { BiTrash, BiXCircle } from "react-icons/bi";
import { BiHighlight } from "react-icons/bi";
import { ActivityType } from "../../Activity/type/ActivityType";
import APIService from "../../../api/APIService";

// Type definition
export type ActivityOptionType = {
  icon: JSX.Element;
  title: string;
  action: (data?: any) => void;
};

// Modify action to accept navigate dynamically
export const activityModifyOption: ActivityOptionType = {
  icon: <BiHighlight />,
  title: "Modify the activity",
  action: (data?: any) => {
    if (data?.navigate) {
      data.navigate("/updateActivity");
    }
  },
};

// Keep other options as they are
export const activityDeleteOption: ActivityOptionType = {
  icon: <BiTrash />,
  title: "Remove the activity",
  action: async (activityType: ActivityType) => {
    return APIService.deleteActivity(activityType.id);
  },
};

export const activityCloseOption: ActivityOptionType = {
  icon: <BiXCircle />,
  title: "Close the activity",
  action: () => {},
};

// Store options in an array
export const activityOptions: ActivityOptionType[] = [
  activityModifyOption,
  activityDeleteOption,
  activityCloseOption,
];
