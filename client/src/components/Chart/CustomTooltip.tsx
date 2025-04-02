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
        <p className="text-grey text-xs capitalize">{label}</p>
        <p className="text-white capitalize">${payload[0].value}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
