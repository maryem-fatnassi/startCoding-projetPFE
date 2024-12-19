import {fetchPlaylistsData} from './YT Data API.js';
import { fetchLongTutorialsData } from './YT Data API.js';
import { fetchTipsTricksData } from './YT Data API.js';
import { selectedIcon } from './YT Data API.js';
// Navbar Container..
  // Click arrow-Down icon to show and hide menu :
const arrowDown_icon = document.getElementById('arrowDown_icon');
arrowDown_icon.addEventListener('click',selectedIcon);

// Main Container..
  // Using Swiper in HTML tutorials :
    // * Playlists *
    const swiperOne = new Swiper(
        '.swiper-one',{
          loop: true,
          slidesPerView : 3,
          spaceBetween : 70,
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
        spaceBetween : 70,
        navigation:{
          nextEl: '.button-next-two',
          prevEl:'.button-prev-two',
        }
      });   
       // * Tips & Tricks *
       const swiperThree = new Swiper('.swiper-three',{
        loop: true,
        slidesPerView : 3,
        spaceBetween : 70,
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
       'I_AUK0Z6D68',
       'Qhaz36TZG5Y',
       '44FTAS-qT8Q',
       'PL3Odw-k8W4',
       '2KWdT4PKXgY',
       'CxC925yUxSI'
      ];
    fetchTipsTricksData(tipsTricksVideosIds);  
   