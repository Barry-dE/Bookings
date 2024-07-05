import supabase from "./supabase";

export async function getCabinData() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("There was an error fetching cabins");
  }

  return data;
}
