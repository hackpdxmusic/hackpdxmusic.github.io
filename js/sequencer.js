// set up synths
var synthSine = new Tone.MonoSynth({
  "oscillator" : {
    "type" : "sine"
  }, "envelope" : {
    "release": 0.2
  }
}).toMaster();

var synthSquare = new Tone.MonoSynth({
  "oscillator" : {
    "type" : "square"
  }, "envelope" : {
    "release": 0.2
  }
}).toMaster();

var synthTriangle = new Tone.MonoSynth({
  "oscillator" : {
    "type" : "triangle"
  }, "envelope" : {
    "release": 0.2
  }
}).toMaster();

// keep track of steps and notes
var stepNumber = 0;
var noteValues = ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"];

// repeated callback


Tone.Transport.setInterval(function(time) {
  for (var yPos = 0; yPos < 8; yPos++) {
    if (notePositions[stepNumber][yPos] === "sine") {
      synthSine.triggerAttackRelease(noteValues[yPos], "16n", time);
    } else if (notePositions[stepNumber][yPos] === "square") {
      synthSquare.triggerAttackRelease(noteValues[yPos], "16n", time);
    } else if (notePositions[stepNumber][yPos] === "triangle") {
      synthTriangle.triggerAttackRelease(noteValues[yPos], "16n", time);
    }
  }
  stepNumber++;
  stepNumber = stepNumber % 8;
}, "8n");

Tone.Transport.loop = true;
Tone.Transport.start();
