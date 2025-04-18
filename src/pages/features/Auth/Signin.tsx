import { Link, useNavigate } from "react-router";
import GoogleLogo from "/images/providers/logo-google.svg";
import { useEffect, useState } from "react";
import { AuthContext, useAuthContext } from "../../../contexts/AuthContext";
import Button from "../../../components/UI/Button";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn, signInWithOAuth, session } = useAuthContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await signIn(email, password);
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
          <h1 className="text-white theme-light:text-black">Welcome back 👋</h1>
          {/** Subtext */}
          <p className="text-theme-dark-grey theme-light:text-theme-light-dark-grey">
            Please enter your account details
          </p>
        </div>

        <form onSubmit={handleSignIn}>
          <div className="flex flex-col space-y-6">
            {/** Email input */}
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              className="border border-theme-dark-grey  theme-light:border-theme-light-grey"
            ></input>
            {/** Password input */}
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              className="border border-theme-dark-grey theme-light:border-theme-light-grey"
            ></input>
            {/** Signup button */}
            <Button className="cta" type="submit">
              Sign in
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
          <p>Sign in with Google</p>
        </Button>
        {/** Subtext */}
        <p className="text-theme-dark-grey theme-light:text-theme-light-dark-grey text-center text-xs">
          Don't already have an account?{" "}
          <Link to={"/signup"} className="text-indigo">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
