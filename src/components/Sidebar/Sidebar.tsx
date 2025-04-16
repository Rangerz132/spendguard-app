import Avatar from "../Avatar/Avatar";
import {
  SettingsContext,
  useSettingsContext,
} from "../../contexts/SettingsContext";
import { settingsOptions } from "../Option/SettingsOption/SettingsOption";
import OptionSlot from "../Option/OptionSlot";
import {
  OverlayContext,
  useOverlayContext,
} from "../../contexts/OverlayContext";
import SignOut from "../Sign/SignOut";

const Sidebar = () => {
  const { setOverlay } = useOverlayContext(OverlayContext);
  const { settings, setSettings } = useSettingsContext(SettingsContext);

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
            <h3 className="text-white theme-light:text-black">John Doe</h3>
            <p className="text-theme-dark-grey text-xs theme-light:text-theme-light-grey">
              8s9fhw729ksa
            </p>
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
              data={undefined}
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
