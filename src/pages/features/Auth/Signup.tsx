import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import GoogleLogo from "/images/providers/logo-google.svg";
import { useAuthContext } from "../../../contexts/AuthContext";
import Button from "../../../components/UI/Button";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");

  const { signUp, signInWithOAuth, session } = useAuthContext();
  const navigate = useNavigate();

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await signUp(email, password, displayName);
      if (result.success) {
        navigate("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="wrapper page-wrapper w-[100%]">
        <div className="flex flex-col space-y-2">
          {/** Title */}
          <h1 className="text-white theme-light:text-black">
            Let's get started 🌟
          </h1>
          {/** Subtext */}
          <p className="text-theme-dark-grey theme-light:text-theme-light-dark-grey">
            Take control of your finances with{" "}
            <span className="text-indigo">Spendguard</span>, your smart budget
            companion.
          </p>
        </div>

        <form onSubmit={handleSignUp}>
          <div className="flex flex-col space-y-4">
            {/** Name input */}
            <div className="w-full flex flex-col space-y-2">
              <label className="text-white text-sm theme-light:text-black">
                Full Name
              </label>
              <input
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="John Doe"
                type="text"
                className="border border-theme-dark-grey theme-light:border-theme-light-grey "
              ></input>
            </div>

            {/** Email input */}
            <div className="w-full flex flex-col space-y-2">
              <label className="text-white text-sm theme-light:text-black">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@hotmail.com"
                type="email"
                className="border border-theme-dark-grey  theme-light:border-theme-light-grey w-full"
              ></input>
            </div>

            {/** Password input */}
            <div className="w-full flex flex-col space-y-2">
              <label className="text-white text-sm theme-light:text-black">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                type="password"
                className="border border-theme-dark-grey theme-light:border-theme-light-grey"
              ></input>
            </div>
            {/** Signup button */}
            <Button className="cta" type="submit">
              Sign up
            </Button>
            {/** Error */}
            {error && <p className="text-white">{error}</p>}
          </div>
        </form>
        {/** Border */}
        <div className="w-full bg-white/10 h-[0.5px] theme-light:bg-black/10"></div>
        {/** Google */}
        <Button
          onClick={signInWithOAuth}
          className="text-theme-dark-dark-grey flex flex-row space-x-4 items-center justify-center bg-theme-light-light-grey rounded-lg p-2"
        >
          <img className="icon" src={GoogleLogo} />
          <p>Sign up with Google</p>
        </Button>
        {/** Subtext */}
        <p className="text-theme-dark-grey theme-light:text-theme-light-dark-grey  text-center text-xs">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-indigo">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
