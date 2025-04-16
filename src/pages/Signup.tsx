import { Link, useNavigate } from "react-router";
import Button from "../components/UI/Button";
import { useState } from "react";
import { AuthContext, useAuthContext } from "../contexts/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const { session, setSession, signUpNewUser } = useAuthContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        navigate("/");
      }
    } catch (error) {
      setError("An error occured");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="wrapper page-wrapper w-[100%]">
        <div>
          {/** Title */}
          <h2 className="text-white">Let's get started</h2>
          {/** Subtext */}
          <p className="text-theme-dark-grey">
            Already have an account?{" "}
            <Link to={"/signin"} className="text-indigo">
              Sign in!
            </Link>
          </p>
        </div>

        <form onSubmit={handleSignUp}>
          <div className="flex flex-col space-y-6">
            {/** Email input */}
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              className="border border-theme-dark-grey"
            ></input>
            {/** Password input */}
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              className="border border-theme-dark-grey"
            ></input>
            {/** Signup button */}
            <Button className="cta" type="submit">
              Sign up
            </Button>
            {/** Error */}
            {error && <p className="text-white">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
