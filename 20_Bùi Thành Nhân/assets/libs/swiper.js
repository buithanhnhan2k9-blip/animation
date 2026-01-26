(function () {
    window.Swiper = function (selector) {
      const swiper = document.querySelector(selector);
      const wrapper = swiper.querySelector('.swiper-wrapper');
      const slides = swiper.querySelectorAll('.swiper-slide');
      let index = 0;
  
      function update() {
        wrapper.style.transform = `translateX(-${index * 100}%)`;
        slides.forEach((s, i) => {
          s.classList.toggle('active', i === index);
        });
      }
  
      setInterval(() => {
        index = (index + 1) % slides.length;
        update();
      }, 3000);
  
      update();
    };
  })();
  