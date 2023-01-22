const elForm = document.querySelector(".explore__form")
const btn = document.querySelector(".explore__btn")
const body = document.querySelector("#body")

elForm.addEventListener("submit", (e) => {
  e.preventDefault()
})

function myFunction() {

  let input, filter, ul, li, a, i, txtValue;
  input = document.querySelector('.explore__search');
  filter = input.value.toUpperCase();
  ul = document.getElementById("explore__list");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("p")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


setInterval(() => {
  myFunction()
}, 400)


function findElement(element) {
  return document.querySelector(element);
}
const toggle = findElement(".header__navbar-toggle");
const modalMenu = findElement(".modal-menu");
const modalClose = findElement(".modal-menu__close");
toggle.onclick = function () {
  modalMenu.classList.remove("modal-inactive")
  modalMenu.classList.add("modal-active");
  body.classList.add("active")

};
modalClose.onclick = function () {
  modalMenu.classList.remove("modal-active");
  modalMenu.classList.add("modal-inactive");
  body.classList.remove("active")

};

const leftBtn = document.querySelector(
  ".popular-products__pagination-nav-btn-left"
);

const rightBtn = document.querySelector(
  ".popular-products__pagination-nav-btn-right"
);
const sliderItems = document.querySelectorAll(".popular-products__cards-card");
const slider = document.querySelector(".popular-products__cards");
const lineCont = document.querySelector(".popular-products__pagination-line");
let res = null;
let result = null;
const arr = Array.from(sliderItems);
let num = arr.length;
function setTransform() {
  arr.forEach((item, index) => {
    let width = getComputedStyle(item);
    let width2 = getComputedStyle(lineCont);
    let number = getWidth(width.width, width2.width);
    number += 20;
    item.style.left = `${index * number}px`;
  });
}
setTransform();
let counter = 0;
function slidesFunc() {
  arr.forEach((item) => {
    item.style.transform = `translateX(-${counter * 100}%)`;
  });
}

leftBtn.onclick = function () {
  counter > 0 ? (counter -= 1) : counter;
  if (counter >= 0) {
    slidesFunc();
  }
  sliderPaginationFunc(counter);
};
rightBtn.onclick = function () {
  counter++;
  if (counter < num) {
    slidesFunc();
  } else {
    counter = num - 1;
  }
  sliderPaginationFunc(counter);
};

function getWidth(style, style2) {
  let width = style.split("");
  let number = [];
  for (let i = 0; i < width.length; i++) {
    if (!isNaN(width[i])) {
      number.push(+width[i]);
    }
    if (width[i] === ".") {
      break;
    }
  }
  let width2 = style2.split("");
  let number2 = [];
  for (let i = 0; i < width2.length; i++) {
    if (!isNaN(width2[i])) {
      number2.push(+width2[i]);
    }
    if (width2[i] === ".") {
      break;
    }
  }
  res = number2.join("");
  result = +res;
  result += 20;
  return +number.join("");
}

lineCont.children[0].style.maxWidth = `${result / 8}px`;

function sliderPaginationFunc(counter = 0) {
  lineCont.children[0].style.transform = `translateX(${counter * 100}%)`;
}

const sliderItems1 = document.querySelectorAll(
  ".testimon__inner-slider-right-block"
);
let node = Array.from(sliderItems1);
console.log(node)
let number = 0;
let length = node.length;
const btn1 = document.querySelector(".testimon__inner-slider-extra-btns-1");

const btn2 = document.querySelector(".testimon__inner-slider-extra-btns-2");

function setWidth() {
  node.forEach((item, index) => {
    item.style.left = `${index * 100}%`;
  });
}
setWidth()

btn1.onclick = function () {
  number > 0 ? (number -= 1) : number;
  if (number >= 0) {
    slidesFunc1();
  }
};
btn2.onclick = function () {
  number++;
  if (number < length) {
    slidesFunc1();
  } else {
    number = length - 1;
  }
};

function slidesFunc1() {
  node.forEach((item) => {
    item.style.transform = `translateX(-${number * 100}%)`;
  });
}

const modaltn = document.querySelector(".modal__btn");
const modal = document.querySelector(".modal")
const close = document.querySelector(".btn__modal__close")
const form = document.querySelector(".modal__form")


modaltn.addEventListener("click", () =>{
  modal.style.top = "20%"
})

close.addEventListener("click", () => {
  modal.style.top = "-100%"
})