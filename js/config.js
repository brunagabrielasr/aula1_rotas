var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	
	$routeProvider
	.when('/produtos', {
		templateUrl: 'produtos.html',
		controller: 'produtosCtrl'
	})
	.when('/produto', {
		templateUrl: 'produto.html',
		controller: 'produtoCtrl'
	})
	.when('/login', {
		templateUrl: 'login.html',
		controller: 'loginCtrl'
	}).otherwise({
		redirectTo: '/produtos'
	})
});