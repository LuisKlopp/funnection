import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        "complex-gradient":
          "linear-gradient(to right, #000000 1%, #920028 100%)",
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
        jua: ["Jua", "sans-serif"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        mdl: "834px",
        lg: "1024px",
        lgx: "1280px",
        xl: "1441px",
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
        base: "18px",
        lg: "24px",
        xl: "36px",
      },
      fontWeight: {
        light: "300",
        medium: "500",
      },
      height: {
        "15": "60px",
      },
      maxWidth: {
        "2xl": "1441px",
      },
      padding: {
        "15": "60px",
      },
      colors: {
        backgroundBlack: "#0A0909",
        thickRed: "#920028",
        gray01: "#D2C9CD",
        gray02: "#B4ABAF",
        gray03: "#968D91",
        gray04: "#786F73",
        gray05: "#565053",
        gray06: "#272426",
        gray07: "#0A0909",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
