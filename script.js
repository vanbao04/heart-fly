const inputBox = document.getElementById("input-box");
const nameInput = document.getElementById("nameInput");
const startBtn = document.getElementById("startBtn");

const question = document.getElementById("question");
const answerBox = document.getElementById("answer-box");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let userName = "";

const heartColors = ["#ff4d6d", "#ffb703", "#fb8500", "#ff006e", "#8338ec"];

/* Sau khi nhập */
startBtn.addEventListener("click", () => {
    if (nameInput.value.trim() === "") return;

    userName = nameInput.value.trim();
    inputBox.classList.add("hidden");

    question.textContent = `${userName} có yêu anh không? 💕`;
    question.classList.remove("hidden");
    answerBox.classList.remove("hidden");
});

/* Nút Không chạy */
noBtn.addEventListener("mouseenter", () => {
    noBtn.style.position = "fixed";

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

/* Bấm Có */
yesBtn.addEventListener("click", () => {
    answerBox.classList.add("hidden");
    question.textContent = `Anh yêu ${userName} 💖`;

    for (let i = 0; i < 40; i++) {
        createHeart();
    }

    for (let i = 0; i < 12; i++) {
        explodeName();
    }
});

/* Trái tim bay */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    const size = Math.random() * 20 + 20;
    const color = heartColors[Math.floor(Math.random() * heartColors.length)];

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = size + "px";
    heart.style.color = color;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}

/* Nổ tên */
function explodeName() {
    const name = document.createElement("div");
    name.className = "name-pop";
    name.textContent = userName;

    name.style.left = Math.random() * window.innerWidth + "px";
    name.style.top = Math.random() * window.innerHeight + "px";
    name.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
    name.style.fontSize = Math.random() * 20 + 24 + "px";

    document.body.appendChild(name);

    setTimeout(() => name.remove(), 2000);
}
