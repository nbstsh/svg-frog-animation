import '../styles/main.scss';

/* css custom variable names */
const CSS_VAR_FROG_HEIGHT = '--frog-height';
const CSS_VAR_DISTANCE_RATE = '--distance-rate';
const CSS_VAR_ANIMATION_DURATION_VALUE = '--animation-duration-value';
const CSS_VAR_BOTTOM_DISTANCE = '--bottom-distance';

const boxEl = document.querySelector('.frog-box');
const animationDuration = getComputedStyle(boxEl).getPropertyValue(CSS_VAR_ANIMATION_DURATION_VALUE);
const height = getComputedStyle(boxEl).getPropertyValue(CSS_VAR_FROG_HEIGHT);
const distanceRate = getComputedStyle(boxEl).getPropertyValue(CSS_VAR_DISTANCE_RATE);
const distance = Number(height) * Number(distanceRate);

const moveUpBox = (function() {
  let bottomDistatnce = 0;
  return () => {
    bottomDistatnce += distance;
    boxEl.style.setProperty(CSS_VAR_BOTTOM_DISTANCE, `${bottomDistatnce}rem`);
  }
})();

setInterval(moveUpBox, animationDuration);

// TODO: カクツキが出てるから対処すること