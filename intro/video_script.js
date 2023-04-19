const videoSources = [
    'images/intro_videos/1.mp4',
    'images/intro_videos/2.mp4',
    'images/intro_videos/3.mp4',
    'images/intro_videos/4.mp4',
    // Add more video sources here
];

function getRandomVideoSource() {
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    console.log(videoSources[randomIndex])
    return videoSources[randomIndex];
}

function createVideoElement(src) {
    const video = document.createElement('video');
    video.src = src;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    return video;
}

const videoContainer = document.getElementById('video-container');
const randomVideoSource = getRandomVideoSource();
const randomVideoElement = createVideoElement(randomVideoSource);

videoContainer.appendChild(randomVideoElement);
