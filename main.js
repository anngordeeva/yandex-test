const slider = document.getElementById('swiper')

if (document.documentElement.clientWidth < 768) {
  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

} else {
  slider.remove()
}
