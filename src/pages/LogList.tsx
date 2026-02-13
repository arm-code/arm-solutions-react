import { useLogs } from "@/hooks/useLogs"
import { Link } from "react-router-dom";


export const LogList = () => {

    const { logs, loading } = useLogs();

    if(loading){
        return (
            <div className="flex justify-center items-center h-screen text-violet-600">
                <p className="animate-pulse font-bold text-xl">
                Cargando bitácora...
                </p>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto p-6">

            <header className="mb-10 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-violet-900">Engineering Log</h1>
                <Link to="/" className="text-violet-600 hover:underline">Volver al inicio</Link>
            </header>

            <div className="grid gap-6">

                {
                    logs.map((log, index) => (
                        <article key={index} className="p-6 bg-white border border-violet-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-2 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full uppercase">
                                    { log.category }
                                </span>
                                <time className="text-gray-400 text-sm">
                                    { new Date(log.created_at).toLocaleDateString()}
                                </time>                                
                            </div>

                            <h2 className="text-xl font-bold text-gray-800 mb-2">{ log.title }</h2>

                            <p className="text-gray-600 mb-4 line-clamp-2">
                                { log.content }
                            </p>
                            <Link to={`/log/${log.slug}`} className="inline-block text-violet-600 font-medium hover:text-violet-800">Leer solución completa... </Link>
                        </article>
                    ))
                }

            </div>
            
        </div>
    )
}

// export default LogList;