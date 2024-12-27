// Navbar Container..
  // show & hide tutorials menu
    const arrowDown_icon = document.getElementById('arrowDown_icon');
    const tutorials_select = document.getElementById('tutorials-menu');
    function selectedIcon(){
      tutorials_select.classList.toggle('active');
      arrowDown_icon.classList.toggle('rotate');
    }
  // Navigate to the 'contact' section within the same page using the ID..
  function navigateToContact(){
  window.location.href = "#footer";
  }
  const contact = document.getElementById('contact');
  const footer = contact.addEventListener('click',navigateToContact);  
// Main Container..    
// Use swiper JS (library) to make project Cards
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});