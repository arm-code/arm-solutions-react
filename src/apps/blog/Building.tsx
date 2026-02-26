import { Link } from "react-router-dom";

export default function BuildingPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 antialiased">
            <main className="flex flex-col items-center text-center space-y-12">
                
                <header className="space-y-6">
                    <h1 className="text-6xl font-black tracking-tighter sm:text-8xl lg:text-9xl italic">
                        The Engineering Ledger
                    </h1>
                    
                    <div className="space-y-3">
                        {/* Nombre limpio sin el prefijo Ing. para un look más moderno */}
                        <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl uppercase">
                            Alexis Romero Mendoza
                        </p>
                        
                        {/* Especialidad como un distintivo secundario */}
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-600/80">
                            Senior Software Architect <span className="text-muted-foreground/50 font-medium">(In Training)</span>
                        </p>

                        <p className="text-sm italic text-muted-foreground max-w-[500px] mx-auto leading-relaxed border-t border-border pt-4">
                            "La inteligencia sin disciplina solo es arrogancia decorativa"
                        </p>
                    </div>
                </header>

                <nav className="flex flex-col items-center gap-6 w-full max-w-xs">
                    <Link 
                        to="/log" 
                        className="flex items-center justify-center gap-3 w-full rounded-md border border-input bg-background px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] shadow-sm hover:bg-accent hover:text-accent-foreground transition-all active:scale-95"
                    >
                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                        Acceder a la Bitácora
                    </Link>
                    
                    <div className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
                        v0.1.0 // blog.yosoyalexisromero.site
                    </div>
                </nav>
            </main>

            <footer className="absolute bottom-10 text-[9px] font-bold uppercase tracking-[0.5em] text-muted-foreground/20">
                © 2026 yosoyalexisromero.site
            </footer>
        </div>
    )
}