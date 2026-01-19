document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    let isValid = true;

    clearErrors();

    // Họ tên
    if (fullname.value.trim() === "") {
        showError(fullname, "Vui lòng nhập họ và tên");
        isValid = false;
    }

    // Email
    if (email.value.trim() === "") {
        showError(email, "Vui lòng nhập email");
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, "Email không hợp lệ");
        isValid = false;
    }

    // Mật khẩu
    if (password.value.length < 6) {
        showError(password, "Mật khẩu phải có ít nhất 6 ký tự");
        isValid = false;
    }

    // Xác nhận mật khẩu
    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Mật khẩu xác nhận không khớp");
        isValid = false;
    }

    if (isValid) {
        alert("Đăng ký thành công!");
        document.getElementById("registerForm").reset();
    }
});

function showError(input, message) {
    let parent = input.parentElement;
    let error = parent.querySelector(".error");
    error.innerText = message;
}

function clearErrors() {
    let errors = document.querySelectorAll(".error");
    errors.forEach(err => err.innerText = "");
}

function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
