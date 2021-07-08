module.exports = {
  extends: ['like', 'like/react', 'plugin:@next/next/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['like/typescript'],
    },
  ],
}
