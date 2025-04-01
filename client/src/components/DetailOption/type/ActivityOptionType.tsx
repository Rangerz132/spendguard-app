import { JSX } from "react";
import { BiTrash, BiXCircle } from "react-icons/bi";
import { BiHighlight } from "react-icons/bi";
import { setStatus } from "../../../store/status/statusSlice";

export type ActivityOptionType = {
  icon: JSX.Element;
  title: string;
  action: (data?: any) => void;
};

export const activityModifyOption: ActivityOptionType = {
  icon: <BiHighlight />,
  title: "Modify the activity",
  action: (data?: any) => {
    if (data?.navigate) {
      console.log("hehe");
      data.navigate(`/updateActivity/${data.id}`);
    }
  },
};

export const activityDeleteOption: ActivityOptionType = {
  icon: <BiTrash />,
  title: "Remove the activity",
  action: async (data: any) => {
    if (data?.dispatch) {
      data.dispatch(
        setStatus({
          message: "You successfully removed an activty.",
          isShowed: true,
          isValid: true,
        })
      );
    }
    // return APIService.deleteActivity(data.id);
  },
};

export const activityCloseOption: ActivityOptionType = {
  icon: <BiXCircle />,
  title: "Close the activity",
  action: () => {},
};

export const activityOptions: ActivityOptionType[] = [
  activityModifyOption,
  activityDeleteOption,
  activityCloseOption,
];
