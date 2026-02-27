interface TrackerGridProps {
  days: string[];
  logs: Record<string, 'none' | 'fail' | undefined>;
  today: string;
  onToggle: (date: string, current:  'fail' | 'none') => void;
  isLoading: boolean;
}

export function TrackerGrid({ days, logs, today, onToggle, isLoading }: TrackerGridProps) {
  const dayNames = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return (
    /* Ajustamos el gap: gap-2 en móvil, gap-4 en desktop */
    <div className="grid grid-cols-7 gap-2 sm:gap-4 w-full max-w-md mx-auto">
      {days.map((date, index) => {
        const status = logs[date] || 'none';
        const isToday = date === today;

        return (
          <div key={date} className="flex flex-col items-center gap-2 sm:gap-3">
            {/* Texto de día un poco más legible en móvil */}
            <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider ${
              isToday ? 'text-violet-600' : 'text-muted-foreground/40'
            }`}>
              {dayNames[index]}
            </span>

            <button
              onClick={() => onToggle(date, status)}
              disabled={isLoading}
              className={`
                relative 
                /* Tamaño responsivo: 10 (40px) en móvil, 12 (48px) en desktop */
                h-10 w-10 sm:h-12 sm:w-12 
                rounded-full transition-all duration-200 active:scale-90
                flex items-center justify-center border-2
                ${status === 'none' ? 'border-input hover:border-foreground/20' : ''}
                
                ${status === 'fail' ? 'border-destructive/50 bg-destructive/10 text-destructive' : ''}
                /* Anillo de "Hoy" más sutil en móvil */
                ${isToday && status === 'none' ? 'ring-2 ring-violet-500/20 border-violet-500/40' : ''}
              `}
            >
              {/* {status === 'success' && (
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-current animate-in zoom-in duration-300" />
              )} */}
              {status === 'fail' && (
                <span className="text-[10px] sm:text-xs font-black italic">×</span>
              )}

              {isToday && (
                <div className="absolute -bottom-1 h-1 w-1 rounded-full bg-violet-600" />
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}