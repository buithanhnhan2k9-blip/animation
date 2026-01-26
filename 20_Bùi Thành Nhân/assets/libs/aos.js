(function () {
    function init() {
      const els = document.querySelectorAll('[data-aos]');
  
      function animate() {
        els.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
            el.classList.add('aos-animate');
          }
        });
      }
  
      window.addEventListener('scroll', animate);
      animate();
    }
  
    window.AOS = { init };
  })();
  