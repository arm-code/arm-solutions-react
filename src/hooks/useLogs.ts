import { getEntries } from "@/services/logService"
import type { LogEntry } from "@/types/database"
import { useEffect, useState } from "react"


export const useLogs = () => {

    // definimos que el estado es un array de LogEntry
    const [logs, setLogs] = useState<LogEntry[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchLogs = async () => {
            setLoading(true)
            const data = await getEntries()
            setLogs(data)
            setLoading(false)
        }

        fetchLogs()

    }, [])

    return { logs, loading }
}