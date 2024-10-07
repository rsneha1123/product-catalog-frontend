import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography")
  ],
  theme: {
    extend: {
      colors: {
        primary: '#666666',
        text_subheadings1:"#CECCCC",
        text_subheadings2:"#3D3D3D",
        text_paragraph1:"#666666",
        text_paragraph2:"#404040",
        button_bg:'#575757'
      },
    },
  },
};
export default config;
