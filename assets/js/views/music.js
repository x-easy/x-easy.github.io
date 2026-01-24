// assets/js/views/music.js
import { play, addMusic } from "../audio.js";

export function render(root) {
  root.innerHTML = `
    <h2>背景音樂</h2>
    <input id="url" placeholder="音樂網址">
    <button id="add">新增並播放</button>
  `;

  root.querySelector("#add").onclick = () => {
    const url = root.querySelector("#url").value;
    addMusic(url);
    play(url);
  };
}