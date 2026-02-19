import { Link } from "react-router-dom";
import { FileText, Brain, Mail, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container max-w-5xl py-12 px-4">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-gradient font-bold text-lg mb-3">Currículo Tech</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plataforma gratuita de criação de currículos profissionais para a área de tecnologia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/curriculo" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5" /> Criar Currículo
                </Link>
              </li>
              <li>
                <Link to="/teste" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Brain className="h-3.5 w-3.5" /> Teste de Nivelamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contato@curriculotech.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" /> contato@curriculotech.com
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Currículo Tech. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Feito com dedicação para profissionais de tecnologia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
