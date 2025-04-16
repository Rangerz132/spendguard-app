import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../config/supabaseConfig";

type AuthContextType = {
  session: any;
  setSession: any;
  signUpNewUser: (
    email: string,
    password: string
  ) => Promise<{
    success: boolean;
    data?: any;
    error?: any;
  }>;
  signOut: any;
};

export const AuthContext = createContext<any>(null);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<any>(null);

  const signUpNewUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("There was a problem signing up", error);
      return { success: false, error };
    }

    return { success: true, data };
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.email) {
        setSession(session);
      }
    });

    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  const signOut = () => {
    const { error } = supabase.auth.signOut();

    if (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ session, setSession, signUpNewUser, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the context
export function useAuthContext(AuthContext: any): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }

  return context;
}
