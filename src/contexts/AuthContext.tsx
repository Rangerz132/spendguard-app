import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../config/supabaseConfig";

type AuthContextType = {
  session: any;
  setSession: any;
  signUp: (
    email: string,
    password: string,
    displayName?: string
  ) => Promise<{
    success: boolean;
    data?: any;
    error?: any;
  }>;
  signOut: any;
  signIn: any;
  signInWithOAuth: any;
};

export const AuthContext = createContext<any>(null);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  /** Sign up via email  */
  const signUp = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: `${displayName}` },
      },
    });

    if (error) {
      console.error("There was a problem signing up", error);
      return { success: false, error };
    }

    return { success: true, data };
  };

  /** Sign up/in with Google  */
  const signInWithOAuth = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    console.log();

    if (error) {
      console.error("OAuth error:", error.message);
    }
  };

  /** Sign in via email  */
  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("There was a problem signing in", error);
      return { success: false, error };
    }

    return { success: true, data };
  };

  /** Sign out */
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("There was an error:", error);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        setSession,
        signUp,
        signOut,
        signIn,
        signInWithOAuth,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the context
export function useAuthContext(
  AuthContext: React.Context<AuthContextType>
): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }

  return context;
}
