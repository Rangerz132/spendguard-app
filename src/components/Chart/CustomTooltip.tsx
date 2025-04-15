import React from "react";
import { TooltipProps } from "recharts";

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="card flex flex-col items-center justify-center border border-indigo">
        <p className="text-theme-dark-grey text-xs capitalize theme-light:text-theme-light-dark-grey">
          {label}
        </p>
        <p className="text-white capitalize theme-light:text-black">
          ${payload[0].value}
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
