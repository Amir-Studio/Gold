const sections = document.getElementById("sections");
const notice = document.getElementById("notice");

const params = new URLSearchParams(window.location.search);
const selectedSection = Number(params.get("selected"));

if (selectedSection >= 1 && selectedSection <= 9) {
  notice.textContent =
    `بخش ${selectedSection} انتخاب شد؛ محتوای بازی هنوز در این نسخه آماده نیست.`;
}

// هر بخش به صفحه‌ای جدا می‌رود تا اسکریپت یکتانت در بارگذاری کامل صفحه اجرا شود.
// نمایش تبلیغ همچنان به فعال بودن جایگاه و در دسترس بودن تبلیغ در یکتانت بستگی دارد.
for (let i = 1; i <= 9; i++) {
  const card = document.createElement("button");
  card.className = "section-card";
  card.type = "button";
  card.textContent = `بخش ${i}`;
  card.addEventListener("click", () => {
    window.location.href = `ad.html?section=${i}`;
  });
  sections.appendChild(card);
}
