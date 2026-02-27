import { useAuth } from "@/shared/hooks/useAuth";
import { supabase } from "@/shared/lib/supabase";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../../../components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";


export function Navbar() {
    const { user, session } = useAuth();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) toast.error('Error al cerrar sesión')
        else toast.success('Sesión cerrada correctamente')
    }

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <Link to="/" className="text-xs font-black uppercase tracking-[0.3em] hover:opacity-70 transition-opacity">
                    yosoyalexisromero.site
                </Link>

                <div className="hidden md:flex items-center gap-8">

                    <Link to="/log" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground">
                        Logger
                    </Link>
                    <Link to="/franklin" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground">
                        Franklin
                    </Link>

                    <div className="h-4 w-px bg-border" />

                    {
                        session ? (
                            <div className="flex items-center gap-4">
                                <span className="text-[9px] font-mono text-muted-foreground hidden sm:block">{user?.email}</span>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleLogout}
                                    className="text-[10px] font-black uppercase tracking-tighter h-8"
                                >
                                    Logout
                                </Button>
                            </div>

                        ) : (
                            <Link to="/login">
                                <Button className="text-[10px] font-black uppercase tracking-tighter h-8" size="sm">
                                    Login
                                </Button>
                            </Link>
                        )
                    }
                </div>


                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-75 bg-background">
                            <SheetHeader>
                                <SheetTitle className="text-left text-xs font-black uppercase tracking-[0.3em] pb-8 border-b">
                                    Navegación
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-6 px-4">
                                <Link to="/log" className="text-2xl font-black uppercase italic tracking-tighter hover:text-violet-600 transition-colors">
                                    Logger
                                </Link>
                                <Link to="/franklin" className="text-2xl font-black uppercase italic tracking-tighter hover:text-violet-600 transition-colors">
                                    Franklin
                                </Link>

                                <div className="h-px bg-border my-4" />

                                {!session && (
                                    <Link to="/login">
                                        <Button className="w-full font-black uppercase tracking-widest py-6">
                                            Login
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>


        </nav>
    )
}