$(".note").draggable();

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
