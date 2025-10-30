# Estrutura do Projeto Portfolio Next.js

Este documento descreve a organização e estrutura de pastas do projeto portfolio desenvolvido com Next.js 14+.

## 📁 Estrutura de Diretórios

```
portfolio-nextjs/
├── app/                       # App Router (Next.js 13+)
│   ├── layout.tsx             # Layout principal (compartilhado)
│   ├── page.tsx               # Página inicial (/)
│   ├── globals.css            # Estilos globais
│   ├── dashboard/             # Área administrativa
│   │   └── page.tsx           # Página /dashboard
│   ├── api/                   # Rotas de API (Backend)
│   │   ├── auth/
│   │   │   └── route.ts       # POST /api/auth (login, signup)
│   │   ├── projects/
│   │   │   ├── route.ts       # GET/POST /api/projects
│   │   │   └── [id]/route.ts  # GET/PUT/DELETE /api/projects/:id
│   │   └── contact/
│   │       └── route.ts       # POST /api/contact
│   └── (components)/          # Componentes compartilhados
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Navigation.tsx
│
├── components/                # Componentes reutilizáveis (UI)
│   ├── ui/                    # Componentes base (botões, inputs, etc.)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   ├── sections/              # Seções da página
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── layout/                # Componentes de layout
│       └── Container.tsx
│
├── lib/                       # Utilitários e configurações
│   ├── db.ts                  # Conexão com banco de dados
│   ├── auth.ts                # Funções de autenticação
│   ├── utils.ts               # Funções utilitárias
│   └── constants.ts           # Constantes do projeto
│
├── prisma/                    # Configuração ORM (Prisma)
│   ├── schema.prisma          # Schema do banco de dados
│   └── migrations/            # Migrações do banco
│
├── public/                    # Arquivos estáticos
│   ├── images/                # Imagens do projeto
│   ├── icons/                 # Ícones
│   └── favicon.ico
│
├── styles/                    # Estilos adicionais
│   ├── components.css         # Estilos de componentes
│   └── animations.css         # Animações CSS
│
├── types/                     # Definições de tipos TypeScript
│   ├── project.ts
│   ├── user.ts
│   └── api.ts
│
├── hooks/                     # Custom hooks React
│   ├── useProjects.ts
│   └── useAuth.ts
│
├── middleware.ts              # Middleware Next.js
├── next.config.js             # Configurações do Next.js
├── tailwind.config.js         # Configuração Tailwind CSS
├── postcss.config.js          # Configuração PostCSS
├── package.json               # Dependências do projeto
├── tsconfig.json              # Configuração TypeScript
├── .env.local                 # Variáveis de ambiente
├── .gitignore
└── README.md
```

## 🏗️ Explicação das Seções

### `/app` - App Router (Next.js 13+)

- **layout.tsx**: Layout principal que envolve todas as páginas
- **page.tsx**: Página inicial do portfolio
- **globals.css**: Estilos globais da aplicação
- **dashboard/**: Área administrativa protegida
- **api/**: Endpoints da API (backend)
- **(components)/**: Componentes compartilhados entre páginas

### `/components` - Componentes React

- **ui/**: Componentes base reutilizáveis (botões, inputs, cards)
- **sections/**: Seções específicas das páginas (Hero, About, Projects)
- **layout/**: Componentes de layout (Container, Grid)

### `/lib` - Utilitários

- **db.ts**: Configuração e conexão com banco de dados
- **auth.ts**: Funções de autenticação e autorização
- **utils.ts**: Funções utilitárias gerais
- **constants.ts**: Constantes do projeto

### `/prisma` - ORM e Banco de Dados

- **schema.prisma**: Definição do schema do banco
- **migrations/**: Histórico de mudanças no banco

### `/public` - Arquivos Estáticos

- **images/**: Imagens do portfolio e projetos
- **icons/**: Ícones SVG e PNG
- **favicon.ico**: Ícone do site

### `/types` - Tipos TypeScript

- Definições de tipos para melhor tipagem
- Interfaces para dados da API
- Tipos para componentes

### `/hooks` - Custom Hooks

- Hooks personalizados para lógica reutilizável
- Gerenciamento de estado e efeitos colaterais

## 🔧 Arquivos de Configuração

- **next.config.js**: Configurações específicas do Next.js
- **tailwind.config.js**: Configuração do Tailwind CSS
- **tsconfig.json**: Configuração do TypeScript
- **package.json**: Dependências e scripts do projeto
- **.env.local**: Variáveis de ambiente (não versionado)
