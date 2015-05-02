/** 
 * Created by georginahughes on 28/04/15.
 */
angular
    .module('myApp')
    .controller('MyController', MyController);

function MyController(objectsValue){
    var vm = this;

    vm.objects = objectsValue;
}