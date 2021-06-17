module.exports = {
  extends: ['like', 'like/react', 'plugin:@next/next/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['like/typescript'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
}
