const progressBar = document.getElementById('progress-bar');
const progressBarInner = document.getElementById('progress-bar__inner');

const runInterval = () => {
  setInterval(() => {
    // Get updated width for each interval
    const width = progressBar.getAttribute('width') || 0;
    // Run loop while width is <= 100%
    if (width <= 100) {
      // Update width attribute
      progressBar.setAttribute('width', parseInt(width, 10) + 10);
      // Set width and text on elements
      progressBar.style.width = `${width}%`;
      progressBarInner.style.width = `${width}%`;
      progressBar.value += 0.1;
      progressBarInner.innerHTML = `${width}%`;
    }
  }, 100);
};

runInterval();
