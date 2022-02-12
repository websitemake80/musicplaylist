
    const title = document.querySelector('.title');
    const prev = document.querySelector('.prev');
    const playPause = document.querySelector('.playPause');
    const next = document.querySelector('.next');
    const audio = document.querySelector('audio');

//song list
    const songList = [

        {
            path: "loop009.mp3",
            songName: "Loop",
        },
        {
            path: "lightness.mp3",
            songName: "Lightness",
        },
        {
            path: "ones_way_home.mp3",
            songName: "One Way Home",
        },
        {
            path: "refreshing_wind.mp3",
            songName: "Refreshing Wind",
        },
        {
            path: "transparence.mp3",
            songName: "Transparence",
        },
    ];

    let song_Playing = false;
    // play song

    function playSong(){
        song_Playing = true;
        audio.play();
        playPause.classList.add('active');
        //change icon
        playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';

    }
    //pause song
    function pauseSong(){
        song_Playing = false;
        audio.pause();
        playPause.classList.remove('active');
         //change icon
         playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>'

    }

    //play or pause song on click
    playPause.addEventListener("click", () => (song_Playing ? 
    pauseSong() : playSong()));

    //load song
    function loadSong(songList){
        title.textContent = songList.songName;
        audio.src = songList.path;


    }
//current song
let i = 0;

//on load -select first song from song list
loadSong(songList[i]);


//previous song 
function prevSong(){
    i--;
    if(i < 0){
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    playSong();
}
prev.addEventListener("click", prevSong);
//next song
function nextSong(){
    i++;
    if(i > songList.length - 1){
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}
next.addEventListener("click", nextSong);