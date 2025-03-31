// Inicializar AOS
AOS.init({
    duration: 800,
    once: true
});

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    
    const themeIcon = document.querySelector('.theme-icon');
    const themeText = document.querySelector('.theme-text');
    
    if (newTheme === 'dark') {
        themeIcon.textContent = 'light_mode';
        themeText.textContent = 'Modo Claro';
    } else {
        themeIcon.textContent = 'dark_mode';
        themeText.textContent = 'Modo Oscuro';
    }
} 