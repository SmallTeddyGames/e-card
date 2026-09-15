import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from "unocss";
export default defineConfig({
  shortcuts: {
    "border-base": "border-gray-200 dark:border-gray-500",
    "bg-active": "bg-gray:10",
    "flex-center": "flex items-center justify-center",
    "card-size": "w-120px h-164px",
    "bg-Mask": "bg-white-80 dark:bg-black-30",
    "game-card": "relative rounded-xl shadow-lg overflow-hidden transition-all duration-300",
    "game-btn": "px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 cursor-pointer border-0 hover:scale-105 active:scale-95",
    "gold-text": "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600",
    "glow-effect": "box-shadow: 0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.3)",
  },
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
        DEFAULT: "#00DC82",
      },
      gold: {
        DEFAULT: "#FFD700",
        light: "#FFEC8B",
        dark: "#B8860B",
      },
      royal: {
        DEFAULT: "#4169E1",
        dark: "#1a1a3e",
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
    presetWebFonts({
      provider: "bunny",
      fonts: {
        sans: "DM Sans",
        mono: "DM Mono",
        ping: "PingFangMedium"
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives()],
});
