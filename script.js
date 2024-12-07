// script.js
const htmlEl = document.documentElement;
const toggleBtn = document.getElementById('toggleThemeBtn');

toggleBtn.addEventListener('click', () => {
  const currentTheme = htmlEl.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', newTheme);
});
