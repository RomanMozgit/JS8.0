const togglemenu = () => {

    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');


    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

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

export default togglemenu;