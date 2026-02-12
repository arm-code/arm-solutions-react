export default function BuildingPage() {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background font-sans antialiased">
            {/* Subtle background decoration for institutional feel */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-primary/3 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
            </div>

            <main className="relative z-10 flex flex-col items-center px-6 text-center">

                <div className="space-y-8">
                    <h1 className="flex flex-col items-center gap-2 text-6xl font-black tracking-tighter text-foreground sm:text-8xl lg:text-9xl">
                        <span>SPAyT</span>
                        <span className="text-primary/90">NEXT GENERATIONS</span>
                    </h1>

                    <div className="mx-auto max-w-[700px] space-y-4">
                        <p className="text-xl font-semibold text-foreground/90 sm:text-2xl">
                            Plataforma de Gestión Académica.
                        </p>
                        <p className="text-base leading-relaxed text-muted-foreground/70">
                            Estamos trabajando en la próxima generación de herramientas para el SPAyT. SPAyT Next Generations centraliza la gestión, el aprendizaje y la comunicación en un solo núcleo.
                        </p>
                    </div>
                </div>

                <div className="mt-20 flex flex-col items-center gap-6">
                    <div className="flex gap-2">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-primary/40 [animation-duration:1s]"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:200ms] [animation-duration:1s]"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-primary/40 [animation-delay:400ms] [animation-duration:1s]"></div>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-border bg-card/40 px-5 py-2.5 backdrop-blur-lg shadow-sm">
                        <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                        <code className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80 font-mono">
                            Entorno de Desarrollo // Next Gen v0.1.0
                        </code>
                    </div>
                </div>
            </main>

            <footer className="absolute bottom-10 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
                <span className="font-bold text-foreground/40">Departamento de Tecnologías de la Información</span>
                <span>Ing. Jose Miguel Pulido de la Rosa</span>
                <span>Ing. Alexis Romero Mendoza</span>
                <span>© 2026 Subsistema de Preparatoria Abierta y Telebachillerato del Estado de Chihuahua</span>
            </footer>
        </div>
    )
}
