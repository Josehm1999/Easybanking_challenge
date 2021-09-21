const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const FadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        FadeElems.forEach(element => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        body.classList.remove('noscroll');
    }else {
        header.classList.add('open');
        FadeElems.forEach(element => {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
        body.classList.add('noscroll');
    }
})