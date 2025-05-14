fetch('about.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('about-content').textContent = data;
  })
  .catch(error => {
    console.error('讀取失敗:', error);
    document.getElementById('about-content').textContent = "無法載入內容。";
  });