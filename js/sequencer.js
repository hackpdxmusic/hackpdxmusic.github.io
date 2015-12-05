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
  // get the notes at the step
  // get this from Ashlin's dumb jquery
  var column;

  for (var i = 0; i < 8; i++) {
    if (column[i] === "sine") {
      synthSine.triggerAttackRelease(noteValues[i], "8n", time);
    } else if (column[i] === "square") {
      synthSquare.triggerAttackRelease(noteValues[i], "8n", time);
    } else if (column[i] === "triangle") {
      synthTriangle.triggerAttackRelease(noteValues[i], "8n", time);
    }
  }
  stepNumber++;
  stepNumber = stepNumber % 8;
}, "8n");

Tone.Transport.loop = true;
Tone.Transport.start();
