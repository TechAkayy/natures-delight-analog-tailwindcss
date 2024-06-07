module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  rules: {
    // override/add rules settings here, such as:
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'vue/comment-directive': 'off',
    'vue/valid-attribute-name': 'off',
    'vue/attribute-hyphenation': 'off',
  },
}
