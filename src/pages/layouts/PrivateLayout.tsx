import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useAuthContext();
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
