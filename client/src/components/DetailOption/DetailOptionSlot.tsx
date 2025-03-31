import React from "react";
import { ActivityOptionType } from "./type/activityOptionType";
import {
  OverlayContext,
  useOverlayContext,
} from "../../contexts/OverlayContext";
import { useDispatch } from "react-redux";
import { hideDetails } from "../../store/details/detailsSlice";

const DetailOptionSlot = (props: {
  activityOption: ActivityOptionType;
  data: any;
}) => {
  const { setOverlay } = useOverlayContext(OverlayContext);
  const dispatch = useDispatch();
  const { activityOption, data } = props;

  const handleClick = () => {
    setOverlay(false);
    dispatch(hideDetails());
  };

  return (
    <div
      onClick={() => {
        activityOption.action(data);
        handleClick();
      }}
      className="flex flex-row space-x-4 items-center cursor-pointer"
    >
      {/** Icon */}
      {React.cloneElement(activityOption.icon, {
        className: "w-6 h-6 text-grey",
      })}
      {/** Title */}
      <p className="text-white text-base">{activityOption.title}</p>
    </div>
  );
};

export default DetailOptionSlot;
