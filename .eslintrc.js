module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off', // console 가능하게
    'linebreak-style': 'off',
    camelcase: 'off',
    'no-plusplus': 'off', // ++ 가능
    'import/no-unresolved': 'off',
  },
};
