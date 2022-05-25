const videoShow = document.getElementById('video-menu');

document.getElementById('video-icon').onclick = () => {
    videoShow.classList.toggle('active');
    youtubeShow.classList.remove('active');
    notificationShow.classList.remove('active');

    document.onclick = function(e){
        if(e.target.id !== 'video-icon' && e.target.id !== 'video-menu'){
            videoShow.classList.remove('active');
        }
    }
}

const youtubeShow = document.getElementById('youtube-menu');

document.getElementById('youtube-icon').onclick = () => {
    youtubeShow.classList.toggle('active');
    videoShow.classList.remove('active');
    notificationShow.classList.remove('active');

    document.onclick = function(e){
        if(e.target.id !== 'youtube-icon' && e.target.id !== 'youtube-menu'){
            youtubeShow.classList.remove('active');
        }
    }
}

const notificationShow = document.getElementById('notification-list');

document.getElementById('notification-icon').onclick = () => {
    notificationShow.classList.toggle('active');
    videoShow.classList.remove('active');
    youtubeShow.classList.remove('active');

    document.onclick = function(e){
        if(e.target.id !== 'notification-icon' && e.target.id !== 'notification-menu'){
            notificationShow.classList.remove('active');
        }
    }
}

const sideBar = document.getElementById('youtube-side-bar');
const simpleBar = document.getElementById('simple-side-bar');
const menuIcon = document.getElementById('navbar-menu');

menuIcon.onclick = () => {
    if(sideBar.style.display === 'block'){
        simpleBar.classList.toggle('active');
        sideBar.style.display = 'none'
    }else{
        simpleBar.classList.remove('active')
        sideBar.style.display = 'block'
    }
}

let tooltipContent = document.querySelectorAll('.scrolling-video-text');
let datatoolTips = document.querySelectorAll('.scrolling-video-item');

for(let i = 0; i < tooltipContent.length; i++){
    datatoolTips[i].setAttribute('title', tooltipContent[i].outerText);
}
