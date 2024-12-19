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
      slidesPerView : 3,
      spaceBetween : 70,
      navigation:{
        nextEl: '.button-next-one',
        prevEl:'.button-prev-one',
      }
    });   
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
    // * Playlist *
    const swiperThree = new Swiper('.swiper-three',{
      loop: true,
      slidesPerView : 3,
      spaceBetween : 70,
      navigation:{
        nextEl: '.button-next-three',
        prevEl:'.button-prev-three',
      }
    });   
  
  // Use YT Data API in the sliders.. 
    //** Use YT Data API to create channels slider **
    const apiKey =  'AIzaSyB1bR4Vc2gsucWVY7SokFXObkIUKug6M04';
    const playlistsIds =[
       'PL0Zuz27SZ-6OlAwitnFUubtE93DO-l0vu',
       'PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB',
       'PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s',
       'PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc',
       'PLZPZq0r_RZOPoNttk9beDhO_Bu5DA-xwP',
       'PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88',
       'PL7TLF4T4Tq2RNvYzF45yOeFi-O1KRAWtu'
    ];

    const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&id=${playlistsIds.join(",")}&key=${apiKey}`;

    function formatNumber(number){
      if(number >= 1000000){
        return (number / 1000000).toFixed(1).replace(/\.0$/,'') + 'M';
      }
      else if(number >= 1000){
        return(number / 1000).toFixed(1).replace(/\.0$/,'') + 'K';
      }
      else{
        return number;
      }
    }
    fetch(url)
    .then(  
      response => response.json()
    )
    .then(
      data =>{
      
        data.items.forEach(
        playlist => {
                  const channelImage = playlist.snippet.thumbnails.default.url;
                  const channelName = playlist.snippet.title;
                  const videoUrl  = `https://www.youtube.com/watch?list=${playlist.id}`;
                  const videosCount = playlist.contentDetails.itemCount;
                  
                  let videoLink = document.createElement('a');
                  videoLink.href=videoUrl;
                  videoLink.target='_blank';
                  
                  let image = document.createElement('img');
                  image.className='image-slide';
                  image.src=channelImage;
                  videoLink.appendChild(image);
                  
                  let title = document.createElement('h2');
                  title.className='title-channel';
                  title.innerText=channelName;

                  let numberOfVideos = document.createElement('p');
                  numberOfVideos.className = 'videos-count';
                  numberOfVideos.innerText = `${videosCount} videos`;

                  let swiperSlideElement = document.createElement('div');
                  swiperSlideElement.className='swiper-slide';
                  swiperSlideElement.appendChild(videoLink);
                  swiperSlideElement.appendChild(title);
                  swiperSlideElement.appendChild(numberOfVideos);

                  let parent = document.getElementById('swiper_wrapper');
                  parent.appendChild(swiperSlideElement);
        }
    )
    .catch(
      error => console.error('Error :', error)
    )});

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

    const videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&id=${videoIds.join(",")}&key=${apiKey}`;

    function formatVideoDuration(duration){
      const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)/);
      const hours = match[1] ? match[1] : '0';
      const minutes = match[2] ? match[2] : '0';
      const seconds = match[3] ? match[3] : '0';
      return [
        String(hours).padStart(2,"0"),
        String(minutes).padStart(2,"0"),
        String(seconds).padStart(2,"0"),
      ].join(":");
    }

    fetch(videosUrl)
    .then(  
      response => response.json()
    )
    .then(
      data =>{
      
        data.items.forEach(
        video => {
                  const videoImage = video.snippet.thumbnails.default.url;
                  const videoName = video.snippet.title;
                  const viewCount = video.statistics.viewCount;
                  const formattedViewCount = formatNumber(viewCount);
                  const videoUrl  = `https://www.youtube.com/watch?v=${video.id}`;
                  const videoDuration = video.contentDetails.duration;
                  const formattedVideoDuration = formatVideoDuration(videoDuration);
                  
                  let videoLink = document.createElement('a');
                  videoLink.href=videoUrl;
                  videoLink.target='_blank';
                  
                  let image = document.createElement('img');
                  image.className='image-slide video-image';
                  image.src=videoImage;
                  videoLink.appendChild(image);
                  
                  let title = document.createElement('h2');
                  title.className='title-video';
                  title.innerText=videoName;


                  let numberOfViews = document.createElement('p');
                  numberOfViews.className='number-of-views';
                  numberOfViews.innerText=`${formattedViewCount} views`;

                  let longvideo = document.createElement('p');
                  longvideo.className ='video-duration';
                  longvideo.innerText = formattedVideoDuration;

                  let swiperSlideElement = document.createElement('div');
                  swiperSlideElement.className='swiper-slide';
                  swiperSlideElement.appendChild(videoLink);
                  swiperSlideElement.appendChild(title);
                  swiperSlideElement.appendChild(numberOfViews);
                  swiperSlideElement.appendChild(longvideo);
                  
                  let parent = document.getElementById('longTutorials-swiper-wrapper');
                  parent.appendChild(swiperSlideElement);
        }
    )
    .catch(
      error => console.error('Error :', error)
    )});
    
    //** Use YT Data API to create Tips & Tricks slider **

    const tipsTricksVideosIds = [
      'PzShybUVyrk',
      'NwQtkkelmeE',
      'HJ0-fUJ-2F0',
      'WaC9RyEU6K4',
      'iX_QyjdctsQ',
      'VkWJQe_EsjQ',
    ];

    const tipsTricksVideosUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${ids.join(",")}&key=${apiKey}`;

    fetch(tipsTricksVideosUrl)
    .then(
      response => response.json()
    )
    .then(
      data => {
        data.items.forEach(
          tricksTipsVideo =>{
            console.log(tricksTipsVideo)
            const  tricksTipsVideoImage =  tricksTipsVideo.snippet.thumbnails.default.url;
            const  tricksTipsVideoName =  tricksTipsVideo.snippet.title;
            const viewCount =  tricksTipsVideo.statistics.viewCount;
            const formattedViewCount = formatNumber(viewCount);
            const videoUrl  = `https://www.youtube.com/watch?v=${tricksTipsVideo.id}`;

            let videoLink = document.createElement('a');
            videoLink.href=videoUrl;
            videoLink.target='_blank';
            
            let image = document.createElement('img');
            image.className='image-slide video-image';
            image.src=tricksTipsVideoImage;
            videoLink.appendChild(image);
            
            let title = document.createElement('h2');
            title.className='title-video';
            title.innerText=tricksTipsVideoName;


            let numberOfViews = document.createElement('p');
            numberOfViews.className='number-of-views';
            numberOfViews.innerText=`${formattedViewCount} views`;

            let swiperSlideElement = document.createElement('div');
            swiperSlideElement.className='swiper-slide';
            swiperSlideElement.appendChild(videoLink);
            swiperSlideElement.appendChild(title);
            swiperSlideElement.appendChild(numberOfViews);

            let parent = document.getElementById('tipsTricksVideo');
            parent.appendChild(swiperSlideElement);
          }
        )
        .catch(
          error => console.error('Error :', error)
        )});

