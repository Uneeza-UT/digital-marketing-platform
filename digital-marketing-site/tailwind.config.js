/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
          gray: {
              50: '#f9fafb',
              100: '#f3f4f6',
              200: '#e5e7eb',
              300: '#d1d5db',
              400: '#9ca3af',
              500: '#6b7280',
              600: '#4b5563',
              700: '#374151',
              800: '#1f2937',
              900: '#111827',
          },
          slate: {
              500: '#64748B',
              700: '#334155',
              800: '#1e293b',
              900: '#0f172a',
          },
          brandPlum: {
            900: "#1C1427", // main background
            800: "#241734", //section alt
            500: "#FF6B6B", // primary
            600: "#F94C66", // hover
            400: "#A78BFA", // soft violet highlight
            300: "#FCA5A5"  // highlight (soft coral glow)
          },
          brandCharcoal: {
            900: "#18181B", // body
            800: "#232326", // section alt (slightly lighter charcoal)
            500: "#F4A261", // primary
            600: "#E76F51", // hover
            400: "#F6BD60", // highlight (soft warm glow)
          },
          brandMarketing: {
            900: "#111827",  // main text 
            800: "#6B7280",  // muted text / secondary text    
            700: '#312E81',  // text accents       
            600: "#3730A3",  // hover / interactive
            500: "#4338CA",  // primary accent (buttons, highlights)
            400: "#E0E7FF",  // highlight / small accents
            200: "#EEF2FF",  // section alt background
            100: "#F8FAFC",  // body background
          },
          neon: {
            400: '#84CC16'
          }
        },
      animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
          'spin-slow': 'spin 10s linear infinite'
      },
      keyframes: {
          float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' }
          },
          'pulse-glow': {
              '0%': { boxShadow: '0 0 20px rgba(67, 56, 202, 0.4)' },
              '100%': { boxShadow: '0 0 35px rgba(67, 56, 202, 0.55)' }
          }
      }
    },
  },
  plugins: [],
}

