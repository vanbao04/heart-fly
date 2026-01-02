function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Vị trí ngang ngẫu nhiên
    heart.style.left = Math.random() * window.innerWidth + "px";

    // Thời gian bay
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + "s";

    // Lệch trái/phải
    const x = (Math.random() - 0.5) * 200;
    heart.style.setProperty("--x", x + "px");

    document.body.appendChild(heart);

    // Xóa trái tim sau khi xong animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Tạo trái tim liên tục
setInterval(createHeart, 300);
