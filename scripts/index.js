// иницилизация либы с иконками

(function () {
  return feather.replace({
    color: "#000",
  });
})()


// dropd down header
// иницилизация swiper и настройки для каждого слайдера

const swiperBanner = new Swiper(".banner__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1000,
  slideToClikedSlide: true,
  grabCursor: true,
  touchRatio: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  mousewheel: {
    invert: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperFeatures = new Swiper(".features__swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 1000,
  slideToClikedSlide: true,
  grabCursor: true,
  touchRatio: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    480: {
      slidesPerView: 1,
      // width: 400,
    },
    768: {
      slidesPerView: 3,
    },
  },
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: ".features__btn-next",
    prevEl: ".features__btn-prev",
  },
});

const swiperBrands = new Swiper(".brands__swiper", {
  slidesPerView: 4,
  spaceBetween: 45,
  speed: 1000,
  slideToClikedSlide: true,
  grabCursor: true,
  touchRatio: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperArticles = new Swiper(".articles__swiper", {
  spaceBetween: 68,
  slidesPerView: 2,
  slidesPerGroup: 2,
  speed: 1000,
  slideToClikedSlide: true,
  grabCursor: true,
  touchRatio: 5,
  loopFillGroupWithBlank: true,
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    770: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperReviews = new Swiper(".reviews__swiper", {
  speed: 1000,
  slideToClikedSlide: true,
  grabCursor: true,
  touchRatio: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 5,
      
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 50,
      centeredSlides: true,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperCardProd = new Swiper(".semilar-products__swiper", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 10,
  speed: 1000,
  slideToClikedSlide: true,
  grabCursor: true,
  touchRatio: 5,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 4,
    }
  },
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const slideArticleSwiper = new Swiper('.article__swiper', {
  spaceBetween: 50,
  slidesPerView: 1,
  speed: 1000,
  slideToClikedSlide: true,
  grabCursor: true,
  touchRatio: 5,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: {
    invert: true,
  }
})


//----------------------------------

const catalogBtn = document.querySelector(".header__dropdown-btn");

const getDropDown = document.querySelector('.dropdown')


const openDropDown = () => {
  catalogBtn.classList.toggle('open')

  getDropDown.classList.toggle('open')
}

catalogBtn.addEventListener("click", openDropDown);


// клик на бургер

const navModal = document.querySelector('.nav-modal')

const burgerNav = document.querySelector(".nav__burger");

const burgerMobile = document.querySelector(".header__burger");

const onClickBurgerNav = () => {
  burgerNav.classList.toggle("active");
  navModal.classList.toggle('open')

  if (navModal.className === 'nav-modal open') {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '16.8px'
  }
  else {
    document.body.style.overflow = 'visible'
    document.body.style.paddingRight = '0'

  }
};

const onClickBurgerMobile = () => {
  burgerMobile.classList.toggle("active");
  navModal.classList.toggle('open')

  if (navModal.className === 'nav-modal open') {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '16.8px'
  }
  else {
    document.body.style.overflow = 'visible'
    document.body.style.paddingRight = '0'
  }
};

burgerNav.addEventListener("click", onClickBurgerNav);

burgerMobile.addEventListener("click", onClickBurgerMobile);

// клик аккардион

const accordionCard = document.querySelectorAll(".card__accordion");

accordionCard.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const panel = btn.nextElementSibling;
    panel.style.display === "block" ?
      (panel.style.display = "none") :
      (panel.style.display = "block");
  });
});

// клик обратная связь

const btnFeedback = document.querySelector('.footer__feedback')
const btnCloseModalFeedback = document.querySelector('.feedback__btn-close')
const formFeedback = document.querySelector('.feedback')
btnFeedback.addEventListener('click', (e) => {
  e.preventDefault()
  formFeedback.style.transform = 'translateX(0)'
  document.body.style.overflow = 'hidden'
})
btnCloseModalFeedback.addEventListener('click', (e) => {
e.preventDefault()
  formFeedback.style.transform = 'translateX(-3000px)'
  document.body.style.overflow = 'visible'
})