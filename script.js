const inputBox = document.getElementById("input-box");
const nameInput = document.getElementById("nameInput");
const startBtn = document.getElementById("startBtn");

const question = document.getElementById("question");
const answerBox = document.getElementById("answer-box");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let userName = "";

const noTexts = [
    "Không 😅",
    "Em từ chối 🙈",
    "Không nha 😜",
    "Đừng mơ 😏",
    "Chưa chắc 😶"
];

startBtn.addEventListener("click", () => {
    if (nameInput.value.trim() === "") return;

    userName = nameInput.value.trim();

    inputBox.classList.add("hidden");

    question.textContent = `${userName} có yêu anh không? 💕`;
    question.classList.remove("hidden");

    answerBox.classList.remove("hidden");
});

noBtn.addEventListener("mouseenter", () => {
    noBtn.style.position = "fixed";

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    const randomText = noTexts[Math.floor(Math.random() * noTexts.length)];
    noBtn.textContent = randomText;
});

yesBtn.addEventListener("click", () => {
    answerBox.classList.add("hidden");
    question.textContent = `Anh yêu ${userName} nhiều lắm 💖`;

    for (let i = 0; i < 35; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}
