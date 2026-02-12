const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const result = document.getElementById("result");
const sub    = document.getElementById("sub");
const card   = document.getElementById("card");

function moveNoButton() {
  // Keep the No button inside the card area
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const padding = 12;
  const maxX = cardRect.width - btnRect.width - padding * 2;
  const maxY = cardRect.height - btnRect.height - padding * 2;

  // random position
  const x = Math.max(padding, Math.floor(Math.random() * maxX));
  const y = Math.max(padding, Math.floor(Math.random() * maxY));

  // make it "float" around
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); moveNoButton(); });

yesBtn.addEventListener("click", () => {
  result.classList.remove("hidden");
  sub.textContent = "Best answer 😌💖";
  yesBtn.disabled = true;
  noBtn.disabled = true;

  // OPTIONAL: redirect instead of showing message
  // window.location.href = "https://example.com/surprise";
});
