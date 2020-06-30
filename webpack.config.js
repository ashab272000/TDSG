const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    //watch: true,
    /*
    devServer:{
        contentBase: './dist',
    },
    */
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        /*{
            test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
        },*/
        {
            test: /\.css$/, 
            use: [
                'style-loader',
                'css-loader',
            ],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            loader : ['file-loader'],
        }
    ],
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

};