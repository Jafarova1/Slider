"use strict"


let leftIcon=document.querySelector(".icons .left")

let rightIcon=document.querySelector(".icons .right")
let cards=document.querySelector(".news")

let translate=0;

leftIcon.addEventListener("click",function(){

   let showElement=document.querySelector(".show")
   showElement.previousElementSibling.classList.add("show")
   showElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("show");
   translate+=200;
   cards.style.transform=`translate(${translate}px)`

   


})

rightIcon.addEventListener("click",function(){

    let showElement=document.querySelector(".show")
    showElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("show");
    showElement.classList.remove("show");
    translate-=200;
    cards.style.transform=`translate(${translate}px)`


 
 })

