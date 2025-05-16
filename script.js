document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-password');
    const pwdInput = document.getElementById('password');
    const icon = document.getElementById('togglePasswordIcon');
    const showIcon = "https://auth.casio-intl.com/casio_contents/static/casio/v2/img/password-hidden.svg";
    const hideIcon = "https://auth.casio-intl.com/casio_contents/static/casio/v2/img/password-show.svg";

    toggleBtn.addEventListener('click', function() {
        if (pwdInput.type === 'password') {
            pwdInput.type = 'text';
            icon.src = showIcon;
            icon.alt = "隱藏密碼";
        } else {
            pwdInput.type = 'password';
            icon.src = hideIcon;
            icon.alt = "顯示密碼";
        }
    });
});