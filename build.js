//build.js: Configuration file for optimizing the AsyncAction function. 
/*
*/ 
({
    paths: {
	"underscore": "lib/underscore.min",
	"log": "lib/log.min",
	"rsvp": "lib/rsvp.min",
	"promise": "lib/promise.min"
    },
    exclude: [ "underscore", "log", "rsvp", "promise" ],
    name: "AsyncAction",
    out: "async_action.min.js"
})
