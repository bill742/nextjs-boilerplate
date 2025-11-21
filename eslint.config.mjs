import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  {
    // global ignores applied across the whole project
    ignores: ["node_modules/*", ".next/*", "out/*"],
  },
  ...compat.config({
    extends: ["next", "prettier"],
    ignorePatterns: ["src/components/ui", "seed.spec.ts"],
    plugins: ["simple-import-sort", "sort-keys-fix"],
    rules: {
      "no-console": ["warn"],
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
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
