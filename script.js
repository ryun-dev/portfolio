const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

const words = [
"積み上げた分だけ強くなる。",
"今日は1ミリでも前進。",
"公開したら勝ち。"
];

btn.addEventListener("click", () => {
const i = Math.floor(Math.random() * words.length);
msg.textContent = words[i];