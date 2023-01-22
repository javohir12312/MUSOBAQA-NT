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
