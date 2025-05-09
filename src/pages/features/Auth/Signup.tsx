import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import GoogleLogo from "/images/providers/logo-google.svg";
import { useAuthContext } from "../../../contexts/AuthContext";
import Button from "../../../components/UI/Button";
import FieldError from "../../../components/Form/FieldError";
import { ValidatorService } from "../../../services/inputValidation";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [errors, setErrors] = useState({ fullName: "" });

  const { signUp, signInWithOAuth, session } = useAuthContext();
  const navigate = useNavigate();

  const validate = (value: string) => {
    const newErrors = {
      fullName: ValidatorService.minCharacters(value, 3),
    };

    setErrors(newErrors);

    return Object.values(newErrors).some((error) => error !== "");
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validate(displayName)) {
      console.log("Form contains errors, fix them first.");
      return;
    }

    try {
      const result = await signUp(email, password, displayName);
      if (result.success) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
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
            <div className="w-full flex flex-col space-y-2 relative">
              <label className="text-white text-sm theme-light:text-black">
                Full Name
              </label>
              <input
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="John Doe"
                type="text"
                className="border border-theme-dark-grey theme-light:border-theme-light-grey "
              ></input>
              <FieldError
                message={errors.fullName}
                className="absolute right-0 top-0 text-right"
              />
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
