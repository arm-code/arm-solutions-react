
import { getLogBySlug } from "@/services/logService"
import type { LogEntry } from "@/types/database"
import { useEffect, useState } from "react"


export const useLogBySlug = (slug: string) => {

    const [log, setLog] = useState<LogEntry | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        if(!slug) return;
        
        const fetchLog = async () => {
            setLoading(true)
            const data = await getLogBySlug(slug)
            setLog(data)
            setLoading(false)
        }

        fetchLog()

    }, [slug])

    return { log, loading }
    
}