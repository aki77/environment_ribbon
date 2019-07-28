module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base'],
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
  },
  rules: {
    semi: ['error', 'never'],

    'no-undef': 'off',
    'no-unused-vars': 'off',
    strict: 'off',
  },
}
