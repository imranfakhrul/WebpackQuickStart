const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['babel-polyfill', './src/js/index.js'], 
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist', 
		filename: './js/app.bundle.js' 
	}, 
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/, 
				loader: 'babel-loader'
			}, 
			{
		        test: /\.(sa|sc|c)ss$/,
		        use:  [
		        	{
		        		loader: 'style-loader'
		        	},
		        	{
		        		loader: MiniCssExtractPlugin.loader
		        	},
		        	{
		        		loader: 'css-loader'
		        	}, 
		        	{
		        		loader: 'sass-loader'
		        	}
		        ]
		    }, 
		    // {
		    // 	test: /\.html$/, 
		    // 	use: [
		    // 		{
		    // 			loader: 'file-loader', 
		    // 			options: {
		    // 				name: '[name].html'
		    // 			}
		    // 		}, 
		    // 		{
		    // 			loader: 'extract-loader'
		    // 		}, 
		    // 		{
		    // 			loader: 'html-loader', 
		    // 			options: {
      //                       attrs: ["img:src", "link:href"],
      //                       interpolate: true
      //                   }
		    // 		}
		    // 	]
		    // }, 
		    {
		    	test: /\.(jpeg|jpg|png)$/, 
		    	use: [
		    		{
		    			loader: 'file-loader', 
		    			options: {
		    				name: './dist/img/[name].[ext]'
		    			}
		    		}
		    	]
		    }
		]
	}, 
	plugins: [
		new MiniCssExtractPlugin({
	      filename: './css/style.css'
	    })
	    // new HtmlWebpackPlugin({
	    //   // inject: false,
	    //   // hash: true,
	    //   template: './index.html',
	    //   filename: 'index.html'
	    // })
	], 
	mode: 'development', 
	devtool: 'source-map'
}