'use strict';

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