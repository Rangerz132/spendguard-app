import React, { JSX } from "react";

const StatusCard = (props: {
  message: string;
  icon: JSX.Element | null;
  className: string;
}) => {
  return (
    <div className="bottom-20 z-50 fixed wrapper w-full ">
      <div className="bg-green-400 rounded-2xl p-4">
        <div
          className={`flex flex-row items-center space-x-2 ${props.className}`}
        >
          {/** Icon */}
          {props.icon &&
            React.cloneElement(props.icon, { className: "w-6 h-6" })}
          {/** Message */}
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
