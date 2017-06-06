(function (){
	'use strict';

	angular.module('dapp').controller('loginCtr', loginCtr);

	loginCtr.$inject = ['$location'];
	
	function loginCtr($location){
		var login = this;
		console.log('Login');
	}

})();
