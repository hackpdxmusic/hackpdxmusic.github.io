//so time is evaluated in seconds (aka default 60 bpm/ 1 second)
//since squares are defined as eigth notes, might have to divide time in half
//so I can borrow the grid logic from drag -logic possibly...
//tell jquery to start coloring the first note,
//then use some sort of count, passing in time, to draw the next square 50 px over
//and erasing the square behind
//can use that little modulo idea to add too it and then divide it keeping it <= 8

//start by drawing one square. time starts on load


$( document ).ready(function() {

        var pos = parseInt($("#time_square").css("left"));

        var t = setInterval(function() {

            pos += 50;
            console.log(pos);
            $("#time_square").css("left", pos);
        }, 1000);





})
