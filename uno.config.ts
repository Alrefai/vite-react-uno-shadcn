import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [{
    logo: `i-logos-react w-6em h-6em transform transition-800 hover:rotate-180`,
  }],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { display: `inline-block`, 'vertical-align': `middle` },
      cdn: `https://esm.sh/`,
    }),
  ],
  transformers: [transformerVariantGroup()],
})
