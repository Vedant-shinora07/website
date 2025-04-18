function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
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

