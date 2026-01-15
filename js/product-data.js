// ============= DATOS DE PRODUCTOS =============
const PRODUCT_DATA = {
    'ventana-corredera': {
        name: 'Ventanas Correderas',
        image: 'assets/images/products/ventana-corredera.png',
        description: 'Las ventanas correderas son la solución perfecta para optimizar el espacio. Su sistema de deslizamiento horizontal permite máxima apertura sin ocupar espacio interior, ideal para terrazas, balcones y espacios reducidos.',
        types: [
            {
                id: 'ventana-corredera-2hojas',
                title: '2 Hojas',
                features: ['Sistema de rodamientos de alta calidad', 'Cierre multipunto', 'Apertura suave y silenciosa', 'Perfil de 60-70mm']
            },
            {
                id: 'ventana-corredera-3hojas',
                title: '3 Hojas',
                features: ['Mayor superficie acristalada', 'Diseño equilibrado', 'Hoja central fija opcional', 'Ideal para grandes aberturas']
            },
            {
                id: 'ventana-corredera-fijo-sup-inf',
                title: 'Con Fijo Superior/Inferior',
                features: ['Ventilación controlada', 'Mayor altura de paso', 'Diseño personalizable', 'Acabado elegante']
            },
            {
                id: 'ventana-corredera-fijo-lateral',
                title: 'Con Fijo Lateral',
                features: ['Máxima entrada de luz', 'Configuración asimétrica', 'Flexibilidad de diseño', 'Aislamiento optimizado']
            }
        ],
        features: [
            { icon: 'shield', title: 'Seguridad', description: 'Sistema de cierre multipunto con protección antirrobo' },
            { icon: 'thermometer', title: 'Aislamiento térmico', description: 'Rotura de puente térmico para máxima eficiencia energética' },
            { icon: 'droplet', title: 'Estanqueidad', description: 'Juntas de doble estanqueidad contra agua y aire' },
            { icon: 'volume-x', title: 'Insonorización', description: 'Reducción de ruido hasta 42dB con doble acristalamiento' }
        ]
    },
    'ventana-abatible': {
        name: 'Ventanas Abatibles',
        image: 'assets/images/products/ventana-abatible.jpg',
        description: 'Las ventanas abatibles ofrecen la mejor hermeticidad y aislamiento del mercado. Sistema de apertura hacia interior u exterior con posibilidad oscilo-batiente para ventilación controlada.',
        types: [
            {
                id: 'ventana-abatible-1hoja',
                title: 'Una Hoja',
                features: ['Apertura total del vano', 'Limpieza fácil desde interior', 'Herrajes reforzados', 'Manilla ergonómica']
            },
            {
                id: 'ventana-abatible-2hojas',
                title: 'Dos Hojas',
                features: ['Simétrica o asimétrica', 'Apertura independiente', 'Mayor superficie de ventilación', 'Ideal para dormitorios']
            },
            {
                id: 'ventana-abatible-oscilobatiente',
                title: 'Oscilo-batiente',
                features: ['Doble sistema de apertura', 'Ventilación segura', 'Control de temperatura', 'Máxima funcionalidad']
            },
            {
                id: 'ventana-abatible-con-fijo',
                title: 'Practicable con Fijo',
                features: ['Combinación versátil', 'Ahorro energético', 'Luz natural optimizada', 'Diseño personalizado']
            }
        ],
        features: [
            { icon: 'lock', title: 'Máxima seguridad', description: 'Hasta 5 puntos de cierre para máxima protección' },
            { icon: 'wind', title: 'Hermeticidad superior', description: 'Clase 4 de estanqueidad al aire según normativa' },
            { icon: 'sun', title: 'Eficiencia energética', description: 'Clasificación energética A+++ disponible' },
            { icon: 'refresh-cw', title: 'Ventilación inteligente', description: 'Sistema oscilante para renovación de aire sin pérdida térmica' }
        ]
    },
    'ventana-replegable': {
        name: 'Ventanas Replegables',
        image: 'assets/images/products/ventana-replegable.jpg',
        description: 'Sistema de apertura tipo acordeón que permite abrir completamente el vano, ideal para crear espacios abiertos conectados con el exterior. Perfectas para terrazas, porches y balcones.',
        types: [
            {
                id: 'ventana-replegable-3hojas',
                title: '3 Hojas',
                features: ['Compacto y funcional', 'Apertura lateral completa', 'Sistema de plegado suave', 'Ideal para espacios medianos']
            },
            {
                id: 'ventana-replegable-4-5hojas',
                title: '4-5 Hojas',
                features: ['Gran superficie de apertura', 'Configuración flexible', 'Diseño panorámico', 'Perfecto para terrazas amplias']
            },
            {
                id: 'ventana-replegable-elevador',
                title: 'Sistema Elevador',
                features: ['Deslizamiento ultrasuave', 'Sin esfuerzo de apertura', 'Rodamientos de alta gama', 'Durabilidad garantizada']
            },
            {
                id: 'ventana-replegable-umbral-bajo',
                title: 'Umbral Bajo',
                features: ['Accesibilidad total', 'Sin barreras arquitectónicas', 'Continuidad visual', 'Fácil tránsito']
            }
        ],
        features: [
            { icon: 'maximize', title: 'Apertura máxima', description: 'Hasta 90% de apertura del vano para integración total con exterior' },
            { icon: 'pocket', title: 'Ahorro de espacio', description: 'Las hojas se pliegan ocupando mínimo espacio' },
            { icon: 'move', title: 'Movimiento fluido', description: 'Sistema de rodamientos de acero inoxidable de alta calidad' },
            { icon: 'eye', title: 'Visión panorámica', description: 'Perfiles mínimos para máxima superficie acristalada' }
        ]
    },
    'puerta-corredera': {
        name: 'Puertas Correderas',
        image: 'assets/images/products/puerta-corredera.jpg',
        description: 'Puertas correderas de aluminio que combinan funcionalidad y diseño. Sistema de deslizamiento suave para acceso a terrazas, jardines y espacios exteriores con máximo aprovechamiento del espacio.',
        types: [
            {
                id: 'puerta-corredera-simple',
                title: 'Corredera Simple',
                features: ['2 o 3 hojas', 'Rodamientos de acero inoxidable', 'Vidrio de seguridad', 'Apertura suave']
            },
            {
                id: 'puerta-corredera-elevadora',
                title: 'Corredera Elevadora',
                features: ['Sin esfuerzo de apertura', 'Cierre automático', 'Hermeticidad superior', 'Acabados premium']
            },
            {
                id: 'puerta-corredera-oculta',
                title: 'Corredera Oculta',
                features: ['Empotrada en pared', 'Diseño minimalista', 'Ahorro total de espacio', 'Integración arquitectónica']
            },
            {
                id: 'puerta-corredera-angulo',
                title: 'Corredera en Ángulo',
                features: ['Esquinera', 'Apertura panorámica', 'Diseño exclusivo', 'Máxima luminosidad']
            }
        ],
        features: [
            { icon: 'zap', title: 'Sistema elevador', description: 'Tecnología lift & slide para apertura sin esfuerzo' },
            { icon: 'shield-check', title: 'Vidrio de seguridad', description: 'Cristal laminado o templado según necesidades' },
            { icon: 'arrow-right-circle', title: 'Deslizamiento suave', description: 'Rodamientos premium con garantía de por vida' },
            { icon: 'droplets', title: 'Estanqueidad total', description: 'Sistema de doble junta para máxima protección' }
        ]
    },
    'puerta-abatible': {
        name: 'Puertas Abatibles',
        image: 'assets/images/products/puerta-abatible.jpg',
        description: 'Puertas abatibles de aluminio con apertura interior o exterior. Solución clásica y elegante para balconeras, accesos a jardín y puertas de patio con excelente aislamiento.',
        types: [
            {
                id: 'puerta-abatible-1hoja',
                title: 'Una Hoja',
                features: ['Apertura amplia', 'Vidrio de suelo a techo', 'Diseño elegante', 'Herrajes robustos']
            },
            {
                id: 'puerta-abatible-2hojas',
                title: 'Dos Hojas',
                features: ['Balconera completa', 'Apertura simétrica', 'Paso amplio', 'Acabados personalizados']
            },
            {
                id: 'puerta-abatible-oscilobatiente',
                title: 'Oscilo-batiente',
                features: ['Ventilación controlada', 'Seguridad infantil', 'Doble funcionalidad', 'Sistema de freno']
            },
            {
                id: 'puerta-abatible-con-fijo',
                title: 'Con Fijo Lateral',
                features: ['Mayor entrada de luz', 'Diseño asimétrico', 'Composición elegante', 'Versatilidad estética']
            }
        ],
        features: [
            { icon: 'award', title: 'Calidad premium', description: 'Herrajes europeos de primera calidad' },
            { icon: 'key', title: 'Seguridad reforzada', description: 'Cierre multipunto con cilindro de seguridad' },
            { icon: 'layers', title: 'Vidrio avanzado', description: 'Doble o triple acristalamiento según clima' },
            { icon: 'trending-up', title: 'Eficiencia A++', description: 'Clasificación energética superior' }
        ]
    },
    'puerta-entrada': {
        name: 'Puertas de Entrada',
        image: 'assets/images/products/puerta-entrada.png',
        description: 'Puertas de entrada de alta seguridad en aluminio. Diseños exclusivos con paneles decorativos, aislamiento superior y máxima protección para tu hogar o negocio.',
        types: [
            {
                id: 'puerta-entrada-lisa',
                title: 'Lisa',
                features: ['Diseño minimalista', 'Acabados mate o brillo', 'Manilla integrada', 'Estética moderna']
            },
            {
                id: 'puerta-entrada-panel-decorativo',
                title: 'Con Panel Decorativo',
                features: ['Diseños exclusivos', 'Relieves personalizados', 'Vidrios decorativos', 'Imagen premium']
            },
            {
                id: 'puerta-entrada-seguridad',
                title: 'Puertas de Seguridad',
                features: ['Certificación antirrobo', 'Núcleo de acero', '7 puntos de cierre', 'Bisagras antipalanca']
            },
            {
                id: 'puerta-entrada-con-fijos',
                title: 'Con Fijos Laterales',
                features: ['Entrada luminosa', 'Diseño imponente', 'Vidrios laterales', 'Composición elegante']
            }
        ],
        features: [
            { icon: 'shield', title: 'Seguridad máxima', description: 'Certificación RC2/RC3 contra intrusión' },
            { icon: 'thermometer-snowflake', title: 'Aislamiento superior', description: 'Núcleo aislante de alta densidad' },
            { icon: 'palette', title: 'Diseño personalizado', description: 'Amplio catálogo de acabados y decoraciones' },
            { icon: 'clock', title: 'Garantía extendida', description: '15 años de garantía estructural' }
        ]
    },
    'puerta-cochera': {
        name: 'Puertas de Cochera',
        image: 'assets/images/products/puerta-cochera.jpg',
        description: 'Puertas de garaje motorizadas en aluminio. Sistemas seccionables, enrollables o basculantes con automatización completa, control remoto y máxima seguridad.',
        types: [
            {
                id: 'puerta-cochera-seccional',
                title: 'Seccional',
                features: ['Apertura vertical', 'Sin pérdida de espacio', 'Aislamiento térmico', 'Silenciosa']
            },
            {
                id: 'puerta-cochera-enrollable',
                title: 'Enrollable',
                features: ['Compacta', 'Motor integrado', 'Diseño discreto', 'Mantenimiento mínimo']
            },
            {
                id: 'puerta-cochera-basculante',
                title: 'Basculante',
                features: ['Económica', 'Robusta', 'Fácil instalación', 'Acabados variados']
            },
            {
                id: 'puerta-cochera-lateral',
                title: 'Lateral Corredera',
                features: ['Ahorro de altura', 'Apertura lateral', 'Ideal para techos bajos', 'Motorizable']
            }
        ],
        features: [
            { icon: 'cpu', title: 'Motorización inteligente', description: 'Motor potente con control remoto y apertura suave' },
            { icon: 'smartphone', title: 'Control WiFi', description: 'Apertura desde smartphone con app dedicada' },
            { icon: 'alert-triangle', title: 'Seguridad activa', description: 'Sensores anti-aplastamiento y detección de obstáculos' },
            { icon: 'battery', title: 'Sistema de emergencia', description: 'Batería de respaldo para cortes eléctricos' }
        ]
    },
    'mosquitera-fija': {
        name: 'Mosquiteras Fijas',
        image: 'assets/images/products/mosquitera-fija.jpg',
        description: 'Mosquiteras fijas de aluminio para ventanas. Instalación permanente con marco resistente y tela de fibra de vidrio de alta durabilidad. Solución económica y eficaz.',
        types: [
            {
                id: 'mosquitera-fija-estandar',
                title: 'Estándar',
                features: ['Marco de 25mm', 'Tela fibra de vidrio', 'Color gris o negro', 'Montaje con tornillos']
            },
            {
                id: 'mosquitera-fija-reducida',
                title: 'Reducida',
                features: ['Perfil de 10mm', 'Diseño minimalista', 'Apenas visible', 'Montaje interior']
            },
            {
                id: 'mosquitera-fija-reforzada',
                title: 'Reforzada',
                features: ['Para animales', 'Tela de acero inoxidable', 'Ultra resistente', 'Ventilación óptima']
            },
            {
                id: 'mosquitera-fija-antipolvo',
                title: 'Antipolvo',
                features: ['Tela electrostática', 'Retiene polen', 'Para alérgicos', 'Fácil limpieza']
            }
        ],
        features: [
            { icon: 'dollar-sign', title: 'Económica', description: 'Solución más asequible para protección contra insectos' },
            { icon: 'tool', title: 'Fácil instalación', description: 'Montaje sencillo en cualquier tipo de ventana' },
            { icon: 'droplet', title: 'Fácil limpieza', description: 'Se limpia con agua y jabón neutro' },
            { icon: 'check-circle', title: 'Durabilidad', description: 'Materiales resistentes a la intemperie' }
        ]
    },
    'mosquitera-corredera': {
        name: 'Mosquiteras Correderas',
        image: 'assets/images/products/mosquitera-corredera.jpg',
        description: 'Mosquiteras correderas con sistema de deslizamiento lateral. Perfectas para ventanas y puertas correderas, ofrecen acceso fácil manteniendo la protección contra insectos.',
        types: [
            {
                id: 'mosquitera-corredera-ventanas',
                title: 'Para Ventanas',
                features: ['Deslizamiento horizontal', 'Apertura parcial', 'Ahorro de espacio', 'Marco fino']
            },
            {
                id: 'mosquitera-corredera-puertas',
                title: 'Para Puertas',
                features: ['Gran formato', 'Cierre magnético', 'Rodamientos reforzados', 'Fácil uso']
            },
            {
                id: 'mosquitera-corredera-compact',
                title: 'Sistema Compact',
                features: ['Ultra estrecha', 'Perfiles de 15mm', 'Diseño integrado', 'Estética cuidada']
            },
            {
                id: 'mosquitera-corredera-doble',
                title: 'Doble Hoja',
                features: ['Para grandes aberturas', 'Cierre central', 'Paso amplio', 'Sistema equilibrado']
            }
        ],
        features: [
            { icon: 'move-horizontal', title: 'Deslizamiento suave', description: 'Rodamientos de nylon para apertura sin esfuerzo' },
            { icon: 'maximize-2', title: 'Gran superficie', description: 'Ideal para puertas de balcón y terrazas' },
            { icon: 'x-circle', title: 'Cierre hermético', description: 'Cepillo perimetral que evita entrada de insectos' },
            { icon: 'settings', title: 'Ajustable', description: 'Sistema de regulación para ajuste perfecto' }
        ]
    },
    'mosquitera-enrollable': {
        name: 'Mosquiteras Enrollables',
        image: 'assets/images/products/mosquitera-enrollable.jpg',
        description: 'Mosquiteras enrollables con sistema de recogida vertical u horizontal. La solución más elegante y discreta, prácticamente invisible cuando no se utiliza.',
        types: [
            {
                id: 'mosquitera-enrollable-vertical',
                title: 'Vertical',
                features: ['Para ventanas', 'Recogida superior', 'Sistema de freno', 'Guías laterales']
            },
            {
                id: 'mosquitera-enrollable-lateral',
                title: 'Lateral',
                features: ['Para puertas', 'Recogida lateral', 'Paso amplio', 'Cierre automático']
            },
            {
                id: 'mosquitera-enrollable-motorizada',
                title: 'Motorizada',
                features: ['Apertura automática', 'Control remoto', 'Sensor de viento', 'Confort total']
            },
            {
                id: 'mosquitera-enrollable-premium',
                title: 'Premium',
                features: ['Aluminio lacado', 'Tela última generación', 'Sistema silencioso', 'Diseño exclusivo']
            }
        ],
        features: [
            { icon: 'eye-off', title: 'Discreta', description: 'Invisible cuando está recogida, diseño minimalista' },
            { icon: 'wind', title: 'Sistema de freno', description: 'Recogida y despliegue controlado y suave' },
            { icon: 'sliders', title: 'Ajuste perfecto', description: 'Guías laterales que garantizan estanqueidad' },
            { icon: 'sun', title: 'Resistente UV', description: 'Tela tratada contra rayos ultravioleta' }
        ]
    }
};
