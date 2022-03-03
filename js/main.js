

// const nextBtn = document.querySelector("#swiper .next");
// const prevBtn = document.querySelector("#swiper .prev");
// let sliderImages = document.getElementsByClassName("slide-content");

// let currentSlider = 0;
// nextBtn.onclick = function(){
//   currentSlider++;
 
//  clearClass();
//   if (currentSlider>=sliderImages.length) {
//      currentSlider=0
//   }
//   sliderImages[currentSlider].classList.add("active-slide")
 
// }


// prevBtn.onclick = function(){
//   currentSlider--;
  
//   clearClass();
//   if (currentSlider==-1) {
//      currentSlider = sliderImages.length-1
//   }
//   sliderImages[currentSlider].classList.add("active-slide")
// }


// function clearClass(){
//   for (let i = 0; i < sliderImages.length; i++) {
    
//     sliderImages[i].classList.remove("active-slide")
    
//   }
// }





// const nextBtn = document.querySelector("#swiper .next")
// const prevBtn = document.querySelector("#swiper .prev")
// let sliderImg = document.getElementsByClassName("slide-content")


// let sliderCount = 0 
// console.log(sliderCount);

// nextBtn.onclick = function(){
//   sliderCount++ 
//   console.log(sliderCount);
//   clearClass()
//   if (sliderCount>=sliderImg.length) {
//     sliderCount = 0
//   }

//   sliderImg[sliderCount].classList.add("active-slide")

// }


// prevBtn.onclick = function(){
//   sliderCount--
//   clearClass()
//   if(sliderCount==-1) sliderCount = sliderImg.length-1
//   sliderImg[sliderCount].classList.add("active-slide")
// }

// function clearClass() {
//   for (let i = 0; i < sliderImg.length; i++) {
//     sliderImg[i].classList.remove("active-slide")
//  }
// }


// Slider fade end

// ====================================


const nextBtn = document.querySelector("#slider .next")
const prevBtn = document.querySelector("#slider .prev")
let middleSlider = document.querySelector("#slider .middle-slider");
let slideContents = document.querySelectorAll(".middle-slider .slide-content")
let currentSlider = 0;

nextBtn.onclick = function(){
    currentSlider++;
    if (currentSlider>=slideContents.length) {
        currentSlider=0;
    }
   middleSlider.style.left = (-800*currentSlider) + "px"
}

prevBtn.onclick = function(){
    currentSlider--;
    if (currentSlider==-1) {
        currentSlider = slideContents.length-1;
    }
    middleSlider.style.left = (-800*currentSlider) + "px"
}















