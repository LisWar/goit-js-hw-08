const _ = require('lodash');


// import Vimeo from '@vimeo/Player';

// const iframe  = document.querySelector('iframe');
// console.log('iframe: ', iframe);
// const player = new Vimeo.Player(iframe);
//
//         Подібний варіант виклику видає помилку наступного вигляду. Уточнення шляху 
//
//// 02-video.js:7 Uncaught TypeError: (0 , _playerDefault.default).Player is not a constructor
//////     at fFZ34.@vimeo/player (02-video.js:7:16)
//////     at newRequire (02-video.a74b541c.js:71:24)
//////     at 02-video.a74b541c.js:122:5
//////     at 02-video.a74b541c.js:145:3

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('timeupdate', (e) => {
        _.throttle(console.log(e.seconds), 500);
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
