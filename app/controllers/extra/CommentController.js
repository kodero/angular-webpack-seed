'use strict';

CommentController.$inject = ['ResourceFactory'];
function CommentController(Entity) {
    var _this = this;
    _this.randomQuote = Entity['Resource'].getRandomQuote({}, function(randomQuote){
    	_this.randomQuote = randomQuote;
    });
}

angular.module('dashboard').controller('CommentController', CommentController)