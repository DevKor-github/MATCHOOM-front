module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        alias: {
          '@/navigation': './src/navigation',
          '@/pages': './src/pages',
          '@/components': './src/pages',
          '@/features': './src/pages',
          '@/services': './src/pages',
          '@/utils': './src/pages',
          '@/hooks': './src/pages',
          '@/store': './src/pages',
          '@/types': './src/pages',
          '@/constants': './src/pages',
          '@/styles': './src/pages',
          '@/public': './src/pages',
        },
      },
    ],
  ],
};
