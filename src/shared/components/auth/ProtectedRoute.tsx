import { useAuth } from "@/shared/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { session, loading } = useAuth();

  if (loading) return <div className="p-10 text-center animate-pulse font-mono uppercase text-[10px] tracking-[0.2em]">Verificando credenciales...</div>;
  
  return session ? <Outlet /> : <Navigate to="/login" replace />;
};