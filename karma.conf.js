module.exports = function (config) {
	config.set ({
		basePath: './tests',
		frameworks: ['jasmine'],
		files: [
			{pattern: './*.js'}
		],
		autoWatch: true,
		reporters: ['progress', 'html'],
		htmlReporter: {
			outputFile: './units.html',
			pageTitle: 'Unit Tests',
			subPageTitle: 'A sample project description',
			groupSuites: true,
			useCompactStyle: true,
			useLegacyStyle: true
		}
	});
};