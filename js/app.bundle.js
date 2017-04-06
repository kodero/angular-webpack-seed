webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);
var angularResource = __webpack_require__(1);

angular.module('dashboard').controller('dashboardController', __webpack_require__(12));
angular.module('dashboard').controller('ResourceController', __webpack_require__(11));

angular.module('dashboard').controller('mainController', ["$scope", function($scope) {
        // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
}]);

angular.module('dashboard').controller('aboutController', ["$scope", function($scope) {
    $scope.message = 'Look! I am an about page.';
}]);

angular.module('dashboard').controller('contactController', ["$scope", function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
}]);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('dashboard').directive('yepNope', __webpack_require__(14));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config =  {
    defaultRoutePath: '/',
    routes: {
        '/': {
            templateUrl: 'views/home.html',
            title: 'Home',
            dependencies: [
                
            ]
        },
        '/about': {
            templateUrl: 'views/about.html',
            title : 'About',
            dependencies: [
                
            ]
        },
        '/contact': {
            templateUrl: 'views/contact.html',
            title : 'Contact',
            dependencies: [
                
            ]
        },
        '/quote': {
            templateUrl: 'views/quote.html',
            title : 'Contact',
            dependencies: [
                './js/extra.bundle.js'
            ]
        }
    }
}

function dependencyResolverFor(dependencies) {
    var definition = {
        resolver: ['$q', '$rootScope', '$ocLazyLoad', function ($q, $rootScope, $ocLazyLoad) {
            var deferred = $q.defer();
            if(dependencies.length == 0) return $q.resolve();
            return $ocLazyLoad.load([{
                name: 'myApp',
                files: dependencies
            }]);
        }]
    }
    return definition;
}

angular.module('dashboard').config(["$routeProvider", function($routeProvider) {
    angular.forEach(config.routes, function(route, path){
        $routeProvider.when(path, {
            templateUrl:route.templateUrl,
            title : route.title,
            reloadOnSearch: false,
            resolve:dependencyResolverFor(route.dependencies)
        });
    });
}]);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('dashboard').service('GithubStatusService', __webpack_require__(16));
angular.module('dashboard').factory('ResourceFactory', __webpack_require__(15))

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('dashboard', ['ngResource', 'ngRoute', 'oc.lazyLoad']);

__webpack_require__(6);
__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(4);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


ResourceController.$inject = ['ResourceFactory'];
function ResourceController(Entity) {
    var _this = this;
    _this.randomQuote = Entity['Resource'].getRandomQuote({}, function(randomQuote){
    	_this.randomQuote = randomQuote;
    });
    _this.name = 'Odero';
}

module.exports = ResourceController;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


DashboardController.$inject = ['GithubStatusService'];
function DashboardController(gh) {
    var _this = this;
    _this.github = '';
    /*gh.getStatus().success(function(status) {
        _this.github = status;
    });*/
}

module.exports = DashboardController;

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

function YepNopeDirective() {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      scope.$watch(attrs.check, function (val) {
        var words = val ? 'Yep' : 'Nope';
        element.text(words);
      });
    }
  }
}

module.exports = YepNopeDirective;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


ResourceFactory.$inject = ['$resource'];
function ResourceFactory($resource) {
    var _this = this;
    return {
        Resource : $resource('http://localhost:8080/SimpleBooks/resources/quotes/:id', {id: '@id'},{
            getRandomQuote : {method : 'GET', url : 'http://localhost:8080/SimpleBooks/resources/quotes/random', isArray : false}
        })
    }
}

module.exports = ResourceFactory;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


GithubStatusService.$inject = ['$http'];
function GithubStatusService($http) {
    var _this = this;
    _this.getStatus = function getStatus() {
        return $http({
            method: 'jsonp',
            url: 'https://status.github.com/api/status.json?callback=JSON_CALLBACK',
            transformResponse: appendTransform($http.defaults.transformResponse, function(value) {
                return (value.status === 'good');
            })
        });
    }
}

function appendTransform(defaults, transform) {
  defaults = angular.isArray(defaults) ? defaults : [defaults];
  return defaults.concat(transform);
}

module.exports = GithubStatusService;

/***/ })
],[10]);