document.addEventListener("DOMContentLoaded", function () {
    // Efecto de desplazamiento suave
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Efecto de cambio de color en enlaces del menú al pasar el mouse
    links.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.color = 'yellow'; // Cambia el color al pasar el mouse
        });
        link.addEventListener('mouseout', function () {
            this.style.color = ''; // Vuelve al color original
        });
    });

    // Efecto de aparición al hacer scroll
    const elements = document.querySelectorAll('.main-content section > *');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    });

    elements.forEach(element => {
        element.classList.add('fade-in'); // Inicialmente oculto
        observer.observe(element);
    });

    // Efecto de zoom en imágenes al pasar el mouse
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.5s';
        });
        img.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
});

// CSS para el efecto de aparición
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        opacity: 0;
        transition: opacity 0.5s ease-in;
    }
    .is-visible {
        opacity: 1;
    }
`;
document.head.appendChild(style);