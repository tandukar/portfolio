var lastScrollTop;
navbar = document.getElementById('nav-container');
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-80px';
        document.getElementById("nav-container").style.backgroundColor = "transparent";
        document.getElementById("nav-container").style.position = "fixed";

    } else {
        navbar.style.top = '0';
        document.getElementById("nav-container").style.backgroundColor = "black";


    }
    lastScrollTop = scrollTop;
    if (scrollTop == 0) {
        document.getElementById("nav-container").style.backgroundColor = "transparent";

    }

});

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("nav-container").style.top = "0";
//         document.getElementById("nav-container").style.backgroundColor = "";
//     } else {
//         document.getElementById("nav-container").style.backgroundColor = "black";
//     }
//     prevScrollpos = currentScrollPos;
// }