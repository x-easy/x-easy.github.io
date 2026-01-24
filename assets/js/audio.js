// assets/js/audio.js
let playlist = JSON.parse(localStorage.getItem("playlist") || "[]");
let audio = new Audio();

export function play(url) {
  audio.src = url;
  audio.loop = true;
  audio.play();
}

export function addMusic(url) {
  playlist.push(url);
  localStorage.setItem("playlist", JSON.stringify(playlist));
}