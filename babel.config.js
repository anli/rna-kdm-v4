module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@showdown': './src/showdown',
          '@store': './src/store',
          '@terrain': './src/terrain',
          '@utils': './src/utils',
          '@test': './test',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
