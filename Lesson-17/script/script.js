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
    setInterval(countTimer, 1000, '30 july 2019');



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

     
        for (let anchor of menuLinks) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();

                getScroll(anchor);
            });
        }

           
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

    // калькулятор валидация
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


    // калькулятор (практика 03)

    const calc = (prise = 100) => {

        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');


        // function numAnimate () {
        //     var number = 1;
        //     setInterval(function () {
        //         number++;
        //         if (number<=100) { $('.numbers').text(number); };
        //     }, 100);
        // };




        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = prise * typeValue * squareValue * countValue * dayValue;
            }

            // totalValue.textContent = total;

            const numbDuration = () => {

                let ticks = 20;
                let randomNumbers = [total];

                for (let i = 0; i < ticks - 1; i++) {
                    randomNumbers.unshift(Math.floor(Math.random() * (total)));
                }

                randomNumbers.sort((a, b) => a - b );

                let x = 0;
                let interval = setInterval(function () {
                    totalValue.innerHTML = randomNumbers.shift();
                    if (++x === ticks) {
                        window.clearInterval(interval);
                    }

                }, 50);
            };
            numbDuration();
        };


        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            if (target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')) {
                countSum();
            }

        });


    };
    calc(100);

    // send-ajax-form
    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const form = document.getElementById('form1'),
            formPopUp = document.getElementById('form3'),
            formFooter = document.getElementById('form2');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';

        // формы валидация
        const formValid = () => {
            const formInputTel = document.getElementById('form1-phone'),
                formPopUpInputTel = document.getElementById('form3-phone'),
                formFooterInputTel = document.getElementById('form2-phone'),
                formFooterInputName = document.getElementById('form2-name'),
                formFooterInputMessage = document.getElementById('form2-message');

            formInputTel.addEventListener('input', () => {
                event.target.value = event.target.value.replace(/[^+\d]/g, '');
            });

            formPopUpInputTel.addEventListener('input', () => {
                event.target.value = event.target.value.replace(/[^+\d]/g, '');
            });

            formFooterInputTel.addEventListener('input', () => {
                event.target.value = event.target.value.replace(/[^+\d]/g, '');
            });

            formFooterInputName.addEventListener('input', () => {
                event.target.value = event.target.value.replace(/[^а-яА-я ]/g, '');
            });

            formFooterInputMessage.addEventListener('input', () => {
                event.target.value = event.target.value.replace(/[^а-яА-я ]/g, '');
            });
        };
        formValid();

        // form main
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            let body = {};
            // for (const val of formData.entries()) {
            //     body[val[0]] = val[1];
            // }
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body, () => {
                statusMessage.textContent = successMessage;
                form.querySelectorAll('input').forEach(item => item.value = '');
            }, () => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
        });

        // form popup
        formPopUp.addEventListener('submit', (event) => {
            event.preventDefault();
            formPopUp.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';
            const formData = new FormData(formPopUp);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body, () => {
                statusMessage.textContent = successMessage;
                formPopUp.querySelectorAll('input').forEach(item => item.value = '');
            }, () => {
                statusMessage.textContent = errorMessage;
            });
        });

        // form footer
        formFooter.addEventListener('submit', (event) => {
            event.preventDefault();
            formFooter.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(formFooter);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body, () => {
                statusMessage.textContent = successMessage;
                formFooter.querySelectorAll('input').forEach(item => item.value = '');
            }, () => {
                statusMessage.textContent = errorMessage;
            });
        });

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {                
                if(request.readyState !== 4){
                    return;
                }
                if(request.status === 200){
                    outputData();
                } else {
                    errorData(request.status);
                }
            });

            request.open('POST', './server.php');
            // request.setRequestHeader('Content-Type', 'multipart/form-data');
            request.setRequestHeader('Content-Type', 'application/json');
           
            // request.send(formData);
            request.send(JSON.stringify(body));
        };

    };
    sendForm();

});