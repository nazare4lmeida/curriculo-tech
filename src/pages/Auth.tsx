import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const [isSignUp, setIsSignUp] = useState(searchParams.get("tab") === "signup");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isForgotPassword) {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        toast({ title: "Email enviado!", description: "Verifique sua caixa de entrada para redefinir a senha." });
        setIsForgotPassword(false);
      } else if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;
        toast({ title: "Cadastro realizado!", description: "Verifique seu email para confirmar a conta." });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-16">
        <div className="w-full max-w-md p-8 rounded-2xl gradient-card border border-border shadow-card animate-fade-in">
          {isForgotPassword ? (
            <>
              <button onClick={() => setIsForgotPassword(false)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft className="h-4 w-4" /> Voltar
              </button>
              <h1 className="text-2xl font-bold mb-2">Recuperar senha</h1>
              <p className="text-muted-foreground text-sm mb-6">Enviaremos um link para redefinir sua senha.</p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold mb-2">{isSignUp ? "Criar conta" : "Bem-vindo de volta"}</h1>
              <p className="text-muted-foreground text-sm mb-6">
                {isSignUp ? "Crie sua conta no Currículo Tech" : "Entre na sua conta"}
              </p>
            </>
          )}

          <form onSubmit={handleAuth} className="space-y-4">
            {isSignUp && !isForgotPassword && (
              <div>
                <Label htmlFor="name">Nome completo</Label>
                <Input id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Seu nome" required className="mt-1" />
              </div>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" required className="mt-1" />
            </div>
            {!isForgotPassword && (
              <div>
                <Label htmlFor="password">Senha</Label>
                <div className="relative mt-1">
                  <Input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mínimo 6 caracteres" required minLength={6} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            )}

            <Button type="submit" className="w-full gradient-primary border-0" disabled={loading}>
              {loading ? "Carregando..." : isForgotPassword ? "Enviar link" : isSignUp ? "Cadastrar" : "Entrar"}
            </Button>
          </form>

          {!isForgotPassword && (
            <div className="mt-4 text-center space-y-2">
              {!isSignUp && (
                <button onClick={() => setIsForgotPassword(true)} className="text-sm text-muted-foreground hover:text-foreground">
                  Esqueceu a senha?
                </button>
              )}
              <p className="text-sm text-muted-foreground">
                {isSignUp ? "Já tem conta?" : "Não tem conta?"}{" "}
                <button onClick={() => setIsSignUp(!isSignUp)} className="text-primary hover:underline font-medium">
                  {isSignUp ? "Entrar" : "Cadastrar"}
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
