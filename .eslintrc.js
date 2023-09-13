/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  ignorePatterns: [".eslintrc.js", "*.config.js"],
  extends: [
    "@cyrilolanolan/ts",
    "next",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended"
  ],
};
