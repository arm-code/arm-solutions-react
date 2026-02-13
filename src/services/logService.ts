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