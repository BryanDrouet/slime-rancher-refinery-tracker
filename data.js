// Données des recettes Slime Rancher 1
const RECIPES_DATA = [
    {
        id: 1,
        name: "Air Net",
        price: 450,
        ingredients: ["Jellystone x10", "Deep Brine x5", "Slime Fossil x5"],
        icon: "🌪️"
    },
    {
        id: 2,
        name: "Slime Key",
        price: 10000,
        ingredients: ["Strange Diamond x1", "Slime Fossil x30", "Royal Jelly x30"],
        icon: "🔑"
    },
    {
        id: 3,
        name: "Dash Boots",
        price: 500,
        ingredients: ["Hexacomb x10", "Lava Dust x5", "Silky Sand x5"],
        icon: "👟"
    },
    {
        id: 4,
        name: "Jetpack",
        price: 3500,
        ingredients: ["Hexacomb x30", "Lava Dust x20", "Primordy Oil x20"],
        icon: "🚀"
    },
    {
        id: 5,
        name: "Tank Booster - Health",
        price: 2500,
        ingredients: ["Deep Brine x20", "Wild Honey x20", "Pepper Jam x15"],
        icon: "💚"
    },
    {
        id: 6,
        name: "Tank Booster - Energy",
        price: 2500,
        ingredients: ["Hexacomb x20", "Pepper Jam x20", "Silky Sand x15"],
        icon: "⚡"
    },
    {
        id: 7,
        name: "Tank Booster - Ammo",
        price: 2500,
        ingredients: ["Jellystone x20", "Royal Jelly x20", "Buzz Wax x15"],
        icon: "🔫"
    },
    {
        id: 8,
        name: "Heart Module",
        price: 1750,
        ingredients: ["Deep Brine x15", "Wild Honey x15", "Lava Dust x10"],
        icon: "❤️"
    },
    {
        id: 9,
        name: "Aqua Turret",
        price: 625,
        ingredients: ["Deep Brine x10", "Primordy Oil x5", "Slime Fossil x5"],
        icon: "💦"
    },
    {
        id: 10,
        name: "Hydro Turret",
        price: 1250,
        ingredients: ["Deep Brine x15", "Primordy Oil x10", "Royal Jelly x10"],
        icon: "🌊"
    },
    {
        id: 11,
        name: "Pulse Wave",
        price: 750,
        ingredients: ["Hexacomb x10", "Buzz Wax x5", "Jellystone x5"],
        icon: "📡"
    },
    {
        id: 12,
        name: "Thunderclap",
        price: 1500,
        ingredients: ["Hexacomb x15", "Buzz Wax x10", "Silky Sand x10"],
        icon: "⚡"
    },
    {
        id: 13,
        name: "Market Link",
        price: 3500,
        ingredients: ["Strange Diamond x1", "Lava Dust x20", "Primordy Oil x20"],
        icon: "🏪"
    },
    {
        id: 14,
        name: "Treasure Cracker MKII",
        price: 10000,
        ingredients: ["Strange Diamond x1", "Jellystone x30", "Wild Honey x30"],
        icon: "💎"
    },
    {
        id: 15,
        name: "Treasure Cracker MKIII",
        price: 25000,
        ingredients: ["Strange Diamond x3", "Spiral Steam x30", "Buzz Wax x30"],
        icon: "💠"
    },
    {
        id: 16,
        name: "Fruit Harvester",
        price: 550,
        ingredients: ["Wild Honey x10", "Pepper Jam x5", "Buzz Wax x5"],
        icon: "🍎"
    },
    {
        id: 17,
        name: "Veggie Harvester",
        price: 550,
        ingredients: ["Royal Jelly x10", "Wild Honey x5", "Silky Sand x5"],
        icon: "🥕"
    },
    {
        id: 18,
        name: "Advanced Gordo Snare",
        price: 450,
        ingredients: ["Pepper Jam x10", "Silky Sand x5", "Buzz Wax x5"],
        icon: "🎯"
    },
    {
        id: 19,
        name: "Portable Water Tap",
        price: 500,
        ingredients: ["Primordy Oil x10", "Deep Brine x5", "Jellystone x5"],
        icon: "🚰"
    },
    {
        id: 20,
        name: "Nimble Valley",
        price: 7500,
        ingredients: ["Strange Diamond x1", "Hexacomb x25", "Silky Sand x25"],
        icon: "🏞️"
    }
];

// Données du Club 7Zee
const CLUB_7ZEE_REWARDS = [
    { tier: 1, name: "Slime Science Intro", required: 0 },
    { tier: 2, name: "Lab Basics", required: 5000 },
    { tier: 3, name: "Advanced Refinements", required: 15000 },
    { tier: 4, name: "Professional Tools", required: 35000 },
    { tier: 5, name: "Master Craftsman", required: 75000 },
    { tier: 6, name: "Elite Research", required: 150000 },
    { tier: 7, name: "7Zee Legend", required: 250000 }
];

// Ressources disponibles dans le jeu
const RESOURCES = [
    "Deep Brine",
    "Lava Dust",
    "Primordy Oil",
    "Silky Sand",
    "Jellystone",
    "Wild Honey",
    "Hexacomb",
    "Pepper Jam",
    "Royal Jelly",
    "Buzz Wax",
    "Slime Fossil",
    "Strange Diamond",
    "Spiral Steam"
];
