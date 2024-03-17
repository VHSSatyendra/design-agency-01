/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'primary-color': '#151515',
        'white-color': '#ffffff',
        'card-color': '#f2f2f2',
        'link-color': '#1c70bf',
        'text-muted': '#22222299',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
    },
    animation: {
      'loop-scroll': 'loop-scroll 15s linear infinite',
    },
    keyframes: {
      'loop-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    }           
    },
  },
  plugins: [],
}

