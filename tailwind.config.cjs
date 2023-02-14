/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        primary: {
          marineBlue: 'hsl(213, 96%, 18%)',
          purplishBlue: 'hsl(243, 100%, 62%)',
          pastelBlue: 'hsl(228, 100%, 84%)',
          lightBlue: 'hsl(206, 94%, 87%)',
          strawberryRed: 'hsl(354, 84%, 57%)',
        },
        neutral: {
          coolGray: 'hsl(231, 11%, 63%)',
          lightGray: 'hsl(229, 24%, 87%)',
          magnolia: 'hsl(217, 100%, 97%)',
          alabaster: 'hsl(231, 100%, 99%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
      backgroundImage: {
        'steps-mobile-background-image':
          "url('./src/assets/icons/bg-sidebar-mobile.svg')",
        'steps-desktop-background-image':
          "url('./src/assets/icons/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
