import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { quizQuestions, getLevel, getFeedback } from "@/data/quizQuestions";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  ChevronRight,
  RotateCcw,
  ArrowRight,
  Trophy,
  TrendingUp,
  BookOpen,
  FileText,
  CheckCircle,
  XCircle,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [categoryScores, setCategoryScores] = useState<
    Record<string, { correct: number; total: number }>
  >({});
  const [showResult, setShowResult] = useState(false);

  const current = quizQuestions[currentIdx];
  const progress = ((currentIdx + 1) / quizQuestions.length) * 100;

  const handleSelect = (index: number) => {
    if (answered) return;
    const isCorrect = index === current.correct;
    setSelectedOption(index);
    setAnswered(true);
    if (isCorrect) setScore((prev) => prev + 1);
    setCategoryScores((prev) => {
      const cat = current.category;
      const currentCat = prev[cat] || { correct: 0, total: 0 };
      return {
        ...prev,
        [cat]: {
          correct: currentCat.correct + (isCorrect ? 1 : 0),
          total: currentCat.total + 1,
        },
      };
    });
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setAnswered(false);
    } else {
      setShowResult(true);
      saveResult();
    }
  };

  const saveResult = async () => {
    const level = getLevel(score, quizQuestions.length);
    if (user) {
      try {
        await supabase.from("quiz_results").insert({
          user_id: user.id,
          score,
          total: quizQuestions.length,
          level,
          details: categoryScores as Record<
            string,
            { correct: number; total: number }
          >,
        });
      } catch (e) {
        console.error("Error saving quiz result:", e);
      }
    }
  };

  const level = getLevel(score, quizQuestions.length);
  const feedback = getFeedback(level, categoryScores);

  const restart = () => {
    setStarted(false);
    setCurrentIdx(0);
    setSelectedOption(null);
    setAnswered(false);
    setScore(0);
    setCategoryScores({});
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Teste de Nivelamento Técnico
            </h1>
            <p className="text-muted-foreground mb-8">
              Avalie seu conhecimento em {quizQuestions.length} perguntas sobre
              lógica, HTML/CSS, JavaScript, Git e conceitos gerais de
              tecnologia.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
              {[
                "Lógica de Programação",
                "HTML/CSS",
                "JavaScript",
                "Git",
                "Conceitos Gerais",
              ].map((cat) => (
                <div
                  key={cat}
                  className="p-3 rounded-xl border border-border bg-muted/20 text-center"
                >
                  <p className="text-xs text-muted-foreground">{cat}</p>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="gradient-primary border-0 shadow-glow"
              onClick={() => setStarted(true)}
            >
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
              <p className="text-muted-foreground mt-4">
                Você acertou {score} de {quizQuestions.length} ({pct}%)
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {Object.entries(categoryScores).map(
                ([cat, { correct, total }]) => (
                  <div
                    key={cat}
                    className="p-4 rounded-xl gradient-card border border-border animate-fade-in"
                  >
                    <h3 className="text-sm font-medium mb-2">{cat}</h3>
                    <Progress
                      value={(correct / total) * 100}
                      className="h-2 mb-1"
                    />
                    <p className="text-xs text-muted-foreground">
                      {correct}/{total} corretas
                    </p>
                  </div>
                ),
              )}
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl gradient-card border border-border animate-fade-in">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Pontos Fortes</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {feedback.strengths.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-primary/20 text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5 rounded-xl gradient-card border border-border animate-fade-in">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Pontos a Melhorar</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {feedback.improvements.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-destructive/20 text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5 rounded-xl gradient-card border border-border animate-fade-in">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Trilha de Estudo Recomendada</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {feedback.studyPath}
                </p>
              </div>
              <div className="p-5 rounded-xl gradient-card border border-border animate-fade-in">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Dica para o Currículo</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {feedback.resumeTip}
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-8 justify-center">
              <Button variant="outline" onClick={restart}>
                <RotateCcw className="h-4 w-4 mr-2" /> Refazer teste
              </Button>
              <Button
                className="gradient-primary border-0"
                onClick={() => navigate("/curriculo")}
              >
                <FileText className="h-4 w-4 mr-2" /> Criar currículo
              </Button>
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
      <div className="pt-24 px-4 pb-20">
        <div className="container max-w-2xl">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>{current.category}</span>
              <span>
                {currentIdx + 1}/{quizQuestions.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <div className="rounded-2xl gradient-card border border-border p-8 animate-fade-in">
            <h2 className="text-xl font-bold mb-6">{current.question}</h2>
            <div className="space-y-3">
              {current.options.map((opt, i) => {
                let extraClasses =
                  "border-border bg-muted/20 hover:border-muted-foreground/30";
                if (answered) {
                  if (i === current.correct) {
                    extraClasses = "border-green-500 bg-green-500/10";
                  } else if (i === selectedOption) {
                    extraClasses = "border-destructive bg-destructive/10";
                  } else {
                    extraClasses = "border-border bg-muted/10 opacity-50";
                  }
                } else if (selectedOption === i) {
                  extraClasses = "border-primary bg-primary/10";
                }
                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-center gap-3 ${extraClasses}`}
                    disabled={answered}
                  >
                    <span className="font-medium text-muted-foreground">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1">{opt}</span>
                    {answered && i === current.correct && (
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    )}
                    {answered &&
                      i === selectedOption &&
                      i !== current.correct && (
                        <XCircle className="h-5 w-5 text-destructive shrink-0" />
                      )}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                <div
                  className={`p-5 rounded-xl border ${selectedOption === current.correct ? "border-green-500/30 bg-green-500/5" : "border-destructive/30 bg-destructive/5"}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {selectedOption === current.correct ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                    <h3 className="font-bold text-sm">
                      {selectedOption === current.correct
                        ? "Resposta Correta!"
                        : "Não foi dessa vez"}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {current.optionFeedbacks[selectedOption as number]}
                  </p>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-start gap-2">
                      <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-bold uppercase text-primary block mb-1">
                          Explicação
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {current.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    className="gradient-primary border-0"
                    onClick={handleNext}
                  >
                    {currentIdx === quizQuestions.length - 1
                      ? "Ver Resultados"
                      : "Próxima Pergunta"}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
