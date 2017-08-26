/**
 * Created by Rodrigo on 9/06/2017.
 */
var controller =app.controller('controlador',function ($scope,$http) {

    $scope.pagLogin=true;
    $scope.pagEmergencias=false;
    $scope.pagContactos=false;
    $scope.mensaje=null;

    $scope.entrarPag1 = function () {
        $scope.pagLogin=false;
        $scope.pagEmergencias=true;
        $scope.pagContactos=false;
    };
    $scope.entrarPag2 = function () {
        $scope.pagLogin=false;
        $scope.pagEmergencias=false;
        $scope.pagContactos=true;
    };
    $scope.salir = function () {
        $scope.pagLogin=true;
        $scope.pagEmergencias=false;
        $scope.pagContactos=false;
    };
    $scope.eliminarContacto = function () {

    };
    $scope.agregarContacto = function () {

    };


});
