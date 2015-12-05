// todo: make object z-index on top when its being dragged
// populate dom with lots of sines
var numSines = 5;
var numSquares = 5;
var numTriangles = 5;
var notePositions = [];
var numHorizontal = 8;
var numVertical = 8;
var sines = [], triangles = [], squares = [];

// Populate 2d notes array with nulls
for (var i = 0; i < numHorizontal; i++) {
  notePositions[i] = [];

  for (var j = 0; j < numVertical; j++) {
    notePositions[i][j] = null;
  }
}

for (var i = 0; i < numSines; i++) {
  var newSine = $('#sequencer-grid').append('<div class="sine note ui-widget-content">sine</div>');
  sines.push(newSine);
}

for (var i = 0; i < numSquares; i++) {
  var newSquare = $('#sequencer-grid').append('<div class="square note ui-widget-content">square</div>');
  squares.push(newSquare);
}

for (var i = 0; i < numTriangles; i++) {
  var newTriangle = $('#sequencer-grid').append('<div class="triangle note ui-widget-content">tri</div>');
  triangles.push(newTriangle);
}


// Update the note positions array when notes are dragged
// Only applied when they are within bounds of sequencer box
$(".note").draggable({
  start: function(event, ui) {
    var xPos = (ui.position.left / 50);
    var yPos = (ui.position.top / 50);
    if ((xPos >= 0) && (yPos >= 0)) {
      notePositions[xPos][yPos] = null;
    }
  },
  stop: function(event, ui) {
    var xPos = (ui.position.left / 50);
    var yPos = (ui.position.top / 50);
    if ((xPos >= 0) && (yPos >= 0)) {
      notePositions[xPos][yPos] = ui.helper[0].classList[0];
    }
  }
});


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
