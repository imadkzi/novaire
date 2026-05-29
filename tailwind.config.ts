import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      colors: {
        onyx: '#010101',
        charcoal: '#151719',
        stone: '#E5DDD5',
        gold: '#B8956A',
        grey: '#A8A29E',
      },
      fontFamily: {
        sans: ['Dienstag', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal: '500',
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.12em',
      },
      maxWidth: {
        // Tiered content width - scales up on large / 4K displays
        content: '72rem', // 1152px - laptop default
        'content-lg': '80rem', // 1280px
        'content-xl': '92rem', // 1472px
        'content-2xl': '104rem', // 1664px
        'content-3xl': '118rem', // 1888px - QHD / 4K
        'content-4xl': '132rem', // 2112px - ultra-wide 4K
      },
    },
  },
  plugins: [],
} satisfies Config
