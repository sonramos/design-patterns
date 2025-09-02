import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    ignores: ['**/*.config.ts'],
    languageOptions: {
      parser: tsParser,
      globals: {
        process: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      prettier: prettier,
    },
    rules: {
      // Enforce consistent indentation (4 spaces in this case)
      indent: ['error', 2],
      // Enforce the use of single quotes for strings
      quotes: ['error', 'single'],
      // Enforce semicolons at the end of statements
      semi: ['error', 'always'],
      // Enforce consistent line breaks (LF for Unix)
      'linebreak-style': ['error', 'unix'],
      // Require the use of === and !== (no implicit type conversions)
      eqeqeq: ['error', 'always'],
      // Enforce a maximum line length (usually 80 or 100 characters)
      'max-len': ['error', { code: 80 }],
      // Enable Prettier as a lint rule
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
        },
      ],
    },
  },
];
