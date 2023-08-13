import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

function time(obj) {
  const seconds = obj.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}
const timeVideo = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(time, 1000));
player.setCurrentTime(timeVideo);
