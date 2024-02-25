/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function createButton(text) {
  const btn = document.createElement('button')
  btn.classList.add('btn-nav');
  btn.textContent = text;

  return btn;
}

function createHeader() {
  const header = document.createElement('header');
  
  const nav = document.createElement('nav');
  header.appendChild(nav);

  const homeBtn = createButton('Home');
  homeBtn.classList.add('active');
  nav.appendChild(homeBtn);

  const menuBtn = createButton('Menu');
  nav.appendChild(menuBtn);

  const contactBtn = createButton('Contact');
  nav.appendChild(contactBtn);

  return header;
}

function init() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
}

init();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih0ZXh0KSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tbmF2Jyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICBjb25zdCBob21lQnRuID0gY3JlYXRlQnV0dG9uKCdIb21lJyk7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIG5hdi5hcHBlbmRDaGlsZChob21lQnRuKTtcblxuICBjb25zdCBtZW51QnRuID0gY3JlYXRlQnV0dG9uKCdNZW51Jyk7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxuICBjb25zdCBjb250YWN0QnRuID0gY3JlYXRlQnV0dG9uKCdDb250YWN0Jyk7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbn1cblxuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==