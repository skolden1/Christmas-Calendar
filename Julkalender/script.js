let card = document.querySelectorAll('.card');
let wrapper = document.querySelector('.wrapper');


//lista för olika färgteman

let themes = [
  'rgb(170, 118, 118)',
  'rgb(174, 174, 226)',
  'rgb(255, 255, 232)',
  'rgba(189, 159, 79, 0.993)'
];


for (let i = 0; i < card.length; i++){
card[i].addEventListener('click', function(e){

  if(e.target.tagName === 'IMG') {
    let frontCard = this.querySelector('.front-card');
    let backCard = this.querySelector('.back-card');
    let img = this.querySelector('img');
    let para = this.querySelector('p');
    let imgAlt = img.getAttribute('alt');

    if (!para.innerText.includes(imgAlt)) {
      para.innerText = `${imgAlt}. ${para.innerText}`
    }
    frontCard.style.display = 'none';
    backCard.style.display = 'block';
  }
});
}
    let backCard = document.querySelectorAll('.back-card');
    let frontCard = document.querySelectorAll('.front-card');
    let resetBtn = document.querySelector('.reset-Btn');   
    resetBtn.addEventListener('click', function(){
      for(let i = 0; i < card.length; i++){

        frontCard[i].style.display = 'block';
        backCard[i].style.display = 'none';
      }
    });
  
    
    let btnTheme = document.querySelector('.btn-theme');
    let currentThemeIndex = 0;

    btnTheme.addEventListener('click', function(){
        wrapper.style.backgroundColor = themes[currentThemeIndex];
      
        currentThemeIndex += 1;

        if(currentThemeIndex >= themes.length){
          currentThemeIndex = 0;
        }
        wrapper.style.backgroundColor = themes[currentThemeIndex]
    });

