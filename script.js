const garden = document.getElementById('garden');
const button = document.getElementById('growButton');
const hint = document.getElementById('hint');
const sparkles = document.getElementById('sparkles');
let grown = false;

function makePetals(count = 22) {
  const symbols = ['✿', '❀', '♡', '✧'];
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal-fall';
    petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.color = ['#e88eb0', '#c5a4e5', '#f2b9c9', '#e5b96e'][Math.floor(Math.random() * 4)];
    petal.style.animationDuration = `${3 + Math.random() * 3}s`;
    petal.style.animationDelay = `${Math.random() * 1.2}s`;
    petal.style.setProperty('--drift', `${Math.random() * 140 - 70}px`);
    sparkles.appendChild(petal);
    petal.addEventListener('animationend', () => petal.remove());
  }
}

button.addEventListener('click', () => {
  grown = !grown;
  garden.classList.toggle('grown', grown);
  if (grown) {
    button.innerHTML = '<span>♡</span> Make it bloom again';
    hint.textContent = 'Every flower is a little reminder that you are loved. 💗';
    makePetals();
  } else {
    button.innerHTML = '<span>✿</span> Grow our garden';
    hint.textContent = 'Tap the button and let the flowers bloom.';
  }
});

window.addEventListener('load', () => {
  // Let the visitor choose when the garden blooms.
});
