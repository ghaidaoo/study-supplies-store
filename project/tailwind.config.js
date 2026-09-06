/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF9F4',
        sage: '#425238',
        'sage-dark': '#2F3C28',
        'sage-light': '#C7D8C1',
        sand: '#EFE9DE',
        ink: '#1F2822',
        muted: '#69736A',
      },
    },
  },
  plugins: [],
};
