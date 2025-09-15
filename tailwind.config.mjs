/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'pink-custom': '#E62686',
        'orange-custom': '#ff6b35'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'arial': ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
