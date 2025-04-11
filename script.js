
let currentLanguage = 'en'; 

// Hàm chuyển đổi ngôn ngữ
function switchLanguage() {
  currentLanguage = currentLanguage === 'vi' ? 'en' : 'vi';
  document.getElementById('language-toggle').textContent = currentLanguage === 'vi' ? 'EN' : 'VI';

  // Cập nhật nội dung trên trang
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    const keys = key.split('.'); // Tách key thành mảng (ví dụ: "hero.title" -> ["hero", "title"])
    let translation = translations[currentLanguage];

    // Truy cập sâu vào object translations
    keys.forEach(k => {
      translation = translation[k];
    });

    element.textContent = translation;
  });
}

// Gắn sự kiện click cho nút chuyển đổi
document.getElementById('language-toggle').addEventListener('click', switchLanguage);

// Gọi hàm lần đầu để load ngôn ngữ mặc định
switchLanguage();