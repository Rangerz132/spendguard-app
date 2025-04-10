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

const Sidebar = () => {
  const { setOverlay } = useOverlayContext(OverlayContext);
  const { settings, setSettings } = useSettingsContext(SettingsContext);

  return (
    <div
      className={`w-[75vw] h-screen fixed bg-dark-grey z-21 left-0 transition-transform duration-500 ${
        settings ? "" : "-translate-x-[100%]"
      }`}
    >
      <div className=" flex flex-col ">
        <div className="flex flex-row space-x-2 items-center p-6">
          {/** Avatar */}
          <Avatar enableInteraction={false} />
          {/** Info */}
          <div className="flex flex-col ">
            <h3 className="text-white">John Doe</h3>
            <p className="text-grey text-xs">8s9fhw729ksa</p>
          </div>
        </div>
        {/** Border */}
        <div className="w-full bg-white/5 h-[0.5px]"></div>
        {/** Setting options */}
        <div className="text-grey p-6 flex flex-col space-y-6 capitalize">
          {settingsOptions.map((settingOption) => (
            <OptionSlot
              key={settingOption.title}
              activityOption={{
                icon: settingOption.icon,
                title: settingOption.title,
                action: () => {},
              }}
              data={undefined}
              onClick={() => {
                setSettings(false);
                setOverlay(false);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
