import { BiSun } from "react-icons/bi";
import { BiAlignLeft } from "react-icons/bi";
import { BiSmile } from "react-icons/bi";
import { BiXCircle } from "react-icons/bi";

import Avatar from "../Avatar/Avatar";
import {
  SettingsContext,
  useSettingsContext,
} from "../../contexts/SettingsContext";

const Sidebar = () => {
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
        <div className="w-full bg-white/5 h-[0.5px]"></div>
        <div className="text-grey p-6 flex flex-col space-y-6 capitalize">
          {/** Edit profile */}
          <div className="flex flex-row space-x-2 ">
            <BiSmile className="icon text-grey " />
            <p className="text-white text-base">Edit profile</p>
          </div>
          {/** Terms and policies */}
          <div className="flex flex-row space-x-2 ">
            <BiAlignLeft className="icon text-grey " />
            <p className="text-white text-base">Terms and policies</p>
          </div>
          {/** Switch Theme */}
          <div className="flex flex-row space-x-2 ">
            <BiSun className="icon text-grey " />
            <p className="text-white text-base">Switch Theme</p>
          </div>
          {/** Close */}
          <div className="flex flex-row space-x-2">
            <BiXCircle className="icon text-grey" />
            <p className="text-white text-base">Close settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
