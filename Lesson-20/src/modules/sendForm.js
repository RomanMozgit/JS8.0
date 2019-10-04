const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const formMain = document.getElementById('form1'),
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
            formFooterInputMessage = document.getElementById('form2-message'),
            formsInputName = document.querySelectorAll('.form-name');

        formInputTel.addEventListener('input', () => {
            event.target.value = event.target.value.replace(/[^+\d]/g, '');
        });

        formPopUpInputTel.addEventListener('input', () => {
            event.target.value = event.target.value.replace(/[^+\d]/g, '');
        });

        formFooterInputTel.addEventListener('input', () => {
            event.target.value = event.target.value.replace(/[^+\d]/g, '');
        });

        formsInputName.forEach((item) => {
            item.addEventListener('input', () => {
                event.target.value = event.target.value.replace(/[^а-яА-я ]/g, '');
            });
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
    formMain.addEventListener('submit', (event) => {
        event.preventDefault();
        formMain.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(formMain);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then(successData)
            .catch(errorsData)
            .finally(finalyData(formMain));
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

        postData(body)
            .then(successData)
            .catch(errorsData)
            .finally(finalyData(formPopUp));
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

        postData(body)
            .then(successData)
            .catch(errorsData)
            .finally(finalyData(formFooter));
    });

    const successData = (response) =>{
        if (response.status !== 200) {
            throw new Error('status network not 200');
        }
        statusMessage.textContent = successMessage;            
    };
    const errorsData = () =>{
        statusMessage.textContent = errorMessage;
        console.error(error);
    };
    const finalyData = (form) =>{
        form.querySelectorAll('input').forEach(item => item.value = '');
    };

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

};

export default sendForm;