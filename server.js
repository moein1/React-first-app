var express = require('express');
var path = require('path');
var config = require('./webpack.config.js');


var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

var port = 3000;
//commentzsf


app.listen(port, () => {
    console.log('we are listening on port number ', port);
})