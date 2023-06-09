module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/jsx-runtime', 'airbnb'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: { 'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }] },
};
