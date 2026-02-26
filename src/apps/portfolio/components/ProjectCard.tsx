
import { Link } from "react-router-dom"



interface ProjectCardProps {
    title: string
    description: string
    tech: string[]
    link: string
    status?: 'active' | 'building'
}

const ProjectCard = ({
    title,
    description,
    tech,
    link,
    status
}: ProjectCardProps) => {
    return (
        <Link
            to={link}
            className="group relative flex flex-col items-start p-8 rounded-md border border-input bg-background text-left transition-all hover:bg-accent hover:border-foreground/20 active:scale-[0.98] overflow-hidden"
        >
            {/* Indicador de Status */}
            <div className="flex items-center gap-2 mb-4">
                <div className={`h-1.5 w-1.5 rounded-full ${status === 'active' ? 'bg-amber-500 animate-pulse' : 'bg-muted-foreground/30'}`} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                    {status === 'active' ? 'Live Project' : 'Under Construction'}
                </span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight uppercase mb-2 group-hover:text-violet-600 transition-colors">
                {title}
            </h3>

            <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-medium">
                {description}
            </p>

            <div className="mt-auto flex flex-wrap gap-3">
                {tech.map((t) => (
                    <span key={t} className="text-[9px] font-mono font-bold uppercase tracking-widest text-foreground/40 border-b border-transparent group-hover:border-foreground/10 pb-0.5">
                        {t}
                    </span>
                ))}
            </div>

            {/* Decoración Estilo New York (Flecha sutil) */}
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
            </div>
        </Link>
    )
}

export default ProjectCard