export const products = [
  // ---------- CALZADO ----------
  {
    id: 'ZAP-NIK-001',
    name: 'Nike Air Zoom Pegasus 41',
    brand: 'Nike',
    isOwnBrand: false,
    line: 'Pegasus',
    categories: ['Calzado', 'Asfalto'],
    price: 140,
    originalPrice: 160,
    sizes: [
      { size: '40', isAvailable: true },
      { size: '41', isAvailable: true },
      { size: '42', isAvailable: false },
      { size: '43', isAvailable: true },
      { size: '44', isAvailable: true },
      { size: '45', isAvailable: true }
    ],
    specs: [
      { label: 'Drop', value: '10 mm' },
      { label: 'Peso', value: '297 g aprox.' },
      { label: 'Amortiguación', value: 'Media-alta' },
      { label: 'Pisada', value: 'Neutra' },
      { label: 'Entresuela', value: 'ReactX' },
      { label: 'Tecnología', value: 'Air Zoom' }
    ],
    description: [
      'Corre más lejos. Encuentra tu ritmo.',
      'Las Nike Pegasus 41 son unas zapatillas diseñadas para acompañarte en cada entrenamiento. Su combinación de espuma ReactX y unidades Air Zoom proporciona una pisada reactiva, cómoda y dinámica.',
      'Ideales para tus rodajes diarios, entrenamientos de media distancia y corredores que buscan versatilidad sin renunciar al rendimiento.',
      'Cada kilómetro cuenta, y las Pegasus están preparadas para todos ellos. Así corremos en TPO.'
    ],
    images: [
      'img/productos/zap-nik-001-1.jpg',
      'img/productos/zap-nik-001-2.jpg'
    ],
    isNew: false
  },
  {
    id: 'ZAP-ASI-002',
    name: 'ASICS GEL-Nimbus 26',
    brand: 'ASICS',
    isOwnBrand: false,
    line: 'Nimbus',
    categories: ['Calzado', 'Asfalto'],
    price: 200,
    originalPrice: null,
    sizes: [
      { size: '40', isAvailable: true },
      { size: '41', isAvailable: true },
      { size: '42', isAvailable: true },
      { size: '43', isAvailable: true },
      { size: '44', isAvailable: false },
      { size: '45', isAvailable: true }
    ],
    specs: [
      { label: 'Drop', value: '8 mm' },
      { label: 'Peso', value: '305 g aprox.' },
      { label: 'Amortiguación', value: 'Máxima' },
      { label: 'Pisada', value: 'Neutra' },
      { label: 'Entresuela', value: 'FF BLAST PLUS ECO' },
      { label: 'Tecnología', value: 'PureGEL' }
    ],
    description: [
      'Descubre una nueva forma de disfrutar cada kilómetro.',
      'Las ASICS GEL-Nimbus 26 están diseñadas para ofrecer una experiencia de carrera especialmente cómoda. Su combinación de tecnologías PureGEL y FF BLAST PLUS ECO proporciona una amortiguación suave que ayuda a absorber el impacto en cada zancada.',
      'Una opción ideal para rodajes largos, entrenamientos de recuperación y corredores que priorizan la comodidad.',
      'Porque disfrutar del camino también forma parte del rendimiento.'
    ],
    images: [
      'img/productos/zap-asi-002-1.jpg',
      'img/productos/zap-asi-002-2.jpg'
    ],
    isNew: false
  },
  {
    id: 'ZAP-HOK-004',
    name: 'HOKA Clifton 9',
    brand: 'HOKA',
    isOwnBrand: false,
    line: 'Clifton',
    categories: ['Calzado', 'Asfalto'],
    price: 150,
    originalPrice: null,
    sizes: [
      { size: '40', isAvailable: true },
      { size: '41', isAvailable: true },
      { size: '42', isAvailable: true },
      { size: '43', isAvailable: true },
      { size: '44', isAvailable: true },
      { size: '45', isAvailable: true }
    ],
    specs: [
      { label: 'Drop', value: '5 mm' },
      { label: 'Peso', value: '248 g aprox.' },
      { label: 'Amortiguación', value: 'Alta' },
      { label: 'Pisada', value: 'Neutra' },
      { label: 'Entresuela', value: 'CMEVA' },
      { label: 'Tecnología', value: 'Meta-Rocker' }
    ],
    description: [
      'Ligereza, comodidad y kilómetros por delante.',
      'Las HOKA Clifton 9 combinan una construcción ligera con una amortiguación generosa para ofrecer una experiencia de carrera fluida y cómoda.',
      'Su geometría Meta-Rocker favorece una transición natural de la pisada, convirtiéndolas en una excelente opción para entrenamientos diarios, rodajes suaves y largas distancias.',
      'Tu compañera para encontrar el ritmo sin renunciar a la comodidad.'
    ],
    images: [
      'img/productos/zap-hok-004-1.jpg',
      'img/productos/zap-hok-004-2.jpg'
    ],
    isNew: false
  },
  {
    id: 'ZAP-NIK-008',
    name: 'Nike Vaporfly 3',
    brand: 'Nike',
    isOwnBrand: false,
    line: 'Vaporfly',
    categories: ['Calzado', 'Competición'],
    price: 260,
    originalPrice: null,
    sizes: [
      { size: '40', isAvailable: true },
      { size: '41', isAvailable: true },
      { size: '42', isAvailable: true },
      { size: '43', isAvailable: true },
      { size: '44', isAvailable: true },
      { size: '45', isAvailable: true }
    ],
    specs: [
      { label: 'Drop', value: '8 mm' },
      { label: 'Peso', value: '200 g aprox.' },
      { label: 'Amortiguación', value: 'Alta' },
      { label: 'Pisada', value: 'Neutra' },
      { label: 'Entresuela', value: 'ZoomX' },
      { label: 'Tecnología', value: 'Placa de fibra de carbono' }
    ],
    description: [
      'El día de carrera no es para dejar nada al azar.',
      'Las Nike Vaporfly 3 están diseñadas para corredores que buscan velocidad y eficiencia en competición. Su espuma ZoomX, combinada con una placa de fibra de carbono, proporciona una pisada ligera, reactiva y orientada al rendimiento.',
      'Perfectas para competiciones de 10K, media maratón y maratón.',
      'Cuando llega el momento de buscar tu mejor marca, cada segundo cuenta.'
    ],
    images: [
      'img/productos/zap-nik-008-1.jpg',
      'img/productos/zap-nik-008-2.jpg'
    ],
    isNew: false
  },
  {
    id: 'ZAP-ADI-011',
    name: 'Adidas Adizero Adios Pro 3',
    brand: 'Adidas',
    isOwnBrand: false,
    line: 'Adizero Adios Pro',
    categories: ['Calzado', 'Competición'],
    price: 250,
    originalPrice: null,
    sizes: [
      { size: '40', isAvailable: true },
      { size: '41', isAvailable: true },
      { size: '42', isAvailable: true },
      { size: '43', isAvailable: true },
      { size: '44', isAvailable: true },
      { size: '45', isAvailable: true }
    ],
    specs: [
      { label: 'Drop', value: '6,5 mm' },
      { label: 'Peso', value: '215 g aprox.' },
      { label: 'Amortiguación', value: 'Alta' },
      { label: 'Pisada', value: 'Neutra' },
      { label: 'Entresuela', value: 'LIGHTSTRIKE PRO' },
      { label: 'Tecnología', value: 'ENERGYRODS 2.0' }
    ],
    description: [
      'Diseñadas para correr rápido. Preparadas para competir.',
      'Las Adidas Adizero Adios Pro 3 representan la apuesta de Adidas por el máximo rendimiento en larga distancia. Incorporan espuma LIGHTSTRIKE PRO y tecnología ENERGYRODS 2.0 para ofrecer una pisada reactiva y eficiente.',
      'Una zapatilla pensada para corredores experimentados que buscan optimizar su rendimiento en competición.',
      'Tu próximo récord empieza con cada zancada.'
    ],
    images: [
      'img/productos/zap-adi-011-1.jpg',
      'img/productos/zap-adi-011-2.jpg'
    ],
    isNew: false
  },
  {
    id: 'ZAP-SAL-014',
    name: 'Salomon Speedcross 6',
    brand: 'Salomon',
    isOwnBrand: false,
    line: 'Speedcross',
    categories: ['Calzado', 'Trail'],
    price: 150,
    originalPrice: null,
    sizes: [
      { size: '40', isAvailable: true },
      { size: '41', isAvailable: true },
      { size: '42', isAvailable: true },
      { size: '43', isAvailable: true },
      { size: '44', isAvailable: true },
      { size: '45', isAvailable: true }
    ],
    specs: [
      { label: 'Drop', value: '10 mm' },
      { label: 'Peso', value: '298 g aprox.' },
      { label: 'Amortiguación', value: 'Media' },
      { label: 'Pisada', value: 'Neutra' },
      { label: 'Entresuela', value: 'EnergyCell+' },
      { label: 'Suela', value: 'Mud Contagrip' },
      { label: 'Tacos', value: '5 mm' }
    ],
    description: [
      'El terreno cambia. Tu ritmo continúa.',
      'Las Salomon Speedcross 6 están preparadas para afrontar senderos técnicos, terrenos embarrados y superficies irregulares.',
      'Su suela Mud Contagrip ofrece un agarre excelente, mientras que su construcción proporciona protección y sujeción durante los recorridos más exigentes.',
      'Para quienes encuentran su mejor versión lejos del asfalto.'
    ],
    images: [
      'img/productos/zap-sal-014-1.jpg',
      'img/productos/zap-sal-014-2.jpg'
    ],
    isNew: false
  },
  {
    id: 'ZAP-HOK-016',
    name: 'HOKA Speedgoat 6',
    brand: 'HOKA',
    isOwnBrand: false,
    line: 'Speedgoat',
    categories: ['Calzado', 'Trail'],
    price: 160,
    originalPrice: null,
    sizes: [
      { size: '40', isAvailable: true },
      { size: '41', isAvailable: true },
      { size: '42', isAvailable: true },
      { size: '43', isAvailable: true },
      { size: '44', isAvailable: true },
      { size: '45', isAvailable: true }
    ],
    specs: [
      { label: 'Drop', value: '5 mm' },
      { label: 'Peso', value: '278 g aprox.' },
      { label: 'Amortiguación', value: 'Alta' },
      { label: 'Pisada', value: 'Neutra' },
      { label: 'Entresuela', value: 'CMEVA' },
      { label: 'Suela', value: 'Vibram Megagrip' },
      { label: 'Tacos', value: '5 mm' }
    ],
    description: [
      'Supera los límites del camino.',
      'Las HOKA Speedgoat 6 están diseñadas para corredores de montaña que buscan seguridad, comodidad y rendimiento en terrenos técnicos.',
      'Su combinación de amortiguación CMEVA y suela Vibram Megagrip proporciona una pisada cómoda y una excelente tracción tanto en superficies secas como húmedas.',
      'Desde senderos exigentes hasta largas aventuras de montaña, encuentra tu propio camino.'
    ],
    images: [
      'img/productos/zap-hok-016-1.jpg',
      'img/productos/zap-hok-016-2.jpg'
    ],
    isNew: true
  },

  // ---------- ROPA ----------
  {
    id: 'ROP-TMP-001',
    name: 'Tempo Pace Tee',
    brand: 'Tempo',
    isOwnBrand: true,
    line: null,
    categories: ['Ropa', 'Parte superior'],
    price: 28,
    originalPrice: null,
    sizes: [
      { size: 'S', isAvailable: true },
      { size: 'M', isAvailable: true },
      { size: 'L', isAvailable: true },
      { size: 'XL', isAvailable: true }
    ],
    specs: [
      { label: 'Composición', value: '100 % poliéster reciclado' },
      { label: 'Tejido', value: 'Punto técnico ligero' },
      { label: 'Ajuste', value: 'Estándar' },
      { label: 'Características', value: 'Transpirable y de secado rápido' }
    ],
    description: [
      'Tu ritmo. Tu camino. Tu tiempo.',
      'La Tempo Pace Tee es una camiseta diseñada para acompañarte en cada entrenamiento. Su concepto combina comodidad, ligereza y libertad de movimiento para que puedas centrarte en lo verdaderamente importante: correr.',
      'Una prenda versátil para tus rodajes diarios, entrenamientos de calidad o para completar tu equipación deportiva.',
      'TPO. Run your rhythm.'
    ],
    images: [
      'img/productos/rop-tmp-001-1.jpg',
      'img/productos/rop-tmp-001-2.jpg'
    ],
    isNew: true
  },
  {
    id: 'ROP-NIK-002',
    name: 'Nike Dri-FIT Miler',
    brand: 'Nike',
    isOwnBrand: false,
    line: null,
    categories: ['Ropa', 'Parte superior'],
    price: 35,
    originalPrice: null,
    sizes: [
      { size: 'S', isAvailable: true },
      { size: 'M', isAvailable: true },
      { size: 'L', isAvailable: true },
      { size: 'XL', isAvailable: true }
    ],
    specs: [
      { label: 'Composición', value: '100 % poliéster' },
      { label: 'Tejido', value: 'Punto ligero' },
      { label: 'Ajuste', value: 'Estándar' },
      { label: 'Características', value: 'Transpirable y ligera' },
      { label: 'Tecnología', value: 'Nike Dri-FIT' }
    ],
    description: [
      'Ligereza que acompaña tu movimiento.',
      'La Nike Dri-FIT Miler es una camiseta de running pensada para mantener la comodidad durante tus entrenamientos.',
      'Su tejido ligero y tecnología Dri-FIT ayudan a evacuar el sudor, favoreciendo la transpirabilidad y manteniendo una sensación de frescura mientras corres.',
      'Una opción práctica para tus sesiones diarias, independientemente de la distancia.'
    ],
    images: [
      'img/productos/rop-nik-002-1.jpg',
      'img/productos/rop-nik-002-2.jpg'
    ],
    isNew: false
  },
  {
    id: 'ROP-ASI-006',
    name: 'ASICS Fujitrail Waterproof Jacket',
    brand: 'ASICS',
    isOwnBrand: false,
    line: null,
    categories: ['Ropa', 'Parte superior'],
    price: 130,
    originalPrice: null,
    sizes: [
      { size: 'S', isAvailable: true },
      { size: 'M', isAvailable: true },
      { size: 'L', isAvailable: true },
      { size: 'XL', isAvailable: true }
    ],
    specs: [
      { label: 'Composición', value: '100 % nailon' },
      { label: 'Tejido', value: 'Pertex Shield 2,5 capas' },
      { label: 'Características', value: 'Impermeable, cortavientos y plegable' },
      { label: 'Impermeabilidad', value: '20.000 mm' },
      { label: 'Transpirabilidad', value: '20.000 g/m²/24 h' }
    ],
    description: [
      'Que el tiempo no marque tus límites.',
      'La ASICS Fujitrail Waterproof Jacket está diseñada para protegerte frente a las condiciones meteorológicas más exigentes durante tus entrenamientos de montaña.',
      'Su tejido técnico Pertex Shield proporciona impermeabilidad y transpirabilidad, mientras que su construcción ligera permite guardarla fácilmente cuando las condiciones mejoran.',
      'Una aliada para seguir corriendo cuando el terreno y el clima se complican.'
    ],
    images: [
      'img/productos/rop-asi-006-1.jpg',
      'img/productos/rop-asi-006-2.jpg'
    ],
    isNew: false
  },
  {
    id: 'ROP-NIK-014',
    name: 'Nike Fast Tights',
    brand: 'Nike',
    isOwnBrand: false,
    line: null,
    categories: ['Ropa', 'Parte inferior'],
    price: 70,
    originalPrice: null,
    sizes: [
      { size: 'S', isAvailable: true },
      { size: 'M', isAvailable: false },
      { size: 'L', isAvailable: true },
      { size: 'XL', isAvailable: true }
    ],
    specs: [
      { label: 'Composición', value: '83 % poliéster / 17 % elastano' },
      { label: 'Ajuste', value: 'Ceñido' },
      { label: 'Composición del forro', value: '92 % poliéster / 8 % elastano' },
      { label: 'Tecnología', value: 'Dri-FIT' },
      { label: 'Bolsillos', value: '3' }
    ],
    description: [
      'Muévete sin distracciones.',
      'Las Nike Fast Tights están diseñadas para corredores que buscan libertad de movimiento y sujeción durante sus entrenamientos.',
      'Su tejido elástico se adapta al cuerpo, mientras que su tecnología Dri-FIT ayuda a gestionar la humedad. Incorporan bolsillos para llevar contigo pequeños objetos esenciales durante tus sesiones.',
      'Rendimiento, comodidad y funcionalidad en cada entrenamiento.'
    ],
    images: [
      'img/productos/rop-nik-014-1.jpg',
      'img/productos/rop-nik-014-2.jpg'
    ],
    isNew: false
  },
  {
    id: 'ROP-TMP-015',
    name: 'Tempo Strider 3" Shorts',
    brand: 'Tempo',
    isOwnBrand: true,
    line: null,
    categories: ['Ropa', 'Parte inferior'],
    price: 32,
    originalPrice: null,
    sizes: [
      { size: 'S', isAvailable: true },
      { size: 'M', isAvailable: true },
      { size: 'L', isAvailable: false },
      { size: 'XL', isAvailable: true }
    ],
    specs: [
      { label: 'Composición', value: '86 % poliéster reciclado / 14 % elastano' },
      { label: 'Tejido', value: 'Tejido elástico ligero' },
      { label: 'Ajuste', value: 'Holgado' },
      { label: 'Bolsillos', value: '1 trasero con cremallera' }
    ],
    description: [
      'Encuentra tu ritmo. Corre con libertad.',
      'Los Tempo Strider 3" Shorts están pensados para quienes buscan comodidad y libertad de movimiento en cada zancada.',
      'Su diseño deportivo de corte corto favorece la movilidad y los convierte en una opción versátil para entrenamientos de velocidad, rodajes y sesiones de running.',
      'Menos distracciones. Más kilómetros.'
    ],
    images: [
      'img/productos/rop-tmp-015-1.jpg',
      'img/productos/rop-tmp-015-2.jpg'
    ],
    isNew: true
  },

  // ---------- ACCESORIOS ----------
  {
    id: 'ACC-NIK-001',
    name: 'Nike Lean Running Waistpack',
    brand: 'Nike',
    isOwnBrand: false,
    line: null,
    categories: ['Accesorios', 'Portaobjetos'],
    price: 22,
    originalPrice: null,
    sizes: [
      { size: 'Única', isAvailable: true }
    ],
    specs: [],
    description: [
      'Lleva lo imprescindible. Disfruta del recorrido.',
      'El Nike Lean Running Waistpack es un accesorio práctico para transportar tus pequeños objetos personales durante tus entrenamientos.',
      'Su diseño compacto permite llevar contigo elementos esenciales como llaves, tarjetas o pequeños accesorios sin necesidad de utilizar bolsillos adicionales.',
      'Porque cuando corres, lo importante es mantener la concentración.'
    ],
    images: [
      'img/productos/acc-nik-001-1.jpg',
      'img/productos/acc-nik-001-2.jpg'
    ],
    isNew: false
  },
  {
    id: 'ACC-ASI-003',
    name: 'ASICS Visibility Cap',
    brand: 'ASICS',
    isOwnBrand: false,
    line: null,
    categories: ['Accesorios', 'Gorras y cintas'],
    price: 25,
    originalPrice: null,
    sizes: [
      { size: 'Única', isAvailable: true }
    ],
    specs: [],
    description: [
      'Hazte visible. Sigue tu camino.',
      'La ASICS Visibility Cap es una gorra deportiva diseñada para acompañarte durante tus entrenamientos al aire libre.',
      'Su diseño incorpora elementos orientados a mejorar tu visibilidad en condiciones de poca luz, convirtiéndola en un complemento práctico para tus sesiones de running.',
      'Comodidad y funcionalidad para correr a cualquier hora.'
    ],
    images: [
      'img/productos/acc-asi-003-1.jpg',
      'img/productos/acc-asi-003-2.jpg'
    ],
    isNew: false
  },
  {
    id: 'ACC-HOK-004',
    name: 'HOKA Soft Flask 500ml',
    brand: 'HOKA',
    isOwnBrand: false,
    line: null,
    categories: ['Accesorios', 'Hidratación'],
    price: 18,
    originalPrice: null,
    sizes: [
      { size: 'Única', isAvailable: true }
    ],
    specs: [
      { label: 'Capacidad', value: '500 ml' },
      { label: 'Características', value: 'Flexible y compatible con chalecos de hidratación' }
    ],
    description: [
      'Hidratación siempre a tu alcance.',
      'La HOKA Soft Flask de 500 ml es una solución práctica para mantenerte hidratado durante tus entrenamientos y aventuras de larga distancia.',
      'Su formato flexible facilita el transporte y permite adaptarla a diferentes sistemas de hidratación, mochilas o chalecos de running compatibles.',
      'Mantén el ritmo. La hidratación también forma parte del entrenamiento.'
    ],
    images: [
      'img/productos/acc-hok-004-1.jpg',
      'img/productos/acc-hok-004-2.jpg'
    ],
    isNew: false
  },

  // ---------- NUTRICIÓN ----------
  {
    id: 'NUT-SIS-001',
    name: 'SiS Isotonic Energy Gel Pack x6',
    brand: 'SiS',
    isOwnBrand: false,
    line: null,
    categories: ['Nutrición', 'Geles'],
    price: 14,
    originalPrice: 18,
    sizes: [
      { size: 'Única', isAvailable: true }
    ],
    specs: [
      { label: 'Formato', value: '6 geles de 60 ml' },
      { label: 'Energía por gel', value: '87 kcal' },
      { label: 'Hidratos de carbono por gel', value: '22 g' },
      { label: 'Azúcares por gel', value: '0,6 g' },
      { label: 'Grasas por gel', value: '0 g' },
      { label: 'Proteínas por gel', value: '0 g' },
      { label: 'Sal por gel', value: '0,01 g' }
    ],
    description: [
      'Energía para mantener tu ritmo.',
      'Los geles energéticos SiS GO Isotonic están diseñados para proporcionar hidratos de carbono durante entrenamientos y competiciones de resistencia.',
      'Su fórmula isotónica permite consumirlos sin necesidad de acompañarlos de agua para diluirlos, ofreciendo una alternativa práctica para reponer energía mientras corres.',
      'Un aliado para mantener el esfuerzo durante tus sesiones más exigentes.'
    ],
    images: [
      'img/productos/nut-sis-001-1.jpg',
      'img/productos/nut-sis-001-2.jpg'
    ],
    isNew: false
  },
  {
    id: 'NUT-MAU-003',
    name: 'Maurten Gel 100 Pack x10',
    brand: 'Maurten',
    isOwnBrand: false,
    line: null,
    categories: ['Nutrición', 'Geles'],
    price: 40,
    originalPrice: null,
    sizes: [
      { size: 'Única', isAvailable: true }
    ],
    specs: [
      { label: 'Formato', value: '10 geles de 40 g' },
      { label: 'Energía por gel', value: '100 kcal' },
      { label: 'Hidratos de carbono por gel', value: '25 g' },
      { label: 'Azúcares por gel', value: '25 g' },
      { label: 'Grasas por gel', value: '0 g' },
      { label: 'Proteínas por gel', value: '0 g' },
      { label: 'Sal por gel', value: '0,05 g' }
    ],
    description: [
      'La energía que necesitas para seguir avanzando.',
      'Maurten Gel 100 utiliza la tecnología Hydrogel para ofrecer una fuente concentrada de hidratos de carbono durante el ejercicio de resistencia.',
      'Cada unidad proporciona 25 gramos de hidratos de carbono en un formato de 40 gramos, pensado para facilitar la ingesta energética durante entrenamientos prolongados y competiciones.',
      'Una solución para corredores que planifican su estrategia nutricional hasta el último kilómetro.'
    ],
    images: [
      'img/productos/nut-mau-003-1.jpg',
      'img/productos/nut-mau-003-2.jpg'
    ],
    isNew: false
  },
  {
    id: 'NUT-TMP-008',
    name: 'Tempo Recovery Protein 1kg',
    brand: 'Tempo',
    isOwnBrand: true,
    line: null,
    categories: ['Nutrición', 'Recuperación'],
    price: 34,
    originalPrice: null,
    sizes: [
      { size: 'Única', isAvailable: true }
    ],
    specs: [],
    description: [
      'Recupera. Prepárate. Vuelve a correr.',
      'La Tempo Recovery Protein está pensada para acompañar tus rutinas de recuperación después del entrenamiento.',
      'Una opción práctica para complementar tu alimentación y contribuir al aporte diario de proteínas, especialmente en periodos de actividad física frecuente.',
      'Porque el entrenamiento no termina cuando cruzas la meta. La recuperación también cuenta.'
    ],
    images: [
      'img/productos/nut-tmp-008-1.jpg',
      'img/productos/nut-tmp-008-2.jpg'
    ],
    isNew: true
  }
];