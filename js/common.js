// Swiper
$(function(){
  const mainSlider = new Swiper('.swiper', {
      loop: false,
      autoplay: true,
      scrollbar : {
          el : '.swiper-scrollbar',
          draggable: false,
      },
      pagination: { 
          el: ".swiper-pagination", 
          type : 'fraction',
      },
  });
});
// Swiper - Pause
const pauseButton = document.getElementById('swiper-pause-button');
function swiperPause() {
    if (mainSlider.autoplay.running == false) {
        mainSlider.autoplay.start();
    }
    else if (mainSlider.autoplay.running == true) {
        mainSlider.autoplay.stop();
    }
}
pauseButton.addEventListener('click', swiperPause);