import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
} from "unocss";
export default defineConfig({
  shortcuts: { 'flex-center': 'flex items-center justify-center' },
  rules: [
    [/^t-a-(\d+)$/, ([, d]) => ({ transition: `all 0.${d}s linear` })],
    [
      /^bg-white-(\d+)$/,
      ([, d]) => ({ "background-color": `rgb(255 255 255 / ${d}%)` }),
    ],
    [
      /^bg-black-(\d+)$/,
      ([, d]) => ({ "background-color": `rgb(0 0 0 / ${d}%)` }),
    ],
    [/^l-s-(\d+)$/, ([, d]) => ({ "letter-spacing": `${d}px` })],
    [/^card-rotate-(\d+)$/, ([, d]) => ({ transform: `rotateY(${d}deg)` })],
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#a77b3c",
      },
      gold: {
        DEFAULT: "#a77b3c",
        light: "#d2ae70",
        dark: "#75552f",
      },
      royal: {
        DEFAULT: "#a77b3c",
        dark: "#1d1d1f",
      },
    },
    animation: {
      'card-flip': 'card-flip 0.6s ease-in-out',
      'card-deal': 'card-deal 0.5s ease-out',
      'card-fly': 'card-fly 0.8s ease-in-out',
      'battle-impact': 'battle-impact 0.5s ease-out',
      'win-glow': 'win-glow 1.5s ease-in-out infinite',
      'lose-shake': 'lose-shake 0.5s ease-in-out',
      'float': 'float 3s ease-in-out infinite',
      'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      'slide-up': 'slide-up 0.5s ease-out',
      'fade-in': 'fade-in 0.5s ease-out',
      'scale-in': 'scale-in 0.4s ease-out',
      'shimmer': 'shimmer 2s linear infinite',
      'bounce-in': 'bounce-in 0.6s ease-out',
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetTypography(),
  ],
  transformers: [transformerDirectives()],
});
