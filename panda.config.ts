import { defineConfig } from "@pandacss/dev";
import {cardRecipe, taskPill} from "./src/theme/recipes";
import {themeColors} from "./src/theme/colors";


export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      recipes: {
        card,
        taskPill
      },
      semanticTokens: {
        colors: themeColors
      }
    }
  },

  conditions: {
    extend: {
      pastel: '[data-theme="pastel"] &',
      retro: '[data-theme="retro"] &',
      coffee: '[data-theme="coffee"] &',
      forest: '[data-theme="forest"] &',
      cyberpunk: '[data-theme="cyberpunk"] &',
      synthwave: '[data-theme="synthwave"] &',
      luxury: '[data-theme="luxury"] &',
      autumn: '[data-theme="autumn"] &',
      valentine: '[data-theme="valentine"] &',
      aqua: '[data-theme="aqua"] &',
      business: '[data-theme="business"] &',
      night: '[data-theme="night"] &',
      dracula: '[data-theme="dracula"] &',
    } 
  },
  outdir: "src/styled-system",
  jsxFramework: "react",
});