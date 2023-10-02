/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1440px",
      },
      colors: {
        White: "hsl(0, 0%, 100%)",
        "Off-white": "hsl(0, 0%, 94%)",
        "Light-grey": "hsl(0, 0%, 86%)",
        "Smokey-grey": "hsl(0, 1%, 44%)",
        "Off-black": "hsl(0, 0%, 8%)",
        Purple: "hsl(259, 100%, 65%)",
        "Light-red": "hsl(0, 100%, 67%)",
      },
      fontFamily: {
        Poppins: "'Poppins', serif",
      },
    },
  },
  plugins: [],
};