import Avatar from "../Avatar/Avatar";
import { useSettingsContext } from "../../contexts/SettingsContext";
import { settingsOptions } from "../Option/SettingsOption/SettingsOption";
import OptionSlot from "../Option/OptionSlot";
import { useOverlayContext } from "../../contexts/OverlayContext";
import SignOut from "../Sign/SignOut";
import supabase from "../../config/supabaseConfig";
import { useEffect, useState } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";

const Sidebar = () => {
  const { setOverlay } = useOverlayContext();
  const { setTheme } = useThemeContext();
  const { settings, setSettings } = useSettingsContext();
  const [userName, setUserName] = useState<string>("Invalid Name");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        const displayName = data.user?.user_metadata.display_name;
        setUserName(displayName);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div
      className={`w-[75vw] h-full fixed bg-theme-dark-dark-grey z-21 left-0 transition-transform duration-500 ${
        settings ? "" : "-translate-x-[100%]"
      } theme-light:bg-white`}
    >
      <div className=" flex flex-col relative h-full">
        <div className="flex flex-row space-x-2 items-center p-6 ">
          {/** Avatar */}
          <Avatar enableInteraction={false} />
          {/** Info */}
          <div className="flex flex-col ">
            <h3 className="text-white theme-light:text-black">{userName}</h3>
          </div>
        </div>
        {/** Border */}
        <div className="w-full bg-white/5 h-[0.5px] theme-light:bg-black/5"></div>
        {/** Setting options */}
        <div className=" p-6 flex flex-col space-y-6 capitalize ">
          {settingsOptions.map((settingOption) => (
            <OptionSlot
              key={settingOption.title}
              activityOption={settingOption}
              data={{ setTheme }}
              onClick={() => {
                setSettings(false);
                setOverlay(false);
              }}
            />
          ))}
        </div>
      </div>
      <div className="absolute left-6 bottom-6">
        <SignOut />
      </div>
    </div>
  );
};

export default Sidebar;
