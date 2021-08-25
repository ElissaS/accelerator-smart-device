const accordeon = document.querySelector('.site-structure--accordeon');

function accordeonHandler(evt) {
  const eventTarget = evt.target;
  if(!(eventTarget.classList.contains('site-structure__title'))) return;
  if (eventTarget.classList.contains('site-structure__title--accord-select')) {
    hideAll();
  } else {
    hideAll();
    eventTarget.classList.add('site-structure__title--accord-select');
    eventTarget.closest('.site-structure__block').classList.add('site-structure__block--active');
  }
}

function hideAll() {
  const titleElems = accordeon.querySelectorAll('.site-structure__title');
  Array.from(titleElems).forEach(elem => {
    elem.classList.remove('site-structure__title--accord-select');
    elem.closest('.site-structure__block').classList.remove('site-structure__block--active');
  });
}

accordeon.addEventListener('click', accordeonHandler);

const formSubmitButton = document.querySelector('.form__button');

formSubmitButton.onclick = function (evt) {
  evt.preventDefault();
}

const headerButton = document.querySelector('.page-header__button');
const modalWindow = document.querySelector('.modal');
const modalSubmitButton = document.querySelector('.modal__button');
const modalCloseButton = document.querySelector('.modal__button-cross');


const openModal = function (evt) {
  evt.preventDefault();
  modalWindow.classList.remove('modal--hidden');
}

headerButton.addEventListener('click', openModal);

if (modalWindow !== null) {
  modalWindow.onclick = function (evt) {
    if (evt.target === modalWindow) {
      modalWindow.classList.add('modal--hidden');
    }
  }

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      modalWindow.classList.add('modal--hidden');
    }
  })

  modalSubmitButton.onclick = function (evt) {
    evt.preventDefault();
    modalWindow.classList.add('modal--hidden');
  }

  modalCloseButton.onclick = function (evt) {
    modalWindow.classList.add('modal--hidden');
  }
}

const formButton = document.querySelector('.form__button');
const nameInput = document.querySelector('.form__input--name');
const phoneInput = document.querySelector('.form__input--phone');
const questionInput = document.querySelector('.form__input--textarea');
let isStorageSupport = true;
const storage = '';


const onButtonHandler = function() {
  if (isStorageSupport) {
    localStorage.setItem('userName', nameInput.value);
    localStorage.setItem('userPhone', phoneInput.value);
    localStorage.setItem('userQuestion', questionInput.value);
  }
};

try {
  storageName = localStorage.getItem('userName');
  storagePhone = localStorage.getItem('userPhone');
  storageQuestion = localStorage.getItem('userQuestion');
} catch (err) {
  isStorageSupport = false;
}

const localStorage = function() {
  if (storageName && storagePhone && storageQuestion) {
    nameInput.value = storageName;
    phoneInput.value = storagePhone;
    questionInput.value = storageQuestion;
  }
};

formButton.addEventListener('click', onButtonHandler);
