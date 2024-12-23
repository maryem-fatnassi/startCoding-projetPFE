import {fetchPlaylistsData} from './YT Data API.js';
import { fetchLongTutorialsData } from './YT Data API.js';
import { fetchTipsTricksData } from './YT Data API.js';
import { selectedIcon } from './YT Data API.js';
// Navbar Container..
  // Click arrow-Down icon to show and hide menu :
const arrowDown_icon = document.getElementById('arrowDown_icon');
arrowDown_icon.addEventListener('click',selectedIcon);

// Main Container..
  // Using Swiper in JS tutorials :
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
        'PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1',
        'PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax',
        'PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv',
        'PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4',
        'PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET',
        'PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV',
        'PLDyQo7g0_nsXlSfuoBpG5Fgz0Qe3IvWnA',
        'PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX',
        'PLr6-GrHUlVf96NLj3PQq-tmEB6woZjwEl'
    ];    
    fetchPlaylistsData(playlistsIds);
    //** Use YT Data API to create long tutorials slider **
    const videoIds = [
        'EerdGm-ehJQ',
        'EfAl9bwzVZk',
        'PkZNo7MFNFg',
        'FtaQSdrl7YA',
        'PXvI0ln6Nws',
        'A1eszacPf-4',
    ];
    fetchLongTutorialsData(videoIds);
    //** Use YT Data API to create Tips & Tricks slider **
    const tipsTricksVideosIds =[
        'Mus_vwhTCq0',
        'oRekCcwSeXs',
        'bbnkAV12Tig',
        'UC1_ydr6Br4',
        'B3H78nzutvE'
    ];
    fetchTipsTricksData(tipsTricksVideosIds);
