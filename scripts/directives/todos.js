'use strict';
angular.module( 'todoListApp' )
  .directive( 'todos', function() {
    return {
      controller: 'mainCtrl',
      templateUrl: 'templates/todos.html',
    };
  } );
