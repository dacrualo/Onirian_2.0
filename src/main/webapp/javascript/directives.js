angular.module('trainingTrackerApp')

    // include the 'navbar.html' into the <navbar> tag
    .directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/navbar.html',
            controller: 'navbarCtrl'
        }
    })

    // include the 'record.html' into the <record> tag
    .directive('concerts', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/concerts.html',
            controller: 'recordCtrl',
            scope: true
        }
    })

    //include the 'exerciserCard.html' into the <exerciserCard> tag
    .directive('band', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/band.html'
        }
    })
