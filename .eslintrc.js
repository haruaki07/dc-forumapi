module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    jest: true,
  },
  plugins: ['jest'],
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-unused-vars': ['error', { vars: 'all', ignoreRestSiblings: true }],
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
  },
};
