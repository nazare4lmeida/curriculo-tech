import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gradient">
          Currículo Tech
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/curriculo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Criar Currículo
          </Link>
          <Link to="/teste" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Teste de Nivelamento
          </Link>
          {user ? (
            <div className="flex items-center gap-3">
              <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Meus Currículos
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-1" /> Sair
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => navigate("/auth")}>
                Entrar
              </Button>
              <Button size="sm" className="gradient-primary border-0" onClick={() => navigate("/auth?tab=signup")}>
                Cadastrar
              </Button>
            </div>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-3 animate-fade-in">
          <Link to="/curriculo" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Criar Currículo</Link>
          <Link to="/teste" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Teste de Nivelamento</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Meus Currículos</Link>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="w-full justify-start">
                <LogOut className="h-4 w-4 mr-1" /> Sair
              </Button>
            </>
          ) : (
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="flex-1" onClick={() => { navigate("/auth"); setMobileOpen(false); }}>Entrar</Button>
              <Button size="sm" className="flex-1 gradient-primary border-0" onClick={() => { navigate("/auth?tab=signup"); setMobileOpen(false); }}>Cadastrar</Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
