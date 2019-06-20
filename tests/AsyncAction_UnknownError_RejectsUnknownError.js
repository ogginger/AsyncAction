//AsyncAction_UnknownError_RejectsUnknownError.js: Testing logic.

define([
	"log",
	"promise",
	"AsyncAction"
], function(
	log,
	promise,
	AsyncAction
) {
	return {
		"Async": true,
		"Name":"AsyncAction_UnknownError_RejectsUnknownError",
		"Input": {
			"Input": undefined,
			"Function": function() {
				return promise(function( resolve, reject ) {
					reject({ "Message": "UnknownError"  });
				});
			}
		},
		"Function": function( Input ) {
			var xErrorRejected = {};
			return promise(function( resolve ) {
				AsyncAction( Input ).catch(function( Error ) { 
					xErrorRejected = Error;
				}).finally(function() {
					resolve( xErrorRejected );
				});
			});
		},
		"ExpectedOutput": { "Message": "UnknownError" },
		"Comparator": { "Object": true },
	};
});
