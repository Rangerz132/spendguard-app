import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className="w-full bg-black py-6 fixed z-20">
      <div className="flex flex-row justify-between items-center wrapper">
        <Logo />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
