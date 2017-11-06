webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var conent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'box';

  var element = document.createElement(tag);
  element.className = className;
  element.innerHTML = conent;

  return element;
};

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var header = __webpack_require__(3)();
var content = __webpack_require__(5)();
var footer = __webpack_require__(7)();

var $ = __webpack_require__(1);
var body = $('body');

body.append(header, content, footer);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var builder = __webpack_require__(0);
__webpack_require__(4);

module.exports = function () {
	var content = '<a href="/">Logo</a><p>Congratulations!!!</p>';
	return builder('header', content, 'header');
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var builder = __webpack_require__(0);
__webpack_require__(6);

module.exports = function () {
  var content = '<p class="text">Когда вокруг все увлечены идеей гармоничного развития ребенка, как не потеряться в невероятном множестве различных авторских методик? Методики Н. Зайцева, В. Воскобовича, игры Никитина, Чаплыгина, Кюизенера и Дьенеша, развитие по Глену Доману и Монтессори, технологии Буракова и Бахтиной… Как выбрать ту единственную, которая устроит вас и вашего ребенка и не пропустить что-нибудь новое и интересное? В этом разделе мы будем делиться с вами новостями и рассказывать обо всем, что происходит в мире авторских методик развития.</p>' + '<div class="width1">10%</div>' + '<div class="width2">20%</div>' + '<div class="width3">30%</div>' + '<div class="width4">40%</div>' + '<div class="width5">50%</div>' + '<div class="width6">60%</div>' + '<div class="width7">70%</div>' + '<div class="width8">80%</div>' + '<div class="width9">90%</div>' + '<div class="width10">100%</div>' + '<ul>' + '<li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>' + '</ul>' + '<div class="foo"></div>';
  return builder('main', content, 'main');
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var builder = __webpack_require__(0);
__webpack_require__(8);
module.exports = function () {
	var content = '<p> <a href="#"> Курсы </a> EasyCode 2017 (c)</p>';
	return builder('footer', content, 'footer');
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[2]);