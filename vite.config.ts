/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Analog from '@analogjs/platform'
import { liveDesigner } from '@pinegrow/vite-plugin'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
// import Vue from '@vitejs/plugin-vue'

// import VueDevTools from 'vite-plugin-analog-devtools'

// import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    Analog({
      vite: {
        experimental: {
          supportAnalogFormat: true,
        },
      },
    }),

    // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
    AutoImportAPIs({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.analog$/,
        /\.analog\?analog/, // .vue
        /\.md$/, // .md
        /\.mdx$/, // .mdx
      ],
      imports: [
        // '@angular',
        // 'vue',
        // 'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        // '@vueuse/core',
        // 'pinia',
      ],
      dirs: [
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        'src/composables',
        'src/utils',
        'src/stores',
      ],
      // analogTemplate: true,
      dts: 'auto-imports.d.ts',
    }),
    // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
    AutoImportComponents({
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

      dirs: ['src/components'],

      // allow auto load markdown components under ./src/components/
      extensions: ['analog', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.analog$/, /\.analog\?analog/, /\.md$/, /\.mdx?/],

      // resolvers: [], // Auto-import using resolvers
      dts: 'components.d.ts',
    }),
    Unocss({
      presets: [
        presetIcons({
          prefix: 'i-', // default prefix, do not change
        }),
      ],
      content: {
        pipeline: {
          include: ['./src/**/*', './src/app/**/*'],
        },
      },
    }),
    // VueDevTools(),
    liveDesigner({
      dirs: {
        src: './src/app',
      },
      startupPage: './src/app/components/HeroSection.analog',
      iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names
      devtoolsKey: 'devtoolsKey',
      tailwindcss: {
        configPath: 'tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',
        // themePath: false, // Set to false so that Design Panel is not used
        // restartOnConfigUpdate: true,
        restartOnThemeUpdate: true,
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
      //     ),
      //   },
      // ],
    }),
  ],

  build: {
    target: ['es2020'],
    //   // Vite uses Rollup under the hold, so rollup options & plugins can be used for advanced usage
    //   rollupOptions: {
    //     plugins: [visualizer()],
    //   },
  },

  resolve: {
    alias: {
      /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
      /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '~~': fileURLToPath(new URL('./', import.meta.url)),
    },
    mainFields: ['module'],
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}))
