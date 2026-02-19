import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { quizQuestions, getLevel, getFeedback } from "@/data/quizQuestions";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Brain, ChevronRight, RotateCcw, CheckCircle, XCircle, ArrowRight, Trophy, TrendingUp, BookOpen, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const current = quizQuestions[currentIdx];
  const progress = ((currentIdx + 1) / quizQuestions.length) * 100;

  const handleAnswer = () => {
    if (selectedOption === null) return;
    const newAnswers = { ...answers, [current.id]: selectedOption };
    setAnswers(newAnswers);

    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
      saveResult(newAnswers);
    }
  };

  const saveResult = async (allAnswers: Record<number, number>) => {
    const score = quizQuestions.filter((q) => allAnswers[q.id] === q.correct).length;
    const level = getLevel(score, quizQuestions.length);

    if (user) {
      try {
        await supabase.from("quiz_results").insert({
          user_id: user.id,
          score,
          total: quizQuestions.length,
          level,
          details: { answers: allAnswers } as any,
        });
      } catch (e) {
        console.error("Error saving quiz result:", e);
      }
    }
  };

  const score = quizQuestions.filter((q) => answers[q.id] === q.correct).length;
  const level = getLevel(score, quizQuestions.length);
  const categoryScores: Record<string, { correct: number; total: number }> = {};
  quizQuestions.forEach((q) => {
    if (!categoryScores[q.category]) categoryScores[q.category] = { correct: 0, total: 0 };
    categoryScores[q.category].total++;
    if (answers[q.id] === q.correct) categoryScores[q.category].correct++;
  });
  const feedback = getFeedback(level, categoryScores);

  const restart = () => {
    setStarted(false);
    setCurrentIdx(0);
    setAnswers({});
    setSelectedOption(null);
    setShowResult(false);
  };

  // Intro screen
  if (!started) {
    return (
      <div className="min-h-screen gradient-hero">
        <Navbar />
        <div className="pt-32 px-4">
          <div className="container max-w-2xl text-center">
            <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Brain className="h-10 w-10" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Teste de Nivelamento Técnico</h1>
            <p className="text-muted-foreground mb-8">
              Avalie seu conhecimento em {quizQuestions.length} perguntas sobre lógica, HTML/CSS, JavaScript, Git e conceitos gerais de tecnologia.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
              {Object.keys(categoryScores).length === 0 && ["Lógica de Programação", "HTML/CSS", "JavaScript", "Git", "Conceitos Gerais"].map((cat) => (
                <div key={cat} className="p-3 rounded-xl border border-border bg-muted/20 text-center">
                  <p className="text-xs text-muted-foreground">{cat}</p>
                </div>
              ))}
            </div>
            <Button size="lg" className="gradient-primary border-0 shadow-glow" onClick={() => setStarted(true)}>
              Iniciar teste <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Result screen
  if (showResult) {
    const pct = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="min-h-screen gradient-hero">
        <Navbar />
        <div className="pt-24 px-4 pb-12">
          <div className="container max-w-3xl">
            <div className="text-center mb-8 animate-fade-in">
              <Trophy className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h1 className="text-3xl font-bold mb-2">Resultado do Teste</h1>
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full gradient-primary text-lg font-bold mt-2">
                Nível: {level}
              </div>
              <p className="text-muted-foreground mt-4">Você acertou {score} de {quizQuestions.length} ({pct}%)</p>
            </div>

            {/* Category breakdown */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {Object.entries(categoryScores).map(([cat, { correct, total }]) => (
                <div key={cat} className="p-4 rounded-xl gradient-card border border-border animate-fade-in">
                  <h3 className="text-sm font-medium mb-2">{cat}</h3>
                  <Progress value={(correct / total) * 100} className="h-2 mb-1" />
                  <p className="text-xs text-muted-foreground">{correct}/{total} corretas</p>
                </div>
              ))}
            </div>

            {/* Feedback */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl gradient-card border border-border animate-fade-in">
                <div className="flex items-center gap-2 mb-3"><TrendingUp className="h-5 w-5 text-primary" /><h3 className="font-bold">Pontos Fortes</h3></div>
                <div className="flex flex-wrap gap-2">
                  {feedback.strengths.map((s, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-primary/20 text-sm">{s}</span>
                  ))}
                </div>
              </div>
              <div className="p-5 rounded-xl gradient-card border border-border animate-fade-in">
                <div className="flex items-center gap-2 mb-3"><BookOpen className="h-5 w-5 text-primary" /><h3 className="font-bold">Pontos a Melhorar</h3></div>
                <div className="flex flex-wrap gap-2">
                  {feedback.improvements.map((s, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-destructive/20 text-sm">{s}</span>
                  ))}
                </div>
              </div>
              <div className="p-5 rounded-xl gradient-card border border-border animate-fade-in">
                <div className="flex items-center gap-2 mb-3"><Brain className="h-5 w-5 text-primary" /><h3 className="font-bold">Trilha de Estudo Recomendada</h3></div>
                <p className="text-sm text-muted-foreground">{feedback.studyPath}</p>
              </div>
              <div className="p-5 rounded-xl gradient-card border border-border animate-fade-in">
                <div className="flex items-center gap-2 mb-3"><FileText className="h-5 w-5 text-primary" /><h3 className="font-bold">Dica para o Currículo</h3></div>
                <p className="text-sm text-muted-foreground">{feedback.resumeTip}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-8 justify-center">
              <Button variant="outline" onClick={restart}><RotateCcw className="h-4 w-4 mr-2" /> Refazer teste</Button>
              <Button className="gradient-primary border-0" onClick={() => navigate("/curriculo")}><FileText className="h-4 w-4 mr-2" /> Criar currículo</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz screen
  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      <div className="pt-24 px-4">
        <div className="container max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>{current.category}</span>
              <span>{currentIdx + 1}/{quizQuestions.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <div className="rounded-2xl gradient-card border border-border p-8 animate-fade-in">
            <h2 className="text-xl font-bold mb-6">{current.question}</h2>
            <div className="space-y-3">
              {current.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedOption(i)}
                  className={`w-full text-left p-4 rounded-xl border transition-all text-sm ${
                    selectedOption === i
                      ? "border-primary bg-primary/10"
                      : "border-border bg-muted/20 hover:border-muted-foreground/30"
                  }`}
                >
                  <span className="font-medium text-muted-foreground mr-3">{String.fromCharCode(65 + i)}</span>
                  {opt}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                className="gradient-primary border-0"
                disabled={selectedOption === null}
                onClick={handleAnswer}
              >
                {currentIdx === quizQuestions.length - 1 ? "Finalizar" : "Próxima"}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
