import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blueviolet: {
          "100": "#9747ff",
          "200": "#6938d3",
        }
      },
      spacing: {},
      fontFamily: {
        helvetica: "Helvetica",
      },
      fontSize: {
        xs: "12px",
        "base-7": "16.7px",
        sm: "14px",
        "lg-8": "18.8px",
        "base-4": "16.4px",
        inherit: "inherit",
      },
    },
  },
  
  plugins: [require(getDaisyUI()),  require(gepreline())],
}
function getDaisyUI() {
  return "daisyui";
}

function gepreline() {
  return "preline/plugin";
}
export default config
