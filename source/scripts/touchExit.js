export default function touchExit(element, callback) {
  document.addEventListener('click', ({ target }) => {
    if (element.contains(target) === false) callback();
  });
}
