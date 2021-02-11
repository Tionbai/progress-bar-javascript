/* eslint-disable */
'use strict';

var progressBar = document.getElementById('progress-bar');
var progressBarInner = document.getElementById('progress-bar__inner');

var runInterval = function runInterval() {
  setInterval(function () {
    // Get updated width for each interval
    var width = progressBar.getAttribute('width') || 0;
    // Run loop while width is <= 100%
    if (width <= 100) {
      // Update width attribute
      progressBar.setAttribute('width', parseInt(width, 10) + 10);
      // Set width and text on elements
      progressBar.style.width = width + '%';
      progressBarInner.style.width = width + '%';
      progressBar.value += 0.1;
      progressBarInner.innerHTML = width + '%';
    }
  }, 100);
};

runInterval();
