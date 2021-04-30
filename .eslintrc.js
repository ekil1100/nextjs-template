module.exports = {
  extends: ['like', 'like/react'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['like/typescript'],
    },
  ],
}
