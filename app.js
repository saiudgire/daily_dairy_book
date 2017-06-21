(function() {
  var app = angular.module('dapp', ['ui.router']);
  
  app.run(function($rootScope, $location, $state, LoginService) {
    $rootScope.$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams){ 
          console.log('Changed state to: ' + toState);
      });
    
      if(!LoginService.isAuthenticated()) {
        $state.transitionTo('login');
      }
  });
  
  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
      .state('login', {
        url : '/login',
        templateUrl : 'login/login.html',
        controller : 'LoginController'
      })
      .state('home', {
        url : '/home',
        templateUrl : 'home/home.html',
        controller : 'HomeController'
      })
      .state('link1', {
        url : '/link1',
        templateUrl : 'home/link1.html',
        controller : 'Link1Controller'
      })
      .state('link2', {
        url : '/link2',
        templateUrl : 'home/link2.html',
        controller : 'Link2Controller'
      })
      .state('link3', {
        url : '/link3',
        templateUrl : 'home/link3.html',
        controller : 'Link3Controller'
      });
  }]);

  function HeaderCtrl($scope) {
      $scope.topbar = {name: "topbar.html", url: "topbar.html"};
  }

  app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "AngularJS Login Sample";
    
    $scope.formSubmit = function() {
      if(LoginService.login($scope.username, $scope.password)) {
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('home');
      } else {
        $scope.error = "Incorrect username/password !";
      }   
    };
    
  });
  
  app.controller('HomeController', function($scope, $rootScope, $stateParams, $state, LoginService) {
    
    var m1 = ($(window).height() - $('.logo-top-tab').height() - 22 );
	$('.home-page-main').css({'height' : m1 });

    $scope.username = LoginService.username || sessionStorage.username;
    if($scope.username) {
    	sessionStorage.username = $scope.username;
    }

    if(!$scope.username) {
    	$state.transitionTo('login');
    }

    $scope.logout = function() {
    	sessionStorage.clear();
    	$state.transitionTo('login');
    }
    
  });

  app.controller('Link1Controller', function($scope, $rootScope, $stateParams, $state, LoginService) {
    
    var m1 = ($(window).height() - $('.logo-top-tab').height() - 22 );
    $('.home-page-main').css({'height' : m1 });

    $scope.username = LoginService.username || sessionStorage.username;
    if($scope.username) {
      sessionStorage.username = $scope.username;
    }

    if(!$scope.username) {
      $state.transitionTo('login');
    }

    $scope.logout = function() {
      sessionStorage.clear();
      $state.transitionTo('login');
    }
    
  });

  app.controller('Link2Controller', function($scope, $rootScope, $stateParams, $state, LoginService) {
    
    var m1 = ($(window).height() - $('.logo-top-tab').height() - 22 );
    $('.home-page-main').css({'height' : m1 });

    $scope.username = LoginService.username || sessionStorage.username;
    if($scope.username) {
      sessionStorage.username = $scope.username;
    }

    if(!$scope.username) {
      $state.transitionTo('login');
    }

    $scope.logout = function() {
      sessionStorage.clear();
      $state.transitionTo('login');
    }
    
  });

  app.controller('Link3Controller', function($scope, $rootScope, $stateParams, $state, LoginService) {
    
    var m1 = ($(window).height() - $('.logo-top-tab').height() - 22 );
    $('.home-page-main').css({'height' : m1 });

    $scope.username = LoginService.username || sessionStorage.username;
    if($scope.username) {
      sessionStorage.username = $scope.username;
    }

    if(!$scope.username) {
      $state.transitionTo('login');
    }

    $scope.logout = function() {
      sessionStorage.clear();
      $state.transitionTo('login');
    }
    
  });
  
  app.factory('LoginService', function() {
    var admin = 'admin';
    var pass = 'admin';
    var isAuthenticated = false;
    var username;
    
    return {
    	username: username,
      login : function(username, password) {
        isAuthenticated = username === admin && password === pass;
		if(isAuthenticated) {
        	this.username="Admin";
        }
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
    
  });
  
})();