# Guía de estilo de TPO.

Resumen técnico de la guía de marca *TPO. Brand & Web System v2.0*, con las adaptaciones decididas para la versión básica.

## Colores

| Token | HEX | Uso |
|---|---|---|
| `--tpo-black` | `#111111` | Texto principal, cabecera, fondos de alto impacto |
| `--tpo-white` | `#FFFFFF` | Fondo principal |
| `--tpo-graphite` | `#272727` | Texto secundario, fondos oscuros alternativos |
| `--tpo-soft-grey` | `#F4F4F2` | Fondos de fichas y secciones |
| `--tpo-line-grey` | `#D9D9D6` | Bordes y divisores (nunca para texto) |
| `--tpo-signal` | `#FF4D00` | Botón primario, etiqueta de oferta, foco. Entre el 5 % y el 10 % de la interfaz |

**Contraste (mínimo AA, 4,5:1 en texto normal):**
- Sobre naranja, el texto va siempre en negro `#111111` (5,68:1). El blanco sobre naranja (3,33:1) no cumple.
- El precio rebajado va en negro y en negrita; el naranja se reserva para la etiqueta "Oferta".
- Line Grey (1,41:1 sobre blanco) no se usa nunca para texto.

## Tipografía

- **Logo "TPO.":** Arial, negrita. Normalización de la fuente de referencia del wordmark.
- **Resto de la web:** Lexend Deca (Google Fonts), grosores 400, 600 y 800.
- La jerarquía se construye con tamaño, grosor y espacio. Se evitan las mayúsculas en textos largos.

## Componentes de la versión básica

- **Botón primario:** fondo naranja, texto negro, altura de 48 a 52 px.
- **Botón secundario:** fondo transparente, borde negro y texto negro.
- **Etiquetas:** "Nuevo" (`isNew`) y "Oferta" (`originalPrice` distinto de `null`). Máximo 2 por producto.
- **Precio en oferta:** precio actual destacado; precio anterior visible y tachado.
- **Talla agotada:** tachada, borde Line Grey, texto Graphite. No depende solo del color.
- **Áreas táctiles:** mínimo 44 × 44 px. Foco visible al navegar con teclado.

## Fuera de la versión básica

Filtros, selector guiado, guías, comparador, "TPO. recomienda", newsletter y animaciones de campaña. Se añadirán como mejoras.

## Medición

Los eventos de GTM nunca se enganchan al texto de un botón, porque el copy cambia. Se enganchan a atributos `data-*`.