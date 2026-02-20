import { defineConfig, defineRecipe } from "@pandacss/dev";

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


const themeColors = {
  background: {
    value: {
      base: '{colors.white}',
      _pastel: '#ffd8d8',
      _retro: '#e2d5bc',
      _coffee: '#20161F',
      _forest: '#171212',
      _cyberpunk: '#FF00FF',
      _synthwave: '#2D1B69',
      _luxury: '#171618',
      _autumn: '#D8B4A0',
      _valentine: '#E96D7B',
      _aqua: '#2DD4BF',
      _business: '#1C4E80',
      _night: '#0F172A',
      _dracula: '#282A36',
    }
  },
  text: {
    value: {
      base: '{colors.slate.900}',
      _pastel: '#4b5563',
      _retro: '#3d3d3d',
      _coffee: '#F5F5F5',
      _forest: '#f0fdf4',
      _cyberpunk: '#000000',
      _synthwave: '#ffffff',
      _luxury: '#E2C697',
      _autumn: '#fdf2f2',
      _valentine: '#5f0d1a',
      _aqua: '#00202e',
      _business: '#ffffff',
      _night: '#f8fafc',
      _dracula: '#f8f8f2',
    }
  },
  accent: {
    value: {
      base: '{colors.green.500}',
      _pastel: '#b7e4c7',
      _retro: '#ef9995',
      _coffee: '#A67C58',
      _forest: '#2B4C3F',
      _cyberpunk: '#00FFFF',
      _synthwave: '#FF1E9E',
      _luxury: '#B6862D',
      _autumn: '#D27548',
      _valentine: '#FF8FAB',
      _aqua: '#06B6D4',
      _business: '#0091D5',
      _night: '#334155',
      _dracula: '#BD93F9',
    }
  }
};

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      recipes: {
        cultivoCard,
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