//test_AsyncAction.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "AsyncAction",
  "tests/AsyncAction_SimpleAsync_ResolvesResult",
  "tests/AsyncAction_RejectingAsync_ResolvesError",
  "tests/AsyncAction_UnknownError_RejectsUnknownError",
  "promise"
], function(
  TestSuite,
  log,
  AsyncAction,
  AsyncAction_SimpleAsync_ResolvesResult,
  AsyncAction_RejectingAsync_ResolvesError,
  AsyncAction_UnknownError_RejectsUnknownError,
  promise
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_AsyncAction initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "AsyncAction" );
  	xTestSuite.add( AsyncAction_SimpleAsync_ResolvesResult );
	xTestSuite.add( AsyncAction_RejectingAsync_ResolvesError );
	xTestSuite.add( AsyncAction_UnknownError_RejectsUnknownError );
      xTestSuite.test();
    }
  });
});
