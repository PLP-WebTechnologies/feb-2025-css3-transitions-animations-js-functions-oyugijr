const button = document.getElementById('animateBtn');
const colorPicker = document.getElementById('colorPicker');

// Load saved color
const savedColor = localStorage.getItem('btnColor');
if (savedColor) {
  button.style.backgroundColor = savedColor;
  colorPicker.value = savedColor;
}

// Save color on change
colorPicker.addEventListener('input', () => {
  const newColor = colorPicker.value;
  button.style.backgroundColor = newColor;
  localStorage.setItem('btnColor', newColor);
});

// Animate on click
button.addEventListener('click', () => {
  button.classList.add('animate');
  setTimeout(() => {
    button.classList.remove('animate');
  }, 300); // match CSS transition duration
});
