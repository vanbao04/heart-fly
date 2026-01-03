function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    const colors = [
        "#ff1744", "#ff4081", "#f50057",
        "#ff80ab", "#ff5252", "#ff6d00"
    ];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    const size = Math.random() * 35 + 25;
    heart.style.fontSize = size + "px";

    heart.style.left = Math.random() * window.innerWidth + "px";

    const duration = Math.random() * 2 + 4;
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 250);

const nameInput = document.getElementById("nameInput");
const inputBox = document.getElementById("input-box");
const loveText = document.getElementById("love-text");
const answerBox = document.getElementById("answer-box");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let name = "";
let asked = false;

nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startQuestion();
    }
});

document.addEventListener("click", () => {
    if (!asked && nameInput.value.trim() !== "") {
        startQuestion();
    }
});

function startQuestion() {
    name = nameInput.value.trim();
    asked = true;

    inputBox.classList.add("hidden");

    showText(`${name} có yêu anh không? 💕`);

    answerBox.style.display = "flex";
}

yesBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    answerBox.style.display = "none";

    showText(`Anh biết mà 😍 Anh yêu ${name} nhiều lắm ❤️`);

    explodeHearts();
    
});

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton() {
    const padding = 80;

    const x = Math.random() * (window.innerWidth - padding);
    const y = Math.random() * (window.innerHeight - padding);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

function showText(message) {
    loveText.textContent = message;
    loveText.classList.remove("show-love");
    void loveText.offsetWidth;
    loveText.classList.add("show-love");
}

function explodeHearts() {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = Math.random() * 30 + 20 + "px";
        heart.style.zIndex = 9999;

        document.body.appendChild(heart);

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 300 + 100;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ], {
            duration: 1200,
            easing: "ease-out"
        });

        setTimeout(() => heart.remove(), 1200);
    }
}

let speed = 1;

function moveNoButton() {
    speed += 0.3;
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.transition = `${0.2 / speed}s`;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

