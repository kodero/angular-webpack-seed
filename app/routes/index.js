'use strict'

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

angular.module('dashboard').config(function($routeProvider) {
    angular.forEach(config.routes, function(route, path){
        $routeProvider.when(path, {
            templateUrl:route.templateUrl,
            title : route.title,
            reloadOnSearch: false,
            resolve:dependencyResolverFor(route.dependencies)
        });
    });
});