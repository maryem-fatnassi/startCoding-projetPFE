// Navigation Links 
const underLine = document.querySelectorAll('.link');
console.log(underLine)
function addLine(){
 underLine.forEach(l => l.classList.remove('lineToLink'))
 this.classList.add('lineToLink')
}
underLine.forEach(l => l.addEventListener('click',addLine))
// click buttons to move the menus
const signUpBtn = document.getElementById('sign_Up')
const signInBtn = document.getElementById('sign_In')
const signUpLink = document.getElementById('signUp_link')
const signInLink = document.getElementById('singIn_link')
const formsWrapper = document.querySelector('.moveMenus')
function translateMenu(){
    formsWrapper.style.transform='translateX(-409px)' 
}
function login(){
    formsWrapper.style.transform='translateX(0px)'
}
signUpBtn.addEventListener('click',translateMenu)
signInBtn.addEventListener('click',login)
// click links to move the menus
signUpLink.addEventListener('click',translateMenu)
signInLink.addEventListener('click',login)

