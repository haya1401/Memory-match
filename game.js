const icons=[
"🍎","🍌","🍇","🍉",
"🍓","🍒","🥝","🍍"
];


let cards=[];
let first=null;
let lock=false;

let score=0;
let moves=0;


function start(){

cards=[...icons,...icons];

cards.sort(()=>Math.random()-0.5);


let game=document.getElementById("game");

game.innerHTML="";


cards.forEach((x)=>{

let c=document.createElement("div");

c.className="card";

c.dataset.icon=x;

c.onclick=()=>flip(c);


game.appendChild(c);

});


}


function flip(card){

if(lock) return;

if(card.classList.contains("open"))return;


card.innerHTML=card.dataset.icon;

card.classList.add("open");


if(!first){

first=card;

return;

}


moves++;

document.getElementById("moves").innerHTML=moves;


if(first.dataset.icon===card.dataset.icon){


score+=10;

document.getElementById("score").innerHTML=score;


first=null;


}else{


lock=true;


setTimeout(()=>{

first.innerHTML="";
card.innerHTML="";

first.classList.remove("open");
card.classList.remove("open");


first=null;
lock=false;


},700);


}



}



function restartGame(){

score=0;
moves=0;

document.getElementById("score").innerHTML=0;
document.getElementById("moves").innerHTML=0;

start();

}
