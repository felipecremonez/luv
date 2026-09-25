const opening = document.getElementById("opening");
const memory = document.getElementById("memory");
const slides = [...document.querySelectorAll(".slide")];
const dots = document.getElementById("dots");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

function revealMemories() {
  memory.classList.add("revealed");
  setTimeout(() => memory.scrollIntoView({ behavior: "smooth", block: "start" }), 500);
}

setTimeout(revealMemories, 5200);

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.setAttribute("aria-label", `Ir para foto ${i + 1}`);
  dot.addEventListener("click", () => showSlide(i));
  dots.appendChild(dot);
});

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
  [...dots.children].forEach((dot, i) => dot.classList.toggle("active", i === current));
}

prev.addEventListener("click", () => {
  showSlide(current - 1);
  restartAutoPlay();
});

next.addEventListener("click", () => {
  showSlide(current + 1);
  restartAutoPlay();
});


let startX = 0;
document.getElementById("carousel").addEventListener("touchstart", e => startX = e.touches[0].clientX, {passive:true});
document.getElementById("carousel").addEventListener("touchend", e => {
  const diff = startX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 45) {
    showSlide(current + (diff > 0 ? 1 : -1));
    restartAutoPlay();
  }
}, {passive:true});

// Pequenas partículas que aparecem quando a flor termina de abrir.
setTimeout(() => {
  for (let i = 0; i < 22; i++) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.style.left = `${45 + Math.random() * 10}%`;
    spark.style.top = `${48 + Math.random() * 12}%`;
    spark.style.setProperty("--x", `${(Math.random() - .5) * 260}px`);
    spark.style.setProperty("--y", `${(Math.random() - .5) * 220}px`);
    opening.appendChild(spark);
    setTimeout(() => spark.remove(), 1800);
  }
}, 3800);

const extraStyles = document.createElement("style");
extraStyles.textContent = `
.spark {
  position:absolute; width:4px; height:4px; border-radius:50%; background:#ffd8e4;
  box-shadow:0 0 12px #f2a9c0; z-index:4; pointer-events:none;
  animation:sparkle 1.7s ease-out forwards;
}
@keyframes sparkle {
  0% { transform:translate(0,0) scale(0); opacity:0; }
  15% { opacity:1; transform:translate(0,0) scale(1); }
  100% { transform:translate(var(--x),var(--y)) scale(0); opacity:0; }
}
`;
document.head.appendChild(extraStyles);
