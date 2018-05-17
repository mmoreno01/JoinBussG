var app = angular.module("myApp", []); 
app.controller("SliderController",function($scope){
        $scope.nombre = "Miguel";
        $scope.servicios = [
            {
                servicio:"auditoria"
            },
            {
                servicio:"contabilidad"
            },
            {
                servicio:"payroll"
            }
        ];
});
