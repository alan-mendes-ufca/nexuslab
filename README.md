# Nexuslab

Base mínima com Next.js App Router, React, TypeScript estrito e CSS puro.
Páginas são Server Components por padrão. Adicione `"use client"` quando precisar de estado, eventos ou APIs do navegador.

Requer Node.js 20.19+, 22.13+ ou 24+. Recomendado: Node.js 24.

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Edite `app/page.tsx` para alterar a página, `app/layout.tsx` para metadados e `app/globals.css` para estilos.

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

Documentação: https://nextjs.org/docs/app
