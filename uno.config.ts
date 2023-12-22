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
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#00DC82",
      },
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
