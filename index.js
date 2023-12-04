const refs = {
  body: document.body,
  openBuyModalBtn: document.querySelector('.buy-button'),
  closeBuyModalBtn: document.querySelector('.close-modal-window'),
  modal: document.querySelector('[data-modal]'),
  modalTitle: document.querySelector('[data-modal] .modal-title'),
  detailsButtons: document.querySelectorAll('.details-btn'),
};

let scrollPosition = 0;

refs.closeBuyModalBtn.addEventListener('click', toggleModal);

refs.detailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalTite = button.nextSibling.parentElement.querySelector('p');
    refs.modalTitle.textContent = modalTite.textContent;

    scrollPosition = window.scrollY || document.documentElement.scrollTop;

    toggleModal();
  });
});

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('modal-open');

  if (!refs.body.classList.contains('modal-open')) {
    window.scrollTo(0, scrollPosition);
  }
}

console.log(refs.body);
