/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        black: {
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
          950: '#030712',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        // Animasi untuk Contact Bubble
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-in-from-bottom': 'slideInFromBottom 0.3s ease-out',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-in': 'bounceIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' },
          'to': { boxShadow: '0 0 30px rgba(245, 158, 11, 0.6)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        // Keyframes untuk Contact Bubble
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromBottom: {
          '0%': { 
            transform: 'translateY(10px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        bounceIn: {
          '0%': {
            transform: 'scale(0.3)',
            opacity: '0'
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.8'
          },
          '70%': {
            transform: 'scale(0.9)',
            opacity: '0.9'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          },
        }
      },
    },
  },
  plugins: [],
}