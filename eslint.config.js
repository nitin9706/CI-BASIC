// eslint.config.js
import js from "eslint";

export default [
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
