'use strict';

const showModal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const closeWindow = function () {
  showModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openWindow = function () {
  showModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openWindow);
  btnCloseModal.addEventListener('click', closeWindow);
  overlay.addEventListener('click', closeWindow);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !showModal.classList.contains('.hidden')) {
    closeWindow();
  }
});
