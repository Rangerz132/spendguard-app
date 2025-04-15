import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";
import { RootState } from "../../../store/store";
import ActivitySlot from "../../Activity/ActivitySlot";
import OptionSlot from "../OptionSlot";

import {
  OverlayContext,
  useOverlayContext,
} from "../../../contexts/OverlayContext";
import { hideDetails } from "../../../store/details/detailsSlice";
import { activityOptions } from "./ActivityOption";

const ActivityOptionCard = (props: { children?: React.ReactNode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setOverlay } = useOverlayContext(OverlayContext);
  const details = useSelector((store: RootState) => store.details);

  return (
    <div
      className={`detail w-full fixed bottom-0 z-50  transition-all duration-500 ${
        details.isShowed ? "translate-y-[0%]" : "translate-y-[100%]"
      }`}
    >
      {details.data && (
        <div className="flex flex-col space-y-4">
          {/** Activity Slot */}
          <ActivitySlot data={details.data} addDetails={false} />
          {/** Border*/}
          <div className="bg-white/5 w-full h-[0.5px] theme-light:bg-black/5"></div>
          {/** Options*/}
          <div className="flex flex-col space-y-6">
            {activityOptions.map((option, index) => (
              <OptionSlot
                key={index}
                activityOption={option}
                data={{ ...details.data, navigate, dispatch }}
                onClick={() => {
                  dispatch(hideDetails());
                  setOverlay(false);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityOptionCard;
