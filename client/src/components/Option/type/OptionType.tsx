import { JSX } from "react";

export type OptionType = {
  icon: JSX.Element;
  title: string;
  action: (data?: any) => void;
};
