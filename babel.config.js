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
          '@quarry': './src/quarry',
          '@encounter': './src/encounter',
          '@navigation': './src/navigation',
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
