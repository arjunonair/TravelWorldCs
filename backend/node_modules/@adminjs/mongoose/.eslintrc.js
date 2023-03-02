module.exports = {
    'env': {
        'es6': true,
        'node': true,
        'mocha': true
    },
    'extends': [
        'airbnb-base'
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint/eslint-plugin"],
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-underscore-dangle': 'off',
        'guard-for-in': 'off',
        'no-restricted-syntax': 'off',
        'no-await-in-loop': 'off',
        'no-param-reassign': 'off',
        "import/extensions": 'off'
    },
    overrides: [
        {
          files: ['*-test.js', '*.spec.js'],
          rules: {
            'no-unused-expressions': 'off',
            'func-names': 'off',
            'prefer-arrow-callback': 'off'
          }
        }
    ],
    globals: {
        'expect': true,
        'factory': true,
        'sandbox': true,
        'Pesel': true,
        'User': true,
        'Article': true
    }
}
