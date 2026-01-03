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

document.addEventListener("click", () => {
    loveText.classList.remove("show-love");

    // trigger lại animation
    void loveText.offsetWidth;

    loveText.classList.add("show-love");
});

