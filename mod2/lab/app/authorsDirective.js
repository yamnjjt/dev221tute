angular.module('app').directive('authorsDirective', [
    function(){
        return {
            replace: true,
            restrict: 'E',
            template: '',
            link: function(scioe, element, attrs){
                element.bind('mouseenter', function(){
                    element.css('background-color', 'red')
                });
                element.bind('mouseleave', function(){
                    element.css('background-color', 'silver')
                });
            },
            scope: {
                author: '=',
                action: '&'
            }
        };
    };
]);