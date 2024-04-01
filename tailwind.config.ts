import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      width:{
        '1440' : '1440px',
        '1029' : '1029px',
        '1235' : '1235px',
        '635'  : '635px' ,
      },

      height:{
        '1940' : '1940px',
        '232'  : '232px',

      }
    },
  },
  plugins: [],
};
export default config;
