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

const loveText = document.getElementById("love-text");
const nameInput = document.getElementById("nameInput");

const loveMessages = [
    "Anh yêu {name} ❤️",
    "Anh thích {name} nhiều lắm 🥰",
    "{name} là cả thế giới của anh 🌎",
    "Ở bên anh nhé {name} 💕",
    "Anh muốn nắm tay {name} thật lâu 🤝❤️",
    "{name} là điều ngọt ngào nhất anh có 💘",
    "Chỉ cần {name} là anh đủ hạnh phúc 💖",
    "Anh không cần gì ngoài {name} 💗"
];

const defaultMessages = [
    "Anh yêu em ❤️",
    "Anh thích em nhiều lắm 🥰",
    "Em là cả thế giới của anh 🌎",
    "Ở bên anh nhé 💕"
];

document.addEventListener("click", () => {
    const name = nameInput.value.trim();

    let message = "";

    if (name !== "") {
        const template = loveMessages[
            Math.floor(Math.random() * loveMessages.length)
        ];
        message = template.replace("{name}", name);
    } else {
        message = defaultMessages[
            Math.floor(Math.random() * defaultMessages.length)
        ];
    }

    loveText.textContent = message;

    // reset animation
    loveText.classList.remove("show-love");
    void loveText.offsetWidth;
    loveText.classList.add("show-love");
});
