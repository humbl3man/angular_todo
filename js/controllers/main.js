'use strict';
var app = angular.module('todoApp');
app.controller('mainCtrl', function($scope, dataService) {
	dataService.getTodos(function(response) {
		console.log(response);
		$scope.todos = response;
	});
	$scope.addTodo = function () {
		var todo = {};
		todo.name = prompt('To do what?');
		if (todo.name.length) {
			todo.isNew = true;
			$scope.todos.unshift(todo);
		}
	};
	$scope.deleteTodo = function (todo, $index) {
		dataService.deleteTodo(todo);
		$scope.todos.splice($index, 1);
	};
	$scope.saveTodos = function (todo) {
		var filteredTodos = $scope.todos.filter(function (todo) {
			if (todo.edited || todo.isNew) return todo;
		});
		dataService.saveTodos(filteredTodos);
	};
});