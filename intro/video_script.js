const videoPlayer = document.getElementById('video-player');
const videoSources = [
    'images/intro_videos/1.mp4',
    'images/intro_videos/2.mp4',
    'images/intro_videos/3.mp4',
    'images/intro_videos/4.mp4',
    'images/intro_videos/5.mp4',
    'images/intro_videos/6.mp4',
    // Add more video sources here
];

function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    console.log(shuffled)
    return shuffled.slice(0, size);
}

function loadNextVideo(random_array, idx) {
    // Remove the previous source element, if it exists
    const oldSource = videoPlayer.querySelector('source');
    if (oldSource) {
        videoPlayer.removeChild(oldSource);
    }

    const source = document.createElement('source');
    source.src = random_array[idx];
    source.type = 'video/mp4';
    videoPlayer.appendChild(source);
    videoPlayer.load();
    videoPlayer.play();
    console.log(random_array[currentVideoIndex]);
}

var random_array = getRandomSubarray(videoSources, 100000);
let currentVideoIndex = 0;
videoPlayer.addEventListener('ended', () => {
    currentVideoIndex++;
    if (currentVideoIndex >= random_array.length) {
        currentVideoIndex = 0; // Loop back to the first video when the sequence ends
    }
    if (currentVideoIndex < videoSources.length) {
        loadNextVideo(random_array, currentVideoIndex);
    }
});

loadNextVideo(random_array, currentVideoIndex);
