//! Problem with reloading the page - page doesn't scroll back to the top on reload.



$("body a").on("click", function(e) {
    if(this.hash !== "") {
        e.preventDefault();

        const hash = this.hash;
        let duration;

        if(hash === "#start"  && window.pageYOffset < 400 || hash === "#top") {
            duration = 2500;
        } else {
            duration = 800;
        }

//the property "top" after offset is throwing an error, however without it the animate scroll breaks.
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, duration);
    }
})

// Variables
const leftTree = document.querySelector('#left-tree');
const rightTree = document.querySelector('#right-tree');
const woman = document.querySelector('#woman');

const mainNav = document.querySelector(".main-nav");
const navLink = document.querySelectorAll(".nav-link");




// Scroll Events
const rellax = new Rellax('.rellax');


window.addEventListener("scroll", () => {
    let scrolled = window.pageYOffset;
    
    leftTree.style.left = `-${scrolled * .7}px`;
    rightTree.style.right = `${(scrolled * .10) -100}px`;
    

    woman.style.top = `${scrolled}px`; 
    woman.style.left = `${(scrolled * 4)}px`;



    navLink.forEach(link => {
        (scrolled > 180) ? link.classList.add("active") : link.classList.remove("active");
        (scrolled > 180) ? mainNav.classList.add("active") : mainNav.classList.remove("active");
        (scrolled > 750) ? mainNav.style.boxShadow = "0 1px 5px rgba(100,100,100,0.4)" : mainNav.style.boxShadow = "0 0 0";
        (scrolled > 900) ? mainNav.classList.add("active2") : mainNav.classList.remove("active2");

    })

 
})

//form popup
const form = document.querySelector("#form")
const contact = document.querySelector("#contact");
const exitForm = document.querySelector(".exit-form");

contact.addEventListener("click", (e) => {
    e.preventDefault();
    form.classList.toggle("active");
    
})
exitForm.addEventListener("click", () => {
    form.classList.remove("active");
})


// form animation
const submitBtn = document.querySelector("#submitBtn");


submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
    submitBtn.classList.toggle("active");

    e.submit();

})

