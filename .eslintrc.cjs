module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "prettier", // Prettier plugin
  ],
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // Use recommended settings for Prettier integration
  ],
  rules: {
    "prettier/prettier": "error", // Show Prettier issues as ESLint errors
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Ignore unused vars starting with '_'
    "no-console": ["error", { allow: ["warn", "error"] }],

    // Disable formatting rules that Prettier handles
    semi: "off",
    indent: "off",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "space-before-blocks": "off",
    "no-multiple-empty-lines": "off",
    "object-curly-spacing": "off",
    "array-bracket-spacing": "off",
    "keyword-spacing": "off",
    "arrow-spacing": "off",
    "space-infix-ops": "off",
    "space-in-parens": "off",
    "space-before-function-paren": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/space-before-blocks": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/quotes": "off",
    "jsx-quotes": "off",
    "react/jsx-wrap-multilines": "off", // Disable multiline JSX wrapping
    "import/order": "off", // Disable import order rules
  },
  settings: {
    next: {
      rootDir: true, // Set root directory for Next.js
    },
  },
};
