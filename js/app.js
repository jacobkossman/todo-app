angular.module( 'todoListApp', [] )
  .controller( 'mainCtrl', function( $scope ) {
    $scope.helloWorld = function() {
      console.log( "Hello from the helloWorld controller function, in the mainCtrl" );
    };
  } );
