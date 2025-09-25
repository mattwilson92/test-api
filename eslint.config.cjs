// ESLint v9 flat config + TS + import sorting + Prettier interop
const ts = require('typescript-eslint');
const js = require('@eslint/js');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const importPlugin = require('eslint-plugin-import');
const unusedImports = require('eslint-plugin-unused-imports');

module.exports = ts.config(
  // 1) Ignore files (replaces .eslintignore)
  {
    ignores: ['dist', 'build', 'coverage', 'node_modules', '.prisma/client'],
  },

  // 2) Base JS + TS recommended (type-aware)
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,

  // 3) Project rules
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    languageOptions: {
      parserOptions: {
        project: true,                // use tsconfig.json
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      // Unused imports/vars
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],

      // Import hygiene + sorting
      'import/newline-after-import': ['error', { count: 1 }],
      'import/no-duplicates': 'error',
      'import/order': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'], // side-effect
            ['^node:', `^(${require('module').builtinModules.join('|')})(/|$)`], // builtins
            ['^@?\\w'], // external
            ['^@/', '^src/'], // internal aliases
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // parent
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // sibling
            ['^.+\\.s?css$'], // styles
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // Let Prettier handle formatting opinions
      'max-len': 'off',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
    // Prettier compatibility (no plugin needed with flat config)
    extends: ['plugin:import/recommended', 'plugin:import/typescript', 'prettier'],
  },
);
