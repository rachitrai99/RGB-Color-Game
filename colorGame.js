//to keep track of the mode i.e hard or easy
var numSquares=6;
//Array in which random colors are generated ot fill the squares
var colors= generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message")
//change backgroundColor of h1 when correct option is chosen
var h1=document.querySelector("h1");
//Button to play again or reset game with new colors
var resetButton=document.querySelector("#reset");
//for easy mode.
var easyBtn = document.querySelector("#easyBtn");
//for hard moode.
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    //generate three random colors
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    //hide bottom three squares
    for(var i=0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
})

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    //generate six random colors
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
})


resetButton.addEventListener("click",function(){
    //generate all new colors
    colors=generateRandomColors(numSquares);
    //pick new random colors from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent=pickedColor;
    this.textContent="New Colors";
    messageDisplay.textContent="";
    // change colors of square
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor=colors[i];
    }
    //change display color background.
    h1.style.backgroundColor=" rgb(7, 148, 7)";
})
colorDisplay.textContent = pickedColor;

//loop checking the correct and incorrect options and doing respective functions.
for(var i=0; i<squares.length; i++){
    // add initial color to squares
    squares[i].style.backgroundColor= colors[i];

    // add click listners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor= this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent="Correct !";
            resetButton.textContent="Play Again ?"
            changeColors(clickedColor);
            //change background color of h1 to rgb
            h1.style.backgroundColor=clickedColor;
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again !";
        }
    });
}

//Change bcakground color of squares array
function changeColors(color){
    //loop through all squares
    for(var i=0;i<squares.length;i++){
       //change each color to match given color
        squares[i].style.backgroundColor= color;
    }
}

//Function to pick random color 
function pickColor(){
    //pick a random number
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr=[];
    //loop to add num random colors to array
    for(var i=0; i<num; i++){
        //get random color  and puch into array
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

//function to get random color and puch into the array
function randomColor(){
    //pick a "red" from 0 to 255
    var r=Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
    var g=Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255
    var b=Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}