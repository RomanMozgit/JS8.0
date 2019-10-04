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

export default togglePopUp;