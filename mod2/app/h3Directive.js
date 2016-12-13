angular.module('app').directive('h3Directive', [
    function () {
        return {
            scope: {
                title: '@'
            },
            restrict: 'EA',
            replace: true,
            template: '<h3>{{title}}</h3>',
            link: function (scope, element, attrs){
                element.bind('mouseenter', function(){
                    element.css('background-color', 'red')
                });
                element.bind('mouseleave', function(){
                    element.css('background-color', 'silver')
                });
            }
        };
    }
]);