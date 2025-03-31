import {
  OverlayContext,
  useOverlayContext,
} from "../../contexts/OverlayContext";

const Overlay = () => {
  const { overlay } = useOverlayContext(OverlayContext);
  return (
    <div
      className={`fixed z-20 left-0 top-0 w-screen h-screen bg-black ${
        overlay ? "opacity-75" : "opacity-0 pointer-events-none"
      } transition-opacity  duration-500`}
    ></div>
  );
};

export default Overlay;
