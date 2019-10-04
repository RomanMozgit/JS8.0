const getAnchors = () => {
    const menuLinks = document.querySelector('menu').querySelectorAll('a[href*="#"]');
    const serviceLink = document.querySelector('main').querySelector('a[href*="#"]');

    const getScroll = (elem) => {
        const blockID = elem.getAttribute('href');

        if (blockID !== '#close') {
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
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

export default getAnchors;