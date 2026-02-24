export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: number;
  correctFeedback: string;
  incorrectFeedback: string;
  explanation: string;
  optionFeedbacks: string[];
  borderColors: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: "Lógica de Programação",
    question: "Qual estrutura é usada para repetir um bloco de código?",
    options: ["if", "for", "switch", "const"],
    correct: 1,
    correctFeedback: "Correto! Você identificou a estrutura de repetição.",
    incorrectFeedback: "Incorreto. Esta opção não é um loop.",
    explanation: "O 'for' é uma estrutura de repetição (loop), enquanto 'if' e 'switch' são condicionais.",
    optionFeedbacks: [
      "Incorreto. O 'if' é uma estrutura condicional.",
      "Correto! O 'for' permite repetir um bloco de código várias vezes.",
      "Incorreto. O 'switch' é uma estrutura de seleção condicional.",
      "Incorreto. 'const' é usado para declarar constantes."
    ],
    borderColors: ["#F28C38", "#1A1A1A", "#F28C38", "#1A1A1A"]
  },
  {
    id: 2,
    category: "Lógica de Programação",
    question: "Qual é a complexidade de tempo de uma busca binária?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    correct: 2,
    correctFeedback: "Correto! O logaritmo reflete a divisão constante do problema.",
    incorrectFeedback: "Incorreto. Essa complexidade pertence a outro algoritmo.",
    explanation: "A busca binária divide o problema ao meio a cada passo, resultando em uma complexidade logarítmica O(log n).",
    optionFeedbacks: [
      "Incorreto. O(n) é a complexidade da busca linear.",
      "Incorreto. O(n²) é comum em algoritmos de ordenação simples como Bubble Sort.",
      "Correto! A busca binária reduz o espaço de busca pela metade a cada iteração.",
      "Incorreto. O(1) representa complexidade constante."
    ],
    borderColors: ["#1A1A1A", "#F28C38", "#1A1A1A", "#F28C38"]
  },
  {
    id: 3,
    category: "Lógica de Programação",
    question: "Em um array, qual é o índice do primeiro elemento?",
    options: ["1", "0", "-1", "10"],
    correct: 1,
    correctFeedback: "Correto! Arrays começam com índice zero.",
    incorrectFeedback: "Incorreto. Lembre-se que em computação a contagem geralmente inicia do zero.",
    explanation: "Na maioria das linguagens de programação, como JavaScript, a contagem de índices começa em 0.",
    optionFeedbacks: [
      "Incorreto. Na programação, a maioria das linguagens não usa índice 1 para o início.",
      "Correto! Arrays em JavaScript e na maioria das linguagens são zero-indexed.",
      "Incorreto. Índices negativos geralmente são usados para acessar elementos do fim para o início em algumas linguagens.",
      "Incorreto. O índice 10 seria o décimo primeiro elemento."
    ],
    borderColors: ["#F28C38", "#1A1A1A", "#F28C38", "#1A1A1A"]
  },
  {
    id: 4,
    category: "HTML/CSS",
    question: "Qual tag é usada para criar um link em HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1,
    correctFeedback: "Correto! A tag <a> é a âncora do link.",
    incorrectFeedback: "Incorreto. Esta tag tem outra finalidade no documento.",
    explanation: "A tag <a> (anchor) é usada com o atributo 'href' para criar links para outras páginas.",
    optionFeedbacks: [
      "Incorreto. A tag <link> é usada para vincular recursos externos como CSS.",
      "Correto! A tag <a> define um hiperlink.",
      "Incorreto. 'href' é um atributo, não uma tag.",
      "Incorreto. <url> não é uma tag válida de link no HTML5."
    ],
    borderColors: ["#1A1A1A", "#F28C38", "#1A1A1A", "#F28C38"]
  },
  {
    id: 5,
    category: "HTML/CSS",
    question: "Qual propriedade CSS muda a cor do texto?",
    options: ["background-color", "text-color", "color", "font-style"],
    correct: 2,
    correctFeedback: "Correto! Propriedade color alterada com sucesso.",
    incorrectFeedback: "Incorreto. Essa propriedade mudaria o fundo ou não existe.",
    explanation: "A propriedade 'color' define a cor da fonte, enquanto 'background-color' define o fundo.",
    optionFeedbacks: [
      "Incorreto. 'background-color' altera a cor de fundo do elemento.",
      "Incorreto. 'text-color' não é uma propriedade CSS válida.",
      "Correto! A propriedade 'color' é a responsável pela cor do texto.",
      "Incorreto. 'font-style' é usada para aplicar itálico ou estilos de fonte."
    ],
    borderColors: ["#F28C38", "#1A1A1A", "#F28C38", "#1A1A1A"]
  },
  {
    id: 6,
    category: "HTML/CSS",
    question: "O que o seletor '#id' faz no CSS?",
    options: ["Seleciona todos os elementos", "Seleciona elementos por classe", "Seleciona um elemento único pelo ID", "Seleciona apenas tags <div>"],
    correct: 2,
    correctFeedback: "Correto! O ID é um identificador único.",
    incorrectFeedback: "Incorreto. Você confundiu com seletores de classe ou tag.",
    explanation: "O símbolo '#' é usado exclusivamente para selecionar elementos que possuem um ID específico.",
    optionFeedbacks: [
      "Incorreto. O seletor universal é o '*'.",
      "Incorreto. Seletores de classe usam o ponto (.).",
      "Correto! O '#' identifica um elemento único através do seu atributo ID.",
      "Incorreto. Para selecionar <div>, usamos apenas o nome da tag."
    ],
    borderColors: ["#1A1A1A", "#F28C38", "#1A1A1A", "#F28C38"]
  },
  {
    id: 7,
    category: "JavaScript",
    question: "Qual a diferença entre let e const?",
    options: ["Nenhuma", "let pode ser alterado, const não", "const é apenas para texto", "let não funciona em funções"],
    correct: 1,
    correctFeedback: "Correto! Imutabilidade é o foco do const.",
    incorrectFeedback: "Incorreto. Existem diferenças importantes na reatribuição.",
    explanation: "'const' cria uma variável cujo valor é fixo, enquanto 'let' permite que você atribua um novo valor depois.",
    optionFeedbacks: [
      "Incorreto. Elas possuem diferenças cruciais de reatribuição.",
      "Correto! 'let' permite reatribuição, 'const' é para valores constantes.",
      "Incorreto. Ambas podem armazenar qualquer tipo de dado.",
      "Incorreto. 'let' funciona perfeitamente dentro do escopo de funções."
    ],
    borderColors: ["#F28C38", "#1A1A1A", "#F28C38", "#1A1A1A"]
  },
  {
    id: 8,
    category: "JavaScript",
    question: "Qual comando exibe uma mensagem no console?",
    options: ["print()", "console.log()", "alert()", "log()"],
    correct: 1,
    correctFeedback: "Correto! console.log é essencial para debug.",
    incorrectFeedback: "Incorreto. Este comando não envia dados para o console.",
    explanation: "O 'console.log()' é a ferramenta padrão para depuração e exibição de dados no console do desenvolvedor.",
    optionFeedbacks: [
      "Incorreto. 'print()' é usado no Python ou para abrir a janela de impressão do navegador.",
      "Correto! É a forma padrão de registrar informações no console.",
      "Incorreto. 'alert()' exibe uma caixa de diálogo no navegador.",
      "Incorreto. O comando correto deve ser precedido por 'console.'."
    ],
    borderColors: ["#1A1A1A", "#F28C38", "#1A1A1A", "#F28C38"]
  },
  {
    id: 9,
    category: "JavaScript",
    question: "O que é o DOM?",
    options: ["Um servidor de banco de dados", "A representação em árvore do documento HTML", "Um framework de CSS", "Uma linguagem de programação"],
    correct: 1,
    correctFeedback: "Correto! O DOM permite manipular a estrutura da página.",
    incorrectFeedback: "Incorreto. O DOM não é um servidor ou linguagem.",
    explanation: "O DOM (Document Object Model) é a interface que permite que scripts acessem e manipulem o conteúdo da página.",
    optionFeedbacks: [
      "Incorreto. O DOM é focado na estrutura do documento no navegador.",
      "Correto! O DOM mapeia o HTML em uma árvore de objetos.",
      "Incorreto. Frameworks CSS seriam como o Tailwind ou Bootstrap.",
      "Incorreto. O DOM é uma API/Interface, não uma linguagem."
    ],
    borderColors: ["#F28C38", "#1A1A1A", "#F28C38", "#1A1A1A"]
  },
  {
    id: 10,
    category: "Git",
    question: "Qual comando inicia um novo repositório Git?",
    options: ["git start", "git init", "git new", "git push"],
    correct: 1,
    correctFeedback: "Correto! Repositório inicializado.",
    incorrectFeedback: "Incorreto. O comando de inicialização é outro.",
    explanation: "'git init' cria um novo subdiretório .git que inicializa o versionamento na pasta.",
    optionFeedbacks: [
      "Incorreto. 'git start' não é um comando padrão do Git.",
      "Correto! O comando 'init' inicializa um novo repositório local.",
      "Incorreto. 'git new' não existe no Git.",
      "Incorreto. 'git push' envia commits para o servidor remoto."
    ],
    borderColors: ["#1A1A1A", "#F28C38", "#1A1A1A", "#F28C38"]
  },
  {
    id: 11,
    category: "Git",
    question: "Qual comando envia seus commits para um servidor remoto?",
    options: ["git push", "git pull", "git commit", "git add"],
    correct: 0,
    correctFeedback: "Correto! Alterações enviadas para o servidor.",
    incorrectFeedback: "Incorreto. Esse comando serve para baixar ou salvar localmente.",
    explanation: "O 'git push' empurra suas alterações locais para o repositório online (como o GitHub).",
    optionFeedbacks: [
      "Correto! 'push' envia seu trabalho local para o remoto.",
      "Incorreto. 'pull' traz as alterações do remoto para o local.",
      "Incorreto. 'commit' salva as alterações apenas no seu histórico local.",
      "Incorreto. 'add' prepara os arquivos para o commit."
    ],
    borderColors: ["#F28C38", "#1A1A1A", "#F28C38", "#1A1A1A"]
  },
  {
    id: 12,
    category: "Git",
    question: "O que o comando 'git add .' faz?",
    options: ["Cria um commit", "Prepara todos os arquivos alterados para o commit", "Deleta o repositório", "Baixa o código do servidor"],
    correct: 1,
    correctFeedback: "Correto! Todos os arquivos foram para a área de preparação.",
    incorrectFeedback: "Incorreto. O add apenas prepara os arquivos.",
    explanation: "O 'git add' move as mudanças para a Staging Area, preparando-as para serem salvas no próximo commit.",
    optionFeedbacks: [
      "Incorreto. Para criar um commit, usa-se 'git commit'.",
      "Correto! O ponto (.) indica que todos os arquivos atuais devem ser preparados.",
      "Incorreto. Não existe comando 'add' para deletar repositórios.",
      "Incorreto. Para baixar o código, usa-se 'git pull' ou 'git clone'."
    ],
    borderColors: ["#1A1A1A", "#F28C38", "#1A1A1A", "#F28C38"]
  },
  {
    id: 13,
    category: "Conceitos Gerais",
    question: "O que significa o código HTTP 404?",
    options: ["Sucesso", "Erro interno do servidor", "Página não encontrada", "Acesso proibido"],
    correct: 2,
    correctFeedback: "Correto! O recurso não foi localizado.",
    incorrectFeedback: "Incorreto. Esse status representa outro tipo de resposta.",
    explanation: "O erro 404 indica que o servidor não conseguiu encontrar o recurso solicitado.",
    optionFeedbacks: [
      "Incorreto. Sucesso é representado pela faixa 200.",
      "Incorreto. Erro interno é o famoso 500.",
      "Correto! 404 Not Found é o erro de página inexistente.",
      "Incorreto. Proibido é o erro 403 (Forbidden)."
    ],
    borderColors: ["#F28C38", "#1A1A1A", "#F28C38", "#1A1A1A"]
  },
  {
    id: 14,
    category: "Conceitos Gerais",
    question: "O que é um site responsivo?",
    options: ["Um site que carrega rápido", "Um site que se adapta a diferentes tamanhos de tela", "Um site que tem chat online", "Um site com muitas animações"],
    correct: 1,
    correctFeedback: "Correto! Adaptação é a chave da responsividade.",
    incorrectFeedback: "Incorreto. Responsividade não trata de velocidade ou animação.",
    explanation: "Responsividade é a técnica de fazer o layout se ajustar automaticamente entre desktop, tablet e celular.",
    optionFeedbacks: [
      "Incorreto. Velocidade de carregamento é performance/WPO.",
      "Correto! Responsividade permite que o site funcione bem em qualquer dispositivo.",
      "Incorreto. Isso é uma funcionalidade de comunicação, não de layout.",
      "Incorreto. Animações fazem parte do design visual e interatividade."
    ],
    borderColors: ["#1A1A1A", "#F28C38", "#1A1A1A", "#F28C38"]
  },
  {
    id: 15,
    category: "Conceitos Gerais",
    question: "O que é TypeScript?",
    options: ["Uma linguagem totalmente nova", "Um superset de JavaScript que adiciona tipos", "Um substituto para o HTML", "Um banco de dados"],
    correct: 1,
    correctFeedback: "Correto! TypeScript traz segurança através de tipos.",
    incorrectFeedback: "Incorreto. Ele é baseado no JavaScript.",
    explanation: "TypeScript adiciona tipagem estática ao JavaScript, ajudando a evitar erros durante o desenvolvimento.",
    optionFeedbacks: [
      "Incorreto. Ele é construído sobre o JavaScript, não é do zero.",
      "Correto! Ele estende o JavaScript adicionando tipagem estática.",
      "Incorreto. TypeScript não lida com a estrutura de marcação HTML.",
      "Incorreto. TypeScript é uma linguagem de programação, não armazenamento."
    ],
    borderColors: ["#F28C38", "#1A1A1A", "#F28C38", "#1A1A1A"]
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