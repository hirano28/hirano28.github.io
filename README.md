# Portfólio — Edson Hirano

Portfólio pessoal (Angular 22) construído **consumindo o próprio Design System**
[`@hirano28/core-design-system`](https://github.com/hirano28/core-design-system).

- Bilíngue **PT/EN** com toggle (detecção automática + persistência em `localStorage`)
- **Dark mode** herdado dos tokens do Design System (`[data-theme='dark']`)
- Seções: Hero, Sobre, Experiência (timeline), Habilidades, Projetos/Cases, Contato
- Deploy automático no **GitHub Pages** via GitHub Actions

## Stack

- Angular 22 (standalone components + signals)
- `@hirano28/core-design-system` (botões, cards, badges) via GitHub Packages
- SCSS com design tokens (CSS custom properties)

## Pré-requisitos

- Node 22+ e npm 11+
- Acesso ao pacote `@hirano28/core-design-system` no GitHub Packages

## Desenvolvimento

### Opção A — usando o pacote publicado (GitHub Packages)

1. Gere um **Personal Access Token (classic)** com escopo `read:packages`.
2. Exporte o token e instale:

   ```bash
   export NODE_AUTH_TOKEN=seu_token_aqui
   npm install
   npm start
   ```

O `.npmrc` deste repositório já aponta o escopo `@hirano28` para o GitHub Packages.

### Opção B — dev offline com o build local do Design System

Se você tem o repositório `core-design-system` ao lado deste (em `../core-design-system`)
e prefere não publicar/autenticar para desenvolver:

```bash
# no repositório do design system
cd ../core-design-system
npm run build:lib

# de volta ao portfólio: instala o build local (sobrescreve a dependência temporariamente)
cd ../portfolio
npm run ds:link
npm start
```

O app sobe em http://localhost:4200 (ou a porta informada).

## Build

```bash
npm run build          # build padrão
npm run build:pages    # build com base-href "/" (GitHub Pages de usuário)
```

Saída: `dist/portfolio/browser`.

## Deploy (GitHub Pages — site de usuário)

O deploy é automático ao dar push na branch `main`, via `.github/workflows/deploy.yml`:

1. Instala dependências autenticando no GitHub Packages com o `GITHUB_TOKEN`.
2. Builda com `--base-href=/`.
3. Publica o conteúdo de `dist/portfolio/browser` no GitHub Pages.

Pré-requisitos no GitHub:

- O Design System precisa estar **publicado** no GitHub Packages
  (no repo `core-design-system`, publique uma tag `v0.1.0` — o workflow `publish-gpr.yml` cuida disso).
- Em **Settings -> Pages**, selecione **Source: GitHub Actions**.
- Como é um site de usuário (`hirano28.github.io`), o repositório deve se chamar
  `hirano28.github.io` e o `base-href` é `/`.

## Currículo em PDF

Coloque o arquivo em `public/cv/edson-hirano-cv.pdf`. O botão **Baixar CV** no header aponta para ele.

## Conteúdo

Todo o conteúdo (textos PT/EN, experiências, skills, projetos e contato) fica centralizado em
`src/app/core/i18n/translations.ts`.
