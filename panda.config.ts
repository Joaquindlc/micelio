import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          background: {
            value: { base: '{colors.white}', _dark: '{colors.green.950}', _forest: '{colors.green.950}' }
          },
          text: {
            value: { base: '{colors.slate.900}', _dark: '{colors.white}', _forest: '{colors.green.50}' }
          },
          accent: {
            value: {base: '{colors.green.500', _dark: '{colors.green.400}', _forest: '{colors.lime.400}' }
 }
        }
      }
    }
  },
  conditions: {
    extend: {
      forest: '[data-theme="forest"] &',
      dark: '[data-theme="dark"] &',
    }
  }
  

  // The output directory for your css system
  outdir: "styled-system",
});
