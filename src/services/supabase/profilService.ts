import { ProfilType } from "../../components/Profil/ProfilType";
import supabase from "../../config/supabaseConfig";

// GET
export const getProfil = async (): Promise<ProfilType | null> => {
  const dataUser = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("profil")
    .select()
    .eq("user_id", dataUser.data.user?.id)
    .single();

  if (error) {
    console.error("Error fetching profil:", error);
    return null;
  }

  return data;
};

// GET
export const getProfils = async (): Promise<ProfilType[]> => {
  const dataUser = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("profil")
    .select()
    .eq("user_id", dataUser.data.user?.id);

  if (error) {
    console.error("Error fetching profil:", error);
    return [];
  }

  return data || [];
};

// PUT
export const updateProfil = async (
  profil: ProfilType
): Promise<ProfilType | null> => {
  const { data, error } = await supabase
    .from("profil")
    .update(profil)
    .eq("id", profil.id)
    .select()
    .single();

  if (error) {
    console.error("Error updating profil:", error);
    return null;
  }

  return data;
};

// POST
export const createProfil = async (
  profil: ProfilType
): Promise<ProfilType | null> => {
  const { data, error } = await supabase
    .from("profil")
    .insert([profil])
    .select()
    .single();

  if (error) {
    console.error("Error creating profil:", error);
    return null;
  }

  return data;
};
