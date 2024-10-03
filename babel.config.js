module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/navigation': './src/navigation',
          '@/pages': './src/pages',
          '@/components': './src/components',
          '@/features': './src/features',
          '@/services': './src/services',
          '@/utils': './src/utils',
          '@/hooks': './src/hooks',
          '@/store': './src/store',
          '@/types': './src/types',
          '@/constants': './src/constants',
          '@/styles': './src/styles',
          '@/assets': './assets',
        },
      },
    ],
  ],
};
