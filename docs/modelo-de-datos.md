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