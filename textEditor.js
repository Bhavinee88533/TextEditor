let inp=document.querySelector("textarea");
let para=document.querySelector(".para");
let p=document.querySelector(".paragraph");
let setBackgroundbtn=document.querySelector("#setBackground");
let setTextbtn=document.querySelector("#setText");
inp.addEventListener("input",function(){
    para.innerText=inp.value;
});

setBackgroundbtn.addEventListener("click",function(){
    let randomColor=getRandomColor();
    p.style.backgroundColor=randomColor;
});

setTextbtn.addEventListener("click",function(){
    let randomColor=getRandomColor();
    p.style.color=randomColor;
});

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
 }
 let reset =document.querySelector(".reset");
 reset.addEventListener('click',function(){
    location.reload();
 })