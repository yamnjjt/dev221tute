angular.module('app').factory('formattingFactory', [formattingFactory]);

function formattingFactory()
{
    return{
        format: format
    }

    function format(value){
        return value.length%2==1?value.toLowerCase():value.toUpperCase();
    }
}