module.exports = {
	subdirectories: [
		{directory: 'images', extensions: ['.png', '.jpg', '.jpeg', '.gif']},
		{directory: 'js', extensions: ['.js']},
		{directory: 'css', extensions: ['.css']},
		{directory: 'fonts', extensions: ['.ttf', '.woff', '.eot', '.svg']}
	],
	sources: [
		{selector: 'img:not([src^="//mc.yandex.ru/watch/"], [src^="//top-fwz1.mail.ru/counter"])', attr: 'src'},
		{selector: 'input', attr: 'src'},
		{selector: 'script', attr: 'src'},
		{selector: 'link[rel="stylesheet"]', attr: 'href'},
		{selector: 'link[rel*="icon"]',	attr: 'href'},
		{selector: 'object', attr: 'data'},
		{selector: 'embed',	attr: 'src'},
		{selector: 'param[name="movie"]', attr: 'value'}
	],
	log: true
};