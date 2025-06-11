document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-theme');
    const moon = 'img/moon.png';
    const sun = 'img/sun.png';

    // Cria o ícone dentro do botão
    toggleBtn.innerHTML = `<img src="${moon}" alt="Tema escuro" id="theme-icon">`;

    function updateIcon() {
        const icon = document.getElementById('theme-icon');
        if (document.body.classList.contains('dark-theme')) {
            icon.src = sun;
            icon.alt = "Tema claro";
        } else {
            icon.src = moon;
            icon.alt = "Tema escuro";
        }
    }

    toggleBtn.addEventListener('click', function() {
        // Animação de deslizar
        toggleBtn.classList.add('slide');
        setTimeout(() => {
            document.body.classList.toggle('dark-theme');
            updateIcon();
            toggleBtn.classList.remove('slide');
        }, 200);
    });

    // Atualiza o ícone ao carregar a página
    updateIcon();
});