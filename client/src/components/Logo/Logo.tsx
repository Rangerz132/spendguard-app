import { Link } from "react-router";
import LogoSVG from "../../../public/images/spendguard-logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="w-6 h-6">
      <img src={LogoSVG} alt={"logo"} />
    </Link>
  );
};

export default Logo;
