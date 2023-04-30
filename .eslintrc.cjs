module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "eslint-config-prettier",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "@typescript-eslint", "react-hooks"],
  rules: {
    "react-refresh/only-export-components": "warn",
    eqeqeq: "warn",
    "max-len": [
      "error",
      {
        code: 80,
        ignoreComments: true,
        tabWidth: 2,
        ignoreUrls: true,
        // ignoreStrings: true,
        // ignoreTemplateLiterals: true,
      },
    ],
  },
};
