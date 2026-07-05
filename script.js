function toggleLike(button){

    if(button.innerHTML === "♡"){

        button.innerHTML = "♥";
        button.style.color = "red";

    }else{

        button.innerHTML = "♡";
        button.style.color = "#777";

    }

}


const mobileMenu = document.getElementById("mobile-menu");

const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});



const dropdowns = document.querySelectorAll(".dropdown-toggle");

dropdowns.forEach(function(item){

    item.addEventListener("click", function(e){

        if(window.innerWidth <= 768){

            e.preventDefault();

            this.nextElementSibling.classList.toggle("show");

        }

    });

});