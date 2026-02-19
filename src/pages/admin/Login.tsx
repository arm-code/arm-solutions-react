import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            toast.error('Error: ' + error.message);
            setLoading(false);
        } else {
            toast.success('¡Bienvenido de nuevo, Ingeniero!');
            navigate('/log'); // O la ruta que elijas para crear logs
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-6">
            <div className="w-full max-w-sm space-y-8 border p-8 rounded-lg shadow-sm">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold tracking-tighter">Acceso de Ingeniero</h1>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Panel Administrativo</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <Input
                        type="email"
                        placeholder="correo@ejemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Verificando...' : 'Entrar al Sistema'}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;