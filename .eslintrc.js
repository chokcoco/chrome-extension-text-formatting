module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "src/pangu.js",
    "babel.config.js",
    "commitlint.config.js",
  ],
};
