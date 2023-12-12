import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-active': 'bg-gray:10',
    'flex-center': 'flex items-center justify-center',
  },
  theme: {
    colors: {
      primary: {
        DEFAULT: '#00DC82',
      },
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'DM Sans',
        mono: 'DM Mono',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
