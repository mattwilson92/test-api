/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 100,
  arrowParens: 'always',
  quoteProps: 'as-needed',
  bracketSpacing: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.prisma',
      options: { printWidth: 80 },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: { singleQuote: false }, // YAML prefers double quotes when needed
    },
  ],
  plugins: [
    'prettier-plugin-prisma', // formats schema.prisma nicely
    'prettier-plugin-packagejson', // sorts package.json keys
  ],
};
