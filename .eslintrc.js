/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  ignorePatterns: ['.eslintrc.js', '*.config.js'],
  extends: [
    '@cyrilolanolan/ts',
    // 'next/core-web-vitals',
    'next',
    'plugin:storybook/recommended',
  ],
};
