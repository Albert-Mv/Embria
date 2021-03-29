const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

const templatePath = path.resolve(__dirname, './client/index.html');
const faviconIcoPath = path.resolve(__dirname, './static/media/favicon.ico');
const faviconSvgPath = path.resolve(__dirname, './static/media/favicon.svg');
const buildPath = path.resolve(__dirname, './build');

const filename = (isDev, ext) => `[name].${isDev ? ext : `[contenthash].${ext}`}`;

const clientPlugins = (isDev) => {
  const result = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: templatePath,
      collapseWhitespace: !isDev,
      cache: false,
      minify: !isDev,
    }),
  ];

  return result;
};

const serverPlugins = (isDev) => {
  const result = [];

  // eslint-disable-next-line
  isDev
    && result.push(
      new WebpackShellPluginNext({
        onBuildExit: {
          scripts: ['nodemon', 'open-cli http://localhost:3000'],
          blocking: false,
          parallel: true,
        },
      }),
    );

  return result;
};

const commonPlugins = (isDev) => {
  const result = [
    new webpack.WatchIgnorePlugin({ paths: [/scss\.d\.ts$/] }),
    new MiniCssExtractPlugin({
      filename: filename(isDev, 'css'),
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: faviconIcoPath,
          to: buildPath,
        },
        {
          from: faviconSvgPath,
          to: buildPath,
        },
      ],
    }),
  ];

  return result;
};

const scssLoaders = (isDev) => {
  const loaders = [];

  loaders.push(
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-modules-typescript-loader',
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: isDev,
        modules: {
          localIdentName: '[local]___[contenthash:base64:5]',
        },
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: isDev,
        postcssOptions: {
          plugins: ['postcss-preset-env'],
        },
      },
    },
    {
      loader: 'sass-loader',
      options: {
        implementation: require('sass'), // eslint-disable-line
        sourceMap: isDev,
        sassOptions: {
          fiber: require('fibers'), // eslint-disable-line
        },
      },
    },
  );

  return loaders;
};

const loaders = (isDev) => ({
  rules: [
    {
      test: /\.scss$/,
      use: [...scssLoaders(isDev)],
    },
    {
      test: /\.js$/,
      exclude: [/core-js/, /node_modules/, /regenerator-runtime/],
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.(png|jpg|jpeg|svg|gif|ico)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: filename(isDev, '[ext]'),
        },
      },
    },
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader',
      },
    },
  ],
});

const client = (isDev, mode) => ({
  name: 'client',
  mode,
  entry: {
    client: './client/index.tsx',
  },
  output: {
    publicPath: '/',
    filename: filename(isDev, 'js'),
    path: buildPath,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [...commonPlugins(isDev), ...clientPlugins(isDev)],
  module: loaders(),
  optimization: {
    minimize: !isDev,
    minimizer: [new TerserPlugin()],
  },
});

const server = (isDev, mode) => ({
  name: 'server',
  mode,
  entry: {
    server: './server/server.tsx',
  },
  output: {
    publicPath: '/',
    filename: filename(isDev, 'js'),
    path: buildPath,
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [...commonPlugins(isDev), ...serverPlugins(isDev)],
  module: loaders(),
  optimization: {
    minimize: !isDev,
    minimizer: [new TerserPlugin()],
  },
});

module.exports = (env) => {
  // eslint-disable-next-line
  console.log(`⚙️ [build-mode]: ${env.NODE_ENV}`);
  const isDev = env.NODE_ENV === 'development';
  const mode = env.NODE_ENV;

  return [
    client(isDev, mode),
    server(isDev, mode),
  ];
};
