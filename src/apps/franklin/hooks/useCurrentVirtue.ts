import { VIRTUES } from '../constants/virtues';

export function useCurrentVirtue() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);

  // Cálculo de la semana del año
  const pastDaysOfYear = (now.getTime() - startOfYear.getTime()) / 86400000;
  const weekNumber = Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);

  // Logica del ciclo Módulo 13 (Ajustado porque el ID empieza en 1)
  const virtueIndex = (weekNumber - 1) % 13;
  const currentVirtue = VIRTUES[virtueIndex];

  return {
    currentVirtue,
    weekNumber,
    // Devolvemos los días que faltan para el próximo lunes
    daysUntilNext: 7 - (now.getDay() === 0 ? 7 : now.getDay()) + 1,
  };
}
