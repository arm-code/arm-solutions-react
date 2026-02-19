import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoute = () => {

    const [session, setSession] = useState<any>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // 1ro. Hay que verificar si el usuario ya tiene una sesión activa
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        })

        //2do. Escuchar cambios en el estado de autenticación (login/logout), por si expira el token
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        })

        return () => subscription.unsubscribe();
    }, [])


    if (loading) return <div className="p-10 text-center animate-pulse font-mono uppercase text-[10px] tracking-[0.2em]">Verificando credenciales...</div>

    if (!session) {
        // Sino hay sesion mandamos al login
        return <Navigate to="/login" replace />
    }

    return <Outlet />

}