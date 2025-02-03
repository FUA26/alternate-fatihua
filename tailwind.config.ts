import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './node_modules/pliny/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './icons/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,tsx}',
    './config/**/*.{js,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'music-bar-1': {
          '0%, 100%': { height: '0%' },
          '50%': { height: '70%' },
        },
        'music-bar-2': {
          '0%, 100%': { height: '50%' },
          '25%': { height: '0%' },
          '75%': { height: '100%' },
        },
        'music-bar-3': {
          '0%, 100%': { height: '70%' },
          '15%': { height: '100%' },
          '65%': { height: '0%' },
        },
        'music-bar-4': {
          '0%, 100%': { height: '50%' },
          '35.7%': { height: '0%' },
          '85.7%': { height: '70%' },
        },
        'scale-up': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.18)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        wiggle: 'wiggle 7s linear infinite',
        'music-bar-1': 'music-bar-1 .8s linear infinite',
        'music-bar-2': 'music-bar-2 .8s linear infinite',
        'music-bar-3': 'music-bar-3 .8s linear infinite',
        'music-bar-4': 'music-bar-4 .8s linear infinite',
        'scale-up': 'scale-up 150ms ease-in-out forwards',
      },
      boxShadow: {
        demure: 'rgba(0, 0, 0, 0.3) 0 35px 60px -15px',
        'book-pages': `10px 40px 40px -10px #00000030, inset -2px 0 0 gray,
                        inset -3px 0 0 #dbdbdb, inset -4px 0 0 white, inset -5px 0 0 #dbdbdb,
                        inset -6px 0 0 white, inset -7px 0 0 #dbdbdb, inset -8px 0 0 white,
                        inset -9px 0 0 #dbdbdb`,
        mondegreen: `5px 5px rgba(0, 98, 90, 0.4),
                      10px 10px rgba(0, 98, 90, 0.3),
                      15px 15px rgba(0, 98, 90, 0.2),
                      20px 20px rgba(0, 98, 90, 0.1),
                      25px 25px rgba(0, 98, 90, 0.05)`,
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        gray: colors.gray,
        primary: {
          ...colors.orange,
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'solarized-light': '#fdfaf6',
        'github-dark-dimmed': '#22272e',
        'code-block': '#36313d',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      width: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      height: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      spacing: {
        15: '3.75rem',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              'text-underline-offset': '4px',
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              scrollMarginTop: '6rem',
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            '.remark-code-title': {
              '+ figure': {
                '> div': {
                  borderTop: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                },
                '.copy-code': {
                  display: 'none',
                },
              },
            },
            figure: {
              marginTop: 0,
            },
            pre: {
              margin: 0,
              code: {
                fontWeight: '500',
                span: {
                  color: 'var(--shiki-light, inherit)',
                  fontStyle: 'var(--shiki-light-font-style, inherit)',
                  fontWeight: 'var(--shiki-light-font-weight, inherit)',
                  textDecoration: 'var(--shiki-light-text-decoration, inherit)',
                },
              },
            },
            '[data-line]': {
              marginLeft: '-1.5rem',
              paddingLeft: '1rem',
            },
            '[data-line-numbers]': {
              counterReset: 'line',
              '[data-line]::before': {
                counterIncrement: 'line',
                content: 'counter(line)',
                display: 'inline-block',
                width: '0.75rem',
                marginRight: '2rem',
                textAlign: 'right',
                color: '#657B83',
              },
            },
            '[data-line-numbers-max-digits="2"]': {
              '[data-line]::before': {
                width: '1.25rem',
              },
            },
            '[data-line-numbers-max-digits="3"]': {
              '[data-line]::before': {
                width: '1.75rem',
              },
            },
            '[data-line-numbers-max-digits="4"]': {
              '[data-line]::before': {
                width: '2.25rem',
              },
            },
            '[data-highlighted-line]': {
              backgroundColor: '#fbf0ea',
              borderLeft: '4px solid theme(colors.gray.400)',
              paddingLeft: '.75rem',
            },
            '[data-highlighted-chars]': {
              boxShadow: '0 0 0 4px rgb(82 82 91 / 0.5)',
              borderRadius: '0.25rem',
              backgroundColor: 'theme(colors.zinc.600)',
            },
            '[data-chars-id]': {
              boxShadow: 'none',
              padding: '.25rem',
              borderBottom: '2px solid theme(colors.gray.800)',
            },
            code: {
              color: theme('colors.indigo.500'),
              fontWeight: '500',
            },
            '.image-container': {
              width: 'fit-content',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: '0.5rem',
              img: {
                marginTop: 0,
                marginBottom: 0,
              },
            },
            '.markdown-alert': {
              'p.markdown-alert-title': {
                fontSize: '1.125rem',
                fontWeight: '700',
                marginBottom: '0',
                marginTop: '0.5rem',
                svg: {
                  width: '20px',
                  height: '20px',
                },
              },
            },
          },
        },
        lg: {
          css: {
            figure: {
              marginTop: 0,
            },
            pre: {
              margin: 0,
              borderRadius: 0,
              code: {
                fontSize: '0.95em',
              },
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            pre: {
              code: {
                span: {
                  color: 'var(--shiki-dark, inherit)',
                  fontStyle: 'var(--shiki-dark-font-style, inherit)',
                  fontWeight: 'var(--shiki-dark-font-weight, inherit)',
                  textDecoration: 'var(--shiki-dark-text-decoration, inherit)',
                },
              },
            },
            '[data-highlighted-line]': {
              backgroundColor: '#37415180',
              borderLeft: '4px solid theme(colors.gray.500)',
              paddingLeft: '.75rem',
            },
            code: {
              color: theme('colors.primary.400'),
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [forms, typography, animate],
} satisfies Config
