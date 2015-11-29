var app = angular.module('todoApp');
app.directive('todos', function () {
	return {
		templateUrl: '../../templates/todos.html',
		restrict: 'E',
		controller: 'mainCtrl',
		replace: true
	};
});