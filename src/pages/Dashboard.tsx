import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { FileText, Brain, Plus, Trash2, Clock } from "lucide-react";

interface SavedResume {
  id: string;
  title: string;
  template: string;
  created_at: string;
}

interface SavedQuizResult {
  id: string;
  score: number;
  total: number;
  level: string;
  created_at: string;
}

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<SavedResume[]>([]);
  const [quizResults, setQuizResults] = useState<SavedQuizResult[]>([]);

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      const [resumeRes, quizRes] = await Promise.all([
        supabase.from("resumes").select("id, title, template, created_at").eq("user_id", user.id).order("created_at", { ascending: false }),
        supabase.from("quiz_results").select("id, score, total, level, created_at").eq("user_id", user.id).order("created_at", { ascending: false }),
      ]);
      if (resumeRes.data) setResumes(resumeRes.data);
      if (quizRes.data) setQuizResults(quizRes.data);
    };
    fetchData();
  }, [user]);

  const deleteResume = async (id: string) => {
    await supabase.from("resumes").delete().eq("id", id);
    setResumes(resumes.filter((r) => r.id !== id));
  };

  if (loading) return <div className="min-h-screen gradient-hero flex items-center justify-center"><div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" /></div>;

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      <div className="pt-24 px-4 pb-12">
        <div className="container max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Meu Painel</h1>

          {/* Resumes */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2"><FileText className="h-5 w-5 text-primary" /> Meus Currículos</h2>
              <Button size="sm" className="gradient-primary border-0" onClick={() => navigate("/curriculo")}><Plus className="h-4 w-4 mr-1" /> Novo</Button>
            </div>
            {resumes.length === 0 ? (
              <div className="p-8 rounded-2xl gradient-card border border-border text-center">
                <FileText className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                <p className="text-muted-foreground">Nenhum currículo salvo ainda.</p>
                <Button className="mt-4 gradient-primary border-0" onClick={() => navigate("/curriculo")}>Criar meu primeiro</Button>
              </div>
            ) : (
              <div className="grid gap-3">
                {resumes.map((r) => (
                  <div key={r.id} className="p-4 rounded-xl gradient-card border border-border flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{r.title}</h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Clock className="h-3 w-3" />{new Date(r.created_at).toLocaleDateString("pt-BR")}</p>
                    </div>
                    <button onClick={() => deleteResume(r.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Quiz Results */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Brain className="h-5 w-5 text-primary" /> Resultados dos Testes</h2>
            {quizResults.length === 0 ? (
              <div className="p-8 rounded-2xl gradient-card border border-border text-center">
                <Brain className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                <p className="text-muted-foreground">Nenhum teste realizado ainda.</p>
                <Button className="mt-4 gradient-primary border-0" onClick={() => navigate("/teste")}>Fazer teste</Button>
              </div>
            ) : (
              <div className="grid gap-3">
                {quizResults.map((q) => (
                  <div key={q.id} className="p-4 rounded-xl gradient-card border border-border flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-0.5 rounded-full gradient-primary text-xs font-bold">{q.level}</span>
                        <span className="text-sm font-medium">{q.score}/{q.total} acertos</span>
                      </div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Clock className="h-3 w-3" />{new Date(q.created_at).toLocaleDateString("pt-BR")}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
