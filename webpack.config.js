module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  rules: [
    {
      test: /\.(png|jpg|gif|jpeg|ico)$/i,
      use: [
        {
          loader: ['url-loader', 'file-loader'],
          options: {
            limit: 8192,
          },
        },
      ],
    },
  ],
  devServer: {
    contentBase: "./"
  }
};
