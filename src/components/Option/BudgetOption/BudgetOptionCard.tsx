import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";
import { RootState } from "../../../store/store";
import OptionSlot from "../OptionSlot";

import { useOverlayContext } from "../../../contexts/OverlayContext";
import { hideBudgetDetails } from "../../../store/details/budgetDetailsSlice";
import { budgetOptions } from "./BudgetOption";

const BudgetOptionCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setOverlay } = useOverlayContext();
  const details = useSelector((store: RootState) => store.budgetDetails);

  return (
    <div
      className={`detail w-full fixed bottom-0 z-50  transition-all duration-500 ${
        details.isShowed ? "translate-y-[0%]" : "translate-y-[100%]"
      }`}
    >
      {details.data && (
        <div className="flex flex-col space-y-4">
          <h3 className="text-white theme-light:text-theme-light-dark-grey">
            {details.data.name}
          </h3>
          {/** Border*/}
          <div className="bg-white/5 w-full h-[0.5px] theme-light:bg-black/5"></div>
          {/** Options*/}
          <div className="flex flex-col space-y-6">
            {budgetOptions.map((option, index) => (
              <OptionSlot
                key={index}
                activityOption={option}
                data={{ ...details.data, navigate, dispatch }}
                onClick={() => {
                  dispatch(hideBudgetDetails());
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

export default BudgetOptionCard;
