"use strict"

// let elem=document.querySelector("a");


// console.log(elem.getAttribute("href"))

// console.log(elem.removeAttribute("href"))

// console.log(elem.setAttribute("href","resul.com"))

// console.log(elem.hasAttribute("href"))

// let googleBtn=document.querySelector(".google")

// let linkedinBtn=document.querySelector(".linkedin")

// googleBtn.addEventListener("click",function(){
//     elem.setAttribute("href","https://www.google.com/")
//     elem.click();
// })

// linkedinBtn.addEventListener("click",function(){
//     elem.setAttribute("href","https://in.linkedin.com/company/linkedin")

// })

// elem.addEventListener("click",function(){
// console.log("test");

// })
// elem.addEventListener("click",function(e){
//     e.preventDefault();
//     console.log("ttt")
    
//     })
    

//  let menues=document.querySelectorAll(".headers .item")

// let contents=document.querySelectorAll(".contents .item")

//  menues.forEach(menu=>{
//  menu.addEventListener("click",function(){
//  (document.querySelector(".active-menu")).classList.remove("active-menu")
//  this.classList.add("active-menu");

//  contents.forEach(content=>{
//      if(this.getAttribute("data-id")==content.getAttribute("data-id")){
//         content.classList.remove("d-none")
//      }
//      else{
//         content.classList.add("d-none")
//      }
//  })

//  })

//  })




//slider

let leftIcon=document.querySelector(".slider .left")

let rightIcon=document.querySelector(".slider .right")

function rightSlider(){
   let activeImage= document.querySelector(".active-img")
   activeImage.classList.remove("active-img")
   if(activeImage.previousElementSibling!=null){
    activeImage.previousElementSibling.classList.add("active-img")
   }
   else{
    activeImage.parentNode.lastElementChild.classList.add("active-img")
   }

}

function leftSlider(){
   let activeImage= document.querySelector(".active-img")
   activeImage.classList.remove("active-img")
   if(activeImage.nextElementSibling!=null){
    activeImage.nextElementSibling.classList.add("active-img")
   }
   else{
    activeImage.parentNode.firstElementChild.classList.add("activr-img")
   }

}
rightIcon.addEventListener("click",rightSlider);


leftIcon.addEventListener("click",leftSlider);




rightIcon.addEventListener("mouseover",rightSlider);

  

leftIcon.addEventListener("mouseover",leftSlider);








