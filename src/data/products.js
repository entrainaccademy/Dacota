export const CATEGORIES = [
  {
    id: 'commercial-fryers',
    number: '01',
    name: 'Commercial Gas Fryers',
    shortDesc: 'DACOTA gas fryers for high-volume chicken, QSR, hotel, and catering operations.',
    icon: 'Flame',
    image: '/image/products/dacota-gas-deep-fryer-front.jpeg',
  },
  {
    id: 'baking-ovens',
    number: '02',
    name: 'Commercial Baking Ovens',
    shortDesc: 'Electric and gas ovens with independent heat control and multiple tray configurations.',
    icon: 'Box',
    image: '/image/products/dacota-gas-baking-oven.png',
  },
];

const fryerFeatures = [
  'Gas-operated commercial deep fryer by DACOTA',
  'Stainless Steel 304 body construction',
  'High-temperature-resistant fryer tank',
  'Automatic gas cut-off safety system',
  'Premium Honeywell gas valve and Robertshaw spare parts from the USA',
  'Fast oil heating with uniform temperature distribution',
  'Designed for continuous heavy-duty frying',
];

const ovenFeatures = {
  electric: [
    'High-quality stainless-steel body construction',
    'Efficient electric heating elements',
    'Independent operation and temperature control for each deck',
    'Separate top and bottom temperature control',
    'Stainless-steel door with built-in chamber light',
    'Heat-insulated handle for safer operation',
    'Mechanical controls with timer and micro-computer display',
    'Optional digital control, steam, or stone plate through OEM/ODM customization',
  ],
  gas: [
    'High-quality stainless-steel body construction',
    'Stainless-steel Blue Fire gas burner',
    'Independent operation and temperature control for each deck',
    'Separate top and bottom temperature control',
    'Stainless-steel door with built-in chamber light',
    'Heat-insulated handle for safer operation',
    'Mechanical controls with timer and micro-computer display',
    'Optional digital control, steam, or stone plate through OEM/ODM customization',
  ],
};

const createFryer = ({ model, capacity, gasLoad, burners, image }) => ({
  id: model.toLowerCase(),
  slug: model.toLowerCase(),
  name: `DACOTA Gas Deep Fryer ${model}`,
  category: 'commercial-fryers',
  categoryName: 'Commercial Gas Fryers',
  image,
  description: `The ${model} is a high-performance DACOTA commercial gas fryer with a ${capacity} oil capacity and ${gasLoad} BTU/hr total gas load. It is built for fast heating, uniform frying, and reliable continuous operation.`,
  features: fryerFeatures,
  specs: {
    model,
    capacity,
    totalGasLoad: `${gasLoad} BTU/hr`,
    gasComponents: 'Honeywell / Robertshaw (USA)',
    burners: `${burners} burners`,
    material: 'Stainless Steel 304 body',
    warranty: '1 year',
    application: 'Fried chicken shops, broast outlets, restaurants, QSRs, hotels, cloud kitchens, and catering units',
  },
});

const createOven = ({ model, trays, image, type = 'gas' }) => ({
  id: model.toLowerCase(),
  slug: model.toLowerCase(),
  name: `DACOTA ${type === 'electric' ? 'Electric' : 'Gas'} Baking Oven ${model}`,
  category: 'baking-ovens',
  categoryName: 'Commercial Baking Ovens',
  image,
  description: `The ${model} is a DACOTA ${type} baking oven configured for ${trays} × 40 × 60 cm ${trays === 1 ? 'tray' : 'trays'}. Independent deck operation and separate top and bottom temperature control support consistent commercial baking.`,
  features: ovenFeatures[type],
  specs: {
    model,
    series: type === 'electric' ? 'EB Series' : 'GB Series',
    temperature: '0-400°C',
    voltage: '220 V / 50 Hz / 1 Ph',
    pressure: '2800 Pa',
    trayCapacity: `${trays} × 40 × 60 cm ${trays === 1 ? 'tray' : 'trays'}`,
    heating: type === 'electric' ? 'Electric heating elements' : 'Stainless-steel Blue Fire gas burner',
    customization: 'Digital control, steam, or stone plate available',
  },
});

export const PRODUCTS = [
  createFryer({ model: 'DA-GF90C', capacity: '23 litres', gasLoad: '90,000', burners: 3, image: '/image/products/dacota-gas-deep-fryer-front.jpeg' }),
  createFryer({ model: 'DA-GF120C', capacity: '23 litres', gasLoad: '120,000', burners: 4, image: '/image/products/dacota-gas-deep-fryer-angle.png' }),
  createFryer({ model: 'DA-GF150C', capacity: '37 litres', gasLoad: '150,000', burners: 5, image: '/image/products/dacota-gas-deep-fryer-front.jpeg' }),

  createOven({ model: 'DA-EOG-PZA-1D1T', trays: 1, type: 'electric', image: '/image/products/dacota-electric-baking-oven.png' }),
  createOven({ model: 'DA-M-GBO-1D1T', trays: 1, image: '/image/products/dacota-oven-1d1t-open.png' }),
  createOven({ model: 'DA-D-GBO-1D1T', trays: 1, image: '/image/products/dacota-oven-1deck-angle.png' }),
  createOven({ model: 'DA-D-GBO-1D2T', trays: 2, image: '/image/products/dacota-oven-1deck-2tray.png' }),
  createOven({ model: 'DA-M-GBO-1D2T', trays: 2, image: '/image/products/dacota-oven-1deck-2tray.png' }),
  createOven({ model: 'DA-M-GBO-1D3T', trays: 3, image: '/image/products/dacota-oven-1d1t-open.png' }),
  createOven({ model: 'DA-D-GBO-1D3T', trays: 3, image: '/image/products/dacota-oven-1d1t-open.png' }),
  createOven({ model: 'DA-D-GBO-2D4T', trays: 4, image: '/image/products/dacota-oven-2deck-4tray.png' }),
  createOven({ model: 'DA-M-GBO-2D4T', trays: 4, image: '/image/products/dacota-oven-2deck-4tray.png' }),
  createOven({ model: 'DA-D-GBO-2D6T', trays: 6, image: '/image/products/dacota-oven-2deck-6tray.png' }),
  createOven({ model: 'DA-M-GBO-2D6T', trays: 6, image: '/image/products/dacota-oven-2deck-6tray.png' }),
  createOven({ model: 'DA-D-GBO-3D9T', trays: 9, image: '/image/products/dacota-oven-3deck-angle.png' }),
  createOven({ model: 'DA-M-PPG-1D1T', trays: 1, image: '/image/products/dacota-electric-baking-oven.png' }),
];
