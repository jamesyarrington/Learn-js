RSVP = require('RSVP');

dieToss = function() {
	return Math.floor(Math.random() * 6) + 1;
};

tossASix = function() {
	return new RSVP.Promise(function(fulfill, reject) {
		var n = dieToss();
		if (n === 6) {
			fulfill(n);
		} else {
			reject(n);
		}
	});
};

logAndTossAgain = function(toss) {
	console.log("Tossed a " + toss + ", need to try again.");
	return tossASix();
}

logSuccess = function(toss) {
	console.log("I got a " + toss + "!");
}

logFailure = function(toss) {
	console.log("I only got a " + toss + "...");
}

tossASix()
	.then(null, logAndTossAgain)
	.then(null, logAndTossAgain)
	.then(logSuccess, logFailure);