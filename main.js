const leftTree = document.querySelector('#left-tree');
const rightTree = document.querySelector('#right-tree');
const woman = document.querySelector('#woman');
const hero = document.querySelector('#hero');
const angeboteSection = document.querySelector('#angeboteSection');

window.addEventListener("scroll", () => {
    let scrolled = window.pageYOffset;
    let intViewportWidth = window.innerWidth;
    console.log(scrolled)
    
    leftTree.style.left = `-${scrolled * .7}px`;
    rightTree.style.right = `${(scrolled * .10) -100}px`;
   
    
    

    

    woman.style.top = `${scrolled}px`; 
    woman.style.left = `${(scrolled * 4)}px`;
})