
//declare header nav and menu nav
const mainNav = document.getElementById('main-nav').getBoundingClientRect();
const menuNav = document.getElementById('menu-nav').getBoundingClientRect();

let lastScrollPosition = mainNav.bottom;





document.addEventListener("scroll", function(){
    lastScrollPosition = window.scrollY;
    if (menuNav.top <= lastScrollPosition){
        document.getElementById('menu-nav').classList.add('sticky')
        document.getElementById('menu-title').classList.add('sticky');
    }
    else {
        document.getElementById('menu-nav').classList.remove('sticky');
        document.getElementById('menu-title').classList.remove('sticky');
    }
});
/*
window.onscroll = function(){
    if (menuNav.getBoundingClientRect().top >= 300){
        menuNav.style.position = fixed;
        console.log('it should have worked');
    }
}*/