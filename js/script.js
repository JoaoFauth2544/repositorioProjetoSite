document.addEventListener("DomContentLoaded",()=>{
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");

    menuResponsivo.addEventListener("click",()=>{
        navMenu.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link)=>{ 
        link.addEventListener("click", () =>{ 
            navMenu.classList.remove("active");
        });
    });
    
}); //fechamento do evento carregar página html
