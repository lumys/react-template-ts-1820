module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'import', '@typescript-eslint'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: [
          '**/*.test.tsx.js',
          '**/*.test.tsx.jsx',
          '**/*.test.tsx.ts',
          '**/*.test.tsx.tsx',
          '**/*.spec.js',
          '**/*.spec.jsx',
          '**/*.spec.ts',
          '**/*.spec.tsx',
          '**/*.config.js',
        ],
      },
    ],
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      // node: {
      //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
      //   moduleDirectory: ['node_modules', 'types'],
      // },
    },
  },
};
