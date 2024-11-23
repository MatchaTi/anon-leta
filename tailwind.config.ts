import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "dot": "url('/dot.png')",
      }
    },
    safelist: [
      "bg-red-200",
      "bg-yellow-200",
      "bg-green-200",
      "bg-blue-200",
      "bg-purple-200",
      "bg-pink-200",
      "bg-orange-200",
      "bg-cyan-200",
      "bg-lime-200",
      "bg-emerald-200",
      "bg-sky-200",
      "bg-violet-200",
    ]
  },
  plugins: [],
} satisfies Config;
