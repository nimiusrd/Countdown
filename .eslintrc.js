module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:all",
    "parserOptions": {
        "ecmaVersion": 6,
    },
    "parser": "babel-eslint",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
