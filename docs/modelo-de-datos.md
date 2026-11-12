# Modelo de datos de productos


## Decisión 1: el identificador (`id`)

**Regla:** familia + marca + número correlativo por familia (3 cifras).

Prefijos de familia: `ZAP` (calzado), `ROP` (ropa), `ACC` (accesorios), `NUT` (nutrición).

**Ejemplos:**
- Nike Pegasus 41 → `ZAP-NIK-001`
- Tempo Pace Tee → `ROP-TMP-001`
- SiS Isotonic Energy Gel Pack x6 → `NUT-SIS-001`
- Nike Dri-FIT Miler → `ROP-NIK-002`

**Por qué:**
- Es inmutable: se asigna una vez y no cambia nunca.
- No depende del nombre del producto.
- La talla no forma parte del id; el id identifica el modelo.


## Decisión 2: el precio (`price`)

**Tipo de dato:** número, en euros, con punto como separador decimal.

**Ejemplos:**
- Nike Pegasus 41 → `140`
- Tempo Pace Tee → `28`
- Un producto con céntimos → `24.99`

**Por qué:**
- Es un número, así que se puede multiplicar por la cantidad y sumar en el carrito. Un texto como `"140,00"` no permite hacer cuentas.
- Coincide con el parámetro `price` de GA4, que espera un número en la moneda de la tienda (por ejemplo, `24.99`).
- Los datos guardan el valor, no el formato: el símbolo `€` y la coma decimal se añaden solo al mostrar el precio en pantalla.

**Nota sobre el redondeo:**
JavaScript guarda los decimales de forma aproximada, así que algunas operaciones dan resultados con decimales sobrantes (por ejemplo, `0.1 + 0.2` da `0.30000000000000004`). Para evitar errores en el carrito, los totales se redondearán siempre a 2 decimales antes de mostrarlos o enviarlos a GA4.

## Decisión 3: las categorías (`categories`)

**Tipo de dato:** lista ordenada de textos, de lo más general a lo más concreto. Todos los productos tienen 2 niveles.

**Árbol de categorías:**
- **Calzado:** Asfalto · Competición · Trail
- **Ropa:** Parte superior · Parte inferior
- **Accesorios:** Hidratación · Portaobjetos · Gorras y cintas
- **Nutrición:** Geles · Bebidas · Recuperación · Sales

**Ejemplos:**
- Nike Pegasus 41 → `["Calzado", "Asfalto"]`
- Tempo Pace Tee → `["Ropa", "Parte superior"]`
- SiS Isotonic Energy Gel Pack x6 → `["Nutrición", "Geles"]`
- Nike Dri-FIT Miler → `["Ropa", "Parte superior"]`

**Por qué:**
- La lista mantiene el orden de los niveles: el primer elemento es la categoría principal, que se usa para filtrar el listado.
- Cada posición corresponde a un parámetro de GA4: el primer elemento va a `item_category` y el segundo a `item_category2`.
- Todos los productos tienen los mismos niveles, así que los informes no tienen huecos.
- Los nombres se escriben siempre igual (mismas mayúsculas y tildes), porque en GA4 "Trail" y "trail" serían categorías distintas.
- Una categoría agrupa varios productos: el modelo no es una categoría, ya está identificado por el `id`.


## Decisión 4: la marca (`brand` e `isOwnBrand`)

**`brand`**
- **Tipo de dato:** texto, con el nombre completo y legible de la marca.
- **Ejemplos:** `"Nike"`, `"ASICS"`, `"SiS"`, `"Tempo"`.
- La marca propia se llama siempre `"Tempo"`, tanto en ropa (Tempo Apparel) como en nutrición (Tempo Nutrition). Las dos líneas se distinguen por la categoría.

**`isOwnBrand`**
- **Tipo de dato:** booleano (`true` / `false`).
- **Ejemplos:** Tempo Pace Tee → `true`; Nike Pegasus 41 → `false`.

**Por qué:**
- `brand` va a `item_brand` en GA4, así que debe ser legible en los informes. El código abreviado (`NIK`) es interno y ya está en el `id`.
- La marca es independiente de la categoría: Tempo puede estar en Ropa o en Nutrición.
- `isOwnBrand` permite responder directamente a "¿qué parte de las ventas es de marca propia?", aunque en el futuro haya más de una marca propia. En GA4 se podrá enviar como parámetro personalizado del artículo.
- Los booleanos empiezan por `is` para leerse como una pregunta de sí o no.


## Decisión 5: las tallas (`sizes`)

**Tipo de dato:** lista de objetos, uno por talla, en el orden en que se mostrarán.

Cada objeto tiene:
- `size`: texto con la talla (`"42"`, `"M"`, `"Única"`).
- `isAvailable`: booleano que indica si la talla está disponible (`true`) o agotada (`false`).

**Ejemplos:**
- Nike Pegasus 41 → tallas `"40"` a `"45"`, con la `"45"` agotada.
- Tempo Pace Tee → tallas `"S"`, `"M"`, `"L"`, `"XL"`.
- SiS Isotonic Energy Gel Pack x6 → una sola entrada: `{ size: "Única", isAvailable: true }`.

**Por qué:**
- Las tallas son texto porque las de ropa son letras, y así todas tienen el mismo tipo. Nunca se opera con ellas.
- La lista conserva el orden de los botones y permite añadir más datos a cada talla en el futuro.
- Los productos sin talla usan la talla especial `"Única"`, para que todos tengan la misma estructura, puedan marcarse como agotados y envíen siempre un `item_variant` a GA4 (en lugar de `(not set)`).
- La talla elegida no forma parte del producto: se guardará en el carrito y se enviará a GA4 como `item_variant`.
- El stock no se gestiona por unidades: la tienda es estática, sin servidor, así que la disponibilidad es un dato fijo del catálogo.

## Decisión 6: las ofertas (`originalPrice`)

**`price`** es siempre el precio que paga el cliente, con o sin oferta.

**`originalPrice`**
- **Tipo de dato:** número en euros, o `null` si el producto no está en oferta.
- **Ejemplos:**
  - Pegasus 41 en oferta → `price: 112`, `originalPrice: 140`.
  - Tempo Pace Tee sin oferta → `price: 28`, `originalPrice: null`.

**Datos calculados (no se guardan):**
- Si está en oferta: `originalPrice` no es `null`.
- Descuento por unidad (`discount` en GA4): `originalPrice - price`.
- Porcentaje de la etiqueta de oferta: se calcula a partir de los dos precios.

**Por qué:**
- GA4 espera en `price` el precio ya rebajado y en `discount` el descuento por unidad.
- Solo se guardan los datos de origen; lo que se puede calcular se calcula, para que los datos no puedan contradecirse.
- `null` indica explícitamente que no hay precio original y mantiene la misma estructura en todos los productos.

## Decisión 7: los datos técnicos (`specs`)

**Tipo de dato:** lista de objetos, uno por dato técnico. Cada producto tiene los suyos según su tipo.

Cada objeto tiene:
- `label`: texto con el nombre del dato (`"Drop"`).
- `value`: texto con el valor y su unidad (`"10 mm"`).

**Datos por tipo de producto:**
- **Calzado:** Drop, Peso, Amortiguación, Pisada.
- **Ropa:** Composición, Medidas.
- **Nutrición:** Composición, Valor energético.

**Ejemplo (Nike Pegasus 41):**
`[{ label: "Drop", value: "10 mm" }, { label: "Peso", value: "275 g" }, { label: "Amortiguación", value: "Media" }, { label: "Pisada", value: "Neutra" }]`

**Por qué:**
- Cada producto solo tiene los datos que le corresponden, sin campos vacíos.
- La ficha de producto muestra la lista sin necesidad de saber qué tipo de producto es.
- Los valores son texto con la unidad incluida, porque solo se muestran y nunca se opera con ellos.
- La talla no se repite aquí: ya está en `sizes`.

## Decisión 8: los campos de la web

- **`name`** (texto): nombre del producto que ve el cliente. Va a `item_name` en GA4.
- **`description`** (texto): descripción propia, escrita con el tono de TPO. No se copian textos de otras tiendas ni de las marcas.
- **`images`** (lista de textos): rutas relativas de 2 a 4 imágenes. La primera es la principal, la que se muestra en el listado. Nombre de archivo: id en minúsculas + número de orden (`img/productos/zap-nik-001-1.jpg`).
- **`isNew`** (booleano): marca el producto como novedad. Se asigna a mano.
- **`line`** (texto o `null`): línea a la que pertenece el producto (`"Pegasus"`), o `null` si no tiene. Se podrá enviar a GA4 como parámetro personalizado.