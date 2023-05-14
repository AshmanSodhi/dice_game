var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImg1 = "dice" + randomNumber1 + ".png";
var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomDiceSrc1 = "images/" + randomDiceImg1;
var randomDiceSrc2 = "images/" + randomDiceImg2;

var image1 = document.querySelector(".container .dice .img1");
var image2 = document.querySelector(".container .dice .img2");

image1.setAttribute("src" , randomDiceSrc1);
image2.setAttribute("src" , randomDiceSrc2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won";
} 

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Won";
} 

else {
    document.querySelector("h1").innerHTML = "Draw";
}

function refreshPage(){
    window.location.reload();
} 