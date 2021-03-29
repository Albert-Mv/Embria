module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: {
          version: 3.9,
          proposals: true,
        },
        targets: {
          esmodules: true,
        },
      },
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-react-constant-elements',
    ],
  };
};
