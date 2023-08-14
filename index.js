const navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function sticky_navbar(){
    if(window.pageYOffset>=sticky){
        navbar.classList.add("sticky");
    }
    else{ 
        navbar.classList.remove("sticky");
}
}
window.onscroll= function(){sticky_navbar()};

