const elForm = document.querySelector(".explore__form")
const btn = document.querySelector(".explore__btn")

elForm.addEventListener("submit", (e)=>{
    e.preventDefault()
})

function myFunction() {
    // Declare variables
    let input, filter, ul, li, a, i, txtValue;
    input = document.querySelector('.explore__search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("explore__list");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
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


setInterval(()=>{
    myFunction()
},400)


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
  

  // slider////////////////////////////////////

const leftBtn = document.querySelector(
    ".our__left"
  );
  
  const rightBtn = document.querySelector(
    ".our__right"
  );
  const sliderItems = document.querySelector(".our__list");
  const slider = document.querySelector(".our__item");
  const arr = Array.from(sliderItems);
  let num = arr.length
  function setTransform() {
    arr.forEach((item, index) => {
      console.log(item)
      item.style.left = `${index * 28}%`;
    });
  }
  setTransform();
  let counter = 0;
  function slidesFunc() {
    arr.forEach((item) => {
      item.style.transform = translateX(`-${counter * 100}%`);
    });
  }
  
  leftBtn.onclick = function () {
    counter > 0 ? (counter -= 1) : counter;
    if (counter >= 0) {
      slidesFunc();
    }
  };
  rightBtn.onclick = function () {
    counter++;
    if (counter < num) {
      slidesFunc();
    } else {
      counter = num - 1;
    }
  };