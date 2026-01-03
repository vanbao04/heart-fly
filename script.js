const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Nút KHÔNG chạy trốn khi hover
noBtn.addEventListener("mouseenter", () => {
    noBtn.style.position = "fixed";

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Khi bấm CÓ
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            height:100vh;
            background:linear-gradient(135deg,#ffdde1,#ee9ca7);
            font-family:Arial;
            text-align:center;
        ">
            <h1 style="font-size:48px;color:#ff2e63;">
                Anh biết mà 😍
            </h1>
            <p style="font-size:28px;margin-top:20px;">
                Anh yêu em rất nhiều 💖
            </p>
        </div>
    `;
});
