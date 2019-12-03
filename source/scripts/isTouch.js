(() => {
  const className = 'is-touch';

  if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
    document.querySelector('body').classList.add(className);
    window.isTouch = true;
  } else {
    document.querySelector('body').classList.remove(className);
    window.isTouch = false;
  }
})();
