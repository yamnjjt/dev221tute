angular.module('app')
    .controller('LabController',[
        function () {
            var vm = this;

            vm.show = show;

            vm.person = {
                name: 'Samuel Jackson',
                penName: 'Crazy Scientist'
            };
            
            function show(){
                alert(JSON.stringify(vm.person)); 
            }
        }
    ]);