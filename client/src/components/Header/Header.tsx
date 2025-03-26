import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className="w-full bg-black py-2 fixed">
      <div className="flex flex-row justify-between wrapper">
        <Logo />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
