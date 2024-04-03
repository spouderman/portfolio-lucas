

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.scroll-reveal');
hiddenElements.forEach((el) => observer.observe(el));

const typing = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const hiddenLetters = document.querySelectorAll('.fade_left');
hiddenLetters.forEach((el) => typing.observe(el));

const fade_bottom = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const Letters = document.querySelectorAll('.fade_bottom');
Letters.forEach((el) => fade_bottom.observe(el));


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".preloader_container").classList.add("loaded");
    }, 10)
  });
  