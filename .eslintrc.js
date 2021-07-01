module.exports = {
  root: true,

  env: {
    es2021: true,
    node: true,
  },

  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  plugins: [
    '@typescript-eslint',
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
  },

  rules: {
    'import/prefer-default-export': 'off',

    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      ts: 'never',
    }],

    'no-underscore-dangle': ['error', {
      allow: ['_id'],
    }],

    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
  },
};
