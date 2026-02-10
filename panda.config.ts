import { defineConfig, defineRecipe } from "@pandacss/dev";

// Definimos la receta fuera para mantener el código limpio, 
// pero luego la "inyectamos" en el config.
const cultivoCard = defineRecipe({
  className: 'cultivoCard',
  description: 'Contenedor para la información de cada cultivo',
  base: {
    display: 'flex',
    flexDirection: 'column',
    p: '6',
    borderRadius: 'xl',
    border: '1px solid',
    bg: 'background',
    borderColor: 'accent',
    transition: 'all 0.3s ease',
    _hover: {
      transform: 'translateY(-4px)',
      boxShadow: 'lg'
    }
  },
  variants: {
    status: {
      healthy: { borderLeftWidth: '6px', borderLeftColor: 'green.400' },
      warning: { borderLeftWidth: '6px', borderLeftColor: 'orange.400' },
      critical: { borderLeftWidth: '6px', borderLeftColor: 'red.400' }
    }
  },
  defaultVariants: {
    status: 'healthy'
  }
});

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],

  theme: {
    extend: {
      // REGISTRO DE RECETAS (Aquí es donde Panda las busca)
      recipes: {
        cultivoCard,
      },
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