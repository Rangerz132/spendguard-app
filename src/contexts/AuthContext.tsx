import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../config/supabaseConfig";
import { ProfilType } from "../components/Profil/ProfilType";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addProfil } from "../store/profils/profilSlices";
import { createProfil } from "../services/supabase/profilService";
import avatars from "../components/Avatar/AvatarData";

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
  loading: any;
  setLoading: any;
};

export const AuthContext = createContext<any>(null);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

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

  const addNewProfil = async (userId: string, displayName: string) => {
    const randomIndex = Math.floor(Math.random() * avatars.length - 1);
    const userProfil: ProfilType = {
      id: uuidv4(),
      created_at: new Date(),
      avatar_url: avatars[randomIndex].filename,
      user_id: userId,
      display_name: displayName,
    };

    await createProfil(userProfil);
    dispatch(addProfil(userProfil));
  };

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setLoading(false);

        const user = session?.user;
        if (!user) return;

        // Check if profile already exists in the 'profils' table
        const { data: existingProfiles, error } = await supabase
          .from("profil")
          .select()
          .eq("user_id", user.id)
          .limit(1);

        if (error) {
          console.error("Error checking existing profile:", error);
          return;
        }

        // If no profile exists, create one
        if (existingProfiles.length === 0) {
          const displayName =
            user.user_metadata.display_name ||
            user.user_metadata.full_name ||
            user.user_metadata.name ||
            user.id;

          await addNewProfil(user.id, displayName);
        }
      }
    );

    // Initial session load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

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
export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }

  return context;
}
