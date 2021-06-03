const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../**/*.stories.@(ts|mdx)'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async config => {
    const tsPaths = new TsconfigPathsPlugin({
      configFile: './tsconfig.base.json'
    });

    config.resolve.plugins
      ? config.resolve.plugins.push(tsPaths)
      : (config.resolve.plugins = [tsPaths]);

    return config;
  }
};

module.exports.core = { ...module.exports.core, builder: 'webpack5' };
