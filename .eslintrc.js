const isProduction = process.env.NODE_ENV === 'production';

const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  globals: {
    "Kakao": true,
  },
  rules: {
    'comma-dangle': [
      error,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'import/extensions': off,
    'import/no-deprecated': warn,
    'import/no-extraneous-dependencies': off,
    'import/no-unresolved': off,
    'import/prefer-default-export': off,
    indent: off,
    'jsx-a11y/click-events-have-key-events': error,
    'jsx-a11y/href-no-hash': off,
    'max-len': [error, 150, { ignoreComments: true }],
    'no-console': isProduction ? error : off,
    'no-multiple-empty-lines': [error, { max: error, maxEOF: error }],
    'no-unused-vars': [
      error, {
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: 'Fragment',
      },
    ],
    'quotes': [error, 'single'],
    'react/jsx-filename-extension': [error, { extensions: ['.js', '.jsx'] }],
  },
  parser: 'babel-eslint',
  overrides: [],
};
