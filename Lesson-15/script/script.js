window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	function countTimer(deadline) {
		let timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		let dateStop = new Date(deadline).getTime(),
			dateNow = new Date().getTime(),
			timeRemaining = (dateStop - dateNow) / 1000;

		if (dateStop > dateNow) {
			let seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);

			if (String(seconds).length === 1) {
				seconds = '0' + seconds;
			}
			if (String(minutes).length === 1) {
				minutes = '0' + minutes;
			}
			if (String(hours).length === 1) {
				hours = '0' + hours;
			}

			timerHours.textContent = hours;
			timerMinutes.textContent = minutes;
			timerSeconds.textContent = seconds;
		} else {

			timerHours.textContent = '00';
			timerMinutes.textContent = '00';
			timerSeconds.textContent = '00';

		}

	}
	setInterval(countTimer, 1000, '23 october 2019');

	const togglemenu = () => {

		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu');


		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		}

		btnMenu.addEventListener('click', handlerMenu);

		menu.addEventListener('click', (event) => {

			if (!event.target.matches('a')) {
				return;
			}
			handlerMenu();
		});

		document.body.addEventListener('click', (event) => {
			let target = event.target;
			target = target.closest('menu');

			if (!target) {
				menu.classList.remove('active-menu');
			}

		}, true);
	};
	togglemenu();

	const togglePopUp = () => {
		const popup = document.querySelector('.popup'),
			poppupBtn = document.querySelectorAll('.popup-btn'),

			popupContent = document.querySelector('.popup-content');

		let count = 0;
		poppupBtn.forEach((elem) => {
			elem.addEventListener('click', () => {
				popup.style.display = 'block';

				if (document.documentElement.clientWidth > 576) {
					let popupDown = function () {
						popupContent.style.transform = 'translateY(-115%)';
						count++;
						popupContent.style.transform = `translateY(${-115 + count}%)`;
						if (count < 135) {
							setTimeout(popupDown, 5);
						}
					};
					popupDown();
				} else {
					popupContent.style.transform = 'translateY(20%)';
				}

			});
		});

		popup.addEventListener('click', (event) => {
			let target = event.target;

			if (target.classList.contains('popup-close')) {
				popup.style.display = 'none';
				if (document.documentElement.clientWidth > 576) {
					popupContent.style.transform = 'translateY(-115%)';
					count = 0;
				}
			} else {
				target = target.closest('.popup-content');
				if (!target) {
					popup.style.display = 'none';

					if (document.documentElement.clientWidth > 576) {
						popupContent.style.transform = 'translateY(-115%)';
						count = 0;
					}
				}
			}

		});
	};
	togglePopUp();

	const getAnchors = () => {
		const menuLinks = document.querySelector('menu').querySelectorAll('a[href*="#"]');
		const serviceLink = document.querySelector('main').querySelector('a[href*="#"]');

		const getScroll = (elem) => {
			const blockID = elem.getAttribute('href');

			document.querySelector('' + blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		};

		// меню
		for (let anchor of menuLinks) {
			anchor.addEventListener('click', (e) => {
				e.preventDefault();

				getScroll(anchor);
			});
		}

		// кнопка        
		serviceLink.addEventListener('click', (e) => {
			e.preventDefault();

			getScroll(serviceLink);
		});
	};
	getAnchors();

	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = (index) => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};

		tabHeader.addEventListener('click', (event) => {
			let target = event.target;

			target = target.closest('.service-header-tab');

			if (target) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}

		});
	};
	tabs();

	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item'),
			btn = document.querySelectorAll('.portfolio-btn'),
			slider = document.querySelector('.portfolio-content');

		let currentSlide = 0,
			interval,
			dots = document.querySelector('.portfolio-dots');

		const getDots = () => {
			for (let i = 0; i < slide.length; i++) {
				let newElem = document.createElement('li');
				newElem.classList.add('dot');
				dots.appendChild(newElem);
			}
		};
		getDots();

		let dot = document.querySelectorAll('.dot');

		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};

		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const autoPlaySlide = () => {

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;
			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');

		};

		const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};

		const stopSlide = () => {
			clearInterval(interval);
		};



		slider.addEventListener('click', (event) => {
			event.preventDefault();

			let target = event.target;

			if (!target.matches('#arrow-right, #arrow-left, .dot')) {
				return;
			}

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dot.forEach((elem, index) => {
					if (elem === target) {
						currentSlide = index;
					}
				});
			}

			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}

			if (currentSlide < 0) {
				currentSlide = slide.length - 1;
			}

			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');

		});

		slider.addEventListener('mouseover', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				stopSlide();
			}
		});

		slider.addEventListener('mouseout', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				startSlide(1500);
			}
		});

		startSlide(1500);
	};
	slider();

	const changeImg = () => {
		const imgWrapper = document.getElementById('command'),
			arrDataImg = [];

		imgWrapper.addEventListener('mouseenter', () => {
			if (!event.target.matches('.command__photo')) {
				return;
			}
			arrDataImg[0] = event.target.src;
			event.target.src = event.target.dataset.img;
		}, true);

		imgWrapper.addEventListener('mouseleave', () => {
			event.target.src = arrDataImg[0];
		}, true);
	};
	changeImg();

	const calcValid = () => {
		const calcBlock = document.querySelector('.calc-block'),
			input = calcBlock.querySelectorAll('input');

		input.forEach((item) => {
			item.type = 'text';
		});

		calcBlock.addEventListener('input', () => {
			if (!event.target.matches('input')) {
				return;
			}

			event.target.value = event.target.value.replace(/\D/g, '');
		});
	};
	calcValid();

});