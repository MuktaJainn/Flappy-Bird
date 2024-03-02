
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
let birdImg;


//We are creating our bird object.
let bird ={

    x: birdX,
    y : birdY,
    height: birdHeight,
    width: birdWidth

}


//pipes

let pipes =[]; //Multiple pipes throughout
let pipeWidth = 64; //width/height = 384/3072 = 1/8
let pipeHeight =512;
let pipeX =boardW;
let pipeY  = 0;

let Toppipe;
let BottomPipe;




window.onload = function(){
    board = document.getElementById("board");
    board.height = boardh;
    board.width = boardW;
    context = board.getContext("2d"); //used for drawing on the board.


    // //Let's draw the bird.

    // context.fillStyle = "green";
    // context.fillRect(bird.x , bird.y , bird.width , bird.height);


    //load images.

    birdImg= new Image();
    birdImg.src ="./flappybird.png";
    
    birdImg.onload = function(){
        context.drawImage(birdImg,bird.x, bird.y, bird.width,bird.height);
    }

    //pipe

    Toppipe = new Image();
    Toppipe.src = "./toppipe.png";

    BottomPipe = new Image();
    Toppipe.src = "./bottompipe.png";

    requestAnimationFrame(update);
    setInterval(placePipes, 1500);


}

function update(){
    requestAnimationFrame(update);
    context.clearRect(0,0, board.width, board.height);


    //bird
    context.drawImage(birdImg,bird.x, bird.y, bird.width,bird.height);

}


function placePipes(){
    let toppipe ={
        img: Toppipe,
        x :  pipeX,
        y:   pipeY,
        width: pipeWidth ,
        height: pipeHeight 

    }
}
