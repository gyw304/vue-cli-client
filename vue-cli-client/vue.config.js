module.exports = {
	publicPath: './',
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "./src/assets/styles/_variables.scss";`
			}
		}
	}
}
