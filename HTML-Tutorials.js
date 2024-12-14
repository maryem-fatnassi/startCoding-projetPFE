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
    const apiKey =  'AIzaSyB1bR4Vc2gsucWVY7SokFXObkIUKug6M04';
    const ChannelIds =[
       'UC-JQzTHQrVA8j-tamvy66fw',
       'UCv9bWHC0DIn-Xb7ALNoOGWQ',
       'UCsvqVGtbbyHaMoevxPAq9Fg',
       'UC4SVo0Ue36XCfOyb5Lh1viQ',
       'UC3Bdolw5nlwMSBa3sex6R4g',
       'UCkw4JCwteGrDHIsyIIKo4tQ',
       'UCW5YeuERMmlnqo4oq8vwUpg',
       'UCl1Umy9WXb3I49JTMG3WoWw'
    ];

    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${ChannelIds.join(",")}&key=${apiKey}`;
    fetch(url)
    .then(  
      response => response.json()
    )
    .then(
      data =>{
      
        data.items.forEach(
        channel => {
                  const channelImage = channel.snippet.thumbnails.default.url;
                  const channelName = channel.snippet.title;
                  const subscriberCount = channel.statistics.subscriberCount;
                  const videoUrl  = `https://www.youtube.com/channel/${ChannelIds.join(",")}`;
                  
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


                  let numberOfFollowers = document.createElement('p');
                  numberOfFollowers.className='number-of-followers';
                  numberOfFollowers.innerText=`${subscriberCount} followers`;

                  let swiperSlideElement = document.createElement('div');
                  swiperSlideElement.className='swiper-slide';
                  swiperSlideElement.appendChild(videoLink);
                  swiperSlideElement.appendChild(title);
                  swiperSlideElement.appendChild(numberOfFollowers);

                  let parent = document.getElementById('swiper_wrapper');
                  parent.appendChild(swiperSlideElement);
        }
    )
    .catch(
      error => console.error('Error :', error)
    )});