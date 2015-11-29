'use strict';

var app = angular.module('todoApp');
app.service('dataService', function ($http) {
	this.helloConsole = function () {
		console.log('Hello Console!');
	};
	this.getTodos = function (callback) {
		$http.get('../mock/todos.json')
		.success(callback);
	};
	this.deleteTodo = function(todo) {
		console.log("Deleted '" + todo.name + "' task.");
	};
	this.saveTodos = function(todos) {
		console.log(todos.length + " todo task(s) have(s) been saved.");
	};
});