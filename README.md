# Industrias Dos Vientos - Web Corporativa

Sitio web profesional para carpintería metálica especializada en aluminio.

## 📋 Características

- ✅ Diseño minimalista y moderno inspirado en aluminio
- ✅ Totalmente responsive (móvil, tablet, desktop)
- ✅ Arquitectura escalable y modular
- ✅ Formulario de presupuestos con envío por email
- ✅ Integración con WhatsApp
- ✅ Galería de proyectos
- ✅ Sección de preguntas frecuentes (FAQ)
- ✅ Navegación suave y efectos de scroll
- ✅ Optimizado para SEO
- ✅ Accesible y siguiendo mejores prácticas

## 🗂️ Estructura del Proyecto

```
/
├── index.html                 # Página principal
├── css/
│   ├── styles.css            # Estilos principales
│   └── responsive.css        # Estilos responsive
├── js/
│   └── app.js                # Funcionalidad JavaScript
├── assets/
│   └── images/
│       ├── logo.png          # Logo de la empresa (AÑADIR)
│       ├── favicon.png       # Favicon (AÑADIR)
│       ├── hero-image.jpg    # Imagen principal (AÑADIR)
│       ├── products/         # Imágenes de productos (AÑADIR)
│       │   ├── ventana-corredera.jpg
│       │   ├── ventana-abatible.jpg
│       │   ├── ventana-replegable.jpg
│       │   ├── puerta-corredera.jpg
│       │   ├── puerta-abatible.jpg
│       │   ├── puerta-entrada.jpg
│       │   ├── puerta-cochera.jpg
│       │   ├── mosquitera-fija.jpg
│       │   ├── mosquitera-corredera.jpg
│       │   └── mosquitera-enrollable.jpg
│       └── gallery/          # Imágenes de galería (AÑADIR)
│           ├── project-1.jpg
│           ├── project-2.jpg
│           ├── project-3.jpg
│           ├── project-4.jpg
│           ├── project-5.jpg
│           └── project-6.jpg
└── README.md                 # Este archivo
```

## 🚀 Configuración Inicial

### 1. Añadir Imágenes

Crea las siguientes carpetas y añade las imágenes correspondientes:

```bash
mkdir -p assets/images/products
mkdir -p assets/images/gallery
```

**Imágenes necesarias:**
- `logo.png` - Logo de Industrias Dos Vientos (recomendado: 200x60px, fondo transparente)
- `favicon.png` - Icono del navegador (32x32px)
- `hero-image.jpg` - Imagen principal del hero (1200x800px)
- Imágenes de productos (800x600px cada una)
- Imágenes de galería (1200x900px cada una)

### 2. Configurar EmailJS

Para que el formulario de contacto funcione, necesitas configurar EmailJS:

#### Paso 1: Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Regístrate gratis (permite 200 emails/mes)
3. Verifica tu email

#### Paso 2: Configurar servicio de email
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. Copia el **Service ID**

#### Paso 3: Crear template de email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa esta plantilla:

```
Asunto: Nueva Solicitud de Presupuesto - {{from_name}}

Hola Industrias Dos Vientos,

Has recibido una nueva solicitud de presupuesto desde la web:

DATOS DEL CLIENTE:
- Nombre: {{from_name}}
- Email: {{from_email}}
- Teléfono: {{phone}}
- Dirección: {{address}}

PRODUCTO SOLICITADO:
{{product_type}}

DESCRIPCIÓN DEL PROYECTO:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de industriasdosvientos.com
```

4. Copia el **Template ID**

#### Paso 4: Obtener Public Key
1. Ve a "Account" → "General"
2. Copia tu **Public Key**

#### Paso 5: Configurar en el código
Abre `js/app.js` y reemplaza estas líneas (líneas 8-12):

```javascript
const EMAILJS_CONFIG = {
    serviceID: 'TU_SERVICE_ID',      // Pega aquí tu Service ID
    templateID: 'TU_TEMPLATE_ID',    // Pega aquí tu Template ID
    publicKey: 'TU_PUBLIC_KEY'       // Pega aquí tu Public Key
};
```

### 3. Configurar WhatsApp

Reemplaza el número de teléfono en:

**En `index.html`** (hay 2 lugares):

Busca:
```html
href="https://wa.me/34600000000
```

Reemplaza `34600000000` con tu número en formato internacional (sin espacios ni guiones).
Ejemplo para España: `34612345678`

### 4. Actualizar Información de Contacto

En `index.html`, busca y reemplaza:

- **Teléfono**: `+34 600 000 000` (aparece en varios lugares)
- **Email**: `correo@prueba.com`
- **Dirección**: `Calle Principal, 123` (línea ~617)

## 🎨 Personalización

### Colores

Para cambiar los colores del sitio, edita las variables CSS en `css/styles.css` (líneas 8-45):

```css
:root {
    --color-primary: #2c3e50;        /* Color principal */
    --color-accent: #3498db;         /* Color de acento */
    /* ... más colores ... */
}
```

### Tipografía

Las fuentes actuales son:
- **Montserrat** (títulos)
- **Open Sans** (texto)

Para cambiar, edita en `css/styles.css`:
```css
--font-primary: 'Tu-Fuente-Titulos', sans-serif;
--font-secondary: 'Tu-Fuente-Texto', sans-serif;
```

Y actualiza el link en `index.html` (línea 12-14).

## 📱 Funcionalidades

### Navegación
- Menu hamburguesa en móvil
- Scroll suave a secciones
- Indicador de sección activa
- Header con efecto al hacer scroll

### Formulario de Presupuestos
- Validación de campos en tiempo real
- Envío por email vía EmailJS
- Mensajes de éxito/error
- Opción de contacto por WhatsApp

### FAQ
- Acordeón interactivo
- Un solo item abierto a la vez
- Animaciones suaves

### Galería
- Grid responsive
- Overlay con información al hover
- Optimizado para diferentes tamaños de pantalla

## 🌐 Despliegue

### Opción 1: Hosting tradicional (Hostinger, SiteGround, etc.)

1. Comprime todos los archivos en un .zip
2. Accede al panel de tu hosting
3. Sube los archivos al directorio `public_html` o `www`
4. Ya está listo en tu dominio

### Opción 2: GitHub Pages (Gratis)

1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings → Pages
4. Selecciona la rama `main` y carpeta `root`
5. Tu sitio estará en `https://tu-usuario.github.io/nombre-repo`

### Opción 3: Netlify/Vercel (Gratis y fácil)

1. Crea cuenta en [Netlify](https://netlify.com) o [Vercel](https://vercel.com)
2. Arrastra la carpeta del proyecto a su interfaz
3. Tu sitio se despliega automáticamente

## 🔧 Mantenimiento

### Añadir nuevo producto

1. Abre `index.html`
2. Busca la sección de productos correspondiente
3. Duplica un bloque `.product-item` existente
4. Modifica el contenido
5. Añade la imagen en `assets/images/products/`

### Añadir nueva pregunta al FAQ

1. Abre `index.html`
2. Busca la sección `.faq__container`
3. Duplica un bloque `.faq__item`
4. Modifica la pregunta y respuesta

### Actualizar galería

1. Añade las imágenes nuevas a `assets/images/gallery/`
2. En `index.html`, duplica un `.gallery__item`
3. Actualiza la ruta de la imagen y el texto

## 📊 SEO

El sitio incluye:
- Meta tags descriptivos
- Estructura semántica HTML5
- Alt text en imágenes (añadir en tus imágenes)
- URLs amigables
- Optimización de velocidad

**Para mejorar el SEO:**
1. Añade alt text descriptivo a todas las imágenes
2. Comprime las imágenes (usa TinyPNG o similar)
3. Registra el sitio en Google Search Console
4. Crea un archivo `sitemap.xml`
5. Añade Google Analytics

## 🔒 Seguridad

- Las credenciales de EmailJS están en el cliente (es seguro, EmailJS las valida)
- No almacenamos información de usuarios
- Validación de formularios en cliente y servidor (EmailJS)

## 📞 Soporte

Si tienes problemas:

1. **EmailJS no funciona**: 
   - Verifica que las credenciales sean correctas
   - Comprueba que el template tenga los campos correctos
   - Revisa la consola del navegador (F12) para errores

2. **Imágenes no se ven**:
   - Verifica que las rutas sean correctas
   - Asegúrate de que los archivos existan
   - Comprueba los permisos de las carpetas

3. **El menú móvil no funciona**:
   - Verifica que `app.js` esté cargado
   - Comprueba la consola para errores de JavaScript

## 💡 Próximas Mejoras Sugeridas

- [ ] Blog de noticias y proyectos
- [ ] Sistema de testimonios dinámico
- [ ] Calculadora de presupuestos online
- [ ] Chat en vivo
- [ ] Panel de administración
- [ ] Galería con lightbox
- [ ] Integración con redes sociales
- [ ] Modo oscuro
- [ ] Multiidioma (castellano/inglés)

## 📄 Licencia

Este proyecto fue desarrollado específicamente para Industrias Dos Vientos.

## 👨‍💻 Desarrollo

Desarrollado con:
- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript Vanilla (ES6+)
- EmailJS para envío de emails
- Arquitectura modular y escalable

---

**¿Necesitas ayuda?** Contacta con el desarrollador o revisa la documentación de cada tecnología utilizada.