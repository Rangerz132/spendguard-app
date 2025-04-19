import { BiHighlight, BiTrash, BiXCircle } from "react-icons/bi";
import { setStatus } from "../../../store/status/statusSlice";
import { OptionType } from "../type/OptionType";
import { deleteActivity } from "../../../services/supabase/activityService";
import { deleteActivity as deleteActivityRedux } from "../../../store/activities/activitiesSlice";

export const activityModifyOption: OptionType = {
  icon: <BiHighlight />,
  title: "Modify the activity",
  action: (data?: any) => {
    if (data?.navigate) {
      data.navigate(`/updateActivity/${data.id}`);
    }
  },
};

export const activityDeleteOption: OptionType = {
  icon: <BiTrash />,
  title: "Remove the activity",
  action: async (data: any) => {
    await deleteActivity(data.id);
    if (data?.dispatch) {
      data.dispatch(deleteActivityRedux(data.id));
      data.dispatch(
        setStatus({
          message: "You successfully removed an activty.",
          isShowed: true,
          isValid: true,
        })
      );
    }
  },
};

export const activityCloseOption: OptionType = {
  icon: <BiXCircle />,
  title: "Close the activity",
  action: () => {},
};

export const activityOptions: OptionType[] = [
  activityModifyOption,
  activityDeleteOption,
  activityCloseOption,
];
