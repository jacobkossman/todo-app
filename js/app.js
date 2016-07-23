angular.module( 'todoListApp', [] )
  .controller( 'mainCtrl', function( $scope, dataService ) {
    $scope.helloConsole = dataService.helloConsole;

    $scope.learningNgChange = function() {
      console.log( "An input changed!" );
    };

    $scope.todos = [
      { "name": "clear car" },
      { "name": "feed dog" },
      { "name": "buy groceries" },
      { "name": "exercise" },
      { "name": "read a chapter of a book" },
      { "name": "wake up early" }
    ];
  } )
  .service( 'dataService', function() {
    this.helloConsole = function() {
      console.log( 'This is the hello console service' );
    };
  } );
