// иницилизация либы с иконками

(function () {
	return feather.replace({
		color: '#000',
	});
})();

// dropd down header
// иницилизация swiper и настройки для каждого слайдера

const swiperBanner = new Swiper('.banner__swiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	speed: 1000,
	slideToClikedSlide: true,
	grabCursor: true,
	touchRatio: 5,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'custom',
		renderCustom: function (swiper, current, total) {
			return `<span class="banner__num-icon"><span class="banner__num-current">${current}</span>/${total}</span>`;
		},
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + '</span>';
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const swiperFeatures = new Swiper('.features__swiper', {
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
			spaceBetween: 55,
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
		nextEl: '.features__btn-next',
		prevEl: '.features__btn-prev',
	},
});

const swiperBrands = new Swiper('.brands__swiper', {
	slidesPerView: 4,
	spaceBetween: 38,
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
		768: {
			slidesPerView: 3,
		},
		1281: {
			slidesPerView: 4,
		}
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const swiperArticles = new Swiper('.articles__swiper', {
	spaceBetween: 68,
	slidesPerView: 2,
	slidesPerGroup: 2,
	speed: 1000,
	slideToClikedSlide: true,
	grabCursor: true,
	touchRatio: 5,
	loopFillGroupWithBlank: true,
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
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const swiperReviews = new Swiper('.reviews__swiper', {
	speed: 1000,
	slideToClikedSlide: true,
	grabCursor: true,
	touchRatio: 5,
	loop: true,
	loopFillGroupWithBlank: true,
	breakpoints: {
		480: {
			slidesPerView: 1,
			spaceBetween: 50,
		},
		769: {
			slidesPerView: 3,
			spaceBetween: 50,
			centeredSlides: true,
		},
		1920: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const swiperCardProd = new Swiper('.semilar-products__swiper', {
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
		},
	},
	mousewheel: {
		invert: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
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
		clickable: true,
	},
	mousewheel: {
		invert: true,
	},
});

//----------------------------------

const catalogBtn = document.querySelector('.header__dropdown-btn');

const getDropDown = document.querySelector('.dropdown');

const openDropDown = () => {
	catalogBtn.classList.toggle('open');

	getDropDown.classList.toggle('open');
};

catalogBtn.addEventListener('click', openDropDown);

// клик на бургер

const navModal = document.querySelector('.nav-modal');

const burgerNav = document.querySelector('.nav__burger');

const burgerMobile = document.querySelector('.header__burger');

const onClickBurgerNav = () => {
	burgerNav.classList.toggle('active');
	navModal.classList.toggle('open');

	if (navModal.className === 'nav-modal open') {
		document.body.style.overflow = 'hidden';
		//document.body.style.paddingRight = '16.8px'
	} else {
		document.body.style.overflow = 'visible';
		//document.body.style.paddingRight = '0'
	}
};

const onClickBurgerMobile = () => {
	burgerMobile.classList.toggle('active');
	navModal.classList.toggle('open');

	if (navModal.className === 'nav-modal open') {
		document.body.style.overflow = 'hidden';
		document.body.style.paddingRight = '16.8px';
	} else {
		document.body.style.overflow = 'visible';
		document.body.style.paddingRight = '0';
	}
};

burgerNav.addEventListener('click', onClickBurgerNav);

burgerMobile.addEventListener('click', onClickBurgerMobile);

// клик аккардион

const accordionCard = document.querySelectorAll('.card__accordion');

accordionCard.forEach((btn) => {
	btn.addEventListener('click', () => {
		btn.classList.toggle('active');
		const panel = btn.nextElementSibling;
		// const chevron = btn.children[0]
		if (btn.children[0].className === 'accordion__icon') {
			const chevron = btn.children[0];
			panel.style.display === 'block'
				? ((panel.style.display = 'none'),
				  (chevron.style.transform = 'rotate(90deg)'),
				  (chevron.firstElementChild.style.color = '#000'))
				: ((panel.style.display = 'block'),
				  (chevron.style.transform = 'rotate(270deg)'),
				  (chevron.firstElementChild.style.color = '#707070'));
		} else {
			const chevron = btn.children[1];
			panel.style.display === 'block'
				? ((panel.style.display = 'none'),
				  (chevron.style.transform = 'rotate(90deg)'),
				  (chevron.firstElementChild.style.color = '#000'))
				: ((panel.style.display = 'block'),
				  (chevron.style.transform = 'rotate(270deg)'),
				  (chevron.firstElementChild.style.color = '#707070'));
		}
	});
});

// клик обратная связь

const btnFeedback = document.querySelector('.footer__feedback');
const btnCloseModalFeedback = document.querySelector('.feedback__btn-close');
const formFeedback = document.querySelector('.feedback');
btnFeedback.addEventListener('click', (e) => {
	e.preventDefault();
	formFeedback.style.transform = 'translateX(0)';
	document.body.style.overflow = 'hidden';
});
btnCloseModalFeedback.addEventListener('click', (e) => {
	e.preventDefault();
	formFeedback.style.transform = 'translateX(-3000px)';
	document.body.style.overflow = 'visible';
});

// клик на локацию
{
	(function () {
		const btnLocation = document.querySelectorAll('.location');
		const modalCity = document.querySelector('.city__content');
		const modalMask = document.querySelector('.modal-mask');
		const btnCloseModalCity = document.querySelector('.city__btn-close');

		btnLocation.forEach((btn) => {
			btn.addEventListener('click', () => {
				modalMask.style.display = 'flex';
				modalCity.style.display = 'flex';
				if (navModal.className === 'nav-modal open') {
					navModal.classList.toggle('open');
				}
			});
		});

		btnCloseModalCity.addEventListener('click', () => {
			modalCity.style.display = 'none';
			modalMask.style.display = 'none';
			if (window.innerWidth < 480) {
				navModal.classList.toggle('open');
			} else if (navModal.className === 'nav-modal open') {
				navModal.classList.toggle('open');
			}
		});
	})();
}

// поиск

(function () {
	const search = document.querySelector('.search__input');

	const headerSearch = document.querySelector('.header__search');

	const headerTop = document.querySelector('.header__top');

	const logoHeader = document.querySelector('.logo');

	const iconHeader = document.querySelector('.header__icons-buttons');

	const btnCloseSearch = document.querySelector('.search-result__btn-cancel');

	const searchResult = document.querySelector('.search-result');

	const headerSerchBtn = document.querySelector('.header__seacrh-btn');

	const searchResultWmax = (e) => {
		if (!e.target.value) {
			searchResult.style.zIndex = '0';
			searchResult.style.opacity = '0';
			searchResult.style.transform = 'scale(0)'
		} else {
			searchResult.style.opacity = '1';
			searchResult.style.zIndex = '1000';
			searchResult.style.transform = 'scale(1)'
		}
	};

	search.addEventListener('input', (e) => searchResultWmax(e));

	headerSerchBtn.addEventListener('click', () => {
		headerTop.classList.add('open');
		logoHeader.classList.add('open');
		iconHeader.classList.add('open');
		headerSearch.classList.add('open');
		search.classList.add('open');
		btnCloseSearch.classList.add('open');
	});

	btnCloseSearch.addEventListener('click', () => {
		logoHeader.classList.remove('open');
		iconHeader.classList.remove('open');
		headerTop.classList.remove('open');
		headerSearch.classList.remove('open');
		search.classList.remove('open');
		btnCloseSearch.classList.remove('open');
	});
})();

// модальные окна: логин, напомнить пароль

{
	(function () {
		const btnUser = document.querySelector('.header__user-btn');

		const btnAccountRemindPass = document.querySelector(
			'.account__remind-pass'
		);

		const modalMask = document.querySelector('.modal-mask');

		const modalLogin = document.querySelector('.login-modal__content');
		const modalRemindPassword = document.querySelector(
			'.remind-password__content'
		);
		const modalRemindPasswordFinish = document.querySelector(
			'.remind-password__content-finish'
		);

		const btnRemindPassword = document.querySelector(
			'.login-modal__link-remind'
		);
		const btnBack = document.querySelector('.remind-password__link-back');
		const btnSubmitRemindPassword = document.querySelector(
			'.remind-password__btn-submit'
		);

		const btnCloseModalLogin = document.querySelector(
			'.login-modal__btn-close'
		);
		const btnCloseModalRemindPassword = document.querySelector(
			'.remind-password__btn-close'
		);

		const btnShowPass = document.querySelector('.show-pass');
		const inputPass = document.getElementById('login-pass');

		const closeAllModal = () => {
			modalMask.style.display = 'none';
			modalLogin.style.display = 'none';
			modalRemindPassword.style.display = 'none';
			modalRemindPasswordFinish.style.display = 'none';
			document.body.style.overflow = 'visible';
		};
		const closeModalTimeout = (sec) => {
			setTimeout(closeAllModal, sec);
		};

		btnCloseModalLogin.addEventListener('click', closeAllModal);

		btnCloseModalRemindPassword.addEventListener('click', closeAllModal);

		btnRemindPassword.addEventListener('click', (e) => {
			modalLogin.style.display = 'none';
			modalRemindPassword.style.display = 'flex';
		});

		modalLogin.addEventListener('submit', () => {
			modalMask.style.display = 'none';
			modalLogin.style.display = 'none';
			document.body.style.overflow = 'visible';
		});

		btnUser.addEventListener('click', (e) => {
			modalMask.style.display = 'flex';
			modalLogin.style.display = 'grid';
			document.body.style.overflow = 'hidden';
		});

		btnBack.addEventListener('click', (e) => {
			modalRemindPassword.style.display = 'none';
			modalLogin.style.display = 'grid';
		});

		modalRemindPasswordFinish.addEventListener('click', (e) => {
			if (
				e.target.className === 'remind-password__btn-close' ||
				'main-btn remind-password__btn-submit'
			) {
				closeModalTimeout(0);
			}
		});

		modalRemindPassword.addEventListener('submit', (e) => {
			modalRemindPassword.style.display = 'none';
			modalRemindPasswordFinish.style.display = 'flex';
			let seconds = document.querySelector('.remind-password__seconds');
			e.preventDefault();
			let intervalCloseModal = setInterval(() => {
				seconds.innerHTML -= 1;
			}, 1000);
			setTimeout(() => {
				clearInterval(intervalCloseModal);
				seconds.innerHTML = '3';
			}, 3000);
			closeModalTimeout(3000);
		});

		btnShowPass.addEventListener('click', () => {
			inputPass.classList.toggle('show');
			if (inputPass.className === 'show') {
				inputPass.type = 'text';
			} else {
				inputPass.type = 'password';
			}
		});

		btnAccountRemindPass &&
			btnAccountRemindPass.addEventListener('click', () => {
				modalMask.style.display = 'flex';
				scrollTo(0, 0);
				modalRemindPassword.style.display = 'flex';
				document.body.style.overflow = 'hidden';
			});
	})();
}
