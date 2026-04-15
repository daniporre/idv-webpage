/* ===================================
   INDUSTRIAS DOS VIENTOS - JAVASCRIPT
   Funcionalidad interactiva y gestión de formularios
   =================================== */


// ============= ESTADO DE LA APLICACIÓN =============
const App = {
    init() {
        this.initNavigation();
        this.initSmoothScroll();
        this.initFAQ();
        this.initForm();
        this.initScrollEffects();
        this.initGallery();
        this.initProductTabs();
        this.initProductDetail();
        this.initFeaturedProducts();
        this.initHeroCarousel();
    },

    // ============= NAVEGACIÓN =============
    initNavigation() {
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
        
        // Active link on scroll
        this.updateActiveLink();
        window.addEventListener('scroll', () => this.updateActiveLink());
    },

    updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    },

    // ============= SMOOTH SCROLL =============
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Ignorar enlaces sin hash válido
                if (href === '#' || href === '') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerHeight = 80;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    // ============= FAQ (PREGUNTAS FRECUENTES) =============
    initFAQ() {
        const faqItems = document.querySelectorAll('.faq__item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq__question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Cerrar todos los items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Abrir el clickeado si no estaba activo
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    },

    // ============= FORMULARIO DE CONTACTO =============
    initForm() {
        const form = document.getElementById('budget-form');
        const formStatus = document.getElementById('form-status');

        if (form) {
            // Inicializar selector de tipos de producto
            this.initProductTypeSelector();

            // Pre-rellenar formulario si viene de un producto específico
            this.prefillFormFromQuote();

            form.addEventListener('submit', (e) => this.handleFormSubmit(e, form, formStatus));
        }
    },

    initProductTypeSelector() {
        const categorySelect = document.getElementById('product-category');
        const typeSelect = document.getElementById('product-type');
        const typeContainer = document.getElementById('product-type-container');

        if (!categorySelect || !typeSelect || !typeContainer) return;

        // Cuando cambia la categoría, cargar los tipos
        categorySelect.addEventListener('change', (e) => {
            const productId = e.target.value;

            if (productId === 'otro' || !productId) {
                // Ocultar selector de tipos si es "Otro" o no hay selección
                typeContainer.style.display = 'none';
                typeSelect.required = false;
                typeSelect.innerHTML = '<option value="">Primero selecciona una categoría</option>';
                return;
            }

            // Verificar si existe en PRODUCT_DATA
            if (typeof PRODUCT_DATA !== 'undefined' && PRODUCT_DATA[productId]) {
                const product = PRODUCT_DATA[productId];

                // Cargar tipos del producto
                typeSelect.innerHTML = '<option value="">Selecciona un tipo</option>';
                product.types.forEach(type => {
                    const option = document.createElement('option');
                    option.value = type.id;
                    option.textContent = type.title;
                    typeSelect.appendChild(option);
                });

                // Mostrar selector de tipos
                typeContainer.style.display = 'block';
                typeSelect.required = true;
            } else {
                // Si no hay datos del producto, ocultar selector
                typeContainer.style.display = 'none';
                typeSelect.required = false;
            }
        });
    },

    prefillFormFromQuote() {
        const productId = sessionStorage.getItem('quoteProductId');
        const typeId = sessionStorage.getItem('quoteTypeId');
        const productName = sessionStorage.getItem('quoteProduct');
        const typeName = sessionStorage.getItem('quoteType');
        const isPurchaseMode = sessionStorage.getItem('purchaseMode') === 'true';
        const productPrice = sessionStorage.getItem('productPrice');

        if (productId && typeId) {
            // Esperar un momento para que el DOM esté listo
            setTimeout(() => {
                const categorySelect = document.getElementById('product-category');
                const typeSelect = document.getElementById('product-type');
                const typeContainer = document.getElementById('product-type-container');
                const formTitle = document.querySelector('.contact__form h3');
                const submitButton = document.querySelector('.contact__form button[type="submit"]');

                // Cambiar el título y botón del formulario según el modo
                if (isPurchaseMode) {
                    if (formTitle) {
                        formTitle.textContent = 'Solicitar Compra';
                    }
                    if (submitButton) {
                        const buttonText = submitButton.querySelector('span');
                        if (buttonText) {
                            buttonText.textContent = 'Solicitar Compra';
                        }
                    }
                }

                if (categorySelect) {
                    // Seleccionar la categoría
                    categorySelect.value = productId;

                    // Disparar el evento change para cargar los tipos
                    const event = new Event('change');
                    categorySelect.dispatchEvent(event);

                    // Esperar a que se carguen los tipos y seleccionar el tipo específico
                    setTimeout(() => {
                        if (typeSelect) {
                            typeSelect.value = typeId;
                        }

                        // Rellenar el campo de mensaje
                        const messageField = document.getElementById('message');
                        if (messageField && !messageField.value && productName && typeName) {
                            if (isPurchaseMode && productPrice) {
                                messageField.value = `Quiero comprar:\n${productName}\n${typeName}\nPrecio: ${productPrice}\n\nPor favor, confirmen disponibilidad y proceso de compra.`;
                            } else {
                                messageField.value = `Estoy interesado/a en ${productName} - ${typeName}.\n\n`;
                            }
                        }

                        // Hacer scroll al formulario
                        const contactSection = document.getElementById('contacto');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 100);
                }

                // Limpiar sessionStorage después de usar
                sessionStorage.removeItem('quoteProduct');
                sessionStorage.removeItem('quoteType');
                sessionStorage.removeItem('quoteTypeId');
                sessionStorage.removeItem('quoteProductId');
                sessionStorage.removeItem('purchaseMode');
                sessionStorage.removeItem('productPrice');
            }, 300);
        }
    },

    async handleFormSubmit(e, form, formStatus) {
        e.preventDefault();

        // Validar formulario
        if (!this.validateForm(form)) {
            this.showFormStatus(formStatus, 'error', 'Por favor, completa todos los campos requeridos.');
            return;
        }

        // Detectar si es modo compra (viene de producto destacado)
        const isPurchaseMode = sessionStorage.getItem('purchaseMode') === 'true';
        const requestType = isPurchaseMode ? 'Compra' : 'Presupuesto';

        // Obtener datos del formulario
        const formData = new FormData(form);
        const data = {
            requestType: requestType,
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            address: formData.get('address'),
            productType: formData.get('product-type'),
            measurements: formData.get('measurements'),
            quantity: formData.get('quantity'),
            message: formData.get('message')
        };
        
        // Mostrar loading
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span>Enviando...</span>';
        submitButton.classList.add('loading');
        
        try {
            await this.sendEmail(data);

            // Éxito
            this.showFormStatus(formStatus, 'success', '¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.');
            //form.reset();

            // Limpiar purchaseMode después de enviar
            sessionStorage.removeItem('purchaseMode');

            // Scroll al mensaje de éxito
            formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            this.showFormStatus(
                formStatus,
                'error',
                'Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo o contáctanos directamente por teléfono o WhatsApp.'
            );
        } finally {
            // Restaurar botón
            this.showFormStatus(formStatus, 'success', '¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.');

            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
            submitButton.classList.remove('loading');
        }
    },

    validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'var(--color-error)';
            } else {
                field.style.borderColor = '';
            }
        });
        
        // Validar email
        const emailField = form.querySelector('[type="email"]');
        if (emailField && emailField.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value)) {
                isValid = false;
                emailField.style.borderColor = 'var(--color-error)';
            }
        }
        
        // Validar teléfono
        const phoneField = form.querySelector('[type="tel"]');
        if (phoneField && phoneField.value) {
            const phoneRegex = /^[0-9\s\+\-\(\)]{9,}$/;
            if (!phoneRegex.test(phoneField.value)) {
                isValid = false;
                phoneField.style.borderColor = 'var(--color-error)';
            }
        }
        
        return isValid;
    },

    async sendEmail(data) {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error || 'Error al enviar el mensaje.');
        }
    },

    getProductTypeName(value) {
        const productTypes = {
            'ventanas-correderas': 'Ventanas Correderas',
            'ventanas-abatibles': 'Ventanas Abatibles',
            'ventanas-replegables': 'Ventanas Replegables',
            'puertas-correderas': 'Puertas Correderas',
            'puertas-abatibles': 'Puertas Abatibles',
            'puertas-entrada': 'Puertas de Entrada',
            'puertas-cochera': 'Puertas de Cochera',
            'mosquiteras-fijas': 'Mosquiteras Fijas',
            'mosquiteras-correderas': 'Mosquiteras Correderas',
            'mosquiteras-enrollables': 'Mosquiteras Enrollables',
            'otro': 'Otro'
        };
        return productTypes[value] || value;
    },

    showFormStatus(statusElement, type, message) {
        statusElement.className = 'form__status';
        statusElement.classList.add(`form__status--${type}`);
        statusElement.textContent = message;
        
        // Auto-ocultar después de 10 segundos
        setTimeout(() => {
            statusElement.style.display = 'none';
        }, 10000);
    },

    // ============= EFECTOS DE SCROLL =============
    initScrollEffects() {
        // Intersection Observer para animaciones al hacer scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observar elementos que queremos animar
        const animatedElements = document.querySelectorAll(`
            .service-card,
            .product-category,
            .gallery__item,
            .faq__item,
            .certification-badge
        `);
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    },

    // ============= GALERÍA =============
    initGallery() {
        const galleryItems = document.querySelectorAll('.gallery__item');

        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('.gallery__img');
                if (img) {
                    // Aquí podrías abrir un lightbox o modal
                    // Por ahora solo hacemos un efecto visual
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 200);
                }
            });
        });
    },

    // ============= TABS DE PRODUCTOS =============
    initProductTabs() {
        const tabs = document.querySelectorAll('.products__tab');
        const categories = document.querySelectorAll('.product-category');

        if (tabs.length === 0 || categories.length === 0) return;

        // Mostrar solo la primera categoría al inicio
        categories.forEach((category, index) => {
            if (index === 0) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });

        // Manejar clicks en tabs
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetCategory = tab.dataset.category;

                // Remover clase activa de todos los tabs
                tabs.forEach(t => t.classList.remove('products__tab--active'));

                // Añadir clase activa al tab clickeado
                tab.classList.add('products__tab--active');

                // Ocultar todas las categorías
                categories.forEach(category => {
                    category.style.display = 'none';
                });

                // Mostrar la categoría seleccionada
                const activeCategory = document.querySelector(`.product-category[data-category="${targetCategory}"]`);
                if (activeCategory) {
                    activeCategory.style.display = 'block';

                    // Animar la entrada
                    activeCategory.style.opacity = '0';
                    activeCategory.style.transform = 'translateY(20px)';

                    setTimeout(() => {
                        activeCategory.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        activeCategory.style.opacity = '1';
                        activeCategory.style.transform = 'translateY(0)';
                    }, 10);
                }
            });
        });
    },

    // ============= DETALLE DE PRODUCTO =============
    initProductDetail() {
        // Usar delegación de eventos para manejar clicks en botones de productos
        // Esto funciona incluso si los productos se ocultan/muestran dinámicamente
        document.addEventListener('click', (e) => {
            // Verificar si el click fue en un botón de producto
            if (e.target.classList.contains('product-item__btn') ||
                e.target.closest('.product-item__btn')) {

                e.preventDefault();
                e.stopPropagation();

                // Buscar el elemento padre product-item
                const productItem = e.target.closest('.product-item');

                if (productItem) {
                    const productId = productItem.dataset.product;
                    if (productId) {
                        window.location.href = `producto-detalle.html?producto=${productId}`;
                    }
                }
            }
        });
    },

    // ============= PRODUCTOS DESTACADOS =============
    initFeaturedProducts() {
        // Manejar clicks en las cards de productos destacados
        document.addEventListener('click', (e) => {
            // Si es el botón "Comprar Ahora", manejar la compra
            if (e.target.classList.contains('featured-product-card__btn') ||
                e.target.closest('.featured-product-card__btn')) {

                e.preventDefault();
                e.stopPropagation();

                const featuredCard = e.target.closest('.featured-product-card');
                if (featuredCard) {
                    const productId = featuredCard.dataset.productId;

                    // Datos de productos destacados
                    const featuredProducts = {
                        'ventana-corredera-120x150': {
                            name: 'Ventana Corredera 2 Hojas',
                            specs: '120 x 150 cm - Aluminio Blanco',
                            price: '450€',
                            category: 'ventana-corredera',
                            type: 'ventana-corredera-2hojas'
                        },
                        'puerta-entrada-premium': {
                            name: 'Puerta de Entrada Premium',
                            specs: '90 x 210 cm - Acabado Roble',
                            price: '780€',
                            category: 'puerta-entrada',
                            type: 'puerta-entrada-blindada'
                        },
                        'mosquitera-enrollable-80x180': {
                            name: 'Mosquitera Enrollable',
                            specs: '80 x 180 cm - Color Blanco',
                            price: '149€',
                            category: 'mosquitera-enrollable',
                            type: 'mosquitera-enrollable-vertical'
                        }
                    };

                    const product = featuredProducts[productId];

                    if (product) {
                        // Guardar información en sessionStorage con modo compra
                        sessionStorage.setItem('purchaseMode', 'true');
                        sessionStorage.setItem('quoteProductId', product.category);
                        sessionStorage.setItem('quoteTypeId', product.type);
                        sessionStorage.setItem('quoteProduct', product.name);
                        sessionStorage.setItem('quoteType', product.specs);
                        sessionStorage.setItem('productPrice', product.price);

                        // Scroll al formulario
                        const contactSection = document.getElementById('contacto');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                        }

                        // Esperar un poco y luego rellenar el formulario
                        setTimeout(() => {
                            this.prefillFormFromQuote();
                        }, 500);
                    }
                }
                return;
            }

            // Si se hace click en cualquier otra parte de la card, ir al detalle
            const featuredCard = e.target.closest('.featured-product-card');
            if (featuredCard && !e.target.closest('.featured-product-card__btn')) {
                const productId = featuredCard.dataset.productId;
                if (productId) {
                    sessionStorage.setItem('selectedProductId', productId);
                    window.location.href = 'producto-destacado-detalle.html';
                }
            }
        });
    },

    // ============= HERO CAROUSEL =============
    initHeroCarousel() {
        const slides = document.querySelectorAll('.hero__slide');
        const dots = document.querySelectorAll('.hero__carousel-dot');

        if (slides.length === 0 || dots.length === 0) return;

        let currentSlide = 0;
        const slideInterval = 6000; // 6 segundos por slide
        let autoplayInterval;

        const goToSlide = (slideIndex) => {
            // Remover clase activa de todos los slides y dots
            slides.forEach(slide => slide.classList.remove('hero__slide--active'));
            dots.forEach(dot => dot.classList.remove('hero__carousel-dot--active'));

            // Añadir clase activa al slide y dot actual
            slides[slideIndex].classList.add('hero__slide--active');
            dots[slideIndex].classList.add('hero__carousel-dot--active');

            currentSlide = slideIndex;
        };

        const nextSlide = () => {
            const next = (currentSlide + 1) % slides.length;
            goToSlide(next);
        };

        const startAutoplay = () => {
            autoplayInterval = setInterval(nextSlide, slideInterval);
        };

        const stopAutoplay = () => {
            clearInterval(autoplayInterval);
        };

        // Navegación manual por dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopAutoplay();
                goToSlide(index);
                startAutoplay();
            });
        });

        // Iniciar autoplay
        startAutoplay();

        // Pausar autoplay cuando el usuario interactúa
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', stopAutoplay);
            heroSection.addEventListener('mouseleave', startAutoplay);
        }
    }
};

// ============= UTILIDADES =============
const Utils = {
    // Formatear número de teléfono para WhatsApp
    formatPhoneForWhatsApp(phone) {
        return phone.replace(/\D/g, '');
    },
    
    // Detectar si es dispositivo móvil
    isMobile() {
        return window.innerWidth <= 768;
    },
    
    // Debounce para optimizar eventos
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// ============= INICIALIZACIÓN =============
document.addEventListener('DOMContentLoaded', () => {
    App.init();
    
    // Log de bienvenida
    console.log('%c🏗️ Industrias Dos Vientos', 'font-size: 20px; font-weight: bold; color: #3498db;');
    console.log('%cWeb desarrollada con ❤️ usando HTML, CSS y JavaScript', 'color: #7f8c8d;');
    
    // Detectar cambios de orientación
    window.addEventListener('orientationchange', () => {
        location.reload();
    });
});

// ============= MANEJO DE ERRORES GLOBAL =============
window.addEventListener('error', (e) => {
    console.error('Error detectado:', e.error);
});

// ============= OPTIMIZACIÓN DE RENDIMIENTO =============
// Lazy loading para imágenes
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback para navegadores que no soportan lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============= EXPORT (para testing o módulos) =============
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { App, Utils };
}