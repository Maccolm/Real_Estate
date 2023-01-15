const swiper = new Swiper('.slider-main-block', {
  loop:true,
   navigation: {
    nextEl: '.body-main-block__arrow.swiper-button-next',
    prevEl: '.body-main-block__arrow.swiper-button-prev',
  },
});

//=======BURGER========//
let header__burger = document.querySelector('.burger__menu');
let header__menu = document.querySelector('.burger__icon');
let back = document.querySelector('.header__menu');
let header__list = document.querySelector('.menu__list');
let body = document.querySelector('body');

header__burger.onclick = function (){
  header__burger.classList.toggle('active');
  header__menu.classList.toggle('active');
  header__list.classList.toggle('active');
  body.classList.toggle('lock');
}

header__list.onclick = function() {
  header__list.classList.remove('active');
  back.classList.toggle('lock');
}

// Tabs //
const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs ');

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
    if(targetElement.closest('.tabs-deals__button')) {
      tabNavItems.forEach((tabNavItems, index) => {
        if(tabNavItems.classList.contains('active')) {
          currentActiveIndex = index;
         //tabNavItems.classList.remove('active');
          tabNavItems.classList.remove('active');
        };
         if(tabNavItems === targetElement) {
          newActiveIndex = index;
         }
      });
      targetElement.classList.add('active');
      tabItems[newActiveIndex].classList.add('active');
      tabItems[currentActiveIndex].classList.remove('active');
    };
});