import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: ["eslint:recommended", "next", "prettier"],
    plugins: ["simple-import-sort", "sort-keys-fix"],
    rules: {
      "no-console": ["warn"],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [["^\\u0000"], ["^@?\\w"], ["^[^.]"], ["^\\."], ["^src/.*"]],
        },
      ],
      "sort-keys-fix/sort-keys-fix": [
        "warn",
        "asc",
        {
          caseSensitive: true,
          natural: false,
        },
      ],
    },
  }),
];

export default eslintConfig;
