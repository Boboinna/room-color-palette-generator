import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // Disable unused vars (still warn instead of error)
      "@typescript-eslint/no-unused-vars": "off",
      // Or: "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // Disable no-explicit-any
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
