// Featured Products Listing Page
class FeaturedProductsListing {
    constructor() {
        this.productsGrid = document.getElementById('products-grid');
        this.init();
    }

    init() {
        this.renderProducts();
        this.attachEventListeners();
    }

    renderProducts() {
        // Get all featured products from app.js
        const products = window.featuredProducts || [];

        if (products.length === 0) {
            this.productsGrid.innerHTML = '<p class="no-products">No hay productos destacados disponibles en este momento.</p>';
            return;
        }

        // Generate HTML for all products
        const productsHTML = products.map(product => this.createProductCard(product)).join('');
        this.productsGrid.innerHTML = productsHTML;
    }

    createProductCard(product) {
        const hasDiscount = product.originalPrice && product.originalPrice > product.price;
        const badgeClass = this.getBadgeClass(product.badge);

        return `
            <div class="featured-product-card" data-product-id="${product.id}">
                ${product.badge ? `<div class="featured-product-card__badge featured-product-card__badge--${badgeClass}">${product.badge}</div>` : ''}

                <div class="featured-product-card__image">
                    <img src="${product.image}" alt="${product.title}">
                </div>

                <div class="featured-product-card__content">
                    <h3 class="featured-product-card__title">${product.title}</h3>
                    <p class="featured-product-card__specs">${product.specs}</p>

                    <div class="featured-product-card__price-wrapper">
                        <span class="featured-product-card__price-label">Precio:</span>
                        <div class="featured-product-card__price">
                            <span class="featured-product-card__price-current">${product.price}€</span>
                            ${hasDiscount ? `<span class="featured-product-card__price-old">${product.originalPrice}€</span>` : ''}
                        </div>
                    </div>

                    <div class="featured-product-card__actions">
                        <button class="btn btn--primary btn--small featured-product-card__btn-buy"
                                data-product-id="${product.id}">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            <span>Comprar Ahora</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    getBadgeClass(badge) {
        if (!badge) return '';

        const badgeMap = {
            'Popular': 'popular',
            'Nuevo': 'new',
            'Oferta': 'sale'
        };

        return badgeMap[badge] || 'popular';
    }

    attachEventListeners() {
        // Event delegation for dynamic product cards
        this.productsGrid.addEventListener('click', (e) => {
            const detailsBtn = e.target.closest('.featured-product-card__btn-details');
            const buyBtn = e.target.closest('.featured-product-card__btn-buy');
            const productCard = e.target.closest('.featured-product-card');

            if (detailsBtn) {
                const productId = detailsBtn.dataset.productId;
                this.navigateToDetail(productId);
            } else if (buyBtn) {
                const productId = buyBtn.dataset.productId;
                this.handleBuyNow(productId);
            } else if (productCard && !e.target.closest('.featured-product-card__actions')) {
                const productId = productCard.dataset.productId;
                this.navigateToDetail(productId);
            }
        });
    }

    navigateToDetail(productId) {
        sessionStorage.setItem('selectedProductId', productId);
        window.location.href = 'producto-destacado-detalle.html';
    }

    handleBuyNow(productId) {
        sessionStorage.setItem('selectedProductId', productId);
        sessionStorage.setItem('purchaseMode', 'true');
        window.location.href = 'producto-destacado-detalle.html#contacto';
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new FeaturedProductsListing();
});
