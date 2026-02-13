import { supabase } from "@/lib/supabase";
import type { LogEntry } from "@/types/database";

export const getEntries = async (): Promise<LogEntry[]> => {    
    const {data, error} = await supabase
    .from('log_entries')
    .select('*')
    .order('created_at', {ascending: false})

    if(error){
        console.error('Error al obtener logs: ', error.message);
        return [];
    }

    return data as LogEntry[];
}

export const getLogBySlug = async (slug: string): Promise<LogEntry | null> => {
  const { data, error } = await supabase
    .from("log_entries")
    .select("*")
    .eq("slug", slug) // Filtramos por la columna slug
    .maybeSingle();   // Retorna el objeto o null si no existe, sin lanzar error

  if (error) {
    console.error("Error al buscar el log:", error.message);
    return null;
  }

  return data as LogEntry;
};