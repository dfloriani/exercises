document.addEventListener("DOMContentLoaded", () => {
    const sliderEl = document.querySelector("#range2");

    function updateSliderBackground(slider) {
      const value = slider.value;
      const progress = (value / slider.max) * 100;
      slider.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
    }

    // Initial background setup
    updateSliderBackground(sliderEl);

    // Event listener for input changes
    sliderEl.addEventListener("input", (event) => {
      updateSliderBackground(event.target);
    });
  });