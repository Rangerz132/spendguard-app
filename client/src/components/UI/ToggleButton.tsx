import { BiCheck } from "react-icons/bi";
import React from "react";

const ToggleButton = (props: {
  onClick: () => void;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div onClick={props.onClick} className={props.className}>
      {props.children}
    </div>
  );
};

export default ToggleButton;
