let totalSlides = document.querySelectorAll('.slider--item').length;
let cunrrentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector ('.slider--width').style.width = 
    ` ${sliderWidth * totalSlides}px`;



document.querySelector('.slider--controls').style.width =
    `${sliderWidth}px`;
document.querySelector('.slider--controls').style.heigth =
    `${document.querySelector('.slider').clientHeight}px`;

function goPrev() { 
cunrrentSlide--;
if(cunrrentSlide < 0){
    cunrrentSlide = totalSlides -1;
}
updateMargin();

}

function goNext() {
cunrrentSlide++;
if(cunrrentSlide > (totalSlides-1)) {
    cunrrentSlide = 0;
}
updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (cunrrentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
    `-${newMargin}px`;
}

setInterval(goNext, 4000);




