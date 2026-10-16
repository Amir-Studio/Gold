const sections = document.getElementById("sections");

for (let i = 1; i <= 9; i++) {
  const card = document.createElement("a");
  card.className = "section-card";
  card.href = `ad.html?section=${i}`;
  card.setAttribute("aria-label", `انتخاب بخش ${i}`);
  card.innerHTML = `
    <span class="card-number">${String(i).padStart(2, "0")}</span>
    <span class="card-title">بخش ${new Intl.NumberFormat("fa-IR").format(i)}</span>
    <span class="card-arrow" aria-hidden="true">↗</span>
  `;
  sections.appendChild(card);
}
