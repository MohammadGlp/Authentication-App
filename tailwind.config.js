/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sign-in": "url('Assets/Rectangle1.svg')",
        "sign-up": "url('Assets/Rectangle2.svg')",
      },
      dropShadow: {
        nun: "0 82px 40px rgba(100,100,100,0.2)",
      },
    },
  },
  plugins: [],
};
