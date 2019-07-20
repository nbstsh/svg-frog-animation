const boxEl = document.querySelector('#frog-box');
const animationInterval = 8000;

let marginBottom = 0;
let distance = 1;

const moveUpBox = () => {
  marginBottom += distance;
  boxEl.style.marginBottom = `${marginBottom}rem`;
}

setInterval(moveUpBox, animationInterval);