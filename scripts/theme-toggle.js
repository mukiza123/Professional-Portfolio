// ==========================================
// Dark/Light Mode Toggle
// ==========================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply theme on page load
html.setAttribute('data-theme', currentTheme);

// Toggle theme function
function toggleTheme() {
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  
  // Optional: Add haptic feedback for supported devices
  if (navigator.vibrate) {
    navigator.vibrate(10);
  }
}

// Event listener
themeToggle.addEventListener('click', toggleTheme);

// Keyboard accessibility
themeToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleTheme();
  }
});

// Listen for system theme changes
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

darkModeQuery.addEventListener('change', (e) => {
  // Only auto-switch if user hasn't manually set a preference
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
  }
});