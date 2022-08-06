module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            pages: './src/pages',
            theme: './src/theme',
            utils: './src/utils',
            slices: './src/slices',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
