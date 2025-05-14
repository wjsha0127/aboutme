// 🔁 載入 about.txt → 顯示到首頁 introText 中
fetch('about.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('introText').textContent = data;
  })
  .catch(error => {
    document.getElementById('introText').textContent = '無法載入介紹內容。';
    console.error('讀取失敗：', error);
  });

// 🌗 主題切換功能
const toggleButton = document.getElementById('themeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
});

// 📄 分頁切換邏輯
const tabButtons = document.querySelectorAll(".tab-btn");
const tabSections = document.querySelectorAll(".tab-section");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabSections.forEach(section => section.classList.add("hidden"));
    button.classList.add("active");
    const target = button.getAttribute("data-target");
    document.getElementById(target).classList.remove("hidden");
  });
});