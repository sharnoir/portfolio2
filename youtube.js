var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {
        videoId: '42A-rFdralM',
        playerVars: {
            'autoplay': true,
            'controls': false,
            'loop': true,
            'playlist': '42A-rFdralM' //반복재생할때 반드시 다시 한번 id를 적어주어야 한다.
        },

        events: {
            //영상이 준비되면 함수가 실행
            'onReady': function (event) {
                event.target.mute(); //음소거, target은 영상자체
            },

        }




    });
var player2;
    player2 = new YT.Player('player2', {
        videoId:'udGwca1HBM4',
        playerVars: {
            'autoplay': true,
            'controls': false,
            'loop': true,
            'playlist': 'udGwca1HBM4' //반복재생할때 반드시 다시 한번 id를 적어주어야 한다.
        },

        events: {
            //영상이 준비되면 함수가 실행
            'onReady': function (event) {
                event.target.mute(); //음소거, target은 영상자체
            },

        }




    });

    var player3;
    player2 = new YT.Player('player3', {
        videoId:'tWpELYOpOjE',
        playerVars: {
            'autoplay': true,
            'controls': false,
            'loop': true,
            'playlist': 'tWpELYOpOjE' //반복재생할때 반드시 다시 한번 id를 적어주어야 한다.
        },

        events: {
            //영상이 준비되면 함수가 실행
            'onReady': function (event) {
                event.target.mute(); //음소거, target은 영상자체
            },

        }




    });

    var player3;
    player2 = new YT.Player('player4', {
        videoId:'BBdC1rl5sKY',
        playerVars: {
            'autoplay': true,
            'controls': false,
            'loop': true,
            'playlist': 'BBdC1rl5sKY' //반복재생할때 반드시 다시 한번 id를 적어주어야 한다.
        },

        events: {
            //영상이 준비되면 함수가 실행
            'onReady': function (event) {
                event.target.mute(); //음소거, target은 영상자체
            },

        }




    });










};