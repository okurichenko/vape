module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    camelcase: [2, { properties: 'never' }],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': 0,
    'eol-last': 2,
    'func-names': 0,
    'func-style': 0,
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    indent: [2, 2, { SwitchCase: 1, VariableDeclarator: 1 }],
    'jsx-quotes': 0,
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'keyword-spacing': [2, {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],
    'linebreak-style': 0,
    'lines-around-comment': 0,
    'max-depth': [0, 4],
    'max-len': [2, 100, 2, {
      ignoreUrls: true,
      ignoreComments: false
    }],
    'max-lines': [0, {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],
    'max-nested-callbacks': 0,
    'max-params': [0, 3],
    'max-statements': [0, 10],
    'max-statements-per-line': [0, { max: 1 }],
    'new-cap': [2, { newIsCap: true }],
    'new-parens': 0,
    'newline-after-var': 0,
    'newline-before-return': 0,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 0,
    'no-mixed-operators': [2, {
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],
    'no-negated-condition': 0,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'always'],
    'object-curly-newline': [0, {
      ObjectExpression: { minProperties: 0, multiline: true },
      ObjectPattern: { minProperties: 0, multiline: true }
    }],
    'object-property-newline': [2, {
      allowMultiplePropertiesPerLine: true,
    }],
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': [2, 'always'],
    'operator-assignment': 0,
    'operator-linebreak': 0,
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    quotes: [2, 'single', { avoidEscape: true }],
    'require-jsdoc': 0,
    semi: [2, 'always'],
    'semi-spacing': [2, { before: false, after: true }],
    'sort-vars': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': 0,
    'spaced-comment': [2, 'always', {
      exceptions: ['-', '+'],
      markers: ['=', '!']
    }],
    'unicode-bom': [2, 'never'],
    'wrap-regex': 0,

    'arrow-body-style': 0,
    'prefer-rest-params': 0,
    'prefer-const': 0,
    'newline-per-chained-call': 0,
    strict: ["error", "never"],
  },
};
