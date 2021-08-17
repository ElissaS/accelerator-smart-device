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
