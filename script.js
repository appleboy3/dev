const year = document.getElementById('year');
const themeToggle = document.getElementById('themeToggle');
const root = document.body;

year.textContent = String(new Date().getFullYear());

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  root.setAttribute('data-theme', 'light');
  themeToggle.textContent = 'Dark';
}

themeToggle.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  if (isLight) {
    root.removeAttribute('data-theme');
    themeToggle.textContent = 'Light';
    localStorage.setItem('theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    themeToggle.textContent = 'Dark';
    localStorage.setItem('theme', 'light');
  }
});
