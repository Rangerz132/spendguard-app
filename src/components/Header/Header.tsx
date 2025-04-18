import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className="w-full bg-black py-4 fixed z-20 theme-light:bg-white">
      <div className="flex flex-row justify-between items-center wrapper">
        <Logo />
        <Avatar enableInteraction={true} />
      </div>
    </div>
  );
};

export default Header;
