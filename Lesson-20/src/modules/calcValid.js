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

export default calcValid;