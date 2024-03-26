module.exports = {
    'env': {
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
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
        'eqeqeq': [
            'error',
            'always'
        ],
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
                'maxEOF': 0,
                'maxBOF': 0
            }
        ],
        'key-spacing': [
            'error',
            {
                'beforeColon': false
            }
        ],
        'keyword-spacing': [
            'error',
            {
                'before': true
            }
        ],
        'space-before-blocks': [
            'error'
        ],
        'arrow-spacing': [
            'error'
        ],
        'dot-location': [
            'error',
            'property'
        ],
        'no-multi-spaces': [
            'error'
        ],
        'rest-spread-spacing': [
            'error',
            'never'
        ],
        'require-await': [
            'error'
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ]
    }
}
