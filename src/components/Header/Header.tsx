import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";

import { ProfilType } from "../Profil/ProfilType";

const Header = () => {
  const userProfil = useSelector((root: RootState) => root.profils.userProfil);

  return (
    <div className="w-full bg-black py-4 fixed z-20 theme-light:bg-white">
      <div className="flex flex-row justify-between items-center wrapper">
        <Logo />
        {userProfil && (
          <Avatar
            enableInteraction={true}
            avatarUrl={(userProfil as ProfilType).avatar_url as string}
            onClick={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
