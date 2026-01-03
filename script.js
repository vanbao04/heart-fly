function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    // MÀU NGẪU NHIÊN
    const colors = [
        "#ff1744", "#ff4081", "#f50057",
        "#ff80ab", "#ff5252", "#ff6d00"
    ];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    // KÍCH THƯỚC NGẪU NHIÊN (TO HƠN)
    const size = Math.random() * 35 + 25;
    heart.style.fontSize = size + "px";

    // VỊ TRÍ NGANG
    heart.style.left = Math.random() * window.innerWidth + "px";

    // THỜI GIAN BAY (MƯỢT)
    const duration = Math.random() * 2 + 4;
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// TẠO TRÁI TIM LIÊN TỤC
setInterval(createHeart, 250);
const loveText = document.getElementById("love-text");

// DANH SÁCH CÂU TỎ TÌNH
const loveMessages = [
    "Anh yêu em ❤️",
    "Làm người yêu anh nhé 💕",
    "Em là cả thế giới của anh 🌎",
    "Anh thích em nhiều lắm 🥰",
    "Ở bên anh nhé 💖",
    "Gặp em là điều may mắn nhất 💘",
    "Anh không cần gì ngoài em 💗",
    "Em có đồng ý yêu anh không? 💓"
];

document.addEventListener("click", () => {
    // chọn câu random
    const message = loveMessages[
        Math.floor(Math.random() * loveMessages.length)
    ];

    loveText.textContent = message;

    // reset animation
    loveText.classList.remove("show-love");
    void loveText.offsetWidth;
    loveText.classList.add("show-love");
});


