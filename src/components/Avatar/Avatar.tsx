import { useOverlayContext } from "../../contexts/OverlayContext";
import { useSettingsContext } from "../../contexts/SettingsContext";
import Avatar09 from "/images/avatars/avatar-09.png";

const Avatar = (props: { enableInteraction: boolean }) => {
  const { setOverlay } = useOverlayContext();
  const { setSettings } = useSettingsContext();
  const handleClick = () => {
    setOverlay(true);
    setSettings(true);
  };

  return (
    <div
      className={`w-8 h-8 rounded-full overflow-hidden bg-white ${
        props.enableInteraction && "cursor-pointer"
      }`}
      onClick={() => props.enableInteraction && handleClick()}
    >
      <img src={Avatar09} className="w-full h-full" />
    </div>
  );
};

export default Avatar;
