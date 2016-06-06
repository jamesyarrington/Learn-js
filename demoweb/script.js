generateFooter = function() {
	return "<p>&copy;  " + 
		new Date().getFullYear() + 
		" W3Schools. All rights reserved.</p>";
}

generateNav = function() {
	return "<u1 id='menu'>" +
		"<li><a href='index.html'>Home</a></li>" +
		"<li><a href='customers.html'>Data</a></li>" +
		"<li><a href='about.html'>About</a></li>" +
		"</ul>";
}

replaceHTML = function(id, newHTML) {
	document.getElementById(id).innerHTML = newHTML;
}
allFunctions = function() {
	this.generateFooter = new generateFooter;
	this.generateNav = new generateNav;
	this.replaceHTML = new replaceHTML;
}

module.exports = {
	generateFooter, generateNav, replaceHTML
};