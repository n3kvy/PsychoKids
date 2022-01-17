const player = document.querySelector('.player'),
	playBtn = document.querySelector('play'),
	audio = document.querySelector('audio'),
	progressContainer = document.querySelector('progress__container'),
	progress = document.querySelector('progress'),
	title = document.querySelector('song'),
	cover__img = document.querySelector('cover__img'),
	imgSrc = document.querySelector('.img__src')

// НАЗВАНИЕ ПЕСНИ
const songs = ["Babushka"]

// АВТО ПЕСНЯ
let songIndex = 0

// init
function loadSong() {
	title.innerHTML = song 
	audio.src = '.audio/${song}.wav/'
	cover.src = '.img/cover${songIndex + 1}.gif'
}
loadSong(songs[songIndex])

//play
function playSong () {
	audio.play()
}

//pause
 function pauseSong () {

 }
 playBtn.addEventListener('click', () => {
 	playSong ()
 }

 	)