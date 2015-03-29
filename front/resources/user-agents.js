angular.module('app.resources').factory('userAgents', function () {
		return {
			list: function() {
				return [
					{
						title: 'Chrome 40.0 Win7 64-bit',
						userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36'
					}, {
						title: 'Firefox Generic Win7 64-bit',
						userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:36.0) Gecko/20100101 Firefox/36.0'
					}, {
						title: 'Safari 8.0 MacOSX',
						userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.18'
					}, {
						title: 'IE 11.0 Win7 64-bit',
						userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko'
					}, {
						title: 'Chrome 41.0 Linux',
						userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36'
					}, {
						title: 'Mobile Safari 8.0 iOS',
						userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12D508 Safari/600.1.4'
					}, {
						title: 'Chrome on Galaxy Nexus',
						userAgent: 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19'
					}, {
						title: 'Chrome on iPhone',
						userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3'
					}
				];
			}
		}
	}
);