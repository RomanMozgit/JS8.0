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

export default changeImg;