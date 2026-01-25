// Initialize contact information across the site
document.addEventListener('DOMContentLoaded', () => {
    // Update WhatsApp float button
    const whatsappBtn = document.getElementById('whatsapp-float-btn');
    if (whatsappBtn) {
        whatsappBtn.href = getWhatsAppLink();
    }

    // Update all phone links
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.href = getPhoneLink();
        // Update text if it contains a phone number
        if (link.textContent.match(/\d{3}/)) {
            link.textContent = CONFIG.PHONE_FORMATTED;
        }
    });

    // Update all email links
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.href = `mailto:${CONFIG.EMAIL}`;
        if (link.textContent.includes('@')) {
            link.textContent = CONFIG.EMAIL;
        }
    });

    // Update WhatsApp links in content
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.href = getWhatsAppLink();
    });

    // Update address spans
    const addressElements = document.querySelectorAll('span, p, li');
    addressElements.forEach(el => {
        if (el.textContent.includes('Pozo Alcón')) {
            el.textContent = CONFIG.ADDRESS;
        }
    });
});
