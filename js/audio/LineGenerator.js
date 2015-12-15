// Test running of the Bass01.aif file from this location
//


function LineGenerator(lines) {

	this.lines = lines;

	this.create = function () {
		var line = new SingleLine();
		line.play();
	}
}




