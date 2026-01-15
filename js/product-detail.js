/* ===================================
   PRODUCT DETAIL PAGE - JAVASCRIPT
   =================================== */

// ============= INICIALIZACIÓN =============
document.addEventListener('DOMContentLoaded', () => {
    initProductDetailPage();
    initNavigation();
});

// ============= CARGAR DETALLE DEL PRODUCTO =============
function initProductDetailPage() {
    // Obtener el ID del producto de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('producto');

    if (!productId || !PRODUCT_DATA[productId]) {
        // Si no hay producto o no existe, redirigir a la página principal
        window.location.href = 'index.html#productos';
        return;
    }

    const product = PRODUCT_DATA[productId];

    // Actualizar título de la página y breadcrumb
    document.getElementById('page-title').textContent = `${product.name} | Industrias Dos Vientos`;
    document.getElementById('breadcrumb-product').textContent = product.name;

    // Cargar header del producto
    loadProductHeader(product);

    // Cargar tipos de producto
    loadProductTypes(product, productId);

    // Cargar características
    loadProductFeatures(product);

    // Actualizar botón de WhatsApp
    updateWhatsAppButton(product);
}

// ============= CARGAR HEADER =============
function loadProductHeader(product) {
    const headerContainer = document.getElementById('product-header');

    const html = `
        <div class="product-detail__image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail__header-info">
            <h1>${product.name}</h1>
            <p>${product.description}</p>
        </div>
    `;

    headerContainer.innerHTML = html;
}

// ============= CARGAR TIPOS DE PRODUCTO =============
function loadProductTypes(product, productId) {
    const typesContainer = document.getElementById('product-types');

    const html = product.types.map(type => `
        <div class="product-detail__type">
            <h4>${type.title}</h4>
            <ul>
                ${type.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="product-item__btn" onclick="requestQuote('${productId}', '${product.name}', '${type.title}', '${type.id}')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px; margin-right: 8px;">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
                Solicitar Presupuesto
            </button>
        </div>
    `).join('');

    typesContainer.innerHTML = html;
}

// ============= CARGAR CARACTERÍSTICAS =============
function loadProductFeatures(product) {
    const featuresContainer = document.getElementById('product-features');

    const html = product.features.map(feature => `
        <div class="product-detail__feature">
            <div class="product-detail__feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
            <div class="product-detail__feature-content">
                <h5>${feature.title}</h5>
                <p>${feature.description}</p>
            </div>
        </div>
    `).join('');

    featuresContainer.innerHTML = html;
}

// ============= ACTUALIZAR WHATSAPP =============
function updateWhatsAppButton(product) {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        const message = `Hola, me gustaría información sobre ${product.name}`;
        whatsappBtn.href = `https://wa.me/34605431127?text=${encodeURIComponent(message)}`;
    }
}

// ============= SOLICITAR PRESUPUESTO =============
function requestQuote(productId, productName, typeName, typeId) {
    // Guardar información en sessionStorage
    sessionStorage.setItem('quoteProductId', productId);
    sessionStorage.setItem('quoteProduct', productName);
    sessionStorage.setItem('quoteType', typeName);
    sessionStorage.setItem('quoteTypeId', typeId);

    // Redirigir al formulario de contacto
    window.location.href = 'index.html#contacto';
}

// ============= NAVEGACIÓN =============
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Crear overlay para móvil
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    // Abrir menú
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
            overlay.classList.add('show');
            navToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Cerrar menú
    const closeMenu = () => {
        navMenu.classList.remove('show-menu');
        overlay.classList.remove('show');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (navClose) {
        navClose.addEventListener('click', closeMenu);
    }

    overlay.addEventListener('click', closeMenu);

    // Cerrar al hacer clic en un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY >= 80) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
        }
    });
}
