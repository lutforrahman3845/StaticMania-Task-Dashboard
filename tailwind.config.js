/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Avenir:["AvenirNext","sans-sarif"],
        Poppins:["Poppins","sans-sarif"]
      },
    },
  },
  plugins: [],
}
