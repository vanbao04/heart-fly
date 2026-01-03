// ===== LẤY ELEMENT =====
const inputBox = document.getElementById("input-box");
const nameInput = document.getElementById("nameInput");
const startBtn = document.getElementById("startBtn");

const question = document.getElementById("question");
const answerBox = document.getElementById("answer-box");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// ===== DANH SÁCH CHỮ NÚT KHÔNG =====
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
startBtn.addEventListener("click", () => {
    if (nameInput.value.trim() === "") return;

    const userName = nameInput.value.trim();

    // Ẩn ô nhập
    inputBox.classList.add("hidden");

    // Hiện câu hỏi
    question.textContent = `${userName} có yêu anh không? 💖`;
    question.classList.remove("hidden");

    // Hiện 2 nút
    answerBox.classList.remove("hidden");

    // Bắt đầu trái tim bay
    setInterval(createHeart, 300);
});

// ===== NÚT KHÔNG CHẠY TRỐN + ĐỔI CHỮ =====
noBtn.addEventListener("mouseenter", () => {
    noBtn.style.position = "fixed";

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // Đổi chữ không trùng
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

// ===== TẠO TRÁI TIM BAY =====
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    const size = Math.random() * 20 + 15;
    heart.style.fontSize = size + "px";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.style.color = `hsl(${Math.random() * 360}, 100%, 60%)`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// ===== TRÁI TIM NỔ THÀNH TÊN =====
function explodeHearts(name) {
    question.textContent = `Anh yêu ${name} 💘`;

    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("explode-heart");

        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.color = `hsl(${Math.random() * 360}, 100%, 60%)`;

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 200 + 50;

        heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
        heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
