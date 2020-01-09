/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  plugins: [
    require('css-mqpacker')(),
    require('autoprefixer')({
      grid: true,
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
