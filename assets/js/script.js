let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    breakpoints: {
        // when window width is <= 499px
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 50
        },
        // when window width is <= 999px
        850: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        },
        1024:{
            slidesPerView: 3,
            spaceBetweenSlides: 50
        }
    }
  });


  AOS.init({
    offset:400,
    duration:1000
  });