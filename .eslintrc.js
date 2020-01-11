module.exports = {
    'root': true,
    'env': {
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:unicorn/recommended',
    ],
    'parser': 'typescript-eslint-parser',
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module',
        'ecmaFetaures': {
            'jsx': true,
            'modules': true,
        }
    },
    'plugins': [
        'unicorn',
        'typescript',
        'import',
        'wix-editor',
        'tslint',
    ],
    'rules': {
        'no-undef': 0,
        'no-unused-vars': [0, { 'vars': 'local', 'args': 'after-used' }],
        'no-empty-function': 0,
        'no-dupe-args': 0,
        'no-redeclare': 0,
        'class-methods-use-this': 0,
        'indent': [0, 4, { 'SwitchCase': 1 }],
        'no-extra-semi': 1,
        'max-lines': [1, {'max': 300}],
        'max-nested-callbacks': [1, {max: 5}],
        'function-paren-newline': [1, 'consistent'],
        'prefer-promise-reject-errors': [1, {'allowEmptyReject': true}],
        'no-unneeded-ternary': [1],
        'import/no-webpack-loader-syntax': 1,
        'import/newline-after-import': 0,
        'import/no-duplicates': 1,
        'import/no-dynamic-require': 1,
        'import/max-dependencies': [1, {'max': 12}],
        'typescript/type-annotation-spacing': 0,
        'unicorn/no-abusive-eslint-disable': 1,
        'unicorn/import-index': 0,
        'unicorn/no-fn-reference-in-iterator': 0,
        'wix-editor/augmented-assignment': 1,
        'wix-editor/no-instanceof-array': 1,
        'wix-editor/no-not-not': 1,
        'wix-editor/no-unneeded-match': 1,
        'wix-editor/prefer-filter': 1,
        'wix-editor/prefer-ternary': 1,
        'wix-editor/return-boolean': 1,
        'wix-editor/simplify-boolean-expression': 1,
        'no-with': 2,
        'comma-dangle': [1, 'only-multiline'],
        'no-bitwise': 1,
        'one-var': [1, 'never'],
        'no-underscore-dangle': [1, { 'allowAfterThis': true }],
        'radix': 1,
        'no-console': 1,
        'no-debugger': 1,
        'no-duplicate-case': 1,
        'no-empty': 1,
        'no-unreachable': 1,
        'no-unsafe-finally': 1,
        'no-this-before-super': 1,
        'constructor-super': 1,
        'quotes': [1, 'single', { 'allowTemplateLiterals': true }],
        'semi': [1, 'always'],
        'eqeqeq': [1, "always", {"null": "ignore"}],
        'block-spacing': [1, 'always'],
        'comma-spacing': [1, { 'before': false, 'after': true }],
        'eol-last': 1,
        'no-mixed-spaces-and-tabs': 1,
        'no-multiple-empty-lines': [1, { 'max': 1 }],
        'no-spaced-func': 1,
        'no-trailing-spaces': 1,
        'space-before-blocks': 1,
        'space-before-function-paren': [1, { 'anonymous': 'always', 'named': 'never' }],
        'space-unary-ops': [1, { 'words': true, 'nonwords': false }],
        'no-irregular-whitespace': 1,
        'no-use-before-define': [1, 'nofunc'],
        'no-else-return': 1,
        'no-unexpected-multiline': 1,
        'dot-location': [1, 'property'],
        'no-throw-literal': 1,
        'comma-style': [1, 'last'],
        'no-await-in-loop': 1,
        'no-eval': 2,
        'no-extra-bind': 1,
        'no-implicit-coercion': [1, { 'boolean': true }],
        'no-loop-func': 2,
        'no-script-url': 2,
        'no-self-compare': 1,
        'no-throw-literal': 1,
        'max-params': [1, { 'max': 5 }],
        'no-trailing-spaces': 1,
        'no-confusing-arrow': [1, {'allowParens': true}],
        'prefer-const': 1,
        'prefer-destructuring': 1,
        'tslint/config': [1, {
            configFile: 'tsconfig.json',
            rulesDirectory: [
                'node_modules/tslint/lib/rules',
                'node_modules/tslint-clean-code/dist/src',
                'node_modules/tslint-microsoft-contrib',
                'node_modules/tslint-sonarts/lib/rules',
            ],
            rules: Object.assign({},
                require('tslint/lib/configs/recommended').rules,
                require('tslint-clean-code/recommended_ruleset').rules,
                require('tslint-microsoft-contrib/recommended_ruleset').rules,
                require('tslint-sonarts/tslint-sonarts.json').rules,
                {
                    'strict-boolean-expressions': false,
                    'id-length': false,
                    'variable-name': false,
                    'import-name': false,
                    'min-class-cohesion': false,
                    'no-commented-out-code': false,
                    'no-commented-code': false,
                    'no-unnecessary-class': false,
                    'no-unsafe-any': false,
                    'typedef': false,
                    'no-require-imports': false,
                    'member-access': false,
                    'ordered-imports': false,
                    'quotemark': false,
                    'object-literal-sort-keys': false,
                    'no-console': false,
                    'arrow-parens': false,
                    'max-line-length': false,
                    'object-literal-key-quotes': false,
                    'no-shadowed-variable': false,
                    'only-arrow-functions': false,
                    'no-var-requires': false,
                    'semicolon': false,
                    'interface-over-type-literal': false,
                    'align': false,
                    'trailing-comma': false,
                    'newline-before-return': false,
                    'interface-name': false,
                    'ban-types': false,
                    'no-relative-imports': false,
                    'missing-jsdoc': false,
                    'no-parameter-properties': false,
                    'completed-docs': false,
                    'export-name': false,
                    'no-reserved-keywords': false,
                    'no-backbone-get-set-outside-model': false,
                    'max-func-args': false,
                    'no-submodule-imports': false,
                }
            ),
        }],
    }
};
