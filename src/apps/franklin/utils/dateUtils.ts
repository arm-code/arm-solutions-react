// src/apps/franklin/utils/dateUtils.ts
export const getWeekDays = (currentDate: Date) => {
  const startOfWeek = new Date(currentDate);
  // Ajustar al lunes
  const day = startOfWeek.getDay();
  const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
  startOfWeek.setDate(diff);

  return Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date.toISOString().split('T')[0]; // Retorna YYYY-MM-DD
  });
};