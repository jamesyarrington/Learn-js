var should = require('should');

describe("My first Mocha test", function() {

	it("should pass.", function() {
		(true).should.be.true;
	});
});

describe("The standard function", function() {
	var Src = require('../callback.js');
	var newString;

	describe("appendInner", function() {

		beforeEach(function() {
			fixture = document.createElement("div");
			fixture.innerHTML = '<main id="main01"><nav id="nav01">Orig Nav</nav><div id="div01">Orig Div</div></main><asdfqwert id="123"></asdfqwert>';
			document.body.appendChild(fixture);
		});

		afterEach(function() {
			document.body.removeChild(fixture);
			fixture = null;
		});

		it("should add to an element", function() {
			Src.appendInner('nav01', ' with NewText!');
			newString = document.getElementById('nav01').innerHTML;
			newString.should.eql('Orig Nav with NewText!');
		});

		it("should not change other elements", function() {
			Src.appendInner('div01', ' better not change others!');
			newString = document.getElementById('nav01').innerHTML;
			newString.should.eql('Orig Nav');
			newString = document.getElementById('123').innerHTML;
			newString.should.eql('');
		});
	});

	describe("writeData", function() {

		beforeEach(function() {
			fixture = document.createElement("div");
			fixture.innerHTML = '<div id="output">Orig Div</div><div id="div02">Other Div</div>';
			document.body.appendChild(fixture);
		});

		afterEach(function() {
			document.body.removeChild(fixture);
			fixture = null;
		});

		it("should add to an element named 'output'.", function() {
			Src.writeData(' gets stuff added to it.');
			newString = document.getElementById('output').innerHTML;
			newString.should.eql('Orig Div gets stuff added to it.');			
		});

		it("should not change the other element.", function() {
			Src.writeData(' is the only one changed');
			newString = document.getElementById('div02').innerHTML;
			newString.should.eql('Other Div');			
		});

		it("can add to the same div multiple times.", function() {
			Src.writeData(' was changed');
			Src.writeData(' multiple times');
			Src.writeData('!');
			newString = document.getElementById('output').innerHTML;
			newString.should.eql('Orig Div was changed multiple times!');
		});
	});
});

describe("The callback function", function() {
	var Src = require('../callback.js');
	var newString;

	describe("getData", function() {

		beforeEach(function() {
			fixture = document.createElement("div");
			fixture.innerHTML = '<div id="output">Orig Div</div><div id="div02">Other Div</div>';
			document.body.appendChild(fixture);
		});

		afterEach(function() {
			document.body.removeChild(fixture);
			fixture = null;
		});

		it("should call a function asychronously.", function(done) {
			Src.getData('dummy', function(data) {
				Src.writeData(data);
				newString = document.getElementById('output').innerHTML;
				newString.should.eql('Orig Div123,456,789,12');
				done();
			});
		});
	});
});