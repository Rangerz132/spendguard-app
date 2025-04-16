import { Link, useNavigate } from "react-router";
import Button from "../components/UI/Button";
import { useState } from "react";
import { AuthContext, useAuthContext } from "../contexts/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const { signInUser } = useAuthContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const result = await signInUser(email, password);
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
          <h2 className="text-white">Welcome back</h2>
          {/** Subtext */}
          <p className="text-theme-dark-grey">
            Don't already have an account?{" "}
            <Link to={"/signup"} className="text-indigo">
              Sign up!
            </Link>
          </p>
        </div>

        <form onSubmit={handleSignIn}>
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
              Sign in
            </Button>
            {/** Error */}
            {error && <p className="text-white">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
