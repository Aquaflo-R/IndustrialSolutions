import stringinverter5kw from "../assets/images/StringInverter5kW.png";
import centralinverter from "../assets/images/CentralInverter100kW.png";
import hybrid from "../assets/images/HybridInverter10kW.png";
import micro from "../assets/images/MicroInverter800W.png";
import solarpanel from "../assets/images/SolarPanel.png";
import battery from "../assets/images/Lithium-IronBattery.png";
import monitoring from "../assets/images/MicroInverter800W.png";

const products = [
  /* ================= SOLAR INVERTERS ================= */

  {
    id: 101,
    name: "String Inverter 5kW",
    slug: "string-inverter-5kw",
    category: "solar-inverters",
    subcategory: "string-inverters",
    image: stringinverter5kw,

    shortDescription:
      "High-efficiency string inverter designed for residential and small commercial solar installations.",

    overview:
      "The 5kW String Inverter delivers reliable energy conversion with advanced MPPT technology, ensuring maximum power generation, grid stability, and long-term operational performance.",

    keySpecifications: [
      "Rated Power: 5 kW",
      "Maximum Efficiency: 98.6%",
      "DC Voltage Range: 200 – 1000 V",
      "Ingress Protection: IP65",
    ],

    detailedSpecifications: {
      ratedPower: "5 kW",
      maxEfficiency: "98.6%",
      mpptRange: "250 – 850 V",
      outputPhase: "Single Phase",
      gridFrequency: "50 / 60 Hz",
      cooling: "Intelligent Air Cooling",
    },

    applications: [
      "Residential rooftop solar systems",
      "Small commercial installations",
      "Grid-connected solar projects",
    ],
  },

  {
    id: 102,
    name: "Central Inverter 100kW",
    slug: "central-inverter-100kw",
    category: "solar-inverters",
    subcategory: "central-inverters",
    image: centralinverter,

    shortDescription:
      "High-capacity central inverter engineered for large commercial and industrial solar plants.",

    overview:
      "The 100kW Central Inverter is built for utility-scale and industrial solar projects, delivering high efficiency, stable grid interaction, and continuous heavy-duty operation.",

    keySpecifications: [
      "Rated Power: 100 kW",
      "Three Phase Output",
      "High Conversion Efficiency",
      "Industrial-grade protection",
    ],

    detailedSpecifications: {
      ratedPower: "100 kW",
      outputPhase: "Three Phase",
      maxEfficiency: "98.8%",
      gridFrequency: "50 / 60 Hz",
      protection: "IP65",
      cooling: "Forced Air Cooling",
    },

    applications: [
      "Large commercial solar plants",
      "Industrial power generation",
      "Utility-scale solar farms",
    ],
  },

  {
    id: 103,
    name: "Hybrid Inverter 10kW",
    slug: "hybrid-inverter-10kw",
    category: "solar-inverters",
    subcategory: "hybrid-inverters",
    image: hybrid,

    shortDescription:
      "Smart hybrid inverter supporting both solar generation and battery storage systems.",

    overview:
      "The 10kW Hybrid Inverter seamlessly integrates solar power generation with battery energy storage, enabling efficient energy management, backup power, and grid interaction.",

    keySpecifications: [
      "Rated Power: 10 kW",
      "Battery Integration Support",
      "High Efficiency Design",
      "Smart Energy Management",
    ],

    detailedSpecifications: {
      ratedPower: "10 kW",
      batterySupport: "Lithium-ion compatible",
      maxEfficiency: "98.4%",
      outputPhase: "Single / Three Phase",
      protection: "IP65",
      monitoring: "Wi-Fi / App Enabled",
    },

    applications: [
      "Residential solar + battery systems",
      "Commercial backup power solutions",
      "Hybrid energy installations",
    ],
  },

  {
    id: 104,
    name: "Micro Inverter 800W",
    slug: "micro-inverter-800w",
    category: "solar-inverters",
    subcategory: "micro-inverters",
    image: micro,

    shortDescription:
      "Compact micro inverter optimized for panel-level energy conversion.",

    overview:
      "The 800W Micro Inverter enhances solar system efficiency by converting power at the panel level, improving safety, performance monitoring, and energy yield.",

    keySpecifications: [
      "Rated Power: 800 W",
      "Panel-level MPPT",
      "Compact & Lightweight Design",
      "High Safety Standards",
    ],

    detailedSpecifications: {
      ratedPower: "800 W",
      maxEfficiency: "97.5%",
      protection: "IP67",
      monitoring: "Module-level monitoring",
      installation: "Plug-and-Play",
    },

    applications: [
      "Residential rooftop systems",
      "Small solar arrays",
      "Shaded or complex roof layouts",
    ],
  },

  /* ================= SOLAR PANELS ================= */

  {
    id: 201,
    name: "Monocrystalline Solar Panel 550W",
    slug: "monocrystalline-panel-550w",
    category: "solar-panels",
    subcategory: "monocrystalline-panels",
    image: solarpanel,

    shortDescription:
      "High-efficiency monocrystalline solar panel delivering superior energy output.",

    overview:
      "This 550W monocrystalline solar panel is engineered for maximum efficiency and durability, making it ideal for high-performance solar installations.",

    keySpecifications: [
      "Power Output: 550 W",
      "High Module Efficiency",
      "Long Service Life",
      "Weather-resistant Design",
    ],

    applications: [
      "Residential rooftops",
      "Commercial solar systems",
      "Industrial installations",
    ],
  },

  {
    id: 202,
    name: "Polycrystalline Solar Panel 450W",
    slug: "polycrystalline-panel-450w",
    category: "solar-panels",
    subcategory: "polycrystalline-panels",
    image: solarpanel,

    shortDescription:
      "Cost-effective polycrystalline solar panel for reliable energy generation.",

    overview:
      "The 450W polycrystalline solar panel offers stable performance and durability, making it a practical choice for budget-focused solar projects.",

    keySpecifications: [
      "Power Output: 450 W",
      "Stable Performance",
      "Durable Construction",
      "Low Maintenance",
    ],

    applications: [
      "Residential systems",
      "Commercial installations",
      "Medium-scale solar projects",
    ],
  },

  {
    id: 203,
    name: "Bifacial Solar Panel 600W",
    slug: "bifacial-panel-600w",
    category: "solar-panels",
    subcategory: "bifacial-panels",
    image: solarpanel,

    shortDescription:
      "Advanced bifacial solar panel capturing energy from both sides.",

    overview:
      "The 600W bifacial solar panel increases energy yield by absorbing sunlight from both the front and rear sides, ideal for utility-scale applications.",

    keySpecifications: [
      "Power Output: 600 W",
      "Dual-side Energy Capture",
      "High Durability",
      "Enhanced Energy Yield",
    ],

    applications: [
      "Utility-scale solar farms",
      "Ground-mounted systems",
      "High-efficiency projects",
    ],
  },

  /* ================= ENERGY STORAGE SYSTEMS ================= */

  {
    id: 301,
    name: "Lithium-Iron Battery 5kWh",
    slug: "lithium-iron-battery-5kwh",
    category: "energy-storage",
    subcategory: "lithium-iron-batteries",
    image: battery,

    shortDescription:
      "Reliable lithium-iron battery for solar energy storage applications.",

    overview:
      "This 5kWh lithium-iron battery provides safe, long-lasting energy storage, supporting backup power and efficient energy management.",

    keySpecifications: [
      "Capacity: 5 kWh",
      "Long Cycle Life",
      "High Safety Standards",
      "Compact Design",
    ],

    applications: [
      "Residential energy storage",
      "Hybrid solar systems",
      "Backup power solutions",
    ],
  },

  {
    id: 302,
    name: "Battery Pack 10kWh",
    slug: "battery-pack-10kwh",
    category: "energy-storage",
    subcategory: "battery-packs",
    image: battery,

    shortDescription:
      "Scalable battery pack designed for extended energy storage needs.",

    overview:
      "The 10kWh battery pack supports scalable energy storage, ensuring reliable backup power and optimized energy usage.",

    keySpecifications: [
      "Capacity: 10 kWh",
      "Scalable Design",
      "High Efficiency",
      "Industrial-grade Build",
    ],

    applications: [
      "Commercial energy storage",
      "Industrial backup systems",
      "Hybrid solar plants",
    ],
  },

  {
    id: 303,
    name: "Energy Storage Solution 50kWh",
    slug: "energy-storage-solution-50kwh",
    category: "energy-storage",
    subcategory: "energy-storage-solutions",
    image: battery,

    shortDescription:
      "Large-scale energy storage solution for commercial and industrial applications.",

    overview:
      "This 50kWh energy storage solution is designed for high-capacity installations, delivering reliable energy backup and grid support.",

    keySpecifications: [
      "Capacity: 50 kWh",
      "High Scalability",
      "Advanced Safety Systems",
      "Long-term Reliability",
    ],

    applications: [
      "Industrial energy storage",
      "Commercial power backup",
      "Grid-support applications",
    ],
  },

  /* ================= MONITORING & CONTROL ================= */

  {
    id: 401,
    name: "Solar Monitoring Device Pro",
    slug: "solar-monitoring-device-pro",
    category: "solar-monitoring-control",
    subcategory: "monitoring-devices",
    image: monitoring,

    shortDescription:
      "Advanced monitoring device for real-time solar performance tracking.",

    overview:
      "The Solar Monitoring Device Pro enables real-time system monitoring, diagnostics, and performance optimization.",

    keySpecifications: [
      "Real-time Monitoring",
      "Web & App Access",
      "Remote Diagnostics",
      "High Data Accuracy",
    ],

    applications: [
      "Residential monitoring",
      "Commercial solar plants",
      "Industrial energy systems",
    ],
  },

  {
    id: 402,
    name: "Energy Data Logger X1",
    slug: "energy-data-logger-x1",
    category: "solar-monitoring-control",
    subcategory: "data-loggers",
    image: monitoring,

    shortDescription:
      "Reliable data logger for detailed energy performance analysis.",

    overview:
      "The Energy Data Logger X1 captures and stores energy performance data, enabling detailed analysis and reporting.",

    keySpecifications: [
      "High-precision Data Logging",
      "Remote Access Support",
      "Secure Data Storage",
      "Industrial-grade Reliability",
    ],

    applications: [
      "Solar monitoring systems",
      "Energy analysis",
      "Performance optimization",
    ],
  },

  {
    id: 403,
    name: "Smart Solar Controller S100",
    slug: "smart-solar-controller-s100",
    category: "solar-monitoring-control",
    subcategory: "smart-controllers",
    image: monitoring,

    shortDescription: "Smart controller for efficient solar energy management.",

    overview:
      "The Smart Solar Controller S100 optimizes energy flow, improves system efficiency, and ensures safe operation.",

    keySpecifications: [
      "Smart Energy Control",
      "High Compatibility",
      "Remote Monitoring",
      "Reliable Operation",
    ],

    applications: [
      "Solar power systems",
      "Energy management solutions",
      "Smart grid applications",
    ],
  },
];

export default products;
