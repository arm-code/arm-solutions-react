import { useState, useEffect, useCallback } from 'react';
import { franklinService, type LogStatus } from '../services/franklinService';

import { toast } from 'sonner';

export function useFranklin(virtueId: number, userId: string | undefined) {
  const [logs, setLogs] = useState<Record<string, LogStatus>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Cargar logs existentes
  const fetchLogs = useCallback(async () => {
    if (!userId) return;
    try {
      setIsLoading(true);
      const data = await franklinService.getLogsByVirtue(userId, virtueId);

      // Convertimos el array de la DB en un objeto { "2026-02-26": "success" } 
      // para acceso O(1) en la UI
      const logsMap = data.reduce((acc, log) => {
        acc[log.date] = log.status as LogStatus;
        return acc;
      }, {} as Record<string, LogStatus>);

      setLogs(logsMap);
    } catch (error) {
      toast.error("Error al cargar el progreso");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [virtueId, userId]);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  // Función para cambiar el estado de un día (La lógica del clic)
  const toggleDayStatus = async (date: string, currentStatus: LogStatus | 'none') => {
    if (!userId) {
      toast.error("Debes iniciar sesión para guardar tu progreso");
      return;
    }

    // 1. Determinar siguiente estado
    const nextStatus: LogStatus | 'none' =
      currentStatus === 'none' ? 'success' :
        currentStatus === 'success' ? 'fail' : 'none';

    // 2. Update Optimista: Actualizamos la UI antes de que responda el servidor
    const previousLogs = { ...logs };
    const newLogs = { ...logs };

    if (nextStatus === 'none') {
      delete newLogs[date];
    } else {
      newLogs[date] = nextStatus;
    }
    setLogs(newLogs);

    // 3. Persistencia en Supabase
    try {
      if (nextStatus === 'none') {
        await franklinService.deleteLog(userId, virtueId, date);
      } else {
        await franklinService.saveLog({
          user_id: userId,
          virtue_id: virtueId,
          date,
          status: nextStatus
        });
      }
    } catch (error) {
      // Si falla, revertimos al estado anterior (Rollback)
      setLogs(previousLogs);
      toast.error("Error al guardar en el servidor");
    }
  };

  return { logs, isLoading, toggleDayStatus };
}