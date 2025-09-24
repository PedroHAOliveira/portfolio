document.addEventListener('DOMContentLoaded', () => {

    // --- EFEITO DE DIGITAÇÃO PARA A PÁGINA PRINCIPAL ---
    const typingTitle = document.getElementById('typing-title');

    function typeEffect(element) {
        // Pega o texto original e limpa o conteúdo do elemento
        const text = element.innerText;
        element.innerText = '';
        let i = 0;

        // Inicia o intervalo para adicionar um caractere de cada vez
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                element.innerText += text.charAt(i);
                i++;
            } else {
                // Para o intervalo quando o texto terminar
                clearInterval(typingInterval);
                // Remove a classe para parar o piscar do cursor
                element.classList.add('typing-complete');
            }
        }, 75); // Velocidade da digitação em milissegundos
    }

    // Executa o efeito apenas se o elemento com o ID existir na página atual
    if (typingTitle) {
        typeEffect(typingTitle);
    }

    // --- ANIMAÇÃO DE ELEMENTOS AO ROLAR A PÁGINA ---
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento está visível
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

});

// Adiciona um estilo CSS para o cursor parar de piscar após a digitação
const style = document.createElement('style');
style.innerHTML = `
    #typing-title.typing-complete::after {
        content: '';
        animation: none;
    }
`;
document.head.appendChild(style);
