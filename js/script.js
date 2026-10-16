document.addEventListener("DOMContentLoaded", ()=>{
    const menuResponsivo = document.getElementById("nav-menu");
    menuResponsivo.addEventListener("click", ()=>{
        navMenu.classList.toggle("active")
    })
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(( link )=>{
        link.addEventListener("click", () =>{
            navMenu.classList.remove("active");
        });
    });

    //estrutura carrossel
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBth = document.getElementById("nextBth");
    let slideAtual = 0;
    let slideIntervalo;

    function showSlide(index){
        slides.forEach ((slide) =>
        slide.classList.remove("active"));
        dots.forEach((dot) => 
        dot.classList.remove("active"));

        slideAtual = (index + slides.length) % slides.length;

        slides[slideAtual].classList.add("active");
        dots[slideAtual].classList.add("active");
    }
    function nextSlide(){
        showSlide(slideAtual + 1)
    }
    function prevSlide(){
        showSlide(slideAtual - 1)
    }
    function starSlide(){
        slideIntervalo = setInterval(nextSlide,5000)
    }
    function stopSlide(){
        clearInterval(slideIntervalo);
    }
    nextBtn.addEventListener("click", ()=>{
        nextSlide();
        stopSlide();
        starSlide();
    });
    prevBtn.addEventListener("click", ()=>{
        prevSlide();
        stopSlide();
        starSlide();
    });

    dots.forEach((dot) =>{
        FontFace.addEventListener("click", (e) =>{ const index = parseInt(e.target.getAttribute("data-index"));
            showSlide(index);
            stopSlide();
            startSlide();
        });
    });

    //iniciar os slides de forma automatica
    starSlide();
    //validar campos formularios
    const contatoForm = document.getElementById("contatoForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    contatoForm.addEventListener("submit", (event) =>{
        event.preventDefault();

        let isValid = true;

        //Validação do campo nome (mínimo 3 caracteres)

        if(name.value.trim().length < 3)
        {
            showErro(name,"O nome deve ter no mínimo 3 caracteres");
            isValid = false;
        }

        //Verificar campo do email é valido

        if(!isEmailValid(email.value.trim()))
        {
            showErro(email,"Insira um email válido");
            isValid = false;
        }

        //Verificar campo mensagem é valido

        if(mensagem.Value.trim().length <10)
        {
            showErro(mensagem,"A mensagem deve ter no mínimo 10 caracteres");
            isValid = false;
        }

        //Verficar se ocorreu tudo certo

        if(isValid)
        {
            clearError();
            alert("Mensagem enviada com sucesso");
            contatoForm.reset();
        }
    });

        function isEmailValid(email)
        {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

    function showErro(inputElement, mensagem)
        {
            const formGroup = inputElement.parentElement;
            clearFieldError(inputElement);
            const erroMensagem = document.createElement("small");
            erroMensagem.className = "erro-text";
            erroMensagem.innerText = mensagem;
        }

}); //fechamento do evento carrregar página html