//header
const header = document.querySelector('header');
window.addEventListener("scroll", () => {
    header.classList.toggle('sticky', window.scrollY > 50)
});

//move-up

const move_up = document.querySelector('.move-up')

window.addEventListener("scroll", () => {
    move_up.classList.toggle("show", window.scrollY > 580)
});

//menu

const open_meun = document.querySelector('.open-meun');

const nav_list = document.querySelector('.nav-list');

open_meun.addEventListener("click", () => {

    nav_list.classList.toggle('open');
    open_meun.classList.toggle('fa-xmark');
    header.style.background= '#121212';
});

window.addEventListener("scroll", () => {

    nav_list.classList.remove('open');
    open_meun.classList.remove('fa-xmark');
    header.style.background= '#121212';
});
/* 
about read more */

const less_more = document.querySelector('.less-more');

const know_btn = document.querySelector('.know-more');

const know_more = document.querySelector('#know-more');

 
know_more.style.display = 'none';
know_btn.style.display = 'block';

know_btn.addEventListener("click", () => {
    know_more.style.display = 'block';
    less_more.style.display = 'block';
});

less_more.addEventListener("click", () => {
    know_more.style.display = 'none';
    less_more.style.display = 'none';
});


/*animation part*/

const tee = document.querySelector('.tee');

const teeText = `Tee-Stix`;

let count = 1;

const showTeeText = () => {
    tee.textContent = teeText.slice(0 , count);
    count++;
    if (count > teeText.length) {
        count = 1;   
    }
};

setInterval(showTeeText, 250);