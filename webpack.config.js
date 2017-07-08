const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');

const extractCSS = new ExtractTextPlugin('css/[name].css');
const extractSass = new ExtractTextPlugin('css/[name].css');

module.exports = {
    entry: {
        vendor: ['react'],
        main: './src/main.jsx'
    },
    resolve: {
        extensions: ['.jsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    devtool: 'inline-source-map',
    output: {
        path: path.join(path.join(process.cwd(), 'src')),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'raw-loader'
                    }
                ]
            }, {
                test: /\.(svg|woff|woff2|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'css/'
                        }
                    }
                ]
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'css/'
                        }
                    }
                ]
            }, {
                test: /\.(js)|(jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            }, {
                test: /\.scss$/,
                // exclude: /node_modules/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }, {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'style-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    devServer: {
        contentBase: './src',
        watchContentBase: true,
        overlay: true
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({     sourceMap: true }),
        extractSass,
        extractCSS,
        new webpack
            .optimize
            .CommonsChunkPlugin({
                names: [
                    'common', 'vendor'
                ],
                minChunks: 2
            }),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};