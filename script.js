let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_voloume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

// create audio element
let track = document.createElement('audio');

// All song list
let All_song = [{
        name: "O Bekhabar",
        path: "1song.mp3",
        img: "1.jpg",
        singer: "Shreya Ghoshal"
    },
    {
        name: "Teri Ore",
        path: "2song.mp3",
        img: "2.jpg",
        singer: " Rahat Fateh Ali Khan "
    },
    {
        name: " Pehli Dafa",
        path: "3song.mp3",
        img: "3.jpg",
        singer: "Atif Aslam "
    },
    {
        name: "Saibo",
        path: "4song.mp3",
        img: "4.jpg",
        singer: " Sachin jigar, Shreya Ghoshal"
    },
    {
        name: "Tere dar pe aake..",
        path: "5song.mp3",
        img: "5.jpg",
        singer: "Arjit sing"
    },
    {
        name: "Thodi Der",
        path: "6song.mp3",
        img: "6.jpg",
        singer: "Farhan Saeed"
    },
    {
        name: "Apna Bana Le",
        path: "7song.mp3",
        img: "7.jpg",
        singer: "Arjit sing"
    },
    {
        name: "Saathiyaa",
        path: "8song.mp3",
        img: "8.jpg",
        singer: "Ajay Gogavale"
    },
    {
        name: "Main Rang...",
        path: "9song.mp3",
        img: "9.jpg",
        singer: "Atif Aslam "
    },
    {
        name: "Tera Ban Jaunga ",
        path: "10song.mp3",
        img: "10.jpg",
        singer: " Akhil Sachdeva"
    },
    {
        name: "Ve Maahi ",
        path: "11song.mp3",
        img: "11.jpg",
        singer: " Arijit Singh"
    },
    {
        name: "Tere Sang Yaara ",
        path: "12song.mp3",
        img: "12.jpg",
        singer: " Atif Aslam "
    },
    {
        name: "Surili Akhiyon Wale  ",
        path: "13song.mp3",
        img: "13.jpg",
        singer: "  Rahat Fateh Ali Khan "
    },
    {
        name: "Dekha Hazaro Daafa  ",
        path: "14song.mp3",
        img: "14.jpg",
        singer: "Arijit Singh"
    },
    {
        name: "Ek Din Aap Yun ",
        path: "15song.mp3",
        img: "15.jpg",
        singer: "Alka Yagnik "
    },
    
    {
        name: "SAUDEBAAZI ",
        path: "16song.mp3",
        img: "16.jpg",
        singer: "Anupam Amod "
    },
    {
        name: "Mahiye Jinna Sohna ",
        path: "17song.mp3",
        img: "17.jpg",
        singer: "Darshan Raval "
    },
    {
        name: "RATA LAMBIYA ",
        path: "18song.mp3",
        img: "18.jpg",
        singer: "Jubin Nautiyal "
    },
    {
        name: "Malang Sajna ",
        path: "19song.mp3",
        img: "19.jpg",
        singer: "Parampara Thakur  "
    },
    {
        name: "Zindagi Kuch... ",
        path: "20song.mp3",
        img: "20.jpg",
        singer: "Jubin Nautiyal "
    },
    {
        name: "Mast Magan ",
        path: "21song.mp3",
        img: "21.jpg",
        singer: "Arijit Singh "
    },
    {
        name: "Mere Sapno Ki Rani",
        path: "22song.mp3",
        img: "22.jpg",
        singer: "Kishor Kumar "
    },
    {
        name: "Neele Neele Ambar",
        path: "23song.mp3",
        img: "23.jpg",
        singer: "Kishor Kumar "
    },
    {
        name: "Sona Re",
        path: "24song.mp3",
        img: "24.jpg",
        singer: "King "
    },
    {
        name: "Maan Meri Jaan",
        path: "25song.mp3",
        img: "25.jpg",
        singer: "King "
    },
];
//All function 

// function load the track
function load_track(index_no) {
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider, 1000);
}
load_track(index_no);

// mute sound
function mute_sound() {
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}

// reset song slider
function reset_slider() {
    slider.value = 0;
}

// checking the song is playing or not
function justplay() {
    if (playing_song == false) {
        playsong();
    } else {
        pausesong();
    }
}

// play song
function playsong() {
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"> </i>';
}

// pause song
function pausesong() {
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play"> </i>';
}

// next song
function next_song() {
    if (index_no < All_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}

// previous song
function previous_song() {
    if (index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}

// change volume
function volume_change() {
    volume_show.innerHTML = recent_voloume.value;
    track.volume = recent_voloume.value / 100;
}

// change slider postion
function change_duration() {
    slider_postion = track.duration * (slider.value / 100);
    track.currentTime = slider_postion;
}

// autoplay function
function autoplay_switch() {
    if (autoplay == 1) {
        autoplay = 0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
    } else {
        autoplay = 1;
        auto_play.style.background = "#ff8a65";
    }

}

function range_slider() {
    let postion = 0;

    // update slider position
    if (!isNaN(track.duration)) {
        postion = track.currentTime * (100 / track.duration);
        slider.value = postion;
    }

    // function will run when the song is over
    if (track.ended) {
        play.innerHTML = '<i class="fa fa-play"></i>';
        if (autoplay == 1) {
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }

}