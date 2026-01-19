// ==========================================
// BÀI 1: ĐỔI NỀN TRANG (DARK MODE)
// ==========================================
const toggleBtn = document.getElementById('toggle-mode-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    // Toggle class 'dark' cho body
    body.classList.toggle('dark');
    
    // (Tuỳ chọn) Đổi nội dung nút bấm cho sinh động
    if (body.classList.contains('dark')) {
        toggleBtn.textContent = "Chuyển về nền Sáng ☀️";
    } else {
        toggleBtn.textContent = "Chuyển sang nền Tối 🌙";
    }
});


// ==========================================
// BÀI 2: MENU HIGHLIGHT KHI CUỘN (SCROLL SPY)
// ==========================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop; // Vị trí section so với đầu trang
        const sectionHeight = section.clientHeight;
        
        // Trừ bớt 60px (chiều cao menu) để bắt chính xác hơn
        if (window.scrollY >= (sectionTop - 150)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        // Xóa class active cũ
        link.classList.remove('active');
        // Thêm class active nếu href của link trùng với id section đang xem
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});


// ==========================================
// BÀI 3: HIỆU ỨNG XUẤT HIỆN KHI CUỘN (SCROLL REVEAL)
// ==========================================
const boxes = document.querySelectorAll('.box');

function checkBoxes() {
    // Điểm kích hoạt (trigger point): khi box trồi lên 4/5 màn hình
    const triggerBottom = window.innerHeight * 0.8;

    boxes.forEach(box => {
        // Lấy vị trí đỉnh của box so với viewport
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            // (Tuỳ chọn) Nếu muốn cuộn lên nó ẩn lại thì bỏ comment dòng dưới
            // box.classList.remove('show'); 
        }
    });
}

// Lắng nghe sự kiện scroll
window.addEventListener('scroll', checkBoxes);
// Gọi 1 lần đầu tiên đề phòng trường hợp box đã nằm sẵn trong màn hình
checkBoxes();


// ==========================================
// BÀI 4: NÚT "NHẢY LÊN" KHI HOVER
// ==========================================
const jumpBtn = document.querySelector('.jump-btn');

// Khi chuột lia vào (mouseover/mouseenter)
jumpBtn.addEventListener('mouseenter', () => {
    // Thêm class animate để kích hoạt keyframes CSS
    jumpBtn.classList.add('animate');
});

// Khi animation chạy xong, gỡ class ra để lần sau hover nó chạy lại được
jumpBtn.addEventListener('animationend', () => {
    jumpBtn.classList.remove('animate');
});


// ==========================================
// BÀI 5: HÌNH TRÒN DI CHUYỂN THEO CHUỘT
// ==========================================
const circle = document.querySelector('.circle');

document.addEventListener('mousemove', (e) => {
    // Lấy tọa độ chuột
    const x = e.clientX;
    const y = e.clientY;

    // Cập nhật vị trí CSS
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
});