export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: number;
}

export const quizQuestions: QuizQuestion[] = [
  // Lógica de Programação (5)
  {
    id: 1,
    category: "Lógica de Programação",
    question: "Qual estrutura é usada para repetir um bloco de código?",
    options: ["if", "for", "switch", "const"],
    correct: 1,
  },
  {
    id: 2,
    category: "Lógica de Programação",
    question: "Qual é a complexidade de tempo de uma busca binária?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    correct: 2,
  }, // Única Difícil
  {
    id: 3,
    category: "Lógica de Programação",
    question: "O que é uma função que chama a si mesma?",
    options: ["Loop infinito", "Recursão", "Variável", "Operador"],
    correct: 1,
  },
  {
    id: 4,
    category: "Lógica de Programação",
    question: "Qual operador significa 'E' (AND) em programação?",
    options: ["||", "!", "&&", "=="],
    correct: 2,
  },
  {
    id: 5,
    category: "Lógica de Programação",
    question: "Em um array, qual é o índice do primeiro elemento?",
    options: ["1", "0", "-1", "10"],
    correct: 1,
  },

  // HTML/CSS (5)
  {
    id: 6,
    category: "HTML/CSS",
    question: "Qual tag é usada para criar um parágrafo?",
    options: ["<div>", "<p>", "<span>", "<a>"],
    correct: 1,
  },
  {
    id: 7,
    category: "HTML/CSS",
    question: "Qual propriedade CSS muda a cor de fundo?",
    options: ["color", "background-color", "border-color", "font-size"],
    correct: 1,
  },
  {
    id: 8,
    category: "HTML/CSS",
    question: "O que significa CSS?",
    options: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: 2,
  },
  {
    id: 9,
    category: "HTML/CSS",
    question: "Qual seletor CSS seleciona um elemento pelo ID?",
    options: [".classe", "#id", "elemento", "*"],
    correct: 1,
  },
  {
    id: 10,
    category: "HTML/CSS",
    question: "Para que serve a tag <a>?",
    options: [
      "Inserir imagem",
      "Criar parágrafo",
      "Criar um link",
      "Fazer uma lista",
    ],
    correct: 2,
  },

  // JavaScript (6)
  {
    id: 11,
    category: "JavaScript",
    question: "Qual comando exibe algo no console?",
    options: ["print()", "console.log()", "alert()", "show()"],
    correct: 1,
  },
  {
    id: 12,
    category: "JavaScript",
    question: "Qual a diferença entre let e const?",
    options: [
      "Nenhuma",
      "let pode ser alterado, const não",
      "const é mais rápido",
      "let é apenas para números",
    ],
    correct: 1,
  },
  {
    id: 13,
    category: "JavaScript",
    question: "O que o DOM representa?",
    options: [
      "O banco de dados",
      "A estrutura da página HTML",
      "Um servidor web",
      "Uma linguagem nova",
    ],
    correct: 1,
  },
  {
    id: 14,
    category: "JavaScript",
    question: "Qual símbolo é usado para atribuição de valor?",
    options: ["==", "===", "=", "!"],
    correct: 2,
  },
  {
    id: 15,
    category: "JavaScript",
    question: "O que o método alert() faz?",
    options: [
      "Fecha a aba",
      "Mostra uma caixa de aviso",
      "Soma números",
      "Deleta um arquivo",
    ],
    correct: 1,
  },
  {
    id: 16,
    category: "JavaScript",
    question: "Qual destes é um tipo de dado em JS?",
    options: ["Window", "String", "Browser", "CSS"],
    correct: 1,
  },

  // Git (4)
  {
    id: 17,
    category: "Git",
    question: "Qual comando inicia um repositório Git?",
    options: ["git start", "git init", "git pull", "git push"],
    correct: 1,
  },
  {
    id: 18,
    category: "Git",
    question: "Qual comando adiciona arquivos para o commit?",
    options: ["git commit", "git push", "git add", "git save"],
    correct: 2,
  },
  {
    id: 19,
    category: "Git",
    question: "O que é um 'commit'?",
    options: [
      "Uma pasta",
      "Um registro das alterações",
      "Um erro",
      "Um servidor",
    ],
    correct: 1,
  },
  {
    id: 20,
    category: "Git",
    question: "Qual comando envia o código para o servidor remoto?",
    options: ["git pull", "git fetch", "git push", "git merge"],
    correct: 2,
  },

  // Conceitos Gerais (5)
  {
    id: 21,
    category: "Conceitos Gerais",
    question: "O que é uma API?",
    options: [
      "Um monitor",
      "Uma interface de comunicação entre sistemas",
      "Um teclado",
      "Um tipo de vírus",
    ],
    correct: 1,
  },
  {
    id: 22,
    category: "Conceitos Gerais",
    question: "O que significa o erro 404?",
    options: [
      "Sucesso",
      "Servidor offline",
      "Página não encontrada",
      "Login feito",
    ],
    correct: 2,
  },
  {
    id: 23,
    category: "Conceitos Gerais",
    question: "O que é um site responsivo?",
    options: [
      "Um site que responde perguntas",
      "Um site que se adapta ao celular e PC",
      "Um site muito rápido",
      "Um site com muitas fotos",
    ],
    correct: 1,
  },
  {
    id: 24,
    category: "Conceitos Gerais",
    question: "O que significa a sigla URL?",
    options: [
      "Um tipo de cabo",
      "O endereço de um site",
      "Um componente do PC",
      "Uma marca de roteador",
    ],
    correct: 1,
  },
  {
    id: 25,
    category: "Conceitos Gerais",
    question: "O que é TypeScript?",
    options: [
      "Um editor de texto",
      "JavaScript com tipagem",
      "Um banco de dados",
      "Um sistema operacional",
    ],
    correct: 1,
  },
];

export const getLevel = (score: number, total: number): string => {
  const pct = (score / total) * 100;
  if (pct >= 85) return "Avançado";
  if (pct >= 65) return "Intermediário";
  if (pct >= 40) return "Júnior";
  return "Iniciante";
};

export const getFeedback = (
  level: string,
  categoryScores: Record<string, { correct: number; total: number }>,
) => {
  const strengths: string[] = [];
  const improvements: string[] = [];

  Object.entries(categoryScores).forEach(([cat, { correct, total }]) => {
    const pct = (correct / total) * 100;
    if (pct >= 70) strengths.push(cat);
    else improvements.push(cat);
  });

  const studyPaths: Record<string, string> = {
    Iniciante:
      "Comece com fundamentos: HTML, CSS, JavaScript básico e lógica de programação. Recomendamos cursos introdutórios e projetos simples.",
    Júnior:
      "Foque em aprofundar JavaScript, aprenda um framework (React), pratique Git no dia a dia e construa projetos pessoais.",
    Intermediário:
      "Explore conceitos avançados: TypeScript, testes automatizados, padrões de projeto e contribua com projetos open source.",
    Avançado:
      "Você está no caminho certo! Foque em arquitetura de software, DevOps, mentoria e especialização na sua stack.",
  };

  return {
    strengths: strengths.length
      ? strengths
      : ["Continue estudando para identificar seus pontos fortes!"],
    improvements: improvements.length
      ? improvements
      : ["Excelente! Continue praticando para manter o nível."],
    studyPath: studyPaths[level],
    resumeTip:
      level === "Iniciante"
        ? "Destaque projetos pessoais e cursos no currículo. Mostre vontade de aprender."
        : level === "Júnior"
          ? "Inclua projetos com tecnologias específicas e mencione sua experiência com Git e metodologias ágeis."
          : level === "Intermediário"
            ? "Destaque contribuições open source, projetos complexos e conhecimento em arquitetura."
            : "Foque em liderança técnica, arquitetura e impacto nos projetos anteriores.",
  };
};
