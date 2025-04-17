import { useNavigate } from "react-router";
import { AuthContext, useAuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useAuthContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !session) {
      navigate("/signin");
    }
  }, [session, loading, navigate]);

  if (loading) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateLayout;
