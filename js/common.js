// Swiper
$(function(){
  const mainSlider = new Swiper('.swiper', {
      loop: false,
      autoplay: false,
      scrollbar : {
          el : '.swiper-scrollbar',
          draggable: false,
      },
      pagination: { 
          el: ".swiper-pagination", 
          type : 'bullets',
      },
      navigation: {
        nextEl: '',
        prevEl: '',
      },

  });
});
// Swiper - Pause
// const pauseButton = document.querySelector('#swiper-pause-button');
// console.log(pauseButton);
// const swiperPause = () => {
//   console.log(1);
//     if (mainSlider.autoplay.running == false) {
//         mainSlider.autoplay.start();
//     }
//     else if (mainSlider.autoplay.running == true) {
//         mainSlider.autoplay.stop();
//     }
// }
// pauseButton.addEventListener('click', swiperPause);