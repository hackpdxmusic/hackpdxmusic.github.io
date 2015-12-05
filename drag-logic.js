// todo: make object z-index on top when its being dragged


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
