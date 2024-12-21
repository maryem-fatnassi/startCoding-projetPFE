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
    const playlistsIds =[
     'PL0Zuz27SZ-6OlAwitnFUubtE93DO-l0vu',
     'PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB',
     'PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s',
     'PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc',
     'PLZPZq0r_RZOPoNttk9beDhO_Bu5DA-xwP',
     'PL7TLF4T4Tq2RNvYzF45yOeFi-O1KRAWtu'
    ];

    fetchPlaylistsData(playlistsIds);

    //** Use YT Data API to create long tutorials slider **
    const videoIds =[
     'qz0aGYrrlhU',
     'pQN-pnXPaVg',
     'w6TYxcs5Qdo',
     'kUMe1FH4CHE',
     'HcOc7P5BMi4',
     'UB1O30fR-EE',
     'FQdaUv95mR8'
    ];
    fetchLongTutorialsData(videoIds);

    //** Use YT Data API to create Tips & Tricks slider **
    const tipsTricksVideosIds = [
      'PzShybUVyrk',
      'NwQtkkelmeE',
      'HJ0-fUJ-2F0',
      'WaC9RyEU6K4',
      'iX_QyjdctsQ',
      'VkWJQe_EsjQ',
    ];
    fetchTipsTricksData(tipsTricksVideosIds);
   