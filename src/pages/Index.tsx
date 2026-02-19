import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText, Brain, Zap, Code, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/30 text-sm text-muted-foreground mb-6 animate-fade-in">
            <Zap className="h-4 w-4 text-primary" />
            Plataforma gratuita para profissionais de tecnologia
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Construa seu futuro na{" "}
            <span className="text-gradient">tecnologia</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Crie currículos profissionais para a área tech e descubra seu nível técnico com nosso teste de nivelamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="gradient-primary border-0 text-base px-8 shadow-glow" onClick={() => navigate("/curriculo")}>
              <FileText className="mr-2 h-5 w-5" /> Criar meu currículo
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8" onClick={() => navigate("/teste")}>
              <Brain className="mr-2 h-5 w-5" /> Teste de nivelamento
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Tudo que você precisa para se{" "}
            <span className="text-gradient">destacar</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Currículos Tech",
                desc: "Modelos profissionais focados na área de tecnologia. Edite e baixe em PDF gratuitamente.",
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Teste de Nivelamento",
                desc: "Avalie seu nível técnico em lógica, HTML/CSS, JavaScript, Git e mais. Com feedback personalizado.",
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Feito para Devs",
                desc: "Campos específicos para stack, projetos, GitHub, certificações e nível de inglês.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl gradient-card border border-border hover:shadow-glow transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 text-foreground group-hover:animate-pulse-glow">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates preview */}
      <section className="py-20 px-4 border-t border-border/50">
        <div className="container max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Modelos <span className="text-gradient">profissionais</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">Escolha entre 3 modelos otimizados para a área tech</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Minimal Tech", desc: "Clean e direto ao ponto. Ideal para devs que valorizam simplicidade.", color: "from-gray-100 to-gray-200" },
              { name: "Dev Modern", desc: "Layout em duas colunas com sidebar colorida. Destaque visual.", color: "from-slate-500 to-slate-700" },
              { name: "Dark Professional", desc: "Visual escuro e sofisticado. Perfeito para se diferenciar.", color: "from-gray-800 to-gray-900" },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl border border-border overflow-hidden group hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${0.1 * i}s` }}>
                <div className={`h-40 bg-gradient-to-br ${t.color} flex items-center justify-center`}>
                  <FileText className="h-12 w-12 text-muted-foreground/30" />
                </div>
                <div className="p-4 gradient-card">
                  <h3 className="font-bold mb-1">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="gradient-primary border-0 shadow-glow" onClick={() => navigate("/curriculo")}>
              Começar agora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 border-t border-border/50">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Por que usar o <span className="text-gradient">Currículo Tech</span>?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "100% gratuito",
              "Download em PDF de alta qualidade",
              "Modelos específicos para tech",
              "Teste de nivelamento com feedback",
              "Salve seu progresso na nuvem",
              "Preparado para funcionalidades com IA",
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 animate-fade-in" style={{ animationDelay: `${0.05 * i}s` }}>
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
