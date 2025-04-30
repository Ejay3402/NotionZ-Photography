//fetching images
import { frontImg } from './images/fontImg.js';
import { servicesText, moreService } from './images/service.js';
import { portfolioBackPics } from './images/portfolio.js';



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
    
    let imgVAl = `
        <div class="box-img"  data.img='${img.id}'>
          <img src="${img.image}" />
        </div>
    `;
    frontPortfolioImagesHtml += imgVAl;
    
});

frontPortfolioImages.innerHTML = frontPortfolioImagesHtml;

//portfolio show images

const showPortfolioImage = document.getElementById('show-portfolio-image');
const showedImg = document.getElementById('showed-img');
const closeImage = document.getElementById('close-image');
const boxImg = document.querySelectorAll('.box-img');



boxImg.forEach( (box , i) => {
    /*  let data = box.dataset.img;
    console.log(data); */
    box.addEventListener("click", () => {
        const boxID = frontImg[i].id;
        showPortfolioImage.classList.add('opened-img');
        
        frontImg.forEach(i => {
            
            if (boxID == i.id) {
                showedImg.innerHTML = `<img src="${i.image}" />`;    
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
        <div class="box boxid serviceBox">
          <h3>${i.serviceName}</h3>
          <p>${i.serviceContect}</p>
          <div class="Show-details">
            <button id="Show-details">Show details</button>
          </div>
        </div>
    `;

    serviceHtml += serviceVal;
});
servicesTextID.innerHTML = serviceHtml;
//service features box service-expend

const serviceExpend = document.getElementById("service-expend");
const serviceBox = document.querySelectorAll(".serviceBox");

serviceBox.forEach( (card, i) => card.addEventListener("click", () => {
    let valHtnl = ``;
    servicesText.forEach( a => {
        moreService.forEach( b => {
            if (a.serviceName === b.moreServiceNname) {
                let val = `
                    <div>
                        <h3>${b.moreServiceContent}</h3>
                    </div>
                `;
                val += valHtnl;
                 
                
            }
        })
    })
    serviceExpend.innerHTML = valHtnl;
    
}));


//back-portfolio-images
const backPortfolioImages = document.getElementById('back-portfolio-images');
let backPicsHtml = ``;

portfolioBackPics.forEach( (img, i) => {
    let val = `
                <div class="box-img">
          <img src="${img.image}" />
        </div>
    `;
    backPicsHtml += val;
    console.log(img);
    
});
backPortfolioImages.innerHTML = backPicsHtml;
backPortfolioImages.innerHTML = 'eooerkfo';



