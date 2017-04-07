var app = angular.module("myapp",['ngRoute','ngAnimate']);
app.config(['$routeProvider' , function($routeProvider) {

    $routeProvider.
    when('/home', {
        templateUrl: 'content/templates/home.html',
        controller: 'ninjactrl'
    }).
    when('/contact', {
        templateUrl: 'content/templates/contact.html',
        controller: 'contactctrl'
    }).
    when('/success', {
        templateUrl: 'content/templates/success.html',
        controller: 'contactctrl'
    }).
    when('/list', {
        templateUrl: 'content/templates/list.html',
        controller: 'ninjactrl'
    }).
    otherwise({
        redirect: '/home'
    });

}]);

app.controller("ninjactrl",function($scope,$http){
  $scope.random =  Math.floor((Math.random() *4));
  $scope.saveninja = function(){
		$scope.ninjas.push({
        name: $scope.newninja.name,
        rate: $scope.newninja.rate,
        belt: $scope.newninja.belt,
        img: "content/images/default.jpg"
    });
    localStorage.setItem('todos', JSON.stringify($scope.ninjas));
    $scope.newninja = [];
	};
  $scope.deleteninja = function(ninja)
  {
      $scope.ninjas.splice($scope.ninjas.indexOf(ninja),1);
  };
  $http.get('content/data.json').then(function(response) {
      $scope.ninjas = response.data;

  });

});
app.controller("contactctrl",function($scope,$location){
  $scope.addit = function(){
    $location.path('success');
  }
});
