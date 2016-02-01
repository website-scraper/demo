var path = require('path');

module.exports = {
	directory: path.resolve(__dirname, '../public/files/'),
	previewPath: '/static/files/{directory}',
	downloadPath: '/sites/{directory}/download'
};
