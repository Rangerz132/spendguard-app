import { BiSmile, BiSun, BiXCircle } from "react-icons/bi";
import { OptionType } from "../type/OptionType";

export const editProfileOption: OptionType = {
  icon: <BiSmile />,
  title: "Edit profile",
  action: () => {},
};

export const switchThemeOption: OptionType = {
  icon: <BiSun />,
  title: "Switch theme",
  action: (data?: any) => {
    console.log(data);
    if (data.setTheme) {
      data.setTheme((prevState) => (prevState === "Dark" ? "Light" : "Dark"));
    }
  },
};

export const closeSettingsOption: OptionType = {
  icon: <BiXCircle />,
  title: "Close settings",
  action: () => {},
};

export const settingsOptions: OptionType[] = [
  editProfileOption,
  switchThemeOption,
  closeSettingsOption,
];
