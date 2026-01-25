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
        ]
    },
    'ventana-oscilobatiente-80x120': {
        name: 'Ventana Oscilobatiente',
        specs: '80 x 120 cm | Aluminio Gris Antracita',
        price: '520€',
        oldPrice: null,
        badge: 'Popular',
        badgeType: 'popular',
        category: 'ventana-oscilobatiente',
        type: 'ventana-oscilobatiente-1hoja',
        description: 'Ventana oscilobatiente de 1 hoja con sistema de apertura dual. Permite ventilación controlada en posición oscilobatiente y apertura completa cuando se necesita. Acabado en gris antracita RAL 7016, color tendencia que aporta elegancia y modernidad a cualquier fachada.',
        features: [
            'Sistema de apertura dual: abatible y oscilobatiente',
            'Vidrio doble bajo emisivo 4/16/4',
            'Perfil de 70mm con rotura de puente térmico',
            'Herrajes de alta calidad con regulación micrométrica',
            'Juntas de estanqueidad EPDM de larga duración',
            'Instalación profesional incluida'
        ],
        specifications: [
            'Dimensiones: 80 x 120 cm',
            'Material: Aluminio lacado',
            'Color: Gris antracita RAL 7016',
            'Grosor perfil: 70mm',
            'Tipo de vidrio: Bajo emisivo 4/16/4',
            'Transmitancia térmica: 1.3 W/m²K',
            'Aislamiento acústico: 38 dB'
        ],
        images: [
            'assets/images/products/ventana-oscilobatiente-1.jpg',
        ]
    },
    'persiana-aluminio-150x150': {
        name: 'Persiana de Aluminio Motorizada',
        specs: '150 x 150 cm | Con Mando',
        price: '690€',
        oldPrice: null,
        badge: 'Nuevo',
        badgeType: 'new',
        category: 'persiana-aluminio',
        type: 'persiana-motorizada',
        description: 'Persiana de lamas de aluminio extrusionado con sistema de motorización silencioso. Control mediante mando a distancia para máxima comodidad. Perfecta para ventanas de difícil acceso o para integrar en sistemas de domótica.',
        features: [
            'Motor tubular silencioso de bajo consumo',
            'Mando a distancia de 1 canal incluido',
            'Lamas de aluminio extrusionado de 45mm',
            'Sistema de seguridad antiobstáculos',
            'Compatible con domótica (Alexa, Google Home)',
            'Instalación completa incluida'
        ],
        specifications: [
            'Dimensiones: 150 x 150 cm',
            'Material: Aluminio extrusionado',
            'Grosor lamas: 45mm',
            'Motor: Tubular 230V',
            'Nivel sonoro: < 45 dB',
            'Consumo: 120W',
            'Garantía motor: 5 años'
        ],
        images: [
            'assets/images/products/persiana-aluminio-1.png',
        ]
    },
    'cerramiento-terraza-300x240': {
        name: 'Cerramiento de Terraza',
        specs: '300 x 240 cm | Sistema Corredera',
        price: '1450€',
        oldPrice: '1680€',
        badge: 'Oferta',
        badgeType: 'sale',
        category: 'cerramiento-terraza',
        type: 'cerramiento-corredera',
        description: 'Sistema de cerramiento de terraza con hojas correderas de gran tamaño. Amplía tu espacio habitable creando una zona protegida del viento y la lluvia sin renunciar a las vistas. Sistema de correderas con guía inferior embutida para evitar barreras arquitectónicas.',
        features: [
            'Sistema corredera de hojas apilables',
            'Vidrio templado de seguridad 6mm',
            'Guía inferior embutida sin barreras',
            'Rodamientos de acero inoxidable',
            'Perfiles reforzados para grandes dimensiones',
            'Diseño y montaje personalizado incluido'
        ],
        specifications: [
            'Dimensiones: 300 x 240 cm (personalizable)',
            'Material: Aluminio reforzado',
            'Tipo de vidrio: Templado 6mm',
            'Número de hojas: 4 correderas',
            'Carga máxima por hoja: 100kg',
            'Acabados disponibles: Varios colores',
            'Garantía: 10 años'
        ],
        images: [
            'assets/images/products/cerramiento-terraza-1.jpeg',
        ]
    },
    'puerta-garaje-240x200': {
        name: 'Puerta de Garaje Seccional',
        specs: '240 x 200 cm | Motorizada',
        price: '1890€',
        oldPrice: null,
        badge: 'Popular',
        badgeType: 'popular',
        category: 'puerta-garaje',
        type: 'puerta-garaje-seccional',
        description: 'Puerta de garaje seccional motorizada con paneles aislados de 40mm. Sistema de apertura vertical que aprovecha al máximo el espacio interior del garaje. Incluye motor, mando a distancia y sistema de seguridad completo.',
        features: [
            'Paneles seccionales aislados de 40mm',
            'Motor de cadena profesional con luz LED',
            'Dos mandos a distancia incluidos',
            'Sistema antiaplastamiento y antipánico',
            'Apertura vertical sin rieles laterales exteriores',
            'Instalación y puesta en marcha incluida'
        ],
        specifications: [
            'Dimensiones: 240 x 200 cm',
            'Material paneles: Acero galvanizado',
            'Aislamiento: Poliuretano 40mm',
            'Motor: Cadena 800N',
            'Velocidad apertura: 15 cm/s',
            'Ciclos garantizados: 25.000',
            'Garantía: 5 años'
        ],
        images: [
            'assets/images/products/puerta-garaje-1.jpg',
            'assets/images/products/puerta-garaje-2.jpeg',
        ]
    },
    'barandilla-escalera-500cm': {
        name: 'Barandilla de Escalera',
        specs: '500 cm lineales | Acero Inoxidable',
        price: '850€',
        oldPrice: null,
        badge: 'Nuevo',
        badgeType: 'new',
        category: 'barandilla',
        type: 'barandilla-acero-inoxidable',
        description: 'Barandilla de escalera fabricada en acero inoxidable AISI 304 con acabado pulido. Diseño moderno y minimalista que combina seguridad y estética. Cumple con todas las normativas vigentes de seguridad.',
        features: [
            'Acero inoxidable AISI 304 pulido',
            'Pasamanos ergonómico de 50mm',
            'Montantes cada 100cm máximo',
            'Cable tensor de acero inoxidable',
            'Anclajes ocultos para acabado limpio',
            'Instalación profesional incluida'
        ],
        specifications: [
            'Longitud: 500 cm lineales',
            'Material: Acero inoxidable AISI 304',
            'Diámetro pasamanos: 50mm',
            'Altura barandilla: 100cm',
            'Separación cables: 12cm',
            'Normativa: CTE DB SUA',
            'Garantía: 15 años'
        ],
        images: [
            'assets/images/products/barandilla-1.jpg',
        ]
    },
    'ventana-fija-200x150': {
        name: 'Ventana Fija Panorámica',
        specs: '200 x 150 cm | Vidrio de Seguridad',
        price: '720€',
        oldPrice: '850€',
        badge: 'Oferta',
        badgeType: 'sale',
        category: 'ventana-fija',
        type: 'ventana-fija-panoramica',
        description: 'Ventana fija de gran formato ideal para maximizar las vistas y la entrada de luz natural. Vidrio de seguridad laminado con tratamiento bajo emisivo para óptimo aislamiento térmico. Perfecta para salones y espacios que requieren gran luminosidad.',
        features: [
            'Vidrio laminado de seguridad 6+6mm',
            'Tratamiento bajo emisivo',
            'Perfil minimal de 60mm',
            'Sellado perimetral con silicona estructural',
            'Máxima entrada de luz natural',
            'Instalación profesional incluida'
        ],
        specifications: [
            'Dimensiones: 200 x 150 cm',
            'Material: Aluminio minimal',
            'Grosor perfil: 60mm',
            'Tipo de vidrio: Laminado 6+6mm bajo emisivo',
            'Transmitancia térmica: 1.2 W/m²K',
            'Aislamiento acústico: 40 dB',
            'Factor solar: 0.35'
        ],
        images: [
            'assets/images/products/ventana-fija-1.avif',
        ]
    }
};

// Hacer disponible globalmente para la página de listado
window.featuredProducts = Object.keys(FEATURED_PRODUCTS_DATA).map(id => ({
    id: id,
    title: FEATURED_PRODUCTS_DATA[id].name,
    specs: FEATURED_PRODUCTS_DATA[id].specs,
    description: FEATURED_PRODUCTS_DATA[id].description,
    price: FEATURED_PRODUCTS_DATA[id].price.replace('€', ''),
    originalPrice: FEATURED_PRODUCTS_DATA[id].oldPrice ? FEATURED_PRODUCTS_DATA[id].oldPrice.replace('€', '') : null,
    badge: FEATURED_PRODUCTS_DATA[id].badge,
    image: FEATURED_PRODUCTS_DATA[id].images[0]
}));

// Inicializar página cuando el DOM esté listo (solo en la página de detalle)
document.addEventListener('DOMContentLoaded', () => {
    // Solo ejecutar si estamos en la página de detalle
    if (document.getElementById('product-title')) {
        initFeaturedProductDetail();
    }
});

function initFeaturedProductDetail() {
    // Obtener el ID del producto de sessionStorage
    const productId = sessionStorage.getItem('selectedProductId');

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
