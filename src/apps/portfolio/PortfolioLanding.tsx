

import ProjectCard from "./components/ProjectCard"

const PROJECTS = [
    {
        title: "The Engineering Ledger",
        description: "Logger técnico donde documento mi camino a Senior, decisiones de arquitectura, soluciones a problemas, etc.",
        tech: ['React', "Vite", 'Supabase', 'Talwind', 'Zod', 'react-router-dom', 'Typescript'],
        link: '/log',
        status: "active" as const
    },
    {
        title: "Franklin Principles",
        description: "Aplicacion de productividad basada en las 13 virtudes de Benjamin Franklin.",
        tech: ['React', "Vite", 'Supabase', 'Talwind', 'Zod', 'react-router-dom', 'Typescript'],
        link: '/franklin',
        status: "building" as const
    }
]
const PortfolioLanding = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-start bg-background px-6 pt-24 pb-20 antialiased selection:bg-violet-500/30">
            <main className="flex flex-col items-center text-center space-y-16 w-full max-w-5xl">

                <header className="space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-6xl font-black tracking-tighter sm:text-8xl lg:text-9xl italic leading-none">The Portfolio</h1>
                        <p className="text-xs font-black uppercase tracking-[0.4em] text-violet-600/80">Technical Engineering Hub</p>
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground max-w-150 mb-0">By
                        </p>
                        <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl uppercase">Alexis Romero Mendoza</p>
                        <p className="text-sm italic text-muted-foreground max-w-150 mx-auto leading-relaxed border-t pt-6">"La excelencia no es un acto, sino un hábito. La ingeniería es el arte de sistematizar ese hábito."
                        </p>

                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {
                        PROJECTS.map((project) => (
                            <ProjectCard
                                key={project.link}
                                {...project}
                            />
                        ))
                    }
                </div>

                <div className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground/30 pt-10">
                    v0.2.0 // stack: react.js // yosoyalexisromero.site
                </div>

            </main>

            <footer className="mt-auto pt-10 text-[9px] font-bold uppercase tracking-[0.5em] text-muted-foreground/20">
                © 2026 YO SOY ALEXIS ROMERO MENDOZA
            </footer>

        </div>
    )
}

export default PortfolioLanding