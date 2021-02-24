const path = require('path');
const include = path.resolve(__dirname, '../');

module.exports = {
  webpackFinal: async config => {
    config.module.rules.push(
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          compilerOptions: {
            noEmit: false,
          },
        },
        exclude: /node_modules|dist/,
        include,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules|dist/,
        include,
      },
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  addons: ['@storybook/preset-typescript'],
};
