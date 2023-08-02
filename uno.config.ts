import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from 'unocss'

import { colors } from './src/lib/shadcn.colors'
import { presetShadcn } from './src/lib/shadcn.preset'
import { theme } from './src/lib/shadcn.theme'

export default defineConfig({
  shortcuts: [{
    logo: `w-6em h-6em transform transition-800 hover:rotate-180`,
  }],
  presets: [
    presetUno({ dark: `media` }),
    presetAttributify(),
    presetIcons({
      extraProperties: { display: `inline-block`, 'vertical-align': `middle` },
      cdn: `https://esm.sh/`,
    }),
    presetShadcn(),
  ],
  transformers: [transformerVariantGroup()],
  theme,
  preflights: [{ getCSS: () => colors }, {
    getCSS: () => /* CSS */ `
      :root {
        color-scheme: dark light;
      }

      body {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `,
  }],
})
