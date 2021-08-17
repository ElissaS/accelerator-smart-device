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
