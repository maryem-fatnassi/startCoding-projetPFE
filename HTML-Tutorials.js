// Navbar Container..
  // show tutorials menu in large screen..
  const arrowDown_icon = document.getElementById('arrowDown_icon');
  const tutorials_select = document.getElementById('tutorials-menu');
  function selectedIcon(){
    tutorials_select.classList.toggle('active');
    arrowDown_icon.classList.toggle('rotate');
  }
  // show tutorials menu in small screen..
  const arrowDownIcon = document.getElementById('arrow-icon');
  const tutorialsMenu = document.getElementById('collapse');
  function selectedDropDownIcon(){
    tutorialsMenu.classList.toggle('activeMenu');
    arrowDownIcon.classList.toggle('rotateIcon');
  }
 // show sideBar menu in small screen..
 const sideBar = document.getElementById('side-navbar');
 function selectedBars(){
    sideBar.classList.toggle('show-sidebar');
  }
// End Of Navbar..

// Main Container..
  // Using Swiper in HTML tutorials 
    // * Poular Channels *
    const swiperOne = new Swiper('.swiper-one',{
      loop: true,
      slidesPerView : 4,
      spaceBetween : 20,
      navigation:{
        nextEl: '.button-next-one',
        prevEl:'.button-prev-one',
      }
    });   
    // * Long Tutorials *
    const swiperTwo = new Swiper('.swiper-two',{
      loop: true,
      slidesPerView : 4,
      spaceBetween : 20,
      navigation:{
        nextEl: '.button-next-two',
        prevEl:'.button-prev-two',
      }
    });   
    // * Playlist *
    const swiperThree = new Swiper('.swiper-three',{
      loop: true,
      slidesPerView : 4,
      spaceBetween : 20,
      navigation:{
        nextEl: '.button-next-three',
        prevEl:'.button-prev-three',
      }
    });   
  
  // Use YT Data API in the sliders
    