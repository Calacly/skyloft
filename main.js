//! Problem with reloading the page - page doesn't scroll back to the top on reload.

$("body a").on("click", function(e) {
    if(this.hash !== "") {
        e.preventDefault();

        const hash = this.hash;
        let duration;

        if(hash === "#start" || hash === "#top") {
            duration = 2500;
        } else {
            duration = 800;
        }


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



window.addEventListener("scroll", () => {
    let scrolled = window.pageYOffset;
    
    leftTree.style.left = `-${scrolled * .7}px`;
    rightTree.style.right = `${(scrolled * .10) -100}px`;
    
    // if(scrolled > 170) {
    //         let treeHeight = leftTree.offsetHeight;
            
    //         // console.log(treeHeight + (Math.ceil(scrolled / 100)));

    //         leftTree.style.height = `${treeHeight + (Math.ceil(scrolled / 100))}px`;
    //         console.log(treeHeight);
    // } else {
    //     leftTree.style.height = "100%";
    // }
   

    woman.style.top = `${scrolled}px`; 
    woman.style.left = `${(scrolled * 4)}px`;



    navLink.forEach(link => {
        (scrolled > 180) ? link.classList.add("active") : link.classList.remove("active");
        (scrolled > 180) ? mainNav.classList.add("active") : mainNav.classList.remove("active");
        (scrolled > 750) ? mainNav.style.boxShadow = "0 1px 5px rgba(100,100,100,0.4)" : mainNav.style.boxShadow = "0 0 0";
    })

 
})

