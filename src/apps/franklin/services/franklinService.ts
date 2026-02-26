import { supabase } from '@/shared/lib/supabase';

export type LogStatus = 'success' | 'fail';

export interface FranklinLog {
  virtue_id: number;
  date: string;
  status: LogStatus;
  user_id: string;
}

export const franklinService = {
  async saveLog(log: FranklinLog) {
    const { data, error } = await supabase
      .from('franklin_logs')
      .upsert(log, {
        onConflict: 'user_id, virtue_id, date',
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getLogsByVirtue(userId: string, virtueId: number) {
    const { data, error } = await supabase
      .from('franklin_logs')
      .select('*')
      .eq('user_id', userId)
      .eq('virtue_id', virtueId)
      .order('date', { ascending: true });

    if (error) throw error;
    return data;
  },

  // Borrar un log (si el usuario quiere resetear el día a 'none')
  async deleteLog(userId: string, virtueId: number, date: string) {
    const { error } = await supabase
      .from('franklin_logs')
      .delete()
      .eq('user_id', userId)
      .eq('virtue_id', virtueId)
      .eq('date', date);

    if (error) throw error;
  },
};
