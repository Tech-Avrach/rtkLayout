/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)", // Light Gray
        input: "var(--input)", // Light Gray
        ring: "var(--ring)", // Dark Blue
        background: "var(--background)", // White
        foreground: "var(--foreground)", // Dark Blue
        component: "var(--component-background)",
        containerCard: "var(--container-card)",
        hover: "var(--hover)",
        backgroundSecondary: "var(--background-secondary)", // Dark Blue
        foregroundSecondaryBackground: "var( --foreground-secondary-background)",
        heading: "var(--heading)",
        primary: {
          DEFAULT: "var(--primary)", // Darker Blue
          foreground: "var(--primary-foreground)", // Almost White
        },
        secondary: {
          DEFAULT: "var(--secondary)", // Very Light Blue
          foreground: "var(--secondary-foreground)", // Darker Blue
        },
        destructive: {
          DEFAULT: "var(--destructive)", // Bright Red
          foreground: "var(--destructive-foreground)", // Almost White
        },
        muted: {
          DEFAULT: "var(--muted)", // Very Light Blue
          foreground: "var(--muted-foreground)", // Medium Blue
        },
        accent: {
          DEFAULT: "var(--accent)", // Very Light Blue
          foreground: "var(--accent-foreground)", // Darker Blue
        },
        popover: {
          DEFAULT: "var(--popover)", // White
          foreground: "var(--popover-foreground)", // Dark Blue
        },
        card: {
          DEFAULT: "var(--card)", // White
          foreground: "var(--card-foreground)", // Dark Blue
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
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'login-gradient': 'linear-gradient(85deg, #4a90e2, #9013fe)',
      },
      boxShadow: {
        'primary-focus': '0 0 5px 2px var(--shadow)', // Purple shadow
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
