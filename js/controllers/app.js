var myApp = angular.module('app', ['ngSanitize', 'ngMask']);

myApp.controller('entradas', ['$scope','$window','$http', function($scope,$window,$http) {

  $http.get('http://www.jbglobalgroup.com/wp-json/wp/v2/posts/?_embed', {
    headers: {'Authorization': 'Basic '+btoa('glo_JB_al:Magazine_Global_Mkt')}
  }).then(function (res){
    $scope.postConsulta = res.data;
    console.log($scope.postConsulta);
  });
}]);
