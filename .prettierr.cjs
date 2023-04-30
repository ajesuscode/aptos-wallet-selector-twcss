module.exports = {
  printWidth: 100,
  tabWidth: 4,
  singleQuote: true,
  semi: true,
  trailingComma: "all",
  arrowParens: "always",
  overrides: [
    {
      files: "*.{js,jsx,tsx,ts,json,html,css,scss,md, yml}",
      options: {
        tabWidth: 4,
        printWidth: 100,
      },
    },
  ],
};
