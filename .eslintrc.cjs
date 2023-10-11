module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: ['vue', '@typescript-eslint'],
    root: true,
    rules: {
        'no-console': 'off',
        'quotes': ['error', 'single'],
        'comma-dangle': ['error', 'always-multiline'],
        'space-before-function-paren': ['error', 'never'],
        'no-unused-vars': ['error', {'args': 'after-used'}],
        'object-curly-spacing': ['error', 'always'],
        'semi': ['error', 'never'],
        'keyword-spacing': ['error', {'before': true, 'after': true}],
        'block-spacing': ['error', 'always'],
        'space-before-blocks': ['error', 'always'],
        'space-infix-ops': ['error', {'int32Hint': false}],

        'vue/script-setup-uses-vars': 'error',
        'vue/multi-word-component-names': 0,
        'vue/space-in-parens': ['error', 'never'],
        'vue/script-indent': ['error', 4, {baseIndent: 1, switchCase: 1}],
        'vue/html-indent': ['error', 4],
        'vue/object-curly-spacing': ['error', 'always'],
        'vue/max-attributes-per-line': ['error', {'singleline': {'max': 1}, 'multiline': {'max': 1}}],
    },
}
