export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            navy: "#001F3F",      // Primary - dominates large areas
            lightBlue: "#41C2F3", // Accent - CTAs, links, highlights only
            white: "#FFFFFF",     // Background / text contrast
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        },
        fontSize: {
          'display': ['clamp(2.8rem, 4vw, 4rem)', { lineHeight: '1.1', fontWeight: '600' }],
          'h1': ['clamp(2.8rem, 4vw, 4rem)', { lineHeight: '1.1', fontWeight: '600' }],
          'h2': ['clamp(2.2rem, 3vw, 3rem)', { lineHeight: '1.2', fontWeight: '600' }],
          'h3': ['1.6rem', { lineHeight: '1.3', fontWeight: '600' }],
          'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
          'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        },
        spacing: {
          'xs': '4px',
          'sm': '8px',
          'md': '16px',
          'lg': '32px',
          'xl': '64px',
          'xxl': '96px',
        },
        maxWidth: {
          'content': '1200px',
        },
      },
    },
  };
  