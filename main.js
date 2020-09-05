// Variables

const leftTree = document.querySelector('#left-tree');
const rightTree = document.querySelector('#right-tree');
const woman = document.querySelector('#woman');

const mainNav = document.querySelector(".main-nav");
const navLink = document.querySelectorAll(".nav-link");



// Scroll Events

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
    })

 
})