import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router";

const LinkButton = (props: {
  path: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(props.path)}
      className={`${props.className}`}
    >
      {props.children}
    </Button>
  );
};

export default LinkButton;
