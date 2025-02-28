import {fetchPlaylistsData} from './YT Data API.js';
import { fetchLongTutorialsData } from './YT Data API.js';
import { fetchTipsTricksData } from './YT Data API.js';
import { selectedIcon } from './YT Data API.js';
// Navbar Container..
  // Click arrow-Down icon to show and hide menu :
   const arrowDown_icon = document.getElementById('arrowDown_icon');
   arrowDown_icon.addEventListener('click',selectedIcon);
  // Navigate to the 'contact' section within the same page using the ID..
   function navigateToContact(){
   window.location.href = "#footer";
   }
   const contact = document.getElementById('contact');
  const footer = contact.addEventListener('click',navigateToContact);
// Main Container..
  // Using Swiper in CSS tutorials :
    // * Playlists *
    const swiperOne = new Swiper(
        '.swiper-one',{
          loop: true,
          slidesPerView : 3,
          spaceBetween : 80,
          navigation:{
            nextEl: '.button-next-one',
            prevEl:'.button-prev-one',
          }
        } 
      );
      // * Long Tutorials *
      const swiperTwo = new Swiper('.swiper-two',{
        loop: true,
        slidesPerView : 3,
        spaceBetween : 80,
        navigation:{
          nextEl: '.button-next-two',
          prevEl:'.button-prev-two',
        }
      });   
       // * Tips & Tricks *
       const swiperThree = new Swiper('.swiper-three',{
        loop: true,
        slidesPerView : 3,
        spaceBetween : 80,
        navigation:{
          nextEl: '.button-next-three',
          prevEl:'.button-prev-three',
        }
      }); 
 // Use YT Data API in sliders.. 
    //** Use YT Data API to create playlists slider **
      const playlistsIds=[
        'PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit',
        'PL7TLF4T4Tq2RCWa-ZRkEWXVtXteyZ2CjK',
        'PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C',
        'PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT',
        'PLdE8ESr9Th_vdJ6wbXrZh6Ppra7IOf8fF',
      ]
      fetchPlaylistsData(playlistsIds);
      
    //** Use YT Data API to create long tutorials slider **
       const videoIds =[
        'yfoY53QXEnl',
        'pQN-pnXPaVg',
        'n4R2E7O-Ngo',
        '1Rs2ND1ryYc',
        'LCEgHntqBps',
        'OXGznpKZ_sA',
       ];
      fetchLongTutorialsData(videoIds);

    //** Use YT Data API to create Tips & Tricks slider **
     const tipsTricksVideosIds =[
       'Qhaz36TZG5Y',
       '44FTAS-qT8Q',
       'PL3Odw-k8W4',
       'CxC925yUxSI'
      ];
    fetchTipsTricksData(tipsTricksVideosIds);  
   