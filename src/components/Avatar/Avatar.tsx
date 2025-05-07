import { useOverlayContext } from "../../contexts/OverlayContext";
import { useSettingsContext } from "../../contexts/SettingsContext";

const Avatar = (props: {
  enableInteraction: boolean;
  avatarUrl: string;
  onClick: () => void;
}) => {
  const { setOverlay } = useOverlayContext();
  const { setSettings } = useSettingsContext();
  const handleClick = () => {
    setOverlay(true);
    setSettings(true);
    props.onClick();
  };

  return (
    <div
      className={`w-8 h-8 rounded-full overflow-hidden bg-white ${
        props.enableInteraction && "cursor-pointer"
      }`}
      onClick={() => props.enableInteraction && handleClick()}
    >
      <img
        src={`/images/avatars/${props.avatarUrl}.png`}
        className="w-full h-full"
      />
    </div>
  );
};

export default Avatar;
