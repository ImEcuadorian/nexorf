

src/
├── app/                # App Router
│   └── …  
├── core                # Infra cliente
│   ├── api
│   │   ├── client.ts         # wrapper fetch/axios
│   │   └── server-actions/   
│   │       ├── index.ts
│   │       ├── login.ts
│   │       └── logout.ts
│   ├── schemas              # Zod schemas compartidos
│   │   ├── auth.ts          # loginSchema, userResponseSchema…
│   │   └── product.ts
│   └── services             # (opcional) lógica de orquestación
│       └── authService.ts   # llama client + parsea con schemas
├── shared            # UI atómica, hooks, utils, estilos
│   ├── ui/atoms
│   ├── hooks
│   └── utils
├── features          # Páginas y componentes por dominio
│   ├── auth/
│   └── products/
└── public/


├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── dashboard
│   │       └── page.tsx
│   ├── core
│   │   ├── domain              # Entidades y Value Objects
│   │   │   └── User.ts
│   │   ├── use-cases           # Casos de uso puros
│   │   │   └── Authenticate.ts
│   │   ├── infrastructure      # Adaptadores externos
│   │   │   ├── api-client.ts
│   │   │   └── repositories
│   │   │       └── UserRepo.ts
│   │   └── api
│   │       ├── client.ts       # Wrapper de fetch/axios
│   │       └── server-actions  # Next.js Server Actions
│   │           ├── index.ts
│   │           ├── login.ts
│   │           └── logout.ts
│   ├── shared                  # Librería interna (cross‑feature)
│   │   ├── ui                  # Atomic Design
│   │   │   ├── atoms
│   │   │   │   └── Button.tsx
│   │   │   ├── molecules
│   │   │   │   └── FormField.tsx
│   │   │   ├── organisms
│   │   │   │   └── Navbar.tsx
│   │   │   └── templates
│   │   │       └── PageLayout.tsx
│   │   ├── hooks               # Hooks genéricos
│   │   │   └── useDebounce.ts
│   │   ├── utils               # Helpers puros
│   │   │   └── formatDate.ts
│   │   └── styles              # Tokens, resets, mixins
│   │       └── design-tokens.ts
│   ├── features                # Dominios o “features”
│   │   ├── auth
│   │   │   ├── page.tsx        # /auth
│   │   │   ├── components
│   │   │   │   └── LoginForm.tsx
│   │   │   ├── hooks
│   │   │   │   └── useLogin.ts
│   │   │   ├── api.ts          # Llamadas a @core/api/client
│   │   │   └── types.ts
│   │   └── products
│   │       ├── page.tsx
│   │       ├── components
│   │       ├── hooks
│   │       ├── api.ts
│   │       └── types.ts
│   └── public                  # Favicon, robots.txt, assets estáticos
│       └── logo.svg
├── tests                       # Pruebas separadas
│   ├── unit                    # Test de dominio y unidades
│   ├── integration             # Test de API Routes / Infrastructure
│   └── e2e                     # Playwright / Cypress
├── scripts                     # Helpers (generadores, migraciones…)
│   └── generate-types.ts
├── docs
│   └── architecture.md         # Diagrama y convenciones de carpetas
├── .env.example
├── tsconfig.json
└── package.json
