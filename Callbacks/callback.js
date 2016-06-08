// Check if in node:
try {
	exports.inNode = '';
}
catch(err) {
	var exports = {};
}

// Functions go here:
exports.appendInner = function(id, text) {
	document.getElementById(id).innerHTML += text;
};

exports.getData = function(dataURI, callback) {
	// var dataArray = [123, 456, 789, 12];
	// callback(dataArray);
	var timer = setTimeout(function() {
		var dataArray = [123, 456, 789, 12];
		callback(dataArray);
	},
	1000);
};

exports.writeData = function(myData) {
	exports.appendInner('output', myData);
};















// Run script if not in node.
if (!exports.hasOwnProperty('inNode')) {
	// Script to run:

	exports.getData('http://fake.com/userlist', exports.writeData);
	exports.appendInner('output', 'Starting ...');
	// appendInner('output', 'Ending!');
	// var myTimer = window.setTimeout(function() {
	// 	appendInner('output', 'Ending!');},
	// 	500);
	exports.appendInner('output', 'Continuing ...');
}

//

var target = window.module = window.module || {}
target.exports = window.module.exports = window.module.exports || {}

exports.foo = foo