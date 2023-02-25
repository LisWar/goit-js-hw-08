import Vimeo from "@vimeo/player"
const _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe)
const storageKey = "videoplayer-current-time";

setStartingTime(storageKey);

player.on('timeupdate', _.throttle(function(e) {
        save(storageKey, e.seconds)
        console.log('playbackStart: ', load(storageKey));
    }, 1000));



/// functions

function setStartingTime(key) {
    if (!load(key)) {
        save(key, 0);
    }
    console.log('playbackStart: ', load(key));
    player.setCurrentTime(load(key))
}

function load(key) {
    try {
        const savedState = localStorage.getItem(key);
        return savedState === null ? undefined : JSON.parse(savedState);
    } catch (error) {
        console.log(error);
    }
}

function save(key, sec) {
    try {
        localStorage.setItem(key, sec);
    } catch (error) {
        console.log(error);
    }
}