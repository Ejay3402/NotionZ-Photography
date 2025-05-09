//fetching images
import { frontImg } from './images/fontImg.js';
import { servicesText } from './images/service.js';
import { portfolioBackPics } from './images/portfolio.js';

//About me image changing 

const aboutMeImg = document.getElementById('aboutMeImg');

const aboutMeImgs = [
    'aboutme1.jpg',
    'aboutme2.jpg'
];

let aboutMeCount = 0;

setInterval(() => {
    aboutMeCount = (aboutMeCount + 1) % aboutMeImgs.length;
    aboutMeImg.src = `tee-stix-pics/${aboutMeImgs[aboutMeCount]}`;
}, 10500);

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

const know_btn = document.querySelector('.know-more');
const know_more = document.querySelector('#know-more');
 
know_more.style.display = 'none';

know_btn.addEventListener("click", () => {
    if (know_btn.innerHTML === 'Show more') {
        know_btn.innerHTML = 'Show less';
        know_more.style.display = 'block';
    } else {
        know_more.style.display = 'none';
        know_btn.innerHTML = 'Show more'
    }
});

/*animation part for h1 text*/

const tee = document.querySelector('.tee');

const teeText = `TEMITOPE`;

let count = 1;

const showTeeText = () => {
    tee.textContent = teeText.slice(0 , count);
    count++;
    count > teeText.length ? count = 1 : 0;
};

setInterval(showTeeText, 250);

//upload font imagge

const frontPortfolioImages = document.getElementById('portfolio-images');

let frontPortfolioImagesHtml = '';

frontImg.sort(() => Math.random() - .5);

frontImg.forEach( img => {

    if (img.under == `front`) {
        let imgVAl = `
        <div class="box-img"  data.img='${img.id}'>
          <img src="${img.image}" />
        </div>
    `;
    frontPortfolioImagesHtml += imgVAl;
    }
    
    
});

frontPortfolioImages.innerHTML = frontPortfolioImagesHtml;

//portfolio show images
//This shows the image on the image click
const showPortfolioImage = document.getElementById('show-portfolio-image');
const showedImg = document.getElementById('showed-img');
const closeImage = document.getElementById('close-image');
const boxImg = document.querySelectorAll('.box-img');

boxImg.forEach( (box , i) => {
    box.addEventListener("click", () => {
        const boxID = frontImg[i].id;
        const boxUnder = frontImg[i].under;
        showPortfolioImage.classList.add('opened-img');
        
        frontImg.forEach(i => {

            if (boxUnder === `front`) {
                if (boxID === i.id) {
                    showedImg.innerHTML = `<img src="${i.image}" />`;    
                }   
            }

        });
    });
});

closeImage.addEventListener("click", () => {
    showPortfolioImage.classList.remove('opened-img');
})

//upating the services te

const servicesTextID = document.getElementById('servicesText');
servicesText.sort(() => Math.random() - .5);
let serviceHtml = ``;

servicesText.forEach( i => {
    let serviceVal = `
        <div class="box boxid">
          <h3>${i.serviceName}</h3>
          <p>${i.serviceContect}</p>
          <div class="Show-details">
            <a class="Show-details">Show details --</a>
          </div>
        </div>
    `;

    serviceHtml += serviceVal;
});
servicesTextID.innerHTML = serviceHtml;
//service features box show details

const ShowDetails = document.querySelectorAll('.Show-details');
const showDetailsSsevice = document.getElementById('show-details-sevice');
const closeShowDetails = document.getElementById('close-show-details');
const openDetails = document.getElementById('open-details');

ShowDetails.forEach( (show , i) => show.addEventListener( "click", () => {

    const service = servicesText[i].serviceName;
    const images = frontImg.filter(f => f.type === service.serviceName);
    images.forEach( e => {
        console.log(e.image);    
    })
    
    console.log(service);
    
    const showname = frontImg[i].type;

    showDetailsSsevice.style.display = 'block';
    
}));

closeShowDetails.addEventListener('click', () => showDetailsSsevice.style.display = 'none');




