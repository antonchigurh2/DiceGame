var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;
var player1img="images/dice"+a+".png";
var player2img="images/dice"+b+".png";
var arr=document.querySelectorAll("img");
var img1=arr[0];
var img2=arr[1];
img1.setAttribute("src",player1img);
img2.setAttribute("src",player2img);
if(a>b){
  document.querySelector("h1").innerHTML="Player 1 wins";
}

else if(b>a){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
