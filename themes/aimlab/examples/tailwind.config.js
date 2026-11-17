module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/js/**/*.js',
    './themes/aimlab/layouts/**/*.html',
    './themes/aimlab/assets/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'Vazirmatn', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Newsreader', 'Vazirmatn', 'Georgia', 'serif'],
      },
      colors: {
        paper: '#fbfaf7',
        surface: '#ffffff',
        sand: '#f1ede5',
        ink: '#1b2a30',
        'ink-soft': '#3f5057',
        muted: '#617178',
        line: '#ded8cc',
        brand: '#14384a',
        'brand-deep': '#0d2734',
        'brand-soft': '#e8eff2',
        accent: '#9a5526',
        'accent-soft': '#f4e8db',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 56, 74, 0.04), 0 18px 40px -24px rgba(20, 56, 74, 0.35)',
        lift: '0 2px 4px rgba(20, 56, 74, 0.05), 0 24px 48px -28px rgba(20, 56, 74, 0.45)',
      },
      letterSpacing: {
        eyebrow: '0.16em',
      },
    },
  },
  plugins: [],
}
