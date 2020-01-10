const path = require('path');
const packageJson = require('./package.json');

const packages = packageJson.workspaces.packages;
// const tsconfigPaths = packages.map((package) => path.resolve(package, 'tsconfig.json'));
const eslintConfig = {
  extends: ['@deboxsoft/devel/typescript'],
  parserOptions: {
    sourceType: 'module',
    project: [
      './tsconfig.eslint.json'
    ]
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/interface-name-prefix': 0
  }
}
module.exports = eslintConfig;
