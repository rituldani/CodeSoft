const wrapper =document.querySelector('.wrapper');
const registerLink =document.querySelector('.register-link');
const loginLink =document.querySelector('.login-link');
const btnLogin =document.querySelector('.btn-login');
    const iconClose =document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})

btnLogin.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})

