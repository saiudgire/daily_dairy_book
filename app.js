(function (){
	'use strict';

	angular.module('dapp', ['ngRoute', 'ngCookies']).config(config).run(run);

	config.$inject = ['$routeProvider', '$locationProvider'];

	function config($routeProvider, $locationProvider) {
		$routeProvider
			.when('/login', {
				controller: 'loginCtr',
				templateUrl: 'login/login.html'
			})

			.otherwise({redirectTo: '/'});
	}
	run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
	function run( $rootScope, $location, $cookies, $http){

	}	

})();
