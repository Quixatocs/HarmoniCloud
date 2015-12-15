// Single Music Line Class
//
// Generates a single musical line based on the 'cloud' parameter
// which determins the mode of the notes to bring back
//
//"use strict";

function SingleLine() {

	// initialises new audio object and plays the Bass01.mp3 file
	this.play = function() {

		var sound = new Howl({
			urls: ['audio/Bass01.mp3'],
			loop: true,
			volume: 0.5,
  			onend: function() {
    			alert('Finished!');
  			}
		});

	}

};