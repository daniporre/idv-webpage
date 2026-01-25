// Configuration Constants
const CONFIG = {
    // Contact Information
    PHONE: '605431127',
    PHONE_FORMATTED: '+34 605 43 11 27',
    EMAIL: 'info@industriasdosvientos.com',
    ADDRESS: 'Pozo Alcón, Jaén',

    // WhatsApp
    WHATSAPP_NUMBER: '34605431127', // Formato internacional sin +
    WHATSAPP_MESSAGE: 'Hola, me gustaría solicitar información',

    // Business Hours
    HOURS: {
        weekdays: 'Lunes - Viernes: 8:00 - 18:00',
        saturday: 'Sábados: 9:00 - 14:00',
        sunday: 'Domingos: Cerrado'
    },

    // Social Media (si se necesitan en el futuro)
    SOCIAL: {
        facebook: '',
        instagram: '',
        linkedin: ''
    },

    // Company Info
    COMPANY: {
        name: 'Industrias Dos Vientos',
        tagline: 'Especialistas en carpintería metálica y aluminio con más de 20 años de experiencia',
        founded: '1985'
    }
};

// Helper function to get WhatsApp link
function getWhatsAppLink(customMessage = null) {
    const message = customMessage || CONFIG.WHATSAPP_MESSAGE;
    return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Helper function to get phone link
function getPhoneLink() {
    return `tel:+34${CONFIG.PHONE}`;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getWhatsAppLink, getPhoneLink };
}
