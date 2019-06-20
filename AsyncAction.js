//AsyncAction.js: Functional Logic.

define([
	"log",
	"underscore",
	"promise"
], function(
	log,
	_,
	promise
) {
  return function( Input ) {
	return promise(function( resolve, reject ) {
		Input.Function( Input.Input ).then(function( Result ) {
			Input.Result = Result;
			log( "Resolved: " + JSON.stringify(Result) );
		}).catch(function( Error ) {
			if ( Input.ExceptionTest ) {
				Input.Comparator = { "Object": true };
				Input.Result = Error;
			} else {
				log(JSON.stringify( Error ));
				reject({ "Message": "UnknownError" });
			}
		}).finally(function() {
			resolve( Input.Result );
		});
	});
  };
});
