RSVP = require('RSVP');

var tossTable = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six'
};

dieToss = function() {
	return Math.floor(Math.random() * 6) + 1;
};

tossDice = function() {
	return new RSVP.Promise(function(fulfill, reject) {
		var n = dieToss();
		fulfill(n);
	});
};

toss = function() {
	var n = dieToss();
	return new RSVP.resolve(n);
};

threeDice = function() {
	var tosses = [];

	add = function(x, y) {
		return x + y;
	};

	for (var i = 0; i < 3; i++) { tosses.push(toss()); }

	return RSVP.all(tosses).then(function(results){
		return results.reduce(add);
	});
};

logResults = function(result) {
	console.log("Rolled " + result + " with three dice.");
};

logErrorMessage = function(error) {
	console.log("Oops: " + error.message);
};

tossASix = function(diceFn) {
	return new RSVP.Promise(function(fulfill, reject) {
		var n = diceFn();
		if (n === 6) {
			fulfill(n);
		} else {
			reject(n);
		}
	});
};

logAndTossAgain = function(toss) {
	var tossWord = tossTable[toss];
	console.log("Tossed a " + tossWord + ", need to try again.");
	return tossDice();
};

logSuccess = function(toss) {
	console.log("I got a " + toss + "!");
};

logFailure = function(toss) {
	console.log("I only got a " + toss + "...");
};

logErrorMessage = function(error) {
	console.log("Oops: " + error.message);
};

// tossASix(dieToss)
// 	.then(null, logAndTossAgain)
// 	.then(null, logAndTossAgain)
// 	.then(logSuccess, logFailure);

// tossDice()
// 	.then(logAndTossAgain)
// 	.then(logAndTossAgain)
// 	.then(null, logErrorMessage);

// threeDice()
// 	.then(logResults)
// 	.then(null, logErrorMessage);

exports.dieToss = dieToss;
exports.tossDice = tossDice;
exports.tossASix = tossASix;