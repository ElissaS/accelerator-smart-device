const headerButton = document.querySelector(".page-header__button");
const modalWindow = document.querySelector(".modal");
const modalSubmitButton = document.querySelector(".modal__button");
const modalCloseButton = document.querySelector(".modal__button-cross");


const openModal = function () {
  modalWindow.classList.remove("modal--hidden");
}

headerButton.addEventListener('click', openModal);

if (modalWindow !== null) {
  modalWindow.onclick = function (evt) {
    if (evt.target === modalWindow) {
      modalWindow.classList.add("modal--hidden");
    }
  }

  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      modalWindow.classList.add("modal--hidden");
    }
  })

  modalSubmitButton.onclick = function (evt) {
    evt.preventDefault();
    modalWindow.classList.add("modal--hidden");
  }

  modalCloseButton.onclick = function (evt) {
    modalWindow.classList.add("modal--hidden");
  }
}
