import { supabase } from "@/lib/supabase";
import React, { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {

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


    if (loading) return <div className="p-10 text-center animate-pulse">Verificando credenciales...</div>

    if (!session) {
        // Sino hay sesion mandamos al login
        return <Navigate to="/admin/login" replace />
    }

    return <>{children}</>

}