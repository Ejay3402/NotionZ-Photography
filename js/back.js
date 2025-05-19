import {frontImg} from './images/fontImg.js';

const backPortfolioImages = document.getElementById(`back-portfolio-images`);

frontImg.sort(() => Math.round() - .5);
let backHtml = ``;

frontImg.forEach( img => {

    const under = img.under;

    if (under === 'front' ||under === 'back') {
       let val = `
        <div class="box-img" data-id="${img.id}">
          <img src="${img.image}" />
        </div>
    `;
    backHtml += val;
    }

});

backPortfolioImages.innerHTML = backHtml;


//portfolio show images
//This shows the image on the image click
const showPortfolioImage = document.getElementById('show-portfolio-image');
const showedImg = document.getElementById('showed-img');
const closeImage = document.getElementById('close-image');
const boxImg = document.querySelectorAll('.box-img');

boxImg.forEach(box => {
  box.addEventListener("click", () => {
    const boxID = parseInt(box.dataset.id);
    const match = frontImg.find(p => p.id === boxID);

    showPortfolioImage.classList.add('opened-img');

    if (match) {
      showedImg.innerHTML = `<img src="${match.image}" />`;
    } else
      showedImg.innerHTML = `No image found`;
    
  })
});

closeImage.addEventListener("click", () => {
  showPortfolioImage.classList.remove('opened-img');
})

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === "Escape") {
    showPortfolioImage.classList.remove('opened-img');
    
  }
})