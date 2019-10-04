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
	setInterval(countTimer, 1000, '23 july 2019');



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
			// popupClose = document.querySelector('.popup-close'),
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

});