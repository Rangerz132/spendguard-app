import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import { ProfilType } from "../Profil/ProfilType";
import supabase from "../../config/supabaseConfig";

const Header = () => {
  const profils = useSelector((root: RootState) => root.profils);
  const [profil, setProfil] = useState<ProfilType | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();

        const currentProfil = profils.find(
          (profil) => profil.user_id === data.user?.id
        );

        setProfil(currentProfil as ProfilType);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [profils]);

  return (
    <div className="w-full bg-black py-4 fixed z-20 theme-light:bg-white">
      <div className="flex flex-row justify-between items-center wrapper">
        <Logo />
        {profil && (
          <Avatar
            enableInteraction={true}
            avatarUrl={profil.avatar_url as string}
            onClick={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
