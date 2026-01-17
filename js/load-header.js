// Load Header
document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');

    if (headerPlaceholder) {
        fetch('includes/header.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;

                // Marcar el link activo basado en la página actual
                setActiveNavLink();
            })
            .catch(error => console.error('Error loading header:', error));
    }
});

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        link.classList.remove('active');

        const href = link.getAttribute('href');

        // Si estamos en index.html o en la raíz
        if ((currentPage === 'index.html' || currentPage === '') && href === 'index.html#inicio') {
            link.classList.add('active');
        }
        // Si estamos en página de listado de destacados
        else if (currentPage === 'productos-destacados-listado.html' && href === 'index.html#productos-destacados') {
            link.classList.add('active');
        }
        // Si estamos en detalle de producto destacado
        else if (currentPage === 'producto-destacado-detalle.html' && href === 'index.html#productos-destacados') {
            link.classList.add('active');
        }
        // Si estamos en detalle de producto normal
        else if (currentPage === 'producto-detalle.html' && href === 'index.html#productos') {
            link.classList.add('active');
        }
    });
}
