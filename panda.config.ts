import { defineConfig, defineRecipe } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],

  theme: {
    extend: {
      semanticTokens: {
        colors: {
          background: {
            
            value: { 
              base: '{colors.white}', 
              _dark: '{colors.slate.950}', 
              _forest: '{colors.green.950}' 
            }
          },
          text: {
            value: { 
              base: '{colors.slate.900}', 
              _dark: '{colors.white}', 
              _forest: '{colors.green.50}' 
            }
          },
          accent: {
            value: { 
              base: '{colors.green.500}', 
              _dark: '{colors.green.400}', 
              _forest: '{colors.lime.400}' 
            }
          }  
        }
      }
    }
  },

  conditions: {
    extend: {
      
      dark: '[data-theme="dark"] &',
      forest: '[data-theme="forest"] &',
    }
  },

  outdir: "src/styled-system",
  jsxFramework: "react",
});

export const cultivoCard = defineRecipe({
  
})