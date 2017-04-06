var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app',
        extra : path.join(__dirname, 'app/controllers/extra'),
        vendor: ['angular', 'angular-resource', 'angular-route', 'oclazyload']  
    },
    output: {
        path: __dirname + '/js',
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name : "vendor", filename : "vendor.bundle.js"}),
        new webpack.ProvidePlugin({ 
            $: "jquery",
            jQuery: "jquery"
        }),
        new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        })
    ],
    watch: true
};