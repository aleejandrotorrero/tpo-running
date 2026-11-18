# Guía de estilo de TPO.

Resumen técnico de la guía de marca *TPO. Brand & Web System v2*, con las adaptaciones decididas para la versión básica.

## Colores

| Token | HEX | Uso |
|---|---|---|
| `--tpo-black` | `#111111` | Texto principal, titulares, cabecera, fondos de alto impacto |
| `--tpo-white` | `#FFFFFF` | Fondo principal |
| `--tpo-graphite` | `#272727` | Texto secundario, fondos oscuros alternativos |
| `--tpo-soft-grey` | `#F4F4F2` | Fondos de fichas y secciones |
| `--tpo-line-grey` | `#D9D9D6` | Bordes y divisores (nunca para texto) |
| `--tpo-signal` | `#FF4D00` | Botón primario, etiqueta de oferta, foco y estados activos. Entre el 5 % y el 10 % de la interfaz |
| `--tpo-on-signal` | `#111111` | Texto sobre Signal Orange (siempre negro) |

**Contraste (mínimo AA, 4,5:1 en texto normal):**
- Sobre naranja, el texto va siempre en negro `#111111` (5,68:1). El blanco sobre naranja (3,33:1) no cumple.
- El precio rebajado va en negro y en negrita; el naranja se reserva para la etiqueta "Oferta".
- Line Grey (1,41:1 sobre blanco) no se usa nunca para texto.

## Tipografía

- **Logo "TPO.":** Arial Bold. Normalización de la fuente de referencia del wordmark, reservada solo para el logo.
- **Resto de la web:** Space Grotesk (Google Fonts), grosores 400, 500, 600 y 700.

| Uso | Grosor | Tamaño (escritorio / móvil) |
|---|---|---|
| H1 / Hero | 700 | 48–72 px / 36–44 px |
| H2 | 700 | 32–40 px / 28–32 px |
| H3 | 600 | 22–26 px / 20–22 px |
| Texto | 400 | 16–18 px |
| Navegación y filtros | 500 | 14–16 px |
| Botones | 600 | 14–16 px |
| Eslogan | 400 o 500 | 16–24 px |

- La jerarquía se construye con tamaño, grosor y espacio. Se evitan las mayúsculas en textos largos.

## Componentes de la versión básica

- **Botón primario:** fondo naranja, texto negro, altura de 48 a 52 px.
- **Botón secundario:** fondo transparente, borde negro y texto negro.
- **Etiquetas:** "Nuevo" (`isNew`) y "Oferta" (`originalPrice` distinto de `null`). Máximo 2 por producto.
- **Precio en oferta:** precio actual destacado en negro y negrita; precio anterior visible y tachado.
- **Talla agotada:** tachada, borde Line Grey, texto Graphite. No depende solo del color.
- **Tarjetas:** sin sombras pesadas; se separan con espacio, un borde sutil o un cambio de fondo.
- **Áreas táctiles:** mínimo 44 × 44 px. Foco visible al navegar con teclado.

## Movimiento

- Microinteracciones (hover, botones): 100–180 ms. Interacciones estándar: 180–250 ms.
- Se respeta `prefers-reduced-motion`: si el usuario pide reducir el movimiento, se eliminan las animaciones decorativas.

## Marca propia

Tempo convive con el resto del catálogo sin separarse visualmente. `isOwnBrand` es un dato para la medición en GA4, no un elemento que se muestre en pantalla.

## Fuera de la versión básica

Filtros, selector guiado, guías, comparador, "TPO. recomienda", newsletter, carruseles y animaciones de campaña. Se añadirán como mejoras.

## Medición

Los eventos de GTM nunca se enganchan al texto de un botón, porque el copy cambia. Se enganchan a atributos `data-*`.