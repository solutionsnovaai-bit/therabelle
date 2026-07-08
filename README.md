# Thera Belle — site institucional

Landing page da clínica Thera Belle (estética avançada & bem-estar), em Piracicaba/SP.
Vite + React (JSX), sem TypeScript. Estilização via Tailwind v4 (tokens em `src/index.css`) combinada com estilos inline nos componentes.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` pronta para deploy estático. Para conferir localmente antes do deploy:

```bash
npm run preview
```

## Deploy na Vercel

1. Suba este diretório (`therabelle/`) como raiz do repositório no GitHub.
2. Na Vercel, importe o repositório — o preset **Vite** é detectado automaticamente (build command `npm run build`, output `dist`).
3. Nenhuma variável de ambiente é necessária.

## Onde editar conteúdo

Todo o texto, links de WhatsApp, procedimentos, terapias, dados das especialistas, endereço/horário e as palavras do rotator do hero ficam em **`src/content.js`** — não há textos soltos dentro dos componentes. Basta editar esse arquivo para atualizar copy sem mexer em lógica ou layout.

Imagens ficam em **`public/`** e são referenciadas por caminho absoluto (ex.: `/hero-desktop.jpg`).

## Estrutura

```
therabelle/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── hero-desktop.jpg, hero-mobile.jpg, load-logo.jpg
│   ├── julia.jpg, andrea.jpg
│   ├── clinica-recepcao.jpg, clinica-logo.jpg, clinica-sala.jpg, clinica-espera.jpg, clinica-atendimento.jpg
│   └── favicon-16.png, favicon-32.png, favicon-48.png, favicon-180.png
└── src/
    ├── main.jsx          — entry point (StrictMode + createRoot)
    ├── App.jsx            — composição das seções + estado do loading
    ├── index.css          — tokens Tailwind (@theme), resets globais, @keyframes
    ├── content.js          — todo o conteúdo editável do site
    ├── hooks/
    │   ├── useIsMobile.js
    │   ├── useReducedMotion.js
    │   └── useReveal.js    — fade/blur reveal-on-scroll (IntersectionObserver)
    └── components/
        ├── LoadingScreen.jsx
        ├── ScrollProgress.jsx
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Espaco.jsx
        ├── Manifesto.jsx
        ├── Especialistas.jsx
        ├── EsteticaAvancada.jsx
        ├── BemEstar.jsx
        ├── SuaVisita.jsx
        ├── CtaFinal.jsx
        ├── Footer.jsx
        ├── WhatsAppFab.jsx
        ├── GoldDust.jsx
        └── SectionGlow.jsx
```

## Notas de implementação

- Sem dependências além de `react`, `react-dom`, `motion` (runtime) e `vite`, `@vitejs/plugin-react`, `tailwindcss`, `@tailwindcss/vite` (dev). O pacote `motion` está listado nas deps mas nenhum componente o importa hoje — as animações usam CSS (`@keyframes`) e `requestAnimationFrame` puro, replicando 1:1 o comportamento original.
- `useReveal` (hook) substitui o observer único global do protótipo por um `IntersectionObserver` por elemento — mesmo efeito visual (fade + translateY, opcionalmente blur), encapsulado por componente.
- O FAB do WhatsApp observa um sentinel (`#hero-sentinel`) renderizado pelo `Hero` para saber quando aparecer.
- Tela de carregamento roda 1x por sessão (`sessionStorage.tb_loaded`), 1.6s via `requestAnimationFrame`, fade-out de 0.5s, e respeita `prefers-reduced-motion`.
