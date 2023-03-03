
let leftIcon = document.querySelector(".slider .left")

let rightIcon = document.querySelector(".slider .right")



function rightSlider() {
   let activeImage = document.querySelector(".active-img")
   activeImage.classList.remove("active-img")
   if (activeImage.nextElementSibling != null) {
      activeImage.nextElementSibling.classList.add("active-img")
   }
   else {
      activeImage.parentNode.firstElementChild.classList.add("active-img")
   }

}

function leftSlider() {
   let activeImage = document.querySelector(".active-img")
   activeImage.classList.remove("active-img")
   if (activeImage.previousElementSibling != null) {
      activeImage.previousElementSibling.classList.add("active-img")
   }
   else {
      activeImage.parentNode.lastElementChild.classList.add("active-img")
   }

}


let buttons = document.querySelectorAll(".lines button")

let images = document.querySelectorAll(".images")



 buttons.forEach(button => {
    button.addEventListener("click", function () {
       (document.querySelector(".active-img")).classList.remove("active-img")
       this.classList.add("active-img");
       images.forEach(image => {
          if (this.getAttribute("data-id") == image.getAttribute("data-id")) {
             image.classList.remove("d-none")
          }
          else {
             image.classList.add("d-none")
          }
       })

   })

 })




rightIcon.addEventListener("click", rightSlider);


leftIcon.addEventListener("click", leftSlider);




rightIcon.addEventListener("mouseover", rightSlider);



leftIcon.addEventListener("mouseover", leftSlider);

