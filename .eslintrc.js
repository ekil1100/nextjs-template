module.exports = {
  extends: ['like', 'next', 'next/core-web-vitals'],
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
