const builder = require('./../elementBuilder');
require('./footer.scss');
module.exports = () => {
	const content = '<p> <a href="#"> Курсы </a> EasyCode 2017 (c)</p>';
	return builder('footer', content, 'footer');
};