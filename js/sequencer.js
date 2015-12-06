// set up synths
var synthSine = new Tone.SimpleSynth({
  "oscillator" : {
    "type" : "sine",
    "volume": -5
  }
}).toMaster();

var synthSquare = new Tone.SimpleSynth({
  "oscillator" : {
    "type" : "square",
    "volume": -20
  }
}).toMaster();

var synthTriangle = new Tone.SimpleSynth({
  "oscillator" : {
    "type" : "triangle",
    "volume": -5
  }
}).toMaster();

// keep track of steps and notes
var stepNumber = 0;
var noteValues = ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"];

// repeated callback
// triggerAttackRelease works when not passing in time
Tone.Transport.setInterval(function(time) {
  for (var yPos = 0; yPos < 8; yPos++) {
    if (notePositions[stepNumber][yPos] === "sine") {
      synthSine.triggerAttackRelease(noteValues[yPos], "8n", time);
    } else if (notePositions[stepNumber][yPos] === "square") {
      synthSquare.triggerAttackRelease(noteValues[yPos], "8n", time);
    } else if (notePositions[stepNumber][yPos] === "triangle") {
      synthTriangle.triggerAttackRelease(noteValues[yPos], "8n", time);
    }
  }
  stepNumber++;
  stepNumber = stepNumber % 8;
}, "8n");

// loop and start
Tone.Transport.loop = true;
Tone.Transport.start();
