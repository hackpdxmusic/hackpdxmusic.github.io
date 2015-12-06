//so time is evaluated in seconds (aka default 60 bpm/ 1 second)
//since squares are defined as eigth notes, might have to divide time in half
//so I can borrow the grid logic from drag -logic possibly...
//tell jquery to start coloring the first note,
//then use some sort of count, passing in time, to draw the next square 50 px over
//and erasing the square behind
//can use that little modulo idea to add too it and then divide it keeping it <= 8

//start by drawing one square. time starts on load

// console.dir(Tone.Transport);
//
// $(document).ready(function() {
//
//         function metronome() {
//             if (pos <= 500) {
//             pos += 50;
//             $("#time_square").css("left", pos);
//         } else {
//             pos = 200;
//             $("#time_square").css("left", 200);
//         }
//         }
//         var pos = parseInt($("#time_square").css("left"));
//
//         var t = setInterval(metronome, 250);
//
//
//
//
//
//
//
//
// })
