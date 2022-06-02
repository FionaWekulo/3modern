//loginController.js
(function () {
    'use strict';
    angular
    .module('app')
    .controller('LoginController', LoginController);
    LoginController.$inject = ['$location','AuthenticationService'];
    function LoginController( $location, AuthenticationService) {
    var vm = this;
    vm.login = login;
    (function initController() {
    // reset login status
    AuthenticationService.ClearCredentials();
    })();
    function login() {
    console.log("login method executing");
    vm.dataLoading = true;
    AuthenticationService.Login(vm.email, vm.password, function (response) {
    if (response.success) {
    AuthenticationService.SetCredentials(vm.email, vm.password);
    $location.path('/home');
    } else {
    alert(response.message);
    vm.dataLoading = false;
    }
    });
    }
    }
    })();