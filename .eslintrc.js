const isProduction = process.env.NODE_ENV === 'production';

const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'babel',
    'import',
    'jsx-a11y',
    'react',
    '@typescript-eslint'
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  globals: {
    '$Diff': true,
    'Kakao': true,
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
    'import/default': off,
    'import/extensions': off,
    'import/named': off,
    'import/namespace': off,
    'import/no-cycle': off,
    'import/no-deprecated': off,
    'import/no-duplicates': off,
    'import/no-extraneous-dependencies': off,
    'import/no-named-as-default': off,
    'import/no-named-as-default-member': off,
    'import/no-self-import': off,
    'import/no-useless-path-segments': off,
    'import/no-unresolved': off,
    'import/order': off,
    'import/prefer-default-export': off,
    indent: off,
    'jsx-a11y/anchor-is-valid': off,
    'jsx-a11y/click-events-have-key-events': error,
    'jsx-a11y/href-no-hash': off,
    'max-len': [error, 150, { ignoreComments: true }],
    'no-console': off,
    'no-multiple-empty-lines': [error, { max: error, maxEOF: error }],
    'no-unused-vars': off,
    'quotes': [error, 'single'],
    'react/jsx-filename-extension': [error, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prop-types': off,
    '@typescript-eslint/explicit-function-return-type': off,
    '@typescript-eslint/explicit-member-accessibility': off,
    '@typescript-eslint/indent': off,
    '@typescript-eslint/no-explicit-any': off,
    '@typescript-eslint/no-unused-vars': error,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    jsx: true,
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: '.',
    useJSXTextNode: true,
  },
  overrides: [],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      },
      typescript: {},
    },
  },
};
