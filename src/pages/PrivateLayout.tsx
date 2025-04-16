import { useNavigate } from "react-router";
import { AuthContext, useAuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const { session } = useAuthContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/signin");
    }
  }, [session, navigate]);

  if (!session) return null; // or a loading spinner while redirecting

  return <>{children}</>;
};

export default PrivateLayout;
