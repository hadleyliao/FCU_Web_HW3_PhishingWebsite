// 等待整個 HTML 文件內容（DOM）載入完成後才執行裡面的 JS 程式碼
document.addEventListener('DOMContentLoaded', function() {
    // ===== 密碼顯示/隱藏功能區塊 =====
    // 取得「顯示/隱藏密碼」按鈕
    const toggleBtn = document.querySelector('.toggle-password');
    // 取得密碼輸入欄位
    const pwdInput = document.getElementById('password');
    // 取得密碼欄位旁邊的眼睛圖示
    const icon = document.getElementById('togglePasswordIcon');
    // 兩張眼睛 icon 的網址，showIcon是顯示密碼（打開眼睛），hideIcon是隱藏密碼（閉上眼睛）
    const showIcon = "https://auth.casio-intl.com/casio_contents/static/casio/v2/img/password-show.svg";
    const hideIcon = "https://auth.casio-intl.com/casio_contents/static/casio/v2/img/password-hidden.svg";

    // 檢查三個元素都存在才繼續執行
    if (toggleBtn && pwdInput && icon) {
        // 當點擊眼睛按鈕時
        toggleBtn.addEventListener('click', function() {
            // 判斷目前密碼欄位是否是「密碼」型態
            const isPwd = pwdInput.type === 'password';
            // 如果現在是密碼（●●●），就顯示明文；如果已經是明文，則切回密碼
            pwdInput.type = isPwd ? 'text' : 'password';
            // 同時切換 icon 圖片
            icon.src = isPwd ? hideIcon : showIcon;
            // 也切換圖片的說明文字（無障礙用）
            icon.alt = isPwd ? "隱藏密碼" : "顯示密碼";
        });
    }

    // ===== 登入表單送出時直接跳轉區塊 =====
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    window.location.href = "https://hadleyliao.github.io/FCU_Web_HW1_Casio404ErrorPage/";
                } else {
                    alert('登入失敗');
                }
            })
            .catch(() => alert('伺服器錯誤'));
        });
    }
});