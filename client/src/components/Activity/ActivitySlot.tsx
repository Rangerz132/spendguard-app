import { BsThreeDotsVertical } from "react-icons/bs";
import React, { JSX } from "react";
import { ActivityType } from "./type/ActivityType";
import { getFullCategory } from "./type/ActivityCategoryType";
import {
  OverlayContext,
  useOverlayContext,
} from "../../contexts/OverlayContext";
import { useDispatch } from "react-redux";
import { setDetails, showDetails } from "../../store/details/detailsSlice";

const ActivitySlot = ({
  data,
  addDetails = true,
}: {
  data: ActivityType;
  addDetails?: boolean;
}) => {
  const dispatch = useDispatch();

  const { setOverlay } = useOverlayContext(OverlayContext);
  const category = getFullCategory(data.category);

  function setActivityDetail() {
    dispatch(setDetails(data));
    dispatch(showDetails());
  }

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row space-x-2">
        {/** Icon */}
        <div
          className={`w-10 h-10 rounded-md flex items-center justify-center`}
          style={{ backgroundColor: category.color }}
        >
          {React.cloneElement(
            getFullCategory(category.name).icon as JSX.Element,
            {
              className: `w-7 h-7 text-black/80`,
            }
          )}
        </div>
        <div className="flex flex-col">
          {/** Name */}
          <p className="text-white">{data.name}</p>
          {/** Date */}
          <p className="text-[10px] text-grey">{data.createdAt}</p>
        </div>
      </div>

      <div
        className={`flex flex-row  items-center ${
          addDetails ? "space-x-6" : "space-x-0"
        }`}
      >
        {/** Amount */}
        <p className={`${data.isExpense ? "text-cherry" : "text-lime"}`}>
          ${data.isExpense ? "-" : ""}
          {data.amount}
        </p>
        {/** More */}
        <BsThreeDotsVertical
          className={`text-grey cursor-pointer ${
            addDetails ? "" : "hidden absolute"
          }`}
          onClick={() => {
            setOverlay(true);
            setActivityDetail();
          }}
        />
      </div>
    </div>
  );
};

export default ActivitySlot;
