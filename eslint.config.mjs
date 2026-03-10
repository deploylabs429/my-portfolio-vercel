import { defineConfig } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';

const eslintConfig = defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '.vercel/**',
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      react: reactPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'func-style': ['error', 'expression'],
      'prefer-arrow-callback': ['error'],
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'error',
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
          ignoreCase: true,
          allowSeparatedGroups: true,
        },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      // Enforce consistent import ordering
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
            {
              pattern: '../**',
              group: 'parent',
            },
            {
              pattern: './**',
              group: 'sibling',
            },
            {
              pattern: '**/*.css',
              group: 'index',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
        },
      ],
    },
  },
]);

export default eslintConfig;
