//AsyncAction_SimpleAsync_ResolvesResult.js: Testing logic.

define([
	"promise",
	"AsyncAction"
], function(
	promise,
	AsyncAction
) {
  return {
	"Async": true,
	"Name": "AsyncAction_SimpleAsync_ResolvesResult",
	"Input": {
		"Input": true,
		"Function": function( Input ) {
			return promise(function( resolve ) {
				resolve( Input );
			});
		}
	},
	"Function": AsyncAction,
	"ExpectedOutput": true
  };
});
