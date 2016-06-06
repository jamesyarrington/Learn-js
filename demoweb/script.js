exports.generateFooter = function() {
	return "<p>&copy;  " + 
		new Date().getFullYear() + 
		" W3Schools. All rights reserved.</p>";
};

exports.generateNav = function() {
	return '<ul id="menu">' +
		'<li><a href="index.html">Home</a></li>' +
		'<li><a href="customers.html">Data</a></li>' +
		'<li><a href="about.html">About</a></li>' +
		'</ul>';
};

exports.replaceHTML = function(id, newHTML) {
	document.getElementById(id).innerHTML = newHTML;
};