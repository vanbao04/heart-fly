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

noBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    answerBox.style.display = "none";
    showText(`Không sao đâu 😊 Anh vẫn thích ${name} 💖`);
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

function showText(message) {
    loveText.textContent = message;
    loveText.classList.remove("show-love");
    void loveText.offsetWidth;
    loveText.classList.add("show-love");
}



