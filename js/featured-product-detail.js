/* ===================================
   FEATURED PRODUCT DETAIL - JAVASCRIPT
   Página de detalle de productos destacados
   =================================== */

// Datos completos de productos destacados
const FEATURED_PRODUCTS_DATA = {
    'ventana-corredera-120x150': {
        name: 'Ventana Corredera 2 Hojas',
        specs: '120 x 150 cm | Aluminio Blanco',
        price: '450€',
        oldPrice: null,
        badge: 'Popular',
        badgeType: 'popular',
        category: 'ventana-corredera',
        type: 'ventana-corredera-2hojas',
        description: 'Ventana corredera de 2 hojas fabricada en aluminio de alta calidad con acabado en color blanco. Ideal para espacios que requieren máxima iluminación y ventilación. Sistema de deslizamiento suave y silencioso con rodamientos de acero inoxidable de larga duración.',
        features: [
            'Vidrio doble 4/16/4 con cámara de aire',
            'Perfil de aluminio 60mm con rotura de puente térmico (RPT)',
            'Rodamientos de acero inoxidable de alta resistencia',
            'Cierre multipunto de seguridad',
            'Instalación profesional incluida',
            'Mosquitera enrollable opcional'
        ],
        specifications: [
            'Dimensiones: 120 x 150 cm',
            'Material: Aluminio lacado',
            'Color: Blanco RAL 9010',
            'Grosor perfil: 60mm',
            'Tipo de vidrio: Doble 4/16/4',
            'Transmitancia térmica: 1.4 W/m²K',
            'Aislamiento acústico: 35 dB'
        ],
        images: [
            'assets/images/products/ventana-corredera.png',
            'assets/images/products/ventana-corredera.png',
            'assets/images/products/ventana-corredera.png'
        ]
    },
    'puerta-entrada-premium': {
        name: 'Puerta de Entrada Premium',
        specs: '90 x 210 cm | Acabado Roble',
        price: '780€',
        oldPrice: null,
        badge: 'Nuevo',
        badgeType: 'new',
        category: 'puerta-entrada',
        type: 'puerta-entrada-blindada',
        description: 'Puerta de entrada de alta seguridad con acabado en imitación roble. Diseñada para proporcionar máxima protección y elegancia a tu hogar. Incorpora un sistema de cierre multipunto y núcleo aislante para excelente comportamiento térmico y acústico.',
        features: [
            'Panel liso lacado con textura roble',
            'Sistema de cierre multipunto de 3 puntos de seguridad',
            'Aislamiento térmico con rotura de puente térmico (RPT)',
            'Bisagras antirrobo ocultas',
            'Cerradura de alta seguridad',
            'Instalación profesional incluida'
        ],
        specifications: [
            'Dimensiones: 90 x 210 cm',
            'Material: Aluminio con panel decorativo',
            'Acabado: Imitación roble',
            'Grosor: 70mm',
            'Núcleo: Aislante térmico',
            'Transmitancia térmica: 1.2 W/m²K',
            'Clasificación seguridad: Clase 3'
        ],
        images: [
            'assets/images/products/puerta-entrada.png',
            'assets/images/products/puerta-entrada.png',
            'assets/images/products/puerta-entrada.png'
        ]
    },
    'mosquitera-enrollable-80x180': {
        name: 'Mosquitera Enrollable',
        specs: '80 x 180 cm | Color Blanco',
        price: '149€',
        oldPrice: '180€',
        badge: 'Oferta',
        badgeType: 'sale',
        category: 'mosquitera-enrollable',
        type: 'mosquitera-enrollable-vertical',
        description: 'Mosquitera enrollable de recogida vertical superior, perfecta para puertas y ventanas. Sistema de freno suave para un enrollado controlado y silencioso. Tela de fibra de vidrio de alta resistencia que permite el paso del aire manteniendo los insectos fuera.',
        features: [
            'Recogida vertical superior con sistema de freno suave',
            'Tela de fibra de vidrio resistente y duradera',
            'Sistema de freno para enrollado controlado',
            'Perfiles de aluminio en color blanco',
            'Fácil limpieza y mantenimiento',
            'Instalación profesional incluida'
        ],
        specifications: [
            'Dimensiones: 80 x 180 cm',
            'Material perfil: Aluminio',
            'Color: Blanco RAL 9010',
            'Material tela: Fibra de vidrio',
            'Tipo de recogida: Vertical superior',
            'Sistema: Enrollable con freno',
            'Garantía: 2 años'
        ],
        images: [
            'assets/images/products/mosquitera-enrollable.jpg',
            'assets/images/products/mosquitera-enrollable.jpg',
            'assets/images/products/mosquitera-enrollable.jpg'
        ]
    }
};

// Inicializar página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initFeaturedProductDetail();
});

function initFeaturedProductDetail() {
    // Obtener el ID del producto de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('producto');

    if (!productId || !FEATURED_PRODUCTS_DATA[productId]) {
        // Si no hay producto válido, redirigir a inicio
        window.location.href = 'index.html#productos-destacados';
        return;
    }

    const product = FEATURED_PRODUCTS_DATA[productId];

    // Actualizar título de la página
    document.getElementById('page-title').textContent = `${product.name} | Industrias Dos Vientos`;

    // Actualizar breadcrumb
    document.getElementById('breadcrumb-product').textContent = product.name;

    // Actualizar header
    const badge = document.getElementById('product-badge');
    badge.textContent = product.badge;
    badge.className = `featured-product-detail__badge featured-product-detail__badge--${product.badgeType}`;

    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-specs').textContent = product.specs;

    // Actualizar galería
    const mainImage = document.getElementById('main-image');
    mainImage.src = product.images[0];
    mainImage.alt = product.name;

    const thumbnailsContainer = document.getElementById('thumbnails-container');
    thumbnailsContainer.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `featured-product-detail__thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="${product.name} - Vista ${index + 1}">`;
        thumbnail.addEventListener('click', () => {
            mainImage.src = image;
            document.querySelectorAll('.featured-product-detail__thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        thumbnailsContainer.appendChild(thumbnail);
    });

    // Actualizar precio
    const priceElement = document.getElementById('product-price');
    const oldPriceElement = document.getElementById('product-price-old');

    priceElement.textContent = product.price;

    if (product.oldPrice) {
        oldPriceElement.textContent = product.oldPrice;
        oldPriceElement.style.display = 'inline';
    } else {
        oldPriceElement.style.display = 'none';
    }

    // Actualizar descripción
    document.getElementById('product-description').textContent = product.description;

    // Actualizar características
    const featuresList = document.getElementById('product-features-list');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${feature}</span>
        `;
        featuresList.appendChild(li);
    });

    // Actualizar especificaciones
    const specsList = document.getElementById('product-specifications-list');
    specsList.innerHTML = '';
    product.specifications.forEach(spec => {
        const li = document.createElement('li');
        li.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
            <span>${spec}</span>
        `;
        specsList.appendChild(li);
    });

    // Configurar botón "Comprar Ahora"
    const buyButton = document.getElementById('buy-now-btn');
    buyButton.addEventListener('click', () => {
        // Guardar información en sessionStorage
        sessionStorage.setItem('purchaseMode', 'true');
        sessionStorage.setItem('quoteProductId', product.category);
        sessionStorage.setItem('quoteTypeId', product.type);
        sessionStorage.setItem('quoteProduct', product.name);
        sessionStorage.setItem('quoteType', product.specs);
        sessionStorage.setItem('productPrice', product.price);

        // Redirigir al formulario
        window.location.href = 'index.html#contacto';
    });
}
