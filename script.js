const sections = document.getElementById("sections");

if (sections) {
  const faNumber = (value) => new Intl.NumberFormat("fa-IR", { minimumIntegerDigits: 2 }).format(value);

  for (let i = 1; i <= 12; i++) {
    const card = document.createElement("a");
    card.className = "section-card";
    card.href = `ad.html?section=${i}`;
    card.setAttribute("aria-label", `انتخاب مسیر ${i}`);
    card.innerHTML = `
      <span class="card-top">
        <span class="card-number">${String(i).padStart(2, "0")}</span>
        <span class="card-tag">مسیر محرمانه</span>
      </span>
      <span class="card-title">مسیر ${faNumber(i)}</span>
      <span class="card-bottom">
        <span class="card-caption">برای مشاهده انتخاب کن</span>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </span>
    `;
    sections.appendChild(card);
  }
}
