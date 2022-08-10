let add= document.querySelector(".add")
let boost= document.querySelector(".boost")
let number= document.querySelector("p")
let massege= document.querySelector(".massege")
let x=0;

add.addEventListener('click',function add1() {
x=x+1;
number.textContent=x;
})

boost.addEventListener("click", function boost1(){
    x=x-30;
    x =x+60;
    let y=x;
number.textContent=x;
if(y>=100){
massege.textContent="Its just the beginning...";
}
if(y>=1000){
    massege.textContent="Good Job Keep Going...";
    }
})
