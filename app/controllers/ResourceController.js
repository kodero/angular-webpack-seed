'use strict';

ResourceController.$inject = ['ResourceFactory'];
function ResourceController(Entity) {
    var _this = this;
    _this.randomQuote = Entity['Resource'].getRandomQuote({}, function(randomQuote){
    	_this.randomQuote = randomQuote;
    });
    _this.name = 'Odero';
}

module.exports = ResourceController;