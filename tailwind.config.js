/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './_layouts/**/*.html',
      './_includes/**/*.html',
      './_posts/**/*.md',
      './*.html',
      './_site/**/*.html'
    ],
    prefix: 'tw-', // Ensure TailwindCSS classes are prefixed
    darkMode: true,
    theme: {
      extend: {},
    },
    variants: {
      extend: {      
        colors: {
          blue: 'var(--bs-blue)',
          indigo: 'var(--bs-indigo)',
          purple: 'var(--bs-purple)',
          pink: 'var(--bs-pink)',
          red: 'var(--bs-red)',
          orange: 'var(--bs-orange)',
          yellow: 'var(--bs-yellow)',
          green: 'var(--bs-green)',
          teal: 'var(--bs-teal)',
          cyan: 'var(--bs-cyan)',
          black: 'var(--bs-black)',
          white: 'var(--bs-white)',
        },
        gray: {
          DEFAULT: 'var(--bs-gray)',
          dark: 'var(--bs-gray-dark)',
          100: 'var(--bs-gray-100)',
          200: 'var(--bs-gray-200)',
          300: 'var(--bs-gray-300)',
          400: 'var(--bs-gray-400)',
          500: 'var(--bs-gray-500)',
          600: 'var(--bs-gray-600)',
          700: 'var(--bs-gray-700)',
          800: 'var(--bs-gray-800)',
          900: 'var(--bs-gray-900)',
        },
        primary: 'var(--bs-primary)',
        secondary: 'var(--bs-secondary)',
        success: 'var(--bs-success)',
        info: 'var(--bs-info)',
        warning: 'var(--bs-warning)',
        danger: 'var(--bs-danger)',
        light: 'var(--bs-light)',
        dark: 'var(--bs-dark)',
        text: 'var(--text-color)',
        background: 'var(--background-color)',
        link: 'var(--link-color)',
        'link-hover': 'var(--link-hover-color)',
      },
    },
    plugins: [],
};