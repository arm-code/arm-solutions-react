import { useAuth } from "@/shared/hooks/useAuth";
import { useCurrentVirtue } from "./hooks/useCurrentVirtue";
import { useFranklin } from "./hooks/useFranklin";
import { getWeekDays } from "./utils/dateUtils";
import { TrackerGrid } from "./components/TrackerGrid";
import FranklinInfo from "./components/FranklinInfo";

export default function FranklinApp() {
  const { user, loading: authLoading } = useAuth();
  const { currentVirtue, weekNumber } = useCurrentVirtue();
  const { logs, toggleDayStatus, isLoading: logsLoading } = useFranklin(currentVirtue.id, user?.id);
  
  const weekDays = getWeekDays(new Date());
  const todayStr = new Date().toISOString().split('T')[0];

  if (authLoading) return <div className="flex min-h-screen items-center justify-center font-black uppercase tracking-[0.3em] text-[10px]">Cargando Sistema...</div>;

  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-6 pt-20 pb-10 antialiased selection:bg-violet-500/30">
      <main className="w-full max-w-2xl space-y-16">
        <header className="space-y-4 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-violet-600/70">Week {weekNumber} // Cycle 01</p>
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl italic uppercase">{currentVirtue.name}</h1>
          <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-md mx-auto pt-4 border-t border-border italic">
            "{currentVirtue.description}"
          </p>
        </header>

        <section className="space-y-8 p-8 border border-input rounded-md bg-card/30">
          <TrackerGrid 
            days={weekDays} 
            logs={logs} 
            today={todayStr} 
            onToggle={toggleDayStatus} 
            isLoading={logsLoading} 
          />
        </section>

        {!user && (
          <p className="text-center text-[9px] font-bold uppercase tracking-widest text-amber-500 animate-pulse">
            Modo lectura: Inicia sesión para guardar cambios
          </p>
        )}

        <FranklinInfo/>
      </main>
    </div>
  );
}