angular.module( 'todoListApp', [] )
  .controller( 'mainCtrl', function( $scope ) {
    $scope.helloWorld = function() {
      console.log( "Hello from the helloWorld controller function, in the mainCtrl" );
    };

    $scope.todos = [
      { "name": "clear car" },
      { "name": "feed dog" },
      { "name": "buy groceries" },
      { "name": "exercise" },
      { "name": "read a chapter of a book" },
      { "name": "wake up early" }
    ];
  } );
