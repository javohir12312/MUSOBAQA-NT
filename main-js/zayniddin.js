function findElement(element) {
  return document.querySelector(element);
}
const toggle = findElement(".header__navbar-toggle");
const modalMenu = findElement(".modal-menu");
const modalClose = findElement(".modal-menu__close");
toggle.onclick = function () {
    modalMenu.classList.remove("modal-inactive")
  modalMenu.classList.add("modal-active");
};
modalClose.onclick = function () {
  modalMenu.classList.remove("modal-active");
  modalMenu.classList.add("modal-inactive");
};
