import { BiAlignLeft, BiSmile, BiSun, BiXCircle } from "react-icons/bi";
import { OptionType } from "../type/OptionType";

export const editProfileOption: OptionType = {
  icon: <BiSmile />,
  title: "Edit profile",
  action: () => {},
};

export const termsAndPoliciesOption: OptionType = {
  icon: <BiAlignLeft />,
  title: "Terms and policies",
  action: () => {},
};

export const switchThemeOption: OptionType = {
  icon: <BiSun />,
  title: "Switch theme",
  action: () => {},
};

export const closeSettingsOption: OptionType = {
  icon: <BiXCircle />,
  title: "Close settings",
  action: () => {},
};

export const settingsOptions: OptionType[] = [
  editProfileOption,
  termsAndPoliciesOption,
  switchThemeOption,
  closeSettingsOption,
];
