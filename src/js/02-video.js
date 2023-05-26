import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const STORAGE_KEY = "videoplayer-current-time";
const currentTime = localStorage.getItem(STORAGE_KEY);

if (currentTime) {
  player.setCurrentTime(currentTime);
} else {
  player.setCurrentTime(0);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate() {
  player.getCurrentTime().then(seconds => {
    localStorage.setItem(STORAGE_KEY, seconds);
  });
}
