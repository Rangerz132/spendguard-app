import { useSelector } from "react-redux";
import ActivitySlot from "../Activity/ActivitySlot";
import DetailOptionSlot from "./DetailOptionSlot";
import { activityOptions } from "./type/activityOptionType";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router";

const DetailOptionCard = (props: { children?: React.ReactNode }) => {
  const details = useSelector((store: RootState) => store.details);
  const navigate = useNavigate();

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
          <div className="bg-white/5 w-full h-[0.5px]"></div>
          {/** Options*/}
          <div className="flex flex-col space-y-6">
            {activityOptions.map((option, index) => (
              <DetailOptionSlot
                key={index}
                activityOption={option}
                data={{ ...details.data, navigate }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailOptionCard;
