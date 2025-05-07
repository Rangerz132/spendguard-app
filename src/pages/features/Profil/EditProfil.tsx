import { useSelector } from "react-redux";
import avatars from "../../../components/Avatar/AvatarData";
import BackArrowButton from "../../../components/UI/BackArrowButton";
import { RootState } from "../../../store/store";
import { useEffect, useState } from "react";
import { ProfilType } from "../../../components/Profil/ProfilType";
import supabase from "../../../config/supabaseConfig";
import { updateProfil } from "../../../services/supabase/profilService";
import { updateProfil as updateProfilRedux } from "../../../store/profils/profilSlices";

const EditProfil = () => {
  const profils = useSelector((root: RootState) => root.profils);
  const [profil, setProfil] = useState<ProfilType | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<string>("empty");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();

        const currentProfil = profils.find(
          (profil) => profil.user_id === data.user?.id
        );

        setProfil(currentProfil as ProfilType);
        setSelectedAvatar((currentProfil as ProfilType).avatar_url as string);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [profils]);

  const handleAvatarSelection = async (avatar: string) => {
    setSelectedAvatar(avatar);

    const updatedProfil = { ...(profil as ProfilType), avatar_url: avatar };
    await updateProfil(updatedProfil);
    updateProfilRedux(updatedProfil);
  };

  return (
    <div className="wrapper page-wrapper py-6">
      <section>
        {/** Header */}
        <div className="flex flex-row space-x-2 items-center">
          {/** Back arrow */}
          <BackArrowButton />
          {/** Title */}
          <h2 className="text-white theme-light:text-black capitalize">
            Edit profil
          </h2>
        </div>
        <div className="card">
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 relative">
              {/** Avatar lable */}
              <label className="text-white theme-light:text-black">
                Full Name
              </label>
              <input></input>
            </div>
            <div className="flex flex-col space-y-2 relative">
              {/** Avatar lable */}
              <label className="text-white theme-light:text-black">
                Select your avatar
              </label>
              {/** Avatar list */}
              <div className="grid grid-cols-5 gap-3">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className=" flex items-center justify-center overflow-hidden"
                    onClick={() => handleAvatarSelection(avatar.filename)}
                  >
                    <img
                      src={avatar.src}
                      className={`w-12 h-12 rounded-full border-3 ${
                        avatar.filename.includes(selectedAvatar)
                          ? "border-indigo"
                          : "border-transparent"
                      } `}
                    />
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EditProfil;
