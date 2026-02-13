import { useLogs } from "@/hooks/useLogs"
import { Link } from "react-router-dom";

export const LogList = () => {
    const { logs, loading } = useLogs();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-muted-foreground">
                <p className="animate-pulse font-medium">Cargando bitácora...</p>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            <header className="mb-12 space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Engineering Log</h1>
                <div className="flex items-center justify-between">
                    <p className="text-muted-foreground">Documentación técnica y soluciones.</p>
                    <Link to="/" className="text-sm font-medium hover:underline text-primary">Volver al inicio</Link>
                </div>
            </header>

            <div className="space-y-8">
                {logs.map((log) => (
                    <article key={log.id} className="group relative flex flex-col items-start border-b pb-8 last:border-0">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                                {log.category}
                            </span>
                            <time className="text-xs text-muted-foreground">
                                {new Date(log.created_at).toLocaleDateString()}
                            </time>
                        </div>

                        <h2 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                            <Link to={`/log/${log.slug}`}>{log.title}</Link>
                        </h2>

                        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm leading-relaxed">
                            {log.content.replace(/\\n/g, ' ')}
                        </p>

                        <Link 
                            to={`/log/${log.slug}`} 
                            className="text-sm font-bold uppercase tracking-widest hover:underline"
                        >
                            Leer solución →
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    )
}