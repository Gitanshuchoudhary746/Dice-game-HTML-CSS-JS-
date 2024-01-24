var randomvaraible1=Math.floor((Math.random()*6)+1);
var randomimage="images/dice"+randomvaraible1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimage);
var randomvaraible2=Math.floor((Math.random()*6)+1);
randomimage="images/dice"+randomvaraible2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimage);

if(randomvaraible1>randomvaraible2){
    document.querySelector(".change").innerHTML="player 1 wins";
}
else if( randomvaraible1<randomvaraible2){
    document.querySelector(".change").innerHTML="player 2 wins";
}
else{
    document.querySelector(".change").innerHTML="tie";
}