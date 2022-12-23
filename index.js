var rN1=Math.floor(Math.random()*6)+1;
var rN2=Math.floor(Math.random()*6)+1;


var s1="images/dice"+rN1+".png";
var s2="images/dice"+rN2+".png";

document.querySelector(".img1").setAttribute("src",s1);
document.querySelector(".img2").setAttribute("src",s2);

if(s1>s2){
      document.querySelector("h1").innerHTML="Zubair Wins!!";
}
if(s2>s1){
      document.querySelector("h1").innerHTML="Zayad Wins!!";
}
if(s2==s1){
      document.querySelector("h1").innerHTML="Draw!!";
}
