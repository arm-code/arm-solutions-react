
interface TrackerGridProps {
  days: string[];
  logs: Record<string, 'success' | 'fail' | undefined>;
  today: string;
  onToggle: (date: string, current: 'success' | 'fail' | 'none') => void;
  isLoading: boolean;
}

export function TrackerGrid({ days, logs, today, onToggle, isLoading }: TrackerGridProps) {
  const dayNames = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return (
    <div className="grid grid-cols-7 gap-4">
      {days.map((date, index) => {
        const status = logs[date] || 'none';
        const isToday = date === today;

        return (
          <div key={date} className="flex flex-col items-center gap-3">
            <span className={`text-[10px] font-black ${isToday ? 'text-violet-600' : 'text-muted-foreground/40'}`}>
              {dayNames[index]}
            </span>

            <button
              onClick={() => onToggle(date, status)}
              disabled={isLoading}
              className={`
                relative h-12 w-12 rounded-full transition-all duration-200 active:scale-90
                flex items-center justify-center border-2
                ${status === 'none' ? 'border-input hover:border-foreground/20' : ''}
                ${status === 'success' ? 'bg-foreground border-foreground text-background' : ''}
                ${status === 'fail' ? 'border-destructive/50 bg-destructive/10 text-destructive' : ''}
                ${isToday && status === 'none' ? 'ring-2 ring-violet-500/20 border-violet-500/50' : ''}
              `}
            >
              {status === 'success' && (
                <div className="h-2 w-2 rounded-full bg-current animate-in zoom-in duration-300" />
              )}
              {status === 'fail' && (
                <span className="text-xs font-black">×</span>
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