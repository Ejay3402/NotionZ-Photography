import {portfolioBackPics} from './images/portfolio';



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