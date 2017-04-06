webpackJsonp([1],{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3)
__webpack_require__(2)

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


CommentController.$inject = ['ResourceFactory'];
function CommentController(Entity) {
    var _this = this;
    _this.randomQuote = Entity['Resource'].getRandomQuote({}, function(randomQuote){
    	_this.randomQuote = randomQuote;
    });
}

angular.module('dashboard').controller('CommentController', CommentController)

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('Here...');
QuoteController.$inject = ['ResourceFactory'];
function QuoteController(Entity) {
    var _this = this;
    _this.randomQuote = Entity['Resource'].getRandomQuote({}, function(randomQuote){
    	_this.randomQuote = randomQuote;
    });
}

angular.module('dashboard').controller('QuoteController', QuoteController)

//module.exports = QuoteController;

/***/ })

},[13]);