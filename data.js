

const ALL_RESOURCES_TRANSLATIONS = {
    
    "Jellystone": {"fr":"Pierre de gelée","en":"Jellystone","es":"Piedra jalea"},
    "Slime Fossil": {"fr":"Slime fossilisé","en":"Slime Fossil","es":"Fósil de slime"},
    "Strange Diamond": {"fr":"Diamant étrange","en":"Strange Diamond","es":"Diamante extraño"},
    "Indigonium": {"fr":"Indigonium","en":"Indigonium","es":"Indigonio"},
    "Glass Shard": {"fr":"Éclat de verre","en":"Glass Shard","es":"Fragmento de cristal"},
    
    "Primordy Oil": {"fr":"Origin'huile","en":"Primordy Oil","es":"Aceite primigenio"},
    "Spiral Steam": {"fr":"Buée tourbillonnante","en":"Spiral Steam","es":"Vapor espiral"},
    "Lava Dust": {"fr":"Poussière de lave","en":"Lava Dust","es":"Polvo de lava"},
    "Deep Brine": {"fr":"Saumure des profondeurs","en":"Deep Brine","es":"Salmuera profunda"},
    "Silky Sand": {"fr":"Sable soyeux","en":"Silky Sand","es":"Arena sedosa"},
    
    "Buzz Wax": {"fr":"Cire d'abzz","en":"Buzz Wax","es":"Cera zumbante"},
    "Hexacomb": {"fr":"Hexalvéole","en":"Hexacomb","es":"Hexapanal"},
    "Royal Jelly": {"fr":"Gelée royale","en":"Royal Jelly","es":"Jalea real"},
    "Wild Honey": {"fr":"Miel sauvage","en":"Wild Honey","es":"Miel silvestre"},
    "Pepper Jam": {"fr":"Confiture de piment","en":"Pepper Jam","es":"Mermelada de pimiento"},
    
    "Manifold Cube": {"fr":"Multi-cube","en":"Manifold Cube","es":"Cubo múltiple"},
    
    "Pink Plort": {"fr":"Plorte rose","en":"Pink Plort","es":"Plort Rosa"},
    "Rock Plort": {"fr":"Plorte rocheux","en":"Rock Plort","es":"Plort Roca"},
    "Tabby Plort": {"fr":"Plorte tigré","en":"Tabby Plort","es":"Plort Atigrado"},
    "Phosphor Plort": {"fr":"Plorte phosphorescent","en":"Phosphor Plort","es":"Plort Fósforo"},
    "Honey Plort": {"fr":"Plorte mielleux","en":"Honey Plort","es":"Plort Miel"},
    "Boom Plort": {"fr":"Plorte boum","en":"Boom Plort","es":"Plort Búm"},
    "Rad Plort": {"fr":"Plorte rad","en":"Rad Plort","es":"Plort Rad"},
    "Crystal Plort": {"fr":"Plorte de cristal","en":"Crystal Plort","es":"Plort Cristal"},
    "Hunter Plort": {"fr":"Plorte chasseur","en":"Hunter Plort","es":"Plort Cazador"},
    "Quantum Plort": {"fr":"Plorte quantique","en":"Quantum Plort","es":"Plort Cuántico"},
    "Mosaic Plort": {"fr":"Plorte mosaïque","en":"Mosaic Plort","es":"Plort Mosaico"},
    "Dervish Plort": {"fr":"Plorte derviche","en":"Dervish Plort","es":"Plort Derviche"},
    "Tangle Plort": {"fr":"Plorte vrillé","en":"Tangle Plort","es":"Plort Maraña"},
    "Saber Plort": {"fr":"Plorte à dents de sabre","en":"Saber Plort","es":"Plort Sable"},
    "Fire Plort": {"fr":"Plorte ardent","en":"Fire Plort","es":"Plort Fuego"},
    "Puddle Plort": {"fr":"Plorte aqueux","en":"Puddle Plort","es":"Plort Charco"}
};


const ALL_RESOURCES = Object.keys(ALL_RESOURCES_TRANSLATIONS);


const RESOURCE_CATEGORIES = {
    drill: ["Jellystone", "Slime Fossil", "Strange Diamond", "Indigonium", "Glass Shard"],
    pump: ["Primordy Oil", "Spiral Steam", "Lava Dust", "Deep Brine", "Silky Sand"],
    apiary: ["Buzz Wax", "Hexacomb", "Royal Jelly", "Wild Honey", "Pepper Jam"],
    special: ["Manifold Cube"],
    plorts: [
        "Pink Plort", "Rock Plort", "Tabby Plort", "Phosphor Plort", "Honey Plort",
        "Boom Plort", "Rad Plort", "Crystal Plort", "Hunter Plort", "Quantum Plort",
        "Mosaic Plort", "Dervish Plort", "Tangle Plort", "Saber Plort", "Fire Plort",
        "Puddle Plort"
    ]
};


const RECIPES_TRANSLATIONS = {
    
    "Novice Drill": { en: "Novice Drill", fr: "Foreuse Novice", es: "Taladradora Novata" },
    "Advanced Drill": { en: "Advanced Drill", fr: "Foreuse Avancée", es: "Taladradora Avanzada" },
    "Master Drill": { en: "Master Drill", fr: "Foreuse Maître", es: "Taladradora Maestra" },
    "Novice Pump": { en: "Novice Pump", fr: "Pompe Novice", es: "Bomba Novata" },
    "Advanced Pump": { en: "Advanced Pump", fr: "Pompe Avancée", es: "Bomba Avanzada" },
    "Master Pump": { en: "Master Pump", fr: "Pompe Maître", es: "Bomba Maestra" },
    "Novice Apiary": { en: "Novice Apiary", fr: "Ruche Novice", es: "Colmena Novata" },
    "Advanced Apiary": { en: "Advanced Apiary", fr: "Ruche Avancée", es: "Colmena Avanzada" },
    "Master Apiary": { en: "Master Apiary", fr: "Ruche Maître", es: "Colmena Maestra" },
    
    "Dash Boots": { en: "Dash Boots", fr: "Bottes de Course", es: "Botas de Carrera" },
    "Jetpack": { en: "Jetpack", fr: "Jetpack", es: "Propulsor" },
    "Tank Booster (Health)": { en: "Tank Booster (Health)", fr: "Boost Réservoir (Santé)", es: "Mejora de Tanque (Salud)" },
    "Tank Booster (Energy)": { en: "Tank Booster (Energy)", fr: "Boost Réservoir (Énergie)", es: "Mejora de Tanque (Energía)" },
    "Tank Booster (Ammo)": { en: "Tank Booster (Ammo)", fr: "Boost Réservoir (Munitions)", es: "Mejora de Tanque (Munición)" },
    "Heart Module": { en: "Heart Module", fr: "Module Cœur", es: "Módulo Corazón" },
    
    "Aqua Turret": { en: "Aqua Turret", fr: "Tourelle Aqua", es: "Torreta Acuática" },
    "Hydro Turret": { en: "Hydro Turret", fr: "Tourelle Hydro", es: "Torreta Hidro" },
    "Super Hydro Turret": { en: "Super Hydro Turret", fr: "Super Tourelle Hydro", es: "Super Torreta Hidro" },
    "Pulse Wave": { en: "Pulse Wave", fr: "Onde de Pulsation", es: "Onda de Pulso" },
    "Thunderclap": { en: "Thunderclap", fr: "Coup de Tonnerre", es: "Trueno" },
    "Taming Bell": { en: "Taming Bell", fr: "Cloche d'Apprivoisement", es: "Campana de Doma" },
    "Med Station": { en: "Med Station", fr: "Station Médicale", es: "Estación Médica" },
    "Drone": { en: "Drone", fr: "Drone", es: "Dron" },
    "Advanced Drone": { en: "Advanced Drone", fr: "Drone Avancé", es: "Dron Avanzado" },
    
    "Novice Gordo Snare": { en: "Novice Gordo Snare", fr: "Piège à Gordo Novice", es: "Trampa Gordo Novata" },
    "Advanced Gordo Snare": { en: "Advanced Gordo Snare", fr: "Piège à Gordo Avancé", es: "Trampa Gordo Avanzada" },
    "Master Gordo Snare": { en: "Master Gordo Snare", fr: "Piège à Gordo Maître", es: "Trampa Gordo Maestra" },
    
    "Portable Water Tap": { en: "Portable Water Tap", fr: "Robinet d'Eau Portable", es: "Grifo de Agua Portátil" },
    "Chicken Cloner": { en: "Chicken Cloner", fr: "Clonage de Poulet", es: "Clonador de Pollos" },
    "Portable Scareslime": { en: "Portable Scareslime", fr: "Épouvantail Portable", es: "Espantaslime Portátil" },
    "Spring Pad": { en: "Spring Pad", fr: "Trampoline", es: "Plataforma de Salto" },
    "Dash Pad": { en: "Dash Pad", fr: "Plateforme Rapide", es: "Plataforma de Carrera" },
    
    "Fruit Slime Bait": { en: "Fruit Slime Bait", fr: "Appât Fruité", es: "Cebo de Fruta" },
    "Veggie Slime Bait": { en: "Veggie Slime Bait", fr: "Appât Végétal", es: "Cebo de Vegetales" },
    "Meat Slime Bait": { en: "Meat Slime Bait", fr: "Appât de Viande", es: "Cebo de Carne" },
    
    "Teleporter": { en: "Teleporter", fr: "Téléporteur", es: "Teletransportador" },
    "Warp Depot": { en: "Warp Depot", fr: "Dépôt de Téléportation", es: "Depósito de Teletransporte" },
    "Refinery Link": { en: "Refinery Link", fr: "Lien de Raffinerie", es: "Enlace de Refinería" },
    "Market Link": { en: "Market Link", fr: "Lien de Marché", es: "Enlace de Mercado" },
    
    "Slime Lamp (Pink)": { en: "Slime Lamp (Pink)", fr: "Lampe Slime (Rose)", es: "Lámpara Slime (Rosa)" },
    "Slime Lamp (Tabby)": { en: "Slime Lamp (Tabby)", fr: "Lampe Slime (Tigré)", es: "Lámpara Slime (Atigrado)" },
    "Slime Statue (Rock)": { en: "Slime Statue (Rock)", fr: "Statue Slime (Roche)", es: "Estatua Slime (Roca)" },
    "Potted Tactus": { en: "Potted Tactus", fr: "Cactus en Pot", es: "Cactus en Maceta" },
    "Echo Net": { en: "Echo Net", fr: "Filet d'Écho", es: "Red de Eco" },
    
    "Slime Toy (Beach Ball)": { en: "Slime Toy (Beach Ball)", fr: "Jouet Slime (Ballon)", es: "Juguete Slime (Pelota)" },
    "Slime Toy (Tabletop)": { en: "Slime Toy (Tabletop)", fr: "Jouet Slime (Table)", es: "Juguete Slime (Mesa)" },
    "Fashion Pod (Bow)": { en: "Fashion Pod (Bow)", fr: "Capsule Mode (Nœud)", es: "Cápsula de Moda (Lazo)" },
    
    "Slime Key": { en: "Slime Key", fr: "Clé Slime", es: "Llave Slime" },
    "Treasure Cracker MKII": { en: "Treasure Cracker MKII", fr: "Briseur de Trésor MKII", es: "Rompedor de Tesoros MKII" },
    "Treasure Cracker MKIII": { en: "Treasure Cracker MKIII", fr: "Briseur de Trésor MKIII", es: "Rompedor de Tesoros MKIII" },
    "Nimble Valley": { en: "Nimble Valley", fr: "Vallée Agile", es: "Valle Ágil" }
};


const RECIPES_DATA = [
    
    { id: 1, name: "Novice Drill", category: "Extractors", price: 0, blueprintCost: 0, ingredients: ["Pink Plort x10", "Rock Plort x6", "Rad Plort x3"], icon: "⛏️", image: "https:
    { id: 2, name: "Advanced Drill", category: "Extractors", price: 450, blueprintCost: 450, ingredients: ["Jellystone x15", "Slime Fossil x10", "Buzz Wax x8"], icon: "⛏️", image: "" },
    { id: 3, name: "Master Drill", category: "Extractors", price: 1000, blueprintCost: 1000, ingredients: ["Jellystone x30", "Indigonium x20", "Slime Fossil x20"], icon: "⛏️", image: "" },
    { id: 4, name: "Novice Pump", category: "Extractors", price: 0, blueprintCost: 0, ingredients: ["Pink Plort x10", "Tabby Plort x6", "Phosphor Plort x3"], icon: "💧", image: "" },
    { id: 5, name: "Advanced Pump", category: "Extractors", price: 450, blueprintCost: 450, ingredients: ["Primordy Oil x15", "Deep Brine x10", "Wild Honey x8"], icon: "💧", image: "" },
    { id: 6, name: "Master Pump", category: "Extractors", price: 1000, blueprintCost: 1000, ingredients: ["Primordy Oil x30", "Lava Dust x20", "Deep Brine x20"], icon: "💧", image: "" },
    { id: 7, name: "Novice Apiary", category: "Extractors", price: 0, blueprintCost: 0, ingredients: ["Pink Plort x10", "Honey Plort x6", "Boom Plort x3"], icon: "🐝", image: "" },
    { id: 8, name: "Advanced Apiary", category: "Extractors", price: 450, blueprintCost: 450, ingredients: ["Hexacomb x15", "Royal Jelly x10", "Silky Sand x8"], icon: "🐝", image: "" },
    { id: 9, name: "Master Apiary", category: "Extractors", price: 1000, blueprintCost: 1000, ingredients: ["Hexacomb x30", "Royal Jelly x20", "Wild Honey x20"], icon: "🐝", image: "" },
    
    
    { id: 10, name: "Dash Boots", category: "Utilities", price: 500, blueprintCost: 500, ingredients: ["Hexacomb x10", "Lava Dust x5", "Silky Sand x5"], icon: "👟", image: "" },
    { id: 11, name: "Jetpack", category: "Utilities", price: 3500, blueprintCost: 3500, ingredients: ["Hexacomb x30", "Lava Dust x20", "Primordy Oil x20"], icon: "🚀", image: "" },
    { id: 12, name: "Tank Booster (Health)", category: "Utilities", price: 2500, blueprintCost: 2500, ingredients: ["Deep Brine x20", "Wild Honey x20", "Pepper Jam x15"], icon: "💚", image: "" },
    { id: 13, name: "Tank Booster (Energy)", category: "Utilities", price: 2500, blueprintCost: 2500, ingredients: ["Hexacomb x20", "Pepper Jam x20", "Silky Sand x15"], icon: "⚡", image: "" },
    { id: 14, name: "Tank Booster (Ammo)", category: "Utilities", price: 2500, blueprintCost: 2500, ingredients: ["Jellystone x20", "Royal Jelly x20", "Buzz Wax x15"], icon: "🔫", image: "" },
    { id: 15, name: "Heart Module", category: "Utilities", price: 1750, blueprintCost: 1750, ingredients: ["Deep Brine x15", "Wild Honey x15", "Lava Dust x10"], icon: "❤️", image: "" },
    
    
    { id: 16, name: "Aqua Turret", category: "Utilities", price: 625, blueprintCost: 625, ingredients: ["Deep Brine x10", "Primordy Oil x5", "Slime Fossil x5"], icon: "💦", image: "" },
    { id: 17, name: "Hydro Turret", category: "Utilities", price: 1250, blueprintCost: 1250, ingredients: ["Deep Brine x15", "Primordy Oil x10", "Royal Jelly x10"], icon: "🌊", image: "" },
    { id: 18, name: "Super Hydro Turret", category: "Utilities", price: 2500, blueprintCost: 2500, ingredients: ["Deep Brine x25", "Primordy Oil x15", "Royal Jelly x15"], icon: "🌊", image: "" },
    { id: 19, name: "Pulse Wave", category: "Utilities", price: 750, blueprintCost: 750, ingredients: ["Hexacomb x10", "Buzz Wax x5", "Jellystone x5"], icon: "📡", image: "" },
    { id: 20, name: "Thunderclap", category: "Utilities", price: 1500, blueprintCost: 1500, ingredients: ["Hexacomb x15", "Buzz Wax x10", "Silky Sand x10"], icon: "⚡", image: "" },
    { id: 21, name: "Taming Bell", category: "Utilities", price: 1000, blueprintCost: 1000, ingredients: ["Buzz Wax x10", "Wild Honey x10", "Jellystone x8"], icon: "🔔", image: "" },
    { id: 22, name: "Med Station", category: "Utilities", price: 750, blueprintCost: 750, ingredients: ["Primordy Oil x10", "Wild Honey x8", "Pepper Jam x6"], icon: "🏥", image: "" },
    { id: 23, name: "Drone", category: "Utilities", price: 2000, blueprintCost: 2000, ingredients: ["Hexacomb x15", "Jellystone x15", "Primordy Oil x10"], icon: "🤖", image: "" },
    { id: 24, name: "Advanced Drone", category: "Utilities", price: 5000, blueprintCost: 5000, ingredients: ["Hexacomb x30", "Jellystone x25", "Primordy Oil x20"], icon: "🤖", image: "" },
    
    
    { id: 25, name: "Novice Gordo Snare", category: "Utilities", price: 250, blueprintCost: 250, ingredients: ["Royal Jelly x8", "Buzz Wax x6", "Pepper Jam x4"], icon: "🎯", image: "" },
    { id: 26, name: "Advanced Gordo Snare", category: "Utilities", price: 450, blueprintCost: 450, ingredients: ["Royal Jelly x12", "Buzz Wax x10", "Pepper Jam x8"], icon: "🎯", image: "" },
    { id: 27, name: "Master Gordo Snare", category: "Utilities", price: 1000, blueprintCost: 1000, ingredients: ["Royal Jelly x20", "Buzz Wax x15", "Pepper Jam x12"], icon: "🎯", image: "" },
    
    
    { id: 28, name: "Portable Water Tap", category: "Utilities", price: 500, blueprintCost: 500, ingredients: ["Primordy Oil x10", "Deep Brine x8", "Jellystone x6"], icon: "🚰", image: "" },
    { id: 29, name: "Chicken Cloner", category: "Utilities", price: 3000, blueprintCost: 3000, ingredients: ["Hexacomb x20", "Wild Honey x15", "Royal Jelly x12"], icon: "🐔", image: "" },
    { id: 30, name: "Portable Scareslime", category: "Utilities", price: 750, blueprintCost: 750, ingredients: ["Buzz Wax x10", "Jellystone x8", "Deep Brine x6"], icon: "👻", image: "" },
    { id: 31, name: "Spring Pad", category: "Utilities", price: 450, blueprintCost: 450, ingredients: ["Hexacomb x8", "Lava Dust x6", "Primordy Oil x5"], icon: "🔼", image: "" },
    { id: 32, name: "Dash Pad", category: "Utilities", price: 600, blueprintCost: 600, ingredients: ["Silky Sand x10", "Lava Dust x8", "Hexacomb x6"], icon: "⚡", image: "" },
    
    
    { id: 33, name: "Fruit Slime Bait", category: "Utilities", price: 300, blueprintCost: 300, ingredients: ["Wild Honey x8", "Pepper Jam x6", "Buzz Wax x4"], icon: "🍎", image: "" },
    { id: 34, name: "Veggie Slime Bait", category: "Utilities", price: 300, blueprintCost: 300, ingredients: ["Royal Jelly x8", "Wild Honey x6", "Hexacomb x4"], icon: "🥕", image: "" },
    { id: 35, name: "Meat Slime Bait", category: "Utilities", price: 300, blueprintCost: 300, ingredients: ["Primordy Oil x8", "Deep Brine x6", "Jellystone x4"], icon: "🍗", image: "" },
    
    
    { id: 36, name: "Teleporter", category: "Warp Tech", price: 3500, blueprintCost: 3500, ingredients: ["Strange Diamond x1", "Lava Dust x20", "Hexacomb x25"], icon: "📍", image: "" },
    { id: 37, name: "Warp Depot", category: "Warp Tech", price: 2500, blueprintCost: 2500, ingredients: ["Jellystone x20", "Primordy Oil x15", "Buzz Wax x12"], icon: "📦", image: "" },
    { id: 38, name: "Refinery Link", category: "Warp Tech", price: 5000, blueprintCost: 5000, ingredients: ["Strange Diamond x1", "Hexacomb x30", "Primordy Oil x25"], icon: "🔗", image: "" },
    { id: 39, name: "Market Link", category: "Warp Tech", price: 3500, blueprintCost: 3500, ingredients: ["Strange Diamond x1", "Lava Dust x20", "Primordy Oil x20"], icon: "🏪", image: "" },
    
    
    { id: 40, name: "Slime Lamp (Pink)", category: "Decorations", price: 150, blueprintCost: 150, ingredients: ["Jellystone x6", "Buzz Wax x4", "Primordy Oil x3"], icon: "💡", image: "" },
    { id: 41, name: "Slime Lamp (Tabby)", category: "Decorations", price: 200, blueprintCost: 200, ingredients: ["Hexacomb x6", "Wild Honey x4", "Jellystone x3"], icon: "💡", image: "" },
    { id: 42, name: "Slime Statue (Rock)", category: "Decorations", price: 300, blueprintCost: 300, ingredients: ["Jellystone x10", "Slime Fossil x6", "Deep Brine x5"], icon: "🗿", image: "" },
    { id: 43, name: "Potted Tactus", category: "Decorations", price: 400, blueprintCost: 400, ingredients: ["Primordy Oil x8", "Pepper Jam x6", "Silky Sand x5"], icon: "🌵", image: "" },
    { id: 44, name: "Echo Net", category: "Decorations", price: 650, blueprintCost: 650, ingredients: ["Jellystone x12", "Deep Brine x8", "Slime Fossil x6"], icon: "🌊", image: "" },
    
    
    { id: 45, name: "Slime Toy (Beach Ball)", category: "Curios", price: 200, blueprintCost: 200, ingredients: ["Hexacomb x5", "Primordy Oil x4", "Buzz Wax x3"], icon: "⚽", image: "" },
    { id: 46, name: "Slime Toy (Tabletop)", category: "Curios", price: 350, blueprintCost: 350, ingredients: ["Wild Honey x8", "Jellystone x6", "Royal Jelly x5"], icon: "🎲", image: "" },
    { id: 47, name: "Fashion Pod (Bow)", category: "Curios", price: 500, blueprintCost: 500, ingredients: ["Pepper Jam x10", "Buzz Wax x8", "Wild Honey x6"], icon: "🎀", image: "" },
    
    
    { id: 48, name: "Slime Key", category: "Personal", price: 10000, blueprintCost: 10000, ingredients: ["Strange Diamond x1", "Slime Fossil x30", "Royal Jelly x30"], icon: "🔑", image: "" },
    { id: 49, name: "Treasure Cracker MKII", category: "Personal", price: 10000, blueprintCost: 10000, ingredients: ["Strange Diamond x1", "Jellystone x30", "Wild Honey x30"], icon: "💎", image: "" },
    { id: 50, name: "Treasure Cracker MKIII", category: "Personal", price: 25000, blueprintCost: 25000, ingredients: ["Strange Diamond x3", "Spiral Steam x30", "Buzz Wax x30"], icon: "💠", image: "" },
    { id: 51, name: "Nimble Valley", category: "Personal", price: 7500, blueprintCost: 7500, ingredients: ["Strange Diamond x1", "Hexacomb x25", "Silky Sand x25"], icon: "🏞️", image: "" }
];


const VACPACK_UPGRADES = [
    
    { id: 1, name: "Tank Capacity +25", category: "capacity", price: 2500, icon: "📦", level: 1 },
    { id: 2, name: "Tank Capacity +25", category: "capacity", price: 5000, icon: "📦", level: 2 },
    { id: 3, name: "Tank Capacity +25", category: "capacity", price: 7500, icon: "📦", level: 3 },
    { id: 4, name: "Tank Capacity +25", category: "capacity", price: 10000, icon: "📦", level: 4 },
    
    
    { id: 5, name: "Vac Range +5m", category: "range", price: 2500, icon: "📏", level: 1 },
    { id: 6, name: "Vac Range +5m", category: "range", price: 5000, icon: "📏", level: 2 },
    { id: 7, name: "Vac Range +5m", category: "range", price: 7500, icon: "📏", level: 3 },
    { id: 8, name: "Vac Range +5m", category: "range", price: 10000, icon: "📏", level: 4 },
    
    
    { id: 9, name: "Water Tank +25", category: "water", price: 2500, icon: "💧", level: 1 },
    { id: 10, name: "Water Tank +25", category: "water", price: 5000, icon: "💧", level: 2 },
    { id: 11, name: "Water Tank +25", category: "water", price: 7500, icon: "💧", level: 3 },
    { id: 12, name: "Water Tank +25", category: "water", price: 10000, icon: "💧", level: 4 },
    
    
    { id: 13, name: "Health +25", category: "health", price: 2500, icon: "❤️", level: 1 },
    { id: 14, name: "Health +25", category: "health", price: 5000, icon: "❤️", level: 2 },
    { id: 15, name: "Health +25", category: "health", price: 7500, icon: "❤️", level: 3 },
    { id: 16, name: "Health +25", category: "health", price: 10000, icon: "❤️", level: 4 },
    
    
    { id: 17, name: "Energy +100", category: "energy", price: 2500, icon: "⚡", level: 1 },
    { id: 18, name: "Energy +100", category: "energy", price: 5000, icon: "⚡", level: 2 },
    { id: 19, name: "Energy +100", category: "energy", price: 7500, icon: "⚡", level: 3 },
    { id: 20, name: "Energy +100", category: "energy", price: 10000, icon: "⚡", level: 4 },
    
    
    { id: 21, name: "Ammo +25", category: "ammo", price: 2500, icon: "🔫", level: 1 },
    { id: 22, name: "Ammo +25", category: "ammo", price: 5000, icon: "🔫", level: 2 },
    { id: 23, name: "Ammo +25", category: "ammo", price: 7500, icon: "🔫", level: 3 },
    { id: 24, name: "Ammo +25", category: "ammo", price: 10000, icon: "🔫", level: 4 },
    
    
    { id: 25, name: "Dash Boots", category: "movement", price: 500, icon: "👟", level: 1 },
    
    
    { id: 26, name: "Jetpack", category: "movement", price: 3500, icon: "🚀", level: 1 },
    
    
    { id: 27, name: "Heart Module", category: "special", price: 1750, icon: "💚", level: 1 },
    
    
    { id: 28, name: "Tank Booster (Health)", category: "booster", price: 2500, icon: "💚", level: 1 },
    { id: 29, name: "Tank Booster (Energy)", category: "booster", price: 2500, icon: "⚡", level: 2 },
    { id: 30, name: "Tank Booster (Ammo)", category: "booster", price: 2500, icon: "🔫", level: 3 }
];


const VACPACK_TRANSLATIONS = {
    "Tank Capacity +25": {
        en: "Tank Capacity +25",
        fr: "Capacité Réservoir +25",
        es: "Capacidad Tanque +25"
    },
    "Vac Range +5m": {
        en: "Vac Range +5m",
        fr: "Portée Aspi +5m",
        es: "Alcance Vac +5m"
    },
    "Water Tank +25": {
        en: "Water Tank +25",
        fr: "Réservoir d'Eau +25",
        es: "Tanque de Agua +25"
    },
    "Health +25": {
        en: "Health +25",
        fr: "Santé +25",
        es: "Salud +25"
    },
    "Energy +100": {
        en: "Energy +100",
        fr: "Énergie +100",
        es: "Energía +100"
    },
    "Ammo +25": {
        en: "Ammo +25",
        fr: "Munitions +25",
        es: "Munición +25"
    },
    "Dash Boots": {
        en: "Dash Boots",
        fr: "Bottes de Sprint",
        es: "Botas de Carrera"
    },
    "Jetpack": {
        en: "Jetpack",
        fr: "Jetpack",
        es: "Propulsor"
    },
    "Heart Module": {
        en: "Heart Module",
        fr: "Module Cœur",
        es: "Módulo Corazón"
    },
    "Tank Booster (Health)": {
        en: "Tank Booster (Health)",
        fr: "Boost Réservoir (Santé)",
        es: "Mejora de Tanque (Salud)"
    },
    "Tank Booster (Energy)": {
        en: "Tank Booster (Energy)",
        fr: "Boost Réservoir (Énergie)",
        es: "Mejora de Tanque (Energía)"
    },
    "Tank Booster (Ammo)": {
        en: "Tank Booster (Ammo)",
        fr: "Boost Réservoir (Munitions)",
        es: "Mejora de Tanque (Munición)"
    }
};


const VACPACK_CATEGORY_TRANSLATIONS = {
    "capacity": {
        en: "Tank Capacity",
        fr: "Capacité du Réservoir",
        es: "Capacidad del Tanque"
    },
    "range": {
        en: "Vacuum Range",
        fr: "Portée de l'Aspirateur",
        es: "Alcance del Aspirador"
    },
    "water": {
        en: "Water Tank",
        fr: "Réservoir d'Eau",
        es: "Tanque de Agua"
    },
    "health": {
        en: "Health",
        fr: "Santé",
        es: "Salud"
    },
    "energy": {
        en: "Energy",
        fr: "Énergie",
        es: "Energía"
    },
    "ammo": {
        en: "Ammo",
        fr: "Munitions",
        es: "Munición"
    },
    "movement": {
        en: "Movement",
        fr: "Déplacement",
        es: "Movimiento"
    },
    "special": {
        en: "Special",
        fr: "Spécial",
        es: "Especial"
    },
    "booster": {
        en: "Tank Boosters",
        fr: "Boost de Réservoir",
        es: "Mejoras de Tanque"
    }
};


const CLUB_7ZEE_REWARDS = [
    { tier: 1, name: "Initiate", required: 750, rewards: ["Roostro Weathervane"] },
    { tier: 2, name: "Pioneer I", required: 1750, rewards: ["Fence Upgrade"] },
    { tier: 3, name: "Pioneer II", required: 3250, rewards: ["Path Upgrade"] },
    { tier: 4, name: "Pioneer III", required: 5250, rewards: ["Porch Upgrade"] },
    { tier: 5, name: "Skylark I", required: 7750, rewards: ["Chroma Station", "Classic/Cobalt/Milkshake Chroma Packs"] },
    { tier: 6, name: "Skylark II", required: 10750, rewards: ["Arch Upgrade"] },
    { tier: 7, name: "Skylark III", required: 14250, rewards: ["Firecracker/Grapeshot Chroma Packs"] },
    { tier: 8, name: "Rolling Beetle I", required: 18250, rewards: ["Slime Toys Shop"] },
    { tier: 9, name: "Rolling Beetle II", required: 22750, rewards: ["Robo Ranger/Maidatron Chroma Packs"] },
    { tier: 10, name: "Rolling Beetle III", required: 27750, rewards: ["Advanced Slime Toys"] },
    { tier: 11, name: "Playful Fox I", required: 34000, rewards: ["Gingersnap/Peapod Chroma Packs", "Market Link"] },
    { tier: 12, name: "Playful Fox II", required: 41500, rewards: ["Grotto Upgrade"] },
    { tier: 13, name: "Playful Fox III", required: 51500, rewards: ["Decorizer", "Vanguard/Willow Chroma Packs"] },
    { tier: 14, name: "Silver Storm I", required: 66500, rewards: ["Slime Trophy I"] },
    { tier: 15, name: "Silver Storm II", required: 86500, rewards: ["Daybreak/Eventide Chroma Packs"] },
    { tier: 16, name: "Silver Storm III", required: 111500, rewards: ["Overgrowth Upgrade"] },
    { tier: 17, name: "Dancing Mongoose I", required: 144000, rewards: ["Salamander/Royalton Chroma Packs"] },
    { tier: 18, name: "Dancing Mongoose II", required: 184000, rewards: ["Slime Trophy II"] },
    { tier: 19, name: "Dancing Mongoose III", required: 231500, rewards: ["Neopolitan/Mint Chip Chroma Packs", "Ultra Dash Boots"] },
    { tier: 20, name: "Endless Mountain I", required: 291500, rewards: ["Master Gordo Snare", "Tank Booster Ultra"] },
    { tier: 21, name: "Endless Mountain II", required: 366500, rewards: ["Ghost Wine/Volcanic Chroma Packs", "Heart Module Ultra"] },
    { tier: 22, name: "Endless Mountain III", required: 456500, rewards: ["Lab Upgrade", "Golden Sureshot"] },
    { tier: 23, name: "Wander Wolf I", required: 576500, rewards: ["Knight Light/Pretty Loud Chroma Packs", "Titan Drill"] },
    { tier: 24, name: "Wander Wolf II", required: 726500, rewards: ["Slime Trophy III", "Abyssal Pump"] },
    { tier: 25, name: "Wander Wolf III", required: 876500, rewards: ["Silverfox/Frozen Violet Chroma Packs", "Royal Apiary"] },
    { tier: 26, name: "Golden Owl I", required: 1026500, rewards: ["Docks Upgrade", "Gold Slime Lamp"] },
    { tier: 27, name: "Golden Owl II", required: 1176500, rewards: ["Astro Pearl/Goldleaf Chroma Packs", "Gold Warp Depot"] },
    { tier: 28, name: "Golden Owl III", required: 1326500, rewards: ["Slime Trophy IV", "Gold Teleporter"] }
];


const CLUB_REWARDS_TRANSLATIONS = {
    "Roostro Weathervane": { en: "Roostro Weathervane", fr: "Girouette Roostro", es: "Veleta Roostro" },
    "Fence Upgrade": { en: "Fence Upgrade", fr: "Amélioration Clôture", es: "Mejora de Valla" },
    "Path Upgrade": { en: "Path Upgrade", fr: "Amélioration Chemin", es: "Mejora de Camino" },
    "Porch Upgrade": { en: "Porch Upgrade", fr: "Amélioration Porche", es: "Mejora de Porche" },
    "Chroma Station": { en: "Chroma Station", fr: "Station Chroma", es: "Estación Cromática" },
    "Classic/Cobalt/Milkshake Chroma Packs": { en: "Classic/Cobalt/Milkshake Chroma Packs", fr: "Packs Chroma Classique/Cobalt/Milkshake", es: "Paquetes Cromáticos Clásico/Cobalto/Batido" },
    "Arch Upgrade": { en: "Arch Upgrade", fr: "Amélioration Arche", es: "Mejora de Arco" },
    "Firecracker/Grapeshot Chroma Packs": { en: "Firecracker/Grapeshot Chroma Packs", fr: "Packs Chroma Pétard/Mitraille", es: "Paquetes Cromáticos Petardo/Metralla" },
    "Slime Toys Shop": { en: "Slime Toys Shop", fr: "Boutique Jouets Slime", es: "Tienda de Juguetes Slime" },
    "Robo Ranger/Maidatron Chroma Packs": { en: "Robo Ranger/Maidatron Chroma Packs", fr: "Packs Chroma Robo Ranger/Maidatron", es: "Paquetes Cromáticos Robo Guardián/Maidatron" },
    "Advanced Slime Toys": { en: "Advanced Slime Toys", fr: "Jouets Slime Avancés", es: "Juguetes Slime Avanzados" },
    "Gingersnap/Peapod Chroma Packs": { en: "Gingersnap/Peapod Chroma Packs", fr: "Packs Chroma Pain d'épice/Cossevert", es: "Paquetes Cromáticos Jengibre/Vaina" },
    "Market Link": { en: "Market Link", fr: "Lien Marché", es: "Enlace de Mercado" },
    "Grotto Upgrade": { en: "Grotto Upgrade", fr: "Amélioration Grotte", es: "Mejora de Gruta" },
    "Decorizer": { en: "Decorizer", fr: "Décoriseur", es: "Decorador" },
    "Vanguard/Willow Chroma Packs": { en: "Vanguard/Willow Chroma Packs", fr: "Packs Chroma Avant-garde/Saule", es: "Paquetes Cromáticos Vanguardia/Sauce" },
    "Slime Trophy I": { en: "Slime Trophy I", fr: "Trophée Slime I", es: "Trofeo Slime I" },
    "Daybreak/Eventide Chroma Packs": { en: "Daybreak/Eventide Chroma Packs", fr: "Packs Chroma Aube/Crépuscule", es: "Paquetes Cromáticos Amanecer/Atardecer" },
    "Overgrowth Upgrade": { en: "Overgrowth Upgrade", fr: "Amélioration Végétation", es: "Mejora de Vegetación" },
    "Salamander/Royalton Chroma Packs": { en: "Salamander/Royalton Chroma Packs", fr: "Packs Chroma Salamandre/Royalton", es: "Paquetes Cromáticos Salamandra/Royalton" },
    "Slime Trophy II": { en: "Slime Trophy II", fr: "Trophée Slime II", es: "Trofeo Slime II" },
    "Neopolitan/Mint Chip Chroma Packs": { en: "Neopolitan/Mint Chip Chroma Packs", fr: "Packs Chroma Napolitain/Menthe", es: "Paquetes Cromáticos Napolitano/Menta" },
    "Ultra Dash Boots": { en: "Ultra Dash Boots", fr: "Bottes Sprint Ultra", es: "Botas Sprint Ultra" },
    "Master Gordo Snare": { en: "Master Gordo Snare", fr: "Piège Gordo Maître", es: "Trampa Gordo Maestra" },
    "Tank Booster Ultra": { en: "Tank Booster Ultra", fr: "Amplificateur Réservoir Ultra", es: "Impulsor de Tanque Ultra" },
    "Ghost Wine/Volcanic Chroma Packs": { en: "Ghost Wine/Volcanic Chroma Packs", fr: "Packs Chroma Fantôme/Volcanique", es: "Paquetes Cromáticos Fantasma/Volcánico" },
    "Heart Module Ultra": { en: "Heart Module Ultra", fr: "Module Cœur Ultra", es: "Módulo Corazón Ultra" },
    "Lab Upgrade": { en: "Lab Upgrade", fr: "Amélioration Labo", es: "Mejora de Laboratorio" },
    "Golden Sureshot": { en: "Golden Sureshot", fr: "Tir Précis Doré", es: "Tiro Certero Dorado" },
    "Knight Light/Pretty Loud Chroma Packs": { en: "Knight Light/Pretty Loud Chroma Packs", fr: "Packs Chroma Lumière Chevalier/Bien Fort", es: "Paquetes Cromáticos Luz Caballero/Muy Fuerte" },
    "Titan Drill": { en: "Titan Drill", fr: "Foreuse Titan", es: "Taladradora Titán" },
    "Slime Trophy III": { en: "Slime Trophy III", fr: "Trophée Slime III", es: "Trofeo Slime III" },
    "Abyssal Pump": { en: "Abyssal Pump", fr: "Pompe Abyssale", es: "Bomba Abismal" },
    "Silverfox/Frozen Violet Chroma Packs": { en: "Silverfox/Frozen Violet Chroma Packs", fr: "Packs Chroma Renard Argenté/Violet Gelé", es: "Paquetes Cromáticos Zorro Plateado/Violeta Congelado" },
    "Royal Apiary": { en: "Royal Apiary", fr: "Rucher Royal", es: "Colmena Real" },
    "Docks Upgrade": { en: "Docks Upgrade", fr: "Amélioration Quais", es: "Mejora de Muelles" },
    "Gold Slime Lamp": { en: "Gold Slime Lamp", fr: "Lampe Slime Doré", es: "Lámpara Slime Dorado" },
    "Astro Pearl/Goldleaf Chroma Packs": { en: "Astro Pearl/Goldleaf Chroma Packs", fr: "Packs Chroma Perle Astro/Feuille d'Or", es: "Paquetes Cromáticos Perla Astro/Hoja Dorada" },
    "Gold Warp Depot": { en: "Gold Warp Depot", fr: "Dépôt Téléportation Doré", es: "Depósito de Teletransporte Dorado" },
    "Slime Trophy IV": { en: "Slime Trophy IV", fr: "Trophée Slime IV", es: "Trofeo Slime IV" },
    "Gold Teleporter": { en: "Gold Teleporter", fr: "Téléporteur Doré", es: "Teletransportador Dorado" }
};


const SLIME_RANCHER_DLCS = [
    {
        id: "secret-style-pack",
        name: "Secret Style Pack",
        price: {
            USD: 2.99,
            EUR: 2.99,
            GBP: 2.39,
            CAD: 3.39,
            AUD: 4.50,
            BRL: 10.99,
            JPY: 310,
            KRW: 3300,
            RUB: 229,
            CNY: 22,
            CHF: 2.90,
            NOK: 31,
            SEK: 31
        },
        content: [
            "20 Fashion Pods",
            "Exclusive slime styles",
            "Secret fashion accessories"
        ]
    },
    {
        id: "galactic-bundle",
        name: "Galactic Bundle",
        price: {
            USD: 4.99,
            EUR: 4.99,
            GBP: 3.99,
            CAD: 5.69,
            AUD: 7.50,
            BRL: 18.99,
            JPY: 520,
            KRW: 5500,
            RUB: 389,
            CNY: 37,
            CHF: 4.90,
            NOK: 52,
            SEK: 52
        },
        content: [
            "Starlight Ranch House style",
            "Cosmic Slime Fashion Pods",
            "Space-themed decorations",
            "Galaxy colored slimes"
        ]
    },
    {
        id: "viktor-lab-pack",
        name: "Viktor's Experimental Update",
        price: 0,
        content: [
            "The Lab (new area)",
            "Quantum Slime",
            "Dervish Slime",
            "Tangle Slime",
            "Advanced gadgets",
            "Slime Science progression"
        ]
    }
];


const DLC_TRANSLATIONS = {
    "Secret Style Pack": {
        en: "Secret Style Pack",
        fr: "Pack Style Secret",
        es: "Paquete de Estilo Secreto"
    },
    "Galactic Bundle": {
        en: "Galactic Bundle",
        fr: "Pack Galactique",
        es: "Paquete Galáctico"
    },
    "Viktor's Experimental Update": {
        en: "Viktor's Experimental Update",
        fr: "Mise à Jour Expérimentale de Viktor",
        es: "Actualización Experimental de Viktor"
    },
    
    "20 Fashion Pods": {
        en: "20 Fashion Pods",
        fr: "20 Capsules de Mode",
        es: "20 Cápsulas de Moda"
    },
    "Exclusive slime styles": {
        en: "Exclusive slime styles",
        fr: "Styles de slimes exclusifs",
        es: "Estilos de slimes exclusivos"
    },
    "Secret fashion accessories": {
        en: "Secret fashion accessories",
        fr: "Accessoires de mode secrets",
        es: "Accesorios de moda secretos"
    },
    "Starlight Ranch House style": {
        en: "Starlight Ranch House style",
        fr: "Style Maison Ranch Étoilé",
        es: "Estilo Casa del Rancho Estelar"
    },
    "Cosmic Slime Fashion Pods": {
        en: "Cosmic Slime Fashion Pods",
        fr: "Capsules Mode Slime Cosmique",
        es: "Cápsulas de Moda Slime Cósmico"
    },
    "Space-themed decorations": {
        en: "Space-themed decorations",
        fr: "Décorations spatiales",
        es: "Decoraciones espaciales"
    },
    "Galaxy colored slimes": {
        en: "Galaxy colored slimes",
        fr: "Slimes couleur galaxie",
        es: "Slimes color galaxia"
    },
    "The Lab (new area)": {
        en: "The Lab (new area)",
        fr: "Le Labo (nouvelle zone)",
        es: "El Laboratorio (nueva área)"
    },
    "Quantum Slime": {
        en: "Quantum Slime",
        fr: "Slime Quantique",
        es: "Slime Cuántico"
    },
    "Dervish Slime": {
        en: "Dervish Slime",
        fr: "Slime Derviche",
        es: "Slime Derviche"
    },
    "Tangle Slime": {
        en: "Tangle Slime",
        fr: "Slime Enchevêtré",
        es: "Slime Enredado"
    },
    "Advanced gadgets": {
        en: "Advanced gadgets",
        fr: "Gadgets avancés",
        es: "Gadgets avanzados"
    },
    "Slime Science progression": {
        en: "Slime Science progression",
        fr: "Progression Slime Science",
        es: "Progresión de Slime Science"
    }
};


const RESOURCES = ALL_RESOURCES;


const ZONES_DATA = [
    {
        id: 'ranch',
        nameKey: 'zoneRanch',
        price: 0, 
        image: 'iconZoneRanch.png',
        unlocks: [
            'Zone de départ',
            'Parcelles de base'
        ],
        required: true
    },
    {
        id: 'lab',
        nameKey: 'zoneLab',
        price: 10000,
        image: 'iconZoneLab.png',
        unlocks: [
            'Raffinerie',
            'Extracteurs',
            'Slime Science'
        ],
        required: true 
    },
    {
        id: 'overgrowth',
        nameKey: 'zoneOvergrowth',
        price: 7500,
        image: 'iconExpanOvergrowth.png',
        unlocks: [
            'Jardin Foisonnant',
            'Plus de parcelles'
        ]
    },
    {
        id: 'grotto',
        nameKey: 'zoneGrotto',
        price: 7500,
        image: 'iconExpanGrotto.png',
        unlocks: [
            'Grotte Antique',
            'Plus de parcelles'
        ]
    },
    {
        id: 'docks',
        nameKey: 'zoneDocks',
        price: 7500,
        image: 'iconExpanDocks.png',
        unlocks: [
            'Docks Vieux',
            'Plus de parcelles'
        ]
    }
];


const ZONES_TRANSLATIONS = {
    zoneRanch: {
        fr: "Ranch",
        en: "Ranch",
        es: "Rancho"
    },
    zoneLab: {
        fr: "Labo",
        en: "Lab",
        es: "Lab"
    },
    zoneOvergrowth: {
        fr: "Luxuriance",
        en: "Overgrowth",
        es: "Vegetación Exuberante"
    },
    zoneGrotto: {
        fr: "Grotte",
        en: "Grotto",
        es: "Gruta"
    },
    zoneDocks: {
        fr: "Docks",
        en: "Docks",
        es: "Muelle"
    }
};
