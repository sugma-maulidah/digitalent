const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 2,
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});

const navSlide = () => {
    const menuBar = document.querySelector(".menu-bar");
    const headerLogo = document.querySelector(".header-logo");
    const headerList = document.querySelector(".header-list");
    const menuBack = document.querySelector(".menu-back");
  
    menuBar.addEventListener("click", () => {
      //munculin nav menu
      headerList.classList.toggle("menu-active");
  
      //munculin background putih
      menuBack.classList.toggle("menu-active");
  
      //animasi burger
      menuBar.classList.toggle("animated");
  
      //color
      headerLogo.classList.toggle("color"); //active
      menuBar.classList.toggle("color");
      headerList.classList.toggle("color");
    });
  };
  
  navSlide();
  
