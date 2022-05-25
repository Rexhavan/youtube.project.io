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
const sideLayer = document.getElementById('sidebar-layer');

document.getElementById('navbar-menu').onclick = () => {
    sideBar.classList.toggle('active');
    sideLayer.classList.toggle('active');

    document.onclick = function(e){
        if(e.target.id == 'sidebar-layer'){
            sideBar.classList.remove('active');
            sideLayer.classList.remove('active');
        }
    }
}

const showTextBtn = document.querySelector('.show-text');
const text = document.querySelector('.text');

showTextBtn.addEventListener('click', (e)=>{
    text.classList.toggle('show-more')
    if(showTextBtn.innerText === 'SHOW MORE'){
        showTextBtn.innerText = 'SHOW LESS'
    }else{
        showTextBtn.innerText = 'SHOW MORE'
    }
})

let contents = document.querySelectorAll('.main-comment');
let numOfChar = 320;
let readMoreBtn = document.getElementById('read-more-less-btn')

contents.forEach(content => {
    if(content.textContent.length < numOfChar){
        content.nextElementSibling.style.display = 'none';   
    }else{
        let displayText = content.textContent.slice(0, numOfChar);
        let moreText = content.textContent.slice(numOfChar);
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`
    }
})

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector('.dots').classList.toggle('hide');
    post.querySelector('.more').classList.toggle('hide');
    btn.textContent == 'Read more' ? btn.textContent = 'Show less' : btn.textContent = 'Read more';
}
