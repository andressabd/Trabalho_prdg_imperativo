// Função para adicionar a classe 'visible' nas seções ao rolar a página
function handleScroll() {
    const sections = document.querySelectorAll('.fade-section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        // Verifica se a seção está visível na tela
        if (sectionTop < windowHeight - 150) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Adiciona o evento de scroll para a animação de fade nas seções
window.addEventListener('scroll', handleScroll);

// Navegação suave para as seções
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão de navegação
        const targetId = this.getAttribute('href').substring(1); // Obtém o ID da seção de destino
        const targetSection = document.getElementById(targetId); // Seleciona a seção

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Ajusta a posição para não sobrepor o cabeçalho
            behavior: 'smooth' // Define o comportamento da rolagem como suave
        });
    });
});

// Quando a página carrega, ativa as animações para as seções visíveis
document.addEventListener('DOMContentLoaded', handleScroll);
