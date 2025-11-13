// Випадкове ціле число від min до max включно
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const btn_start = document.querySelector('.btn-start');
const explosion = document.querySelector('.explosion');

btn_start.addEventListener("click", function(e) {
    const rect = btn_start.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Анімація зникнення кнопки
    anime({
        targets: btn_start,
        opacity: [1, 0],
        scale: [1, 0.8],
        duration: 200,
        easing: "easeInCubic"
    });

    for (let i = 0; i < 100; i++) {
        const size = 8 + Math.random() * 35;
        const width = size + "px";
        const opacity = 0.4 + Math.random() * 0.6;

        // додаємо бульбашку і одразу отримуємо її
        explosion.innerHTML += `<div class="bubble" style="
            width:${width};
            height:${width};
            left:${x-200+Math.random()*400}px;
            top:${y-100-Math.random()*100}px;
            opacity:${opacity};
            position:absolute;
            border-radius:50%;
            background:#003366;
            z-index:20;
        "></div>`;


        
    }
   let bubbles = document.querySelectorAll(".bubble")
   for(let i =0;i < bubbles.length;i++){
        anime({
            targets: bubbles[i],
            translateY: randomInt(-500,-200) ,
            translateX : randomInt(-500,500),
            opacity: [0.7, 0],
            duration:randomInt(1000,3000),
            easing: "easeInCubic",
           
        });
    }
    setTimeout(() => {
        location.href = "test.html";
    }, 3500);
});
