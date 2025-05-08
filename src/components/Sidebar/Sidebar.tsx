import Avatar from "../Avatar/Avatar";
import { useSettingsContext } from "../../contexts/SettingsContext";
import { settingsOptions } from "../Option/SettingsOption/SettingsOption";
import OptionSlot from "../Option/OptionSlot";
import { useOverlayContext } from "../../contexts/OverlayContext";
import SignOut from "../Sign/SignOut";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ProfilType } from "../Profil/ProfilType";

const Sidebar = () => {
  const { setOverlay } = useOverlayContext();
  const { setTheme } = useThemeContext();
  const { settings, setSettings } = useSettingsContext();
  const userProfil = useSelector((root: RootState) => root.profils.userProfil);

  const navigate = useNavigate();

  return (
    <div
      className={`w-[75vw] h-full fixed bg-theme-dark-dark-grey z-21 left-0 transition-transform duration-500 ${
        settings ? "" : "-translate-x-[100%]"
      } theme-light:bg-white`}
    >
      <div className=" flex flex-col relative h-full">
        <div className="flex flex-row space-x-2 items-center p-6 ">
          {/** Avatar */}
          {userProfil && (
            <Avatar
              enableInteraction={false}
              avatarUrl={(userProfil as ProfilType).avatar_url as string}
              onClick={() => {}}
            />
          )}

          {/** Info */}
          <div className="flex flex-col ">
            <h3 className="text-white theme-light:text-black">
              {userProfil?.display_name}
            </h3>
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
              data={{ setTheme, navigate }}
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
