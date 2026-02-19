export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: number;
}

export const quizQuestions: QuizQuestion[] = [
  // Lógica de Programação (5)
  { id: 1, category: "Lógica de Programação", question: "Qual estrutura de dados segue o princípio FIFO (First In, First Out)?", options: ["Pilha (Stack)", "Fila (Queue)", "Árvore Binária", "Grafo"], correct: 1 },
  { id: 2, category: "Lógica de Programação", question: "Qual é a complexidade de tempo de uma busca binária?", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], correct: 2 },
  { id: 3, category: "Lógica de Programação", question: "O que é recursão?", options: ["Um loop infinito", "Uma função que chama a si mesma", "Um tipo de variável", "Um operador lógico"], correct: 1 },
  { id: 4, category: "Lógica de Programação", question: "Qual operador lógico retorna true quando ambos os operandos são true?", options: ["OR (||)", "NOT (!)", "AND (&&)", "XOR (^)"], correct: 2 },
  { id: 5, category: "Lógica de Programação", question: "Em um array de 10 elementos, qual é o índice do último elemento?", options: ["10", "9", "11", "0"], correct: 1 },

  // HTML/CSS (5)
  { id: 6, category: "HTML/CSS", question: "Qual tag HTML5 é usada para conteúdo de navegação?", options: ["<div>", "<nav>", "<header>", "<section>"], correct: 1 },
  { id: 7, category: "HTML/CSS", question: "Qual propriedade CSS cria um layout flexbox?", options: ["display: block", "display: flex", "display: grid", "display: inline"], correct: 1 },
  { id: 8, category: "HTML/CSS", question: "O que significa CSS?", options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], correct: 2 },
  { id: 9, category: "HTML/CSS", question: "Qual seletor CSS tem maior especificidade?", options: [".classe", "#id", "elemento", "*"], correct: 1 },
  { id: 10, category: "HTML/CSS", question: "Qual unidade CSS é relativa ao tamanho da fonte do elemento pai?", options: ["px", "rem", "em", "vh"], correct: 2 },

  // JavaScript (6)
  { id: 11, category: "JavaScript", question: "Qual método de array retorna um novo array com elementos filtrados?", options: [".map()", ".filter()", ".reduce()", ".forEach()"], correct: 1 },
  { id: 12, category: "JavaScript", question: "O que é uma Promise em JavaScript?", options: ["Um tipo de loop", "Um objeto que representa a conclusão futura de uma operação assíncrona", "Uma variável global", "Um tipo de função"], correct: 1 },
  { id: 13, category: "JavaScript", question: "Qual a diferença entre let e const?", options: ["Não há diferença", "let pode ser reatribuído, const não", "const pode ser reatribuído, let não", "Ambos podem ser reatribuídos"], correct: 1 },
  { id: 14, category: "JavaScript", question: "O que é o DOM?", options: ["Uma linguagem de programação", "Um banco de dados", "Uma representação em árvore do documento HTML", "Um framework JavaScript"], correct: 2 },
  { id: 15, category: "JavaScript", question: "Qual método converte JSON string para objeto JavaScript?", options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"], correct: 1 },
  { id: 16, category: "JavaScript", question: "O que o operador '===' verifica?", options: ["Apenas valor", "Apenas tipo", "Valor e tipo", "Referência de memória"], correct: 2 },

  // Git (4)
  { id: 17, category: "Git", question: "Qual comando Git cria uma cópia local de um repositório remoto?", options: ["git init", "git clone", "git pull", "git fetch"], correct: 1 },
  { id: 18, category: "Git", question: "Qual comando adiciona mudanças ao staging area?", options: ["git commit", "git push", "git add", "git merge"], correct: 2 },
  { id: 19, category: "Git", question: "O que é um 'branch' no Git?", options: ["Uma cópia do repositório", "Uma linha independente de desenvolvimento", "Um tipo de commit", "Um arquivo de configuração"], correct: 1 },
  { id: 20, category: "Git", question: "Qual comando envia commits locais para o repositório remoto?", options: ["git pull", "git fetch", "git push", "git merge"], correct: 2 },

  // Conceitos Gerais (5)
  { id: 21, category: "Conceitos Gerais", question: "O que é uma API REST?", options: ["Um banco de dados", "Uma interface de comunicação entre sistemas baseada em HTTP", "Uma linguagem de programação", "Um framework front-end"], correct: 1 },
  { id: 22, category: "Conceitos Gerais", question: "O que significa HTTP status code 404?", options: ["Sucesso", "Erro do servidor", "Recurso não encontrado", "Não autorizado"], correct: 2 },
  { id: 23, category: "Conceitos Gerais", question: "O que é responsividade em web design?", options: ["Velocidade de carregamento", "Adaptar o layout a diferentes tamanhos de tela", "Segurança do site", "SEO do site"], correct: 1 },
  { id: 24, category: "Conceitos Gerais", question: "Qual padrão arquitetural separa a aplicação em Model, View e Controller?", options: ["MVVM", "MVC", "MVP", "SOLID"], correct: 1 },
  { id: 25, category: "Conceitos Gerais", question: "O que é TypeScript?", options: ["Um framework CSS", "Um superset tipado de JavaScript", "Um banco de dados", "Uma biblioteca de UI"], correct: 1 },
];

export const getLevel = (score: number, total: number): string => {
  const pct = (score / total) * 100;
  if (pct >= 85) return "Avançado";
  if (pct >= 65) return "Intermediário";
  if (pct >= 40) return "Júnior";
  return "Iniciante";
};

export const getFeedback = (level: string, categoryScores: Record<string, { correct: number; total: number }>) => {
  const strengths: string[] = [];
  const improvements: string[] = [];

  Object.entries(categoryScores).forEach(([cat, { correct, total }]) => {
    const pct = (correct / total) * 100;
    if (pct >= 70) strengths.push(cat);
    else improvements.push(cat);
  });

  const studyPaths: Record<string, string> = {
    Iniciante: "Comece com fundamentos: HTML, CSS, JavaScript básico e lógica de programação. Recomendamos cursos introdutórios e projetos simples.",
    Júnior: "Foque em aprofundar JavaScript, aprenda um framework (React), pratique Git no dia a dia e construa projetos pessoais.",
    Intermediário: "Explore conceitos avançados: TypeScript, testes automatizados, padrões de projeto e contribua com projetos open source.",
    Avançado: "Você está no caminho certo! Foque em arquitetura de software, DevOps, mentoria e especialização na sua stack.",
  };

  return {
    strengths: strengths.length ? strengths : ["Continue estudando para identificar seus pontos fortes!"],
    improvements: improvements.length ? improvements : ["Excelente! Continue praticando para manter o nível."],
    studyPath: studyPaths[level],
    resumeTip: level === "Iniciante"
      ? "Destaque projetos pessoais e cursos no currículo. Mostre vontade de aprender."
      : level === "Júnior"
      ? "Inclua projetos com tecnologias específicas e mencione sua experiência com Git e metodologias ágeis."
      : level === "Intermediário"
      ? "Destaque contribuições open source, projetos complexos e conhecimento em arquitetura."
      : "Foque em liderança técnica, arquitetura e impacto nos projetos anteriores.",
  };
};
