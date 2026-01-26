/* ===== AOS ===== */
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true
  });
  
  /* ===== MENU ACTIVE ===== */
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if (link.href === location.href) link.classList.add("active");
  });
  
  /* ===== SWIPER ===== */
  new Swiper(".swiper", {
    loop: true,
    spaceBetween: 24,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
  
  /* ===== PARALLAX SCROLL ===== */
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".parallax").forEach(el => {
      el.style.transform = `translateY(${window.scrollY * 0.15}px)`;
    });
  });
  
  /* ===== FORM VALIDATION ===== */
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      form.classList.add("loading");
  
      setTimeout(() => {
        localStorage.setItem("contact", "submitted");
        alert("Gửi thành công 🚀");
        form.reset();
        form.classList.remove("loading");
      }, 1500);
    });
  }
  