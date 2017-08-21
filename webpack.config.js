var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool:'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/client.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]        
    ,
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react','react-hmre']
            }
        },{
            test :/\.s?css$/,
            loaders : ['style','css','sass'],
            include :path.join(__dirname,'client/stylesheets')
        }]
    }
  // , watch:true

}