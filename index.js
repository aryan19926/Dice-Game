var r1=Math.ceil(Math.random() * 6);
var r2=Math.ceil(Math.random() * 6);
var a="./images/dice"+ r1 +".png";
var b="./images/dice"+ r2 +".png";
document.querySelector(".img1").setAttribute("src",a);
document.querySelector(".img2").setAttribute("src",b);
if(r1>r2)
document.querySelector("h1").innerHTML="Player 1 Wins";
else if(r1==r2)
document.querySelector("h1").innerHTML="It's a Tie";
else
document.querySelector("h1").innerHTML="Player 2 Wins";