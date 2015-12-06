// todo: make object z-index on top when its being dragged
// populate dom with lots of sines
var numSines = 5;
var numSquares = 5;
var numTriangles = 5;
var notePositions = [];
var numHorizontal = 8;
var numVertical = 8;
var cellSize = 50;
var sines = [], triangles = [], squares = [];
var xStartPos = null;
var yStartPos = null;

// Populate 2d notes array with nulls
for (var i = 0; i < numHorizontal; i++) {
  notePositions[i] = [];
  for (var j = 0; j < numVertical; j++) {
    notePositions[i][j] = null;
  }
}

// Populate selection area with given number of each object
for (var i = 0; i < numSines; i++) {
  var newSine = $('#sequencer-grid').append('<div class="sine note note-resting ui-widget-content"><img src="sine.svg" alt="sine wave"/></div>');
  sines.push(newSine);
}
for (var i = 0; i < numSquares; i++) {
  var newSquare = $('#sequencer-grid').append('<div class="square note note-resting ui-widget-content"><img src="square.svg" alt="square wave"/></div>');
  squares.push(newSquare);
}
for (var i = 0; i < numTriangles; i++) {
  var newTriangle = $('#sequencer-grid').append('<div class="triangle note note-resting ui-widget-content"><img src="triangle.svg" alt="triangle wave" /></div>');
  triangles.push(newTriangle);
}


// Update the note positions array when notes are dragged
// Only applied when they are within bounds of sequencer box
$(".note").draggable({
  start: function(event, ui) {
    xStartPos = (ui.position.left / 50);
    yStartPos = (ui.position.top / 50);
    if ((xStartPos >= 0) && (yStartPos >= 0)) {
      notePositions[xStartPos][yStartPos] = null;
    }
  },
  drag: function(event, ui) {
    if (ui.position.left > 350) {
      ui.position.left = 350;
    }
    if (ui.position.top > 350) {
      ui.position.top = 350;
    }
    if (ui.position.top < 0) {
      ui.position.top = 0;
    }
    if ((ui.position.left > -25) && (ui.helper.hasClass('note-resting'))) {
      console.log('thingy comin in from the resting');
      ui.helper.removeClass('note-resting');
    }
    if (ui.position.left < -25 && !(ui.helper.hasClass('note-resting'))) {
      ui.helper.addClass('note-resting');
    }
  },
  stop: function(event, ui) {
    var xEndPos = (ui.position.left / 50);
    var yEndPos = (ui.position.top / 50);
    if (ui.position.left < -25) {
      switch (ui.helper[0].classList[0]) {
        case 'sine':
          console.log(ui.helper[0].classList[0]);
          ui.position.top = 50;
          ui.position.left = -150;
          break;
        case 'square':
          console.log(ui.helper[0].classList[0]);
          ui.position.top = 150;
          ui.position.left = -150;
          break;
        case 'triangle':
          console.log(ui.helper[0].classList[0]);
          ui.position.top = 250;
          ui.position.left = -150;
          break;
        default:
          console.log("FREAKOUT!");
      }
    }
    if ((xEndPos >= 0) && (yEndPos >= 0)) {
      notePositions[xEndPos][yEndPos] = ui.helper[0].classList[0];
    }
  }
});

// Set up notes to snap to sequencer grid
$("#sequencer-grid").droppable({
    over: function(event, ui) {
        $(".note").draggable({
            grid: [50, 50]
        });
    },
    out: function(event, ui) {
        $(".note").draggable("option", "grid", false);
    }
});

// Set up notes to snap to selection zone area
$("#selection-zone").droppable({
    over: function(event, ui) {
        $(".note").draggable({
            grid: [50, 50]
        });
    },
    out: function(event, ui) {
        $(".note").draggable("option", "grid", false);
    }
});
