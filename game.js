
//board
let board;
let boardW= 360;
let boardh= 616;
let context;


//bird 
/*We are taking these dimensions as the original dimensions of the flappy bird image is
408-w and 228-h..so, w/h = 17/24. Our below dimensions support that */

let birdWidth = 34;
let birdHeight =24;
let birdX = boardW/8;
let birdY = boardh/2;


//We are creating our bird object.
let bird ={

    x: birdX,
    y : birdY,
    height: birdHeight,
    width: birdWidth

}




window.onload = function(){
    board = document.getElementById("board");
    board.height = boardh;
    board.width = boardW;
    context = board.getContext("2d"); //used for drawing on the board.



    //Let's draw the bird.

    

}
