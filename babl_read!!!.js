//додаємо звичайні контенери для ефекту бульбашок- кожен контейнер втсилями робимо колом та рухаємо вгору
const bubblesContainer = document.querySelector(".bubbles")

for (let i = 0; i < 40; i++) {
  const span = document.createElement("span");
  bubblesContainer.appendChild(span);

  randomizeBubble(span);
}

// Функція випадкових параметрів
function randomizeBubble(bubble) {
  const left = Math.random() * 100; // відсотки від ширини екрана
  const size = 10 + Math.random() * 20; // розмір 10–30 px
  const delay = Math.random() * 10; // затримка анімації
  const duration = 5 + Math.random() * 10; // тривалість 5–15 с

  bubble.style.left = `${left}%`;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.animationDelay = `${delay}s`;
  bubble.style.animationDuration = `${duration}s`;
}

// Періодичне оновлення параметрів (щоб рух не був синхронним)
setInterval(() => {
  document.querySelectorAll(".bubbles span").forEach(randomizeBubble);
}, 8000);