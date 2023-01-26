document.addEventListener('DOMContentLoaded', () => {

    let phoneInput = document.querySelector('.js-phone-input');
    let btn = document.querySelector('.js-form-btn');
    let nameForm = document.querySelector('.js-form');
    let passwordForm = document.querySelector('.js-form-password');
    let btnBack = document.querySelector('.js-form-btn-back');
    let tabLinks = document.querySelectorAll('.header__tabs-item');

    console.log(tabLinks)


    phoneInput && createMask();

    function createMask() {
        var elements = document.getElementsByClassName('js-phone-input');
        for (var i = 0; i < elements.length; i++) {
            new IMask(elements[i], {
                mask: '+7(000)-000 00 00',
            });
        }
    }

    btn && btn.addEventListener('click', (e) => {
        e.preventDefault();
        nameForm.classList.add('hide');
        passwordForm.classList.remove('hide');
    });

    btnBack && btnBack.addEventListener('click', (e) => {
        e.preventDefault();
        nameForm.classList.remove('hide');
        passwordForm.classList.add('hide');
    });


    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener('click', (e) => {
            e.preventDefault();
            let tabActive = document.querySelector('.active');
            tabLinks[i].classList.add('active');
            tabActive.classList.remove('active');
        });
    }


})