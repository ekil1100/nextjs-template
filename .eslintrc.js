module.exports = {
  extends: ['like', 'like/react', 'like/nextjs'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['like/typescript'],
    },
  ],
}
