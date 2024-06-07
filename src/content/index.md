<h1 align="center">Analog TailwindCSS App</h1>
<br>

> This project is a rewrite (to Analog) of Vue Designer's îles Quick starter template - https://github.com/pinegrow/natures-delight-with-iles-tailwindcss.<br><br>

[Analog](https://analogjs.org) is the fullstack meta-framework for Angular.

# Nature's Delight - Analog and Tailwind CSS!

A simple landing page for an fresh & organic fictional store styled with the power and beauty of Tailwind CSS. This app is built into a static site, and can be easily deployed to a CDN with excellent SEO.

Demo - https://natures-delight-analog-tailwindcss.netlify.app

## Vue Designer

A desktop visual editor for Vue apps supporting Mac, Windows, and Linux by [Pinegrow](https://pinegrow.com/). Take it for a free trial at [Vue Designer](https://vuedesigner.com)!

It lets you visually design 🎨 your Vue single file components and boosts your productivity and creativity while building your component-based Vue apps.

It smartly integrates with your ⚡️ [Vite](https://vitejs.dev/) based CLI and provides an amazing developer experience with its powerful visual controls and features.

Clean code 😃, No lock-in - You are in control of your projects and development workflow ❤️

## Try it now!

### 1. Clone to local

[Create a repo from this template on GitHub](https://github.com/pinegrow/natures-delight-analog-tailwindcss/generate).

(or)

If you prefer to do it manually with the cleaner git history

```bash
npx giget@latest gh:pinegrow/natures-delight-analog-tailwindcss my-natures-delight-analog-tailwindcss #project-name
cd my-natures-delight-analog-tailwindcss
npm install #or use pnpm
```

## 2. Open in Vue Designer

Vue Designer is only for Vue apps, not for analog.

~~Open your project in Vue Designer and follow the instructions displayed in the Config Panel (that should pop out automatically). Config Panel ⚙️ displays the key packages and the various links to their individual ecosystems and communities.~~

## Usage

### Start your development server

```bash
npm run dev # SPA
```

### Build

```bash
npm run build # SPA SSG
# The client build artifacts are located in the `dist/analog/public` directory. The server for the API build artifacts are located in the `dist/analog/server` directory.
```

### Analyze

Uncomment the `rollup-plugin-visualizer` usage in your config file and execute the `build` command. This command will generate `stats.html`. Open `stats.html` in your browser to analyze bundle sizes.

```bash
npm run build # open stats.html to analyze bundle sizes
```

### Preview

```bash
npm run now # build & preview
```

### Lighthouse

```bash
npm run unlighthouse # Uses npx unlighthouse from https://unlighthouse.dev/ to run lighthouse on entire site (all pages)
```

### Deploy to Netlify

You can deploy this repo as a site on your own to explore and experiment with, by clicking this button.
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Pinegrow/natures-delight-analog-tailwindcss)

Check out the [deployment documentation](https://analogjs.org/docs/features/deployment/overview) for more information.

## Pre-packed

### Meta Framework (Analog - for Angular)

- [Analog](https://analogjs.org/) - The fullstack Angular meta-framework.
  - 🔌 **[Batteries Included]** - layouts, components, site-wide data
  - ⚡️ **[Fast][vite]** - instant reloading powered by [Vite]
  - 🧱 **[Hybrid SSR/SSG support]** - Analog supports both Server-Side Rendering (SSR) and Static Site Generation (SSG) of Angular applications.
  - 🛣 **[File-based routing and API routes]** - Analog uses file-based routing and supports API (server) routes for Angular applications.
  - 📖 **[Markdown]** - use components in markdown and viceversa

### UI Frameworks

- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite#vue) - The amazing utility-first CSS framework.

### Icons

- [UnoCSS Preset Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - use over 100,000 open-source [Iconify](https://iconify.design/) icons. Uses the **unocss** format for icon names, for example, `i-mdi-home`.

### Modules/Plugins

- [Pinegrow Vite Plugin](https://www.npmjs.com/package/@pinegrow/vite-plugin) - enables you to live-design your Vue single-file components visually in Vue Designer.
- [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) - via Design Panel, enables visual controls customization (automatic) and theme customization (optional).
- 📲 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - Auto import APIs on-demand for Vite, Webpack and Rollup.

### Devtools

TBU

### VS Code Extensions

- [VS Code Extensions](./.vscode/extensions.json & ./.vscode/settings.json)
  - [Language Extension](https://marketplace.visualstudio.com/items?itemName=AnalogJS.vscode-analog) - Analog SFC IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Coding Style

- The new .analog [SFC syntax](https://analogjs.org/docs/experimental/sfc)
- [ESLint](https://eslint.org) with [@nuxt/eslint-config](https://github.com/nuxt/eslint-config) - opinionated not-so-strict set of linting rules. Nuxt & Analog share a similar directory structure, so are their linting rules.
- [Prettier](https://prettier.io) with [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - format without conflicting with eslint rules.

### Typescript

This project allows JS, and strict mode is turned off. Update `tsconfig.ts` as required.

```json
{
  "compilerOptions": {
    // ...
    "strict": false,
    "allowJs": true
  }
}
```

## Community

- [Vue Designer Community](https://discord.gg/BYp45Nnu5T)
