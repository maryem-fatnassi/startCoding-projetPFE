// Navbar Container..
  // Click arrow-Down icon to show and hide menu :
export function selectedIcon(clickIcon){
  const tutorials_select = document.getElementById('tutorials-menu');
  tutorials_select.classList.toggle('active');
  arrowDown_icon.classList.toggle('rotate');
}

// Using Swiper in HTML tutorials 
    // * Playlists *
const apiKey =  'AIzaSyB1bR4Vc2gsucWVY7SokFXObkIUKug6M04';
export function fetchPlaylistsData(ids){
    const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&id=${ids.join(",")}&key=${apiKey}`;
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

};

//** Use YT Data API to create long tutorials slider **
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
export function fetchLongTutorialsData(ids){
  const videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&id=${ids.join(",")}&key=${apiKey}`;
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
  };
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
  
};
// Use YT Data API to create Tips & Tricks slider..
export function fetchTipsTricksData(ids){
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
}