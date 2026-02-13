import { useLogBySlug } from "@/hooks/useLogBySlug"
import { Link, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"


const LogDetail = () => {

    const { slug } = useParams<{ slug: string }>()
    const { log, loading } = useLogBySlug(slug || '')

    if( loading ){
        return (
            <div className="p-10 text-center animate-pulse">
                Cargando detalle...
            </div>
        )
    }

    if(!log) {
        return (
            <div className="p-10 text-center">
                Log no encontrado.
            </div>
        )
    }


    return (
        <div className="max-w-3xl mx-auto py-12 px-6">

            <nav className="mb-8">
                <Link to="/log" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Volver a la bitacora</Link>
            </nav>

            <header className="space-y-4 mb-10 border-b pb-8">
                <div className="flex gap-2">
                    <span className=" inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        { log.category }
                        </span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{ log.title }</h1>
                <p className="text-sm text-muted-foreground">Publicado el { new Date(log.created_at).toLocaleDateString() }</p>
            </header>

            <article className="prose prose-stone max-w-none">
                <ReactMarkdown>{ log.content }</ReactMarkdown>
            </article>

            <footer className="mt-12 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                    {log.tags?.map((tag) => (
                        <span key={tag} className="text-xs text-muted-foreground">#{tag}</span>
                    ))}
                </div>
            </footer>

        </div>
    )
}

export default LogDetail