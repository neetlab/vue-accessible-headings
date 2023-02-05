/** @type {import('eslint').ESLint.ConfigData } */
module.exports = {
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    // "plugin:import/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:unicorn/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    // {
    //   files: ["**/*.{vue,ts}"],
    //   extends: [
    //     "plugin:@typescript-eslint/eslint-recommended",
    //     "plugin:@typescript-eslint/recommended",
    //     "plugin:import/typescript",
    //     "plugin:prettier/recommended",
    //   ],
    //   rules: {
    //     "@typescript-eslint/no-unused-vars": [
    //       "error",
    //       {
    //         argsIgnorePattern: "^_",
    //       },
    //     ],
    //   },
    // },
    {
      files: ["**/*.spec.ts"],
      env: {
        jest: true,
      },
    },
    {
      files: ["**/*.cjs"],
      env: {
        node: true,
      },
    },
  ],
  rules: {
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          pascalCase: true,
          kebabCase: true,
        },
      },
    ],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["H", "Region", "Provider"],
      },
    ],
  },
};
