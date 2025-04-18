function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const dep = document.getElementById("departure");
    const ret = document.getElementById("return");
    const travelers = document.getElementById("travelers");
    const estimateBox = document.getElementById("price-estimate");

    function calculateEstimate() {
      const depDate = new Date(dep.value);
      const retDate = new Date(ret.value);
      const numTravelers = parseInt(travelers.value) || 1;

      if (dep.value && ret.value && retDate > depDate) {
        const days = Math.max(1, (retDate - depDate) / (1000 * 60 * 60 * 24));
        const pricePerDay = 3500;
        const estimate = days * numTravelers * pricePerDay;
        estimateBox.textContent = `Estimated Price: ₹${estimate.toLocaleString()}`;
      } else {
        estimateBox.textContent = "Estimated Price: ₹0";
      }
    }

    dep.addEventListener("change", calculateEstimate);
    ret.addEventListener("change", calculateEstimate);
    travelers.addEventListener("input", calculateEstimate);

    // Redirect to destination page when form is submitted
    const form = document.getElementById("tripForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const destination = document.getElementById("destination").value.trim().toLowerCase();
      if (destination) {
        const url = `${destination.replace(/\s+/g, "")}.html`;
        window.location.href = url;
      }
    });
  });
  const carousel = document.querySelector('.review-carousel');
  const cardWidth = 360; // 340 + margin
  let scrollPosition = 0;

  document.getElementById('nextBtn').addEventListener('click', () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    scrollPosition = Math.min(scrollPosition + cardWidth * 2, maxScroll);
    carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    scrollPosition = Math.max(scrollPosition - cardWidth * 2, 0);
    carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    const topbar = document.getElementById('topbar');
    if (window.scrollY > 50) {
      topbar.classList.add('scrolled');
    } else {
      topbar.classList.remove('scrolled');
    }
  });
  const faders = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });
  
  faders.forEach(fadeEl => observer.observe(fadeEl));
  const text = "Your dream vacations awaits with TRIVAGO...";
  const typedText = document.getElementById("typed-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typedText.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 70); // Adjust typing speed here
    }
  }

  window.onload = type;
  
