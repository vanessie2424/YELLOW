const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');


    burger.addEventListener('click', ()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

         //Burger animation
        burger.classList.toggle('toggle');
    })

   
}

navSlide();

// toggle menu for login and register
const LoginForm = document.getElementById('LoginForm');
const RegForm = document.getElementById('RegForm');
const Indicator = document.getElementById('indicator');

function register() {
    RegForm.style.transform = 'translateX(0px)';
    LoginForm.style.transform = 'translateX(0px)';
    Indicator.style.transform = 'translateX(100px)';
}

function login() {
    RegForm.style.transform = 'translateX(300px)';
    LoginForm.style.transform = 'translateX(300px)';
    Indicator.style.transform = 'translateX(0px)';
}


