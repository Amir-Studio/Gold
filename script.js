const homePage = document.getElementById("homePage");
const adPage = document.getElementById("adPage");
const finalPage = document.getElementById("finalPage");
const sections = document.getElementById("sections");

function showPage(page) {
  [homePage, adPage, finalPage].forEach(item => {
    item.classList.add("hidden");
  });

  page.classList.remove("hidden");
}

// ساخت ۹ بخش
for (let i = 1; i <= 9; i++) {
  const card = document.createElement("button");

  card.className = "section-card";
  card.textContent = `بخش ${i}`;

  card.addEventListener("click", () => {
    showPage(adPage);
  });

  sections.appendChild(card);
}

// تا زمان اضافه‌شدن کد اختصاصی جایگاه یکتانت، ادعای مشاهده‌شدن تبلیغ نکن.
document.getElementById("watchAd").addEventListener("click", () => {
  document.getElementById("adStatus").textContent =
    "برای نمایش تبلیغ واقعی، کد اختصاصی جایگاه تمام‌صفحه یکتانت هنوز لازم است.";
});

// بازگشت به صفحه اول
document.getElementById("backHome").addEventListener("click", () => {
  showPage(homePage);
});

document.getElementById("again").addEventListener("click", () => {
  showPage(homePage);
});
