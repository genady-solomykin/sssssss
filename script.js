
let mainWrpImg = document.querySelector('.main-wrapper__wrp-hover'),
    mainWrapperImage = document.querySelector('.main-wrapper__image img');

let k = 1;

let arrImages = [];

while(k < 7) {
    arrImages.push(k++);
}

let i = 1;

while(i < 7) {
    let createElm = document.createElement('div');
        createElm.id = i++;
        createElm.classList.add('main-wrapper__hover');
        mainWrpImg.appendChild(createElm);
    
    createElm.addEventListener('mouseover', e => {
        let event = e.target.id;
            mainWrapperImage.src = `img/${event}.jpg`;
    });

}

this.window.addEventListener('mouseout', e => {
    mainWrapperImage.src = 'img/main.jpg';
});






