# Currículo Tech

Plataforma unificada para criação, gestão e exportação de currículos otimizados para o mercado de tecnologia. O sistema integra um gerador de documentos com preview em tempo real e uma ferramenta de avaliação técnica para diagnóstico de carreira.

---

## 💻 Visão Geral do Sistema

### 1. Engine de Geração de Currículo (`/curriculo`)

Módulo principal focado na persistência e formatação de dados profissionais.

* **Campos Estruturados:** Coleta de dados sobre Stack Tecnológica, Nível de Inglês, Projetos, Repositórios e Certificações.
* **Sincronização Visual:** Renderização dinâmica (*Real-time Preview*) via State Management.
* **Templates Disponíveis:**
    * `Minimal Tech`: Design focado em legibilidade para sistemas de triagem (ATS).
    * `Dev Modern`: Ênfase em hierarquia visual e competências.
    * `Dark Professional`: Estética moderna baseada no Design System da plataforma.
* **Exportação:** Engine de processamento de PDF via `html2pdf.js`.

### 2. Módulo de Avaliação Técnica (`/teste`)

Ferramenta de diagnóstico para aferição de hard skills.

* **Algoritmo de Classificação:** Sistema de pontuação que define níveis do Iniciante ao Avançado.
* **Relatório de Performance:** Geração de feedbacks dinâmicos e sugestões de trilhas de aprendizado baseadas nos resultados.

---

## Stack Tecnológica

| Componente | Tecnologia |
| :--- | :--- |
| **Frontend** | React.js + Vite |
| **Linguagem** | TypeScript |
| **Estilização** | Tailwind CSS + shadcn/ui |
| **Backend / BaaS** | Supabase (PostgreSQL) |
| **Segurança** | Row Level Security (RLS) |

---

## Arquitetura de Dados (PostgreSQL)

```sql
-- Principais tabelas do ecossistema
Table profiles {
  id uuid [primary key]
  email varchar
  created_at timestamp
}

Table resumes {
  id uuid [primary key]
  user_id uuid [ref: > profiles.id]
  content jsonb
  template_style string
}

Table quiz_results {
  id uuid [primary key]
  user_id uuid [ref: > profiles.id]
  score integer
  level string
}

⚙️ Configuração do Ambiente Local
Para replicar o projeto localmente, execute os seguintes comandos no seu terminal:

1. Instalação

# Clonar o repositório
git clone <URL_DO_SEU_REPOSITORIO>

# Acessar diretório
cd curriculo-tech

# Instalar dependências
npm install

2. Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto:

VITE_SUPABASE_URL=seu_endpoint_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_publica

3. Deploy (Vercel)

O projeto está pronto para integração contínua com a Vercel. Ao conectar seu repositório, certifique-se de configurar as mesmas variáveis de ambiente acima nas Project Settings.

Autora

Nazaré Almeida Desenvolvedora de Sistemas | 