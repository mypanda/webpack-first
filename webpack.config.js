var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry:{
		admin:'./admin/index.js',
		consumer:'./consumer/index.js'
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin()
	],
	output:{
		path:path.join(__dirname,'dist'),
		//配置webserver
		publicPath:'/dist/',
		filename:'[name].bundle.js'
	},
	module:{
		//不打包jquery
		noParse:[/jquery/],
		loaders:[{
			test:/icons/,
			loader:'url'
		},{
			test:/images/,
			loader:'file'
		},{
			test:/\.scss$/,
			loader:'style!css!sass'
		},{
			test:/\.js$/,
			exclude:'/node_modules/',
			// include:/(admin|consumer)/,
			loader:'babel'
		}]
	}
}

/*

var config = {}

module.exports=config;

*/
