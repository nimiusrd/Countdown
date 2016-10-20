module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
  },
  "parser": "babel-eslint",
  "rules": {
    "array-bracket-spacing": ["error", "always", { "singleValue": false, "objectsInArrays": false, "arraysInArrays": false }],
    "array-callback-return": "error",
    "arrow-body-style": ["warn", "as-needed"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": "error",
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "callback-return": "error",
    "camelcase": "error",
    "comma-style": ["error", "last"],
    "complexity": ["error", 2],
    "computed-property-spacing": ["error", "never"],
    "consistent-return": "error",
    "consistent-this": ["error", "that"],
    "constructor-super": "error",
    "curly": "error",
    "default-case": ["error", { "commentPattern": "^no default$" }],
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": "error",
    "func-names": "error",
    "func-style": ["error", "expression"],
    "generator-star-spacing": ["error", "after"],
    "global-require": "error",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": ["error", "data", "callback", "name"],
    "id-match": ["error", "^([a-z]+([A-Z][a-z]+)*|[A-Z]+)$", { "onlyDeclarations": true }],
    "indent": ["error", 2, { "SwitchCase": 1 , "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }}],
    "indent": ["error",2],
    "init-declarations": ["error", "never", { "ignoreForLoopInit": true }],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "linebreak-style": ["error","unix"],
    "max-depth": ["warn", 4],
    "max-lines": ["warn", {"max": 300, "skipComments": true }],
    "max-statements-per-line": ["warn", { "max": 1 }],
    "new-cap": "error",
    "new-parens": "error",
    "newline-after-var": ["warn", "always"],
    "newline-before-return": "warn",
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-bitwise": "warn",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-class-assign": "error",
    "no-confusing-arrow": "error",
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "no-const-assign": "error",
    "no-continue": "error",
    "no-div-regex": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": ["error", "all", { "returnAssign": false }],
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": ["error", {"skipRegExps": true}],
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "warn",
    "no-loop-func": "error",
    "no-magic-numbers": "error",
    "no-mixed-operators": "error",
    "no-mixed-requires": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": ["warn", {"max": 1}],
    "no-native-reassign": "error",
    "no-negated-condition": "warn",
    "no-nested-ternary": "warn",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-plusplus": ["warn", { "allowForLoopAfterthoughts": true }],
    "no-process-env": "error",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-restricted-globals": ["error", "event"],
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-shadow": "error",
    "no-spaced-func": "error",
    "no-sync": "warn",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": ["error", { "skipBlankLines": false }],
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": ["error", { "allow": [] }],
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": ["error", { "vars": "all", "args": "all", "caughtErrors": "all" }],
    "no-use-before-define": ["error", { "functions": true, "classes": true }],
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-newline": ["error", {"ObjectExpression": "always","ObjectPattern": { "minProperties": 3, "multiline": true }}],
    "object-curly-spacing": ["error", "never"],
    "object-property-newline": "error",
    "object-shorthand": ["error", "always"],
    "one-var": ["error", {"uninitialized": "always","initialized": "never"}],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["error", "after"],
    "prefer-arrow-callback": ["error", { "allowNamedFunctions": true }],
    "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "always"],
    "quote-props": ["error", "consistent-as-needed"],
    "quotes": ["error", "single", {"allowTemplateLiterals": true}],
    "quotes": ["error","single"],
    "radix": "error",
    "require-yield": "error",
    "rest-spread-spacing": ["error", "always"],
    "semi-spacing": ["error", {"before": false, "after": true}],
    "semi": ["error", "always"],
    "semi": ["error","always"],
    "sort-imports": ["warn", {"ignoreCase": false,"ignoreMemberSort": false,"memberSyntaxSortOrder": ["none", "all", "multiple", "single"]}],
    "sort-keys": ["error", "asc", {"caseSensitive": true, "natural": true}],
    "sort-vars": ["warn", { "ignoreCase": true }],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "strict": 0,
    "template-curly-spacing": ["error", "never"],
    "unicode-bom": ["warn", "never"],
    "vars-on-top": "error",
    "wrap-iife": ["error", "inside"],
    "wrap-regex": "warn",
    "yield-star-spacing": ["error", "after"],
    "yoda": "error"
  }
};
