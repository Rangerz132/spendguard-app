import { useDispatch, useSelector } from "react-redux";
import avatars from "../../../components/Avatar/AvatarData";
import BackArrowButton from "../../../components/UI/BackArrowButton";
import { RootState } from "../../../store/store";
import { useState } from "react";
import { ProfilType } from "../../../components/Profil/ProfilType";
import { updateProfil } from "../../../services/supabase/profilService";
import {
  updateProfil as updateProfilRedux,
  setUserProfil,
} from "../../../store/profils/profilSlices";
import Button from "../../../components/UI/Button";
import { useNavigate } from "react-router";
import { setStatus } from "../../../store/status/statusSlice";

const EditProfil = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userProfil = useSelector((root: RootState) => root.profils.userProfil);
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    (userProfil as ProfilType).avatar_url as string
  );
  const [displayName, setDisplayName] = useState<string>(
    userProfil?.display_name || userProfil?.user_id || ""
  );
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedProfil = {
      ...(userProfil as ProfilType),
      avatar_url: selectedAvatar,
      display_name: displayName,
    };
    dispatch(updateProfilRedux(updatedProfil));
    dispatch(setUserProfil(updatedProfil));

    try {
      await updateProfil(updatedProfil);
      dispatch(
        setStatus({
          message: "You successfully updated your profile.",
          isShowed: true,
          isValid: true,
        })
      );
      navigate(-1);
    } catch (error) {
      console.error("Error while updating profil :", error);
      setStatus({
        message: "An error occured while updating your profile.",
        isShowed: true,
        isValid: false,
      });
    }
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
          <form
            className="flex flex-col space-y-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex flex-col space-y-2 relative">
              {/** Avatar lable */}
              <label className="text-white theme-light:text-black">
                Full Name
              </label>
              <input
                defaultValue={displayName}
                onChange={(e) => setDisplayName(e.currentTarget.value)}
              ></input>
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
                    onClick={() => setSelectedAvatar(avatar.filename)}
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
            <Button type="submit" className="cta">
              Save changes
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EditProfil;
