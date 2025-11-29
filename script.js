// Initialize AOS animations
AOS.init({
  duration: 800,
  once: true,
});

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

/* ================= Typing Effect for Hero ================= */
const typingTextEl = document.getElementById("typing-text");
const typingPhrases = [
  "AI Agent Builder",
  "Problem-Solving Developer",
  "Automation Enthusiast",
  "VIBE Coding & AI Graduate",
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let deleting = false;

function typeEffect() {
  const currentPhrase = typingPhrases[currentPhraseIndex];

  if (!deleting) {
    // Typing
    typingTextEl.textContent = currentPhrase.slice(0, currentCharIndex + 1);
    currentCharIndex++;

    if (currentCharIndex === currentPhrase.length) {
      deleting = true;
      setTimeout(typeEffect, 1500); // pause at end of word
      return;
    }
  } else {
    // Deleting
    typingTextEl.textContent = currentPhrase.slice(0, currentCharIndex - 1);
    currentCharIndex--;

    if (currentCharIndex === 0) {
      deleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % typingPhrases.length;
    }
  }

  const speed = deleting ? 40 : 80;
  setTimeout(typeEffect, speed);
}

if (typingTextEl) {
  typeEffect();
}

/* ================= Project Filter Buttons ================= */
const filterButtons = document.querySelectorAll(".project-filter");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button UI
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectItems.forEach((item) => {
      const category = item.getAttribute("data-category");
      if (filter === "all" || filter === category) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });
  });
});