module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    rules: {
        'generator-star-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'no-class-assign': 'warn',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'warn',
        'no-this-before-super': 'warn',
        'no-var': 'warn',
        'no-duplicate-imports': 'warn',
        'prefer-rest-params': 'error',
        'unicode-bom': 'warn',
        'max-statements-per-line': 'error',
        'no-useless-constructor': 'warn'
    }
};
