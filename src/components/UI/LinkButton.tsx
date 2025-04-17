import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router";

const LinkButton = (props: { path: string; children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <Button className="cta" onClick={() => navigate(props.path)}>
      {props.children}
    </Button>
  );
};

export default LinkButton;
