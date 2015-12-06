// helper function to create and play a synth
function playTone(oscType, pitch) {
  // balance volume for square oscillator
  var volume = -5;
  if (oscType === "square") {
    volume = -20;
  }

  // create synth
  var synth = new Tone.SimpleSynth({
    "oscillator" : {
      "type": oscType,
      "volume": volume,
    }
  }).toMaster();

  // play synth
  synth.triggerAttackRelease(pitch, "8n");
}

// keep track of steps and notes
var stepNumber = 0;
var noteValues = ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"];

var pos = parseInt($("#time_square").css("left"));

// triggerAttackRelease works when not passing in time
Tone.Transport.setInterval(function(time) {
  for (var yPos = 0; yPos < 8; yPos++) {
    if (notePositions[stepNumber][yPos] !== null) {
      playTone(notePositions[stepNumber][yPos], noteValues[yPos]);
    }
  }

  stepNumber++;
  stepNumber = stepNumber % 8;

  if (pos <= 500) {
  pos += 50;
  $("#time_square").css("left", pos);
  $("#time_bar_vertical").css("left", pos);
  } else {
  pos = 200;
  $("#time_square").css("left", 200); 
  $("#time_bar_vertical").css("left", 200);
  }
}, "8n");

// loop and start
Tone.Transport.loop = true;
Tone.Transport.start();
