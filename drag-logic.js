// todo: make object z-index on top when its being dragged
// populate dom with lots of sines
var numSines = 5;
var numSquares = 5;
var numTriangles = 5;

for (var i = 0; i < numSines; i++) {
  $('#selection-zone').prepend('<div class="sine note ui-widget-content">sine</div>');
}

for (var i = 0; i < numSquares; i++) {
  $('#selection-zone').prepend('<div class="square note ui-widget-content">square</div>');
}

for (var i = 0; i < numTriangles; i++) {
  $('#selection-zone').prepend('<div class="triangle note ui-widget-content">tri</div>');
}


$(".note").draggable({
  start: function() {
    $(this).addClass('dragging');
  },
  stop: function() {
    $(this).removeClass('dragging');
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
