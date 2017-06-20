(function (){
	'use strict';
	angular.module('dapp').controller('loginCtr', loginCtr);
	console.log('Login');

	loginCtr.$inject = ['$location'];
	
	function loginCtr($location, $scope, LoginService){
	
		var admin = 'admin';
	    var pass = 'pass';
	    var isAuthenticated = false;
	    
	    return {
	      login : function(username, upassword) {
	        isAuthenticated = username === admin && upassword === pass;
	        $location.path('/login/sid.html');
	        return isAuthenticated;
	        console.log('Login2');
	      },
	      isAuthenticated : function() {
	        $scope.error = "Incorrect username/password !";
	        return isAuthenticated;
	      }
	    };
		var login = this;
		console.log('Login');
	}

})();
