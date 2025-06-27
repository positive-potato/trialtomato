// Glowing flicker effect on the main title

const title = document.getElementById('title');

function flicker() {
  const flickerIntensity = Math.random() * 0.5 + 0.5; // 0.5 to 1 opacity
  title.style.textShadow = `
    0 0 ${20 * flickerIntensity}px #00ffff,
    0 0 ${40 * flickerIntensity}px #00ffff,
    0 0 ${60 * flickerIntensity}px #0ff,
    0 0 ${80 * flickerIntensity}px #0ff,
    0 0 ${100 * flickerIntensity}px #0ff
  `;
}

setInterval(flicker, 300);
