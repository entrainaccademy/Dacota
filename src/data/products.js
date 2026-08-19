export const CATEGORIES = [
  {
    id: "fried-chicken-broasting",
    number: "01",
    name: "Fried Chicken & Broasting Machines",
    shortDesc: "Commercial pressure broasters, open deep fryers, breading stations & warming cabinets.",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ovens-pizza-convection",
    number: "02",
    name: "Convection & Pizza Ovens",
    shortDesc: "High-performance commercial convection ovens, deck pizza ovens & conveyor pizza ovens.",
    icon: "Box",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "baking-equipment",
    number: "03",
    name: "Baking Equipment",
    shortDesc: "Commercial planetary dough mixers, spiral kneaders, dough sheeters, proofers & bread slicers.",
    icon: "Wheat",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "commercial-cooking",
    number: "04",
    name: "Commercial Cooking Equipment",
    shortDesc: "Heavy-duty gas ranges, Chinese wok ranges, griddles, tilting boiling pans & bratt pans.",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "food-preparation",
    number: "05",
    name: "Food Preparation Equipment",
    shortDesc: "Industrial vegetable cutters, meat mincers, food processors & heavy wet grinders.",
    icon: "Utensils",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "refrigeration",
    number: "06",
    name: "Refrigeration Equipment",
    shortDesc: "Commercial vertical chillers, deep freezers, under-counter refrigeration & cold rooms.",
    icon: "Snowflake",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "stainless-steel",
    number: "07",
    name: "Stainless Steel Equipment",
    shortDesc: "SS 304 work tables, prep counters, sink units, wall shelves & hand wash stations.",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "exhaust-ventilation",
    number: "08",
    name: "Exhaust & Ventilation",
    shortDesc: "Kitchen exhaust hoods, fresh air systems, ducting & heavy blower units.",
    icon: "Wind",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "dishwashing-storage",
    number: "09",
    name: "Dishwashing & Storage",
    shortDesc: "Pot wash sink units, dish landing tables, storage racks & cabinets.",
    icon: "Droplets",
    image: "https://images.unsplash.com/photo-1585837575652-267c041d77d4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "service-trolleys",
    number: "10",
    name: "Service Equipment & Trolleys",
    shortDesc: "Bain Marie hot counters, food warmers, food service & utility trolleys.",
    icon: "Truck",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
  }
];

export const PRODUCTS = [
  // BROASTING & FRIED CHICKEN MACHINES
  {
    id: "commercial-pressure-broaster-machine",
    slug: "commercial-pressure-broaster-machine",
    name: "Commercial Pressure Broasting Machine",
    category: "fried-chicken-broasting",
    categoryName: "Fried Chicken & Broasting Machines",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80&w=800",
    description: "High-performance commercial pressure fryer / broasting machine engineered for fast, crispy, and juicy fried chicken production in QSR outlets, restaurants, and cloud kitchens.",
    features: [
      "Heavy-duty SS 304 stainless-steel body & rectangular fry pot",
      "Built-in oil filtration system with automatic return pump",
      "Programmable digital controller with 10 cooking presets",
      "Cast aluminum lid with safety locking spindle mechanism",
      "Cold zone design to trap cracklings and extend oil lifespan",
      "Energy efficient heating elements with fast temperature recovery"
    ],
    specs: {
      material: "SS 304 Grade Stainless Steel",
      capacity: "16-24 Liters Oil / 6kg Chicken Batch",
      powerFuel: "Electric 3-Phase (12KW) / Gas Heavy Burner",
      dimensions: "460 x 960 x 1230 mm",
      construction: "Heavy Duty Frame with Swivel Casters",
      application: "Fried Chicken Outlets, QSRs, Fast Food Chains, Cloud Kitchens",
      customization: "Available in Electric & Gas Models"
    }
  },
  {
    id: "double-tank-open-deep-fryer",
    slug: "double-tank-open-deep-fryer",
    name: "Commercial Double Tank Open Deep Fryer",
    category: "fried-chicken-broasting",
    categoryName: "Fried Chicken & Broasting Machines",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    description: "Heavy-duty dual tank open fryer designed for high-capacity frying of chicken tenders, fries, fish, and appetizers.",
    features: [
      "Twin independent 14-liter stainless steel fry pots",
      "Precision snap-action thermostat (50°C - 200°C)",
      "Includes 2 heavy mesh wire frying baskets with insulated handles",
      "Front drain valve with safety interlock for easy oil disposal"
    ],
    specs: {
      material: "SS 304 Food Grade",
      capacity: "14L + 14L Dual Tank",
      powerFuel: "LPG Gas / 3-Phase Electric",
      dimensions: "800 x 700 x 900 mm",
      construction: "Seamless Welded Fry Pot",
      application: "Restaurants, Cafes, Fried Chicken Outlets",
      customization: "Available"
    }
  },

  // CONVECTION & PIZZA OVENS
  {
    id: "commercial-convection-oven",
    slug: "commercial-convection-oven",
    name: "Commercial Electric Convection Oven",
    category: "ovens-pizza-convection",
    categoryName: "Convection & Pizza Ovens",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    description: "Heavy-duty commercial convection oven featuring bi-directional fan forced-air circulation and steam injection for uniform baking and roasting.",
    features: [
      "Bi-directional dual fan motor for 100% uniform heat distribution",
      "Manual steam injection for bread crust development",
      "Double tempered glass door with bright internal chamber light",
      "Holds 4 GN 1/1 trays or 400x600mm bakery pans"
    ],
    specs: {
      material: "Full SS 304 Interior & Exterior",
      tempRange: "50°C to 300°C Digital Control",
      powerFuel: "6.5 KW / 3-Phase Electric",
      dimensions: "830 x 770 x 590 mm",
      construction: "High-density thermal insulation",
      application: "Bakeries, Cafes, Restaurants, Hotels",
      customization: "Digital or Manual Knob controls"
    }
  },
  {
    id: "double-deck-commercial-pizza-oven",
    slug: "double-deck-commercial-pizza-oven",
    name: "Commercial Double Deck Pizza Oven",
    category: "ovens-pizza-convection",
    categoryName: "Convection & Pizza Ovens",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    description: "High-temperature double deck pizza oven with ceramic cordierite stone hearths for authentic stone-baked pizzas.",
    features: [
      "Refractory ceramic stone baking hearth per deck",
      "Independent top and bottom heating element thermostats per deck",
      "Bakes up to 8 x 12-inch pizzas simultaneously",
      "Internal halogen lighting and viewing window"
    ],
    specs: {
      material: "SS 304 Front & Ceramic Stone Deck",
      tempRange: "Up to 450°C High Temp",
      powerFuel: "Electric (9.6 KW) / LPG Gas",
      dimensions: "910 x 820 x 750 mm",
      construction: "Heavy Insulation Lining",
      application: "Pizzerias, Italian Restaurants, Cafes, Bakeries",
      customization: "Single, Double, or Triple Deck options"
    }
  },

  // BAKING EQUIPMENT
  {
    id: "planetary-dough-mixer",
    slug: "planetary-dough-mixer",
    name: "Commercial Planetary Dough Mixer",
    category: "baking-equipment",
    categoryName: "Baking Equipment",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800",
    description: "Heavy-duty 3-speed commercial planetary mixer supplied with wire whip, flat beater, and dough hook for bakery and pastry production.",
    features: [
      "High-torque 3-speed gear-driven transmission motor",
      "Includes SS 304 bowl, spiral hook, wire whip & flat beater",
      "Safety interlocked bowl guard with auto-shutoff switch",
      "Manual bowl lift mechanism with locking lever"
    ],
    specs: {
      material: "Cast Iron Body & SS 304 Bowl",
      capacity: "20 Liters / 30 Liters / 40 Liters",
      powerFuel: "1.5 HP Heavy Motor (Single / 3-Phase)",
      dimensions: "540 x 470 x 850 mm",
      construction: "Heavy Duty Industrial",
      application: "Bakeries, Cake Shops, Hotels, Restaurants",
      customization: "Multiple bowl capacities"
    }
  },

  // COMMERCIAL COOKING EQUIPMENT
  {
    id: "commercial-four-burner-range",
    slug: "commercial-four-burner-range",
    name: "Commercial Four Burner Range",
    category: "commercial-cooking",
    categoryName: "Commercial Cooking Equipment",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
    description: "Heavy-duty commercial four-burner gas cooking range engineered for continuous operation in high-volume kitchens.",
    features: [
      "Heavy SS 304 stainless steel body construction",
      "High-output cast iron heavy cast burners (25,000 BTU each)",
      "Removable drip tray for easy sanitization",
      "Robust commercial frame built for continuous operation"
    ],
    specs: {
      material: "SS 304 Grade Heavy Gauge Sheet",
      burners: "4 Heavy-Duty Cast Iron Burners",
      powerFuel: "LPG / PNG Compatible",
      dimensions: "900 x 900 x 850 + 150 mm",
      construction: "Fully Welded Finish",
      application: "Hotels, Restaurants, Canteens, Cloud Kitchens",
      customization: "Available"
    }
  },

  // FOOD PREPARATION
  {
    id: "multipurpose-vegetable-processing-machine",
    slug: "multipurpose-vegetable-processing-machine",
    name: "Multipurpose Vegetable Cutter & Slicer",
    category: "food-preparation",
    categoryName: "Food Preparation Equipment",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=800",
    description: "High-capacity commercial vegetable processing machine for slicing, dicing, grating, and julienne cutting.",
    features: [
      "Quick-change stainless steel cutting blades",
      "Dual hopper inlet for long and round vegetables",
      "Waterproof safety switches",
      "Continuous output capacity up to 300 kg/hr"
    ],
    specs: {
      material: "Anodized Aluminum & SS 304",
      capacity: "150 - 300 kg/hr",
      powerFuel: "1 HP Motor",
      dimensions: "560 x 280 x 490 mm",
      construction: "Heavy Duty",
      application: "Hospitals, Catering, Canteens, Hotels",
      customization: "Includes 5 blade discs"
    }
  },

  // REFRIGERATION
  {
    id: "four-door-vertical-refrigerator",
    slug: "four-door-vertical-refrigerator",
    name: "Four Door Vertical Commercial Refrigerator",
    category: "refrigeration",
    categoryName: "Refrigeration Equipment",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800",
    description: "Energy-efficient 4-door vertical chiller with heavy-duty compressor, digital controller, and auto-defrost.",
    features: [
      "Tropicalized design tested up to 43°C ambient temperature",
      "CFC-free eco-friendly refrigerant",
      "Self-closing doors with magnetic gaskets and lock",
      "Adjustable heavy-duty coated shelves"
    ],
    specs: {
      material: "SS 304 Interior & Exterior",
      tempRange: "-2°C to +8°C (Chiller) / -18°C (Freezer)",
      capacity: "1000 Liters",
      dimensions: "1220 x 760 x 1980 mm",
      construction: "High-density insulation",
      application: "Restaurants, Hotels, Cloud Kitchens",
      customization: "Glass Door or Solid Door"
    }
  },

  // STAINLESS STEEL
  {
    id: "stainless-steel-work-table-under-shelf",
    slug: "stainless-steel-work-table-under-shelf",
    name: "Commercial SS Work Table with Under-Shelf",
    category: "stainless-steel",
    categoryName: "Stainless Steel Equipment",
    image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=800",
    description: "Hygienic SS 304 food preparation table with sound-deadened reinforced top and heavy adjustable under-shelf.",
    features: [
      "16 Gauge SS 304 top reinforced with channel stiffeners",
      "Smooth turned-down safety edges",
      "Heavy tubular legs with adjustable bullet feet"
    ],
    specs: {
      material: "SS 304 Sheet (1.2mm / 1.5mm)",
      dimensions: "1800 x 750 x 850 mm",
      construction: "TIG Welded & Polished",
      application: "All Commercial Food Prep Areas",
      customization: "Custom length & backsplash options"
    }
  }
];
