// Navigation Links 
const underLine = document.querySelectorAll('.link');
console.log(underLine)
function addLine(){
 underLine.forEach(l => l.classList.remove('lineToLink'))
 this.classList.add('lineToLink')
}
underLine.forEach(l => l.addEventListener('click',addLine))
// click buttons to move the menus
const signUpBtn = document.getElementById('sign_UpButton');
const signInBtn = document.getElementById('sign_InButton');
console.log(signInBtn)
console.log(signUpBtn)
const signUpLink = document.getElementById('signUp_link');
const signInLink = document.getElementById('singIn_link');
const formsWrapper = document.querySelector('.moveMenus');
function signUpMenu(){
    formsWrapper.style.transform='translateX(-409px)'
}
function loginMenu(){
    formsWrapper.style.transform='translateX(0px)'
}
signUpBtn.addEventListener('click',signUpMenu);
signInBtn.addEventListener('click',loginMenu);
// click links to move the menus
signUpLink.addEventListener('click',signUpMenu);
signInLink.addEventListener('click',loginMenu);

