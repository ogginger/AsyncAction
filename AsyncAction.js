//AsyncAction.js: Functional Logic.

define([
	"log",
	"promise"
], function(
	log,
	promise
) {
  return function( Input ) {
	return promise(function( resolve, reject ) {
		Input.Function( Input.Input ).then(function( Result ) {
			Input.Result = Result;
		}).catch(function( Error ) {
			if ( Input.ExceptionTest ) {
				Input.Comparator = { "Object": true };
				Input.Result = Error;
			} else {
				log("Error: " + JSON.stringify( Error ), Input.Debug);
				reject({ "Message": "UnknownError" });
			}
		}).finally(function() {
			resolve( Input.Result );
		});
	});
  };
});
