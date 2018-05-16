var myApp = angular.module('app', ['ngSanitize', 'ngMask']);

myApp.controller('entradas', ['$scope','$window','$http', function($scope,$window,$http) {

  $http.get('http://admin.concepthaus.mx/hgcorp/blog/wp-json/wp/v2/posts/?_embed', {
    headers: {'Authorization': 'Basic '+btoa('adminch:daemon_systemd010')}
  }).then(function (res){
    $scope.postConsulta = res.data;
    console.log($scope.postConsulta);
  });
}]);
