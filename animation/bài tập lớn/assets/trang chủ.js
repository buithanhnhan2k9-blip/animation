// Dark / Light mode
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Scroll Spy (Trang chủ)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 150) {
            current = sec.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
