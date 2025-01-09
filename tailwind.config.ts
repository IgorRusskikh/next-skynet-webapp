import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "tt-norms": ["var(--font-tt-norms)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-gray": "#FBFBFB",
        "primary-red": "#D02E27",
        black: "#1D1D1B",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          margin: "0 auto",
          "@media (max-width: 768px)": {
            "max-width": "91.67vw",
          },
        },
      });
    }),
  ],
} satisfies Config;
