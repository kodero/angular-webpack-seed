'use strict';

var angular = require('angular');
var angularResource = require('angular-resource');

angular.module('dashboard').controller('dashboardController', require('./dashboard.controller'));
angular.module('dashboard').controller('ResourceController', require('./ResourceController'));

angular.module('dashboard').controller('mainController', function($scope) {
        // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

angular.module('dashboard').controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

angular.module('dashboard').controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});