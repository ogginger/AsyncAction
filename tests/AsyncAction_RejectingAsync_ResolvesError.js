//AsyncAction_RejectingAsync_ResolvesError.js: Testing logic.

define([
	"promise",
	"AsyncAction"
], function(
	promise,
	AsyncAction
) {
	return {
		"Async": true,
		"Name":"AsyncAction_RejectingAsync_ResolvesError",
		"Input": {
			"Input": undefined,
			"Function": function() {
				return promise(function( resolve, reject ) {
					reject({ "Message": "Error" });
				});
			},
			"ExceptionTest": true
		},
		"Function": AsyncAction,
		"ExpectedOutput": { "Message": "Error" },
		"Comparator": { "Object": true },
		"Debug": false
	};
});
