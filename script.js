console.log("SCRIPT LOADED");

// ===== LẤY ELEMENT =====
const inputBox = document.getElementById("input-box");
const nameInput = document.getElementById("nameInput");
const startBtn = document.getElementById("startBtn");

const question = document.getElementById("question");
const answerBox = document.getElementById("answer-box");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
console.log({
    nameInput,
    inputBox,
    question,
    answerBox,
    form
});

// ===== CHỮ NÚT KHÔNG =====
const noMessages = [
    "Không 💔",
    "Không nha 😝",
    "Em từ chối 🙈",
    "Đừng mơ 😏",
    "Không đời nào 😜",
    "Chưa chắc 😅",
    "Khônggg 😆",
    "Thôi đi 😌",
    "Mơ tiếp đi 😎"
];

let lastNoIndex = -1;

// ===== ẨN BAN ĐẦU =====
question.classList.add("hidden");
answerBox.classList.add("hidden");

// ===== BẮT ĐẦU =====
const form = document.getElementById("nameForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

const form = document.getElementById("nameForm");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // không reload trang

    const userName = nameInput.value.trim();
    if (!userName) return;

    // Ẩn ô nhập
    inputBox.classList.add("hidden");

    // Hiện câu hỏi
    question.textContent = `${userName} có yêu anh không? 💖`;
    question.classList.remove("hidden");

    // 👉 LÚC NÀY MỚI HIỆN CÓ / KHÔNG
    answerBox.classList.remove("hidden");

    // Trái tim bay nhiều hơn
    setInterval(() => {
        for (let i = 0; i < 3; i++) createHeart();
    }, 200);
});

// ===== NÚT KHÔNG =====
noBtn.addEventListener("mouseenter", () => {
    noBtn.style.position = "fixed";

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    let index;
    do {
        index = Math.floor(Math.random() * noMessages.length);
    } while (index === lastNoIndex);

    lastNoIndex = index;
    noBtn.textContent = noMessages[index];
});

// ===== NÚT CÓ =====
yesBtn.addEventListener("click", () => {
    answerBox.classList.add("hidden");
    explodeHearts(nameInput.value.trim());
});

// ===== TRÁI TIM BAY =====
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // inner text heart
    heart.innerHTML = "❤️";

    // random màu
    const colors = ["#ff0000","#ff3366","#ff66cc","#ff99cc","#ff6699","#ff33cc"];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    // random kích thước
    const size = Math.random() * 30 + 20;
    heart.style.fontSize = size + "px";

    // random vị trí ngang
    heart.style.left = Math.random() * window.innerWidth + "px";

    // random duration mượt
    const duration = Math.random() * 2 + 4;
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// tạo nhiều trái tim liên tục
setInterval(createHeart, 300);

// ===== NỔ TRÁI TIM =====
function explodeHearts(name) {
    question.textContent = `Anh yêu ${name} 💘`;

    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.textContent = "❤️";
        heart.className = "explode-heart";

        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.color = `hsl(${Math.random() * 360}, 100%, 60%)`;

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200 + 50;

        heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
        heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}






