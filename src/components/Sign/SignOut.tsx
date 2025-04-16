import { BiDoorOpen } from "react-icons/bi";
import { useNavigate } from "react-router";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";

const SignOut = () => {
  const { signOut } = useAuthContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async (event) => {
    event.preventDefault();

    try {
      await signOut();
      navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      onClick={handleSignOut}
      className="flex flex-row items-center space-x-2 text-cherry "
    >
      {/** Icon */}
      <BiDoorOpen className="icon" />
      {/** Title */}
      <p className="capitalize"> Sign out</p>
    </div>
  );
};

export default SignOut;
