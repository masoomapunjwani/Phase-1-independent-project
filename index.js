document.addEventListener('DOMContentLoaded', () => {
document.querySelector('.intro__btn').addEventListener('click', () => {
    alert("This is my contact");
});

const name = document.querySelector('.header__logo');
name.addEventListener('click', function() {
    name.textContent = "Hi, Welcome";
})

window.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
       alert("Enter was pressed!");
     }
 });
 

fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
.then((response) => response.json())
.then((data) => {
    console.log(data.author);
    const mentor = document.createElement('p');
    mentor.textContent = data.author;
    const para = document.createElement('p');
    para.textContent = data.en;
    const adding = document.querySelector('.intro__position');
    adding.appendChild(mentor);
    adding.appendChild(para);

})

const like = document.querySelector('.like-glyph');
like.addEventListener('click', function() {
    alert("You, have liked!");
})

})
