

let currentTheme = 'mid';

function toggleTheme() {
  let themeButton = document.querySelector('button[onclick="toggleTheme()"]');
  if (currentTheme === 'light') {
    document.body.classList.add('mid-theme');
    document.body.classList.remove('light-theme');
    currentTheme = 'mid';
    themeButton.textContent = 'Odatiy mavzu';
  } else if (currentTheme === 'mid') {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('mid-theme');
    currentTheme = 'dark';
    themeButton.textContent = 'Tunggi mavzu';
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    currentTheme = 'light';
    themeButton.textContent = 'Kunduzgi mavzu';
  }
}
