// Traductions des unlocks de zones
const ZONE_UNLOCKS_TRANSLATIONS = {
    'Zone de départ': {
        fr: 'Zone de départ',
        en: 'Starting Area',
        es: 'Zona inicial'
    },
    'Parcelles de base': {
        fr: 'Parcelles de base',
        en: 'Base Plots',
        es: 'Parcelas básicas'
    },
    'Raffinerie': {
        fr: 'Raffinerie',
        en: 'Refinery',
        es: 'Refinería'
    },
    'Extracteurs': {
        fr: 'Extracteurs',
        en: 'Extractors',
        es: 'Extractores'
    },
    'Slime Science': {
        fr: 'Slime Science',
        en: 'Slime Science',
        es: 'Ciencia Slime'
    },
    'Jardin Foisonnant': {
        fr: 'Jardin Foisonnant',
        en: 'Overgrown Garden',
        es: 'Jardín Exuberante'
    },
    'Plus de parcelles': {
        fr: 'Plus de parcelles',
        en: 'More Plots',
        es: 'Más parcelas'
    },
    'Grotte Antique': {
        fr: 'Grotte Antique',
        en: 'Ancient Grotto',
        es: 'Gruta antigua'
    },
    'Docks Vieux': {
        fr: 'Docks Vieux',
        en: 'Old Docks',
        es: 'Muelle viejo'
    }
};

const PRODUCIBLE_TRANSLATIONS = {
    canProduce: {
        fr: 'Quantité produisible',
        en: 'Producible quantity',
        es: 'Cantidad producible'
    },
    cannotProduce: {
        fr: 'Impossible à produire',
        en: 'Cannot produce',
        es: 'No se puede producir'
    }
};

const translations = {
    fr: {
        
        title: "Slime Rancher - Suivi de Raffinerie",
        mainTitle: "Slime Rancher - Suivi de Raffinerie",
        login: "Connexion",
        register: "Inscription",
        email: "Email",
        password: "Mot de passe",
        loginButton: "Se connecter",
        registerButton: "S'inscrire",
        googleLogin: "Connexion avec Google",
        noAccount: "Pas de compte ?",
        hasAccount: "Déjà un compte ?",
        signupLink: "S'inscrire",
        loginLink: "Se connecter",
        favoriteAdded: "Ajouté aux favoris",
        favoriteRemoved: "Retiré des favoris",
        recipePurchased: "Recette achetée !",
        recipeRemoved: "Recette retirée !",
        
        
        navRefinery: "Raffinerie",
        navRecipes: "Recettes",
        navVacpack: "Aspipack",
        navClub: "Club 7Zee",
        navDlcs: "DLCs",
        navZones: "Terres",
        navFavorites: "Favoris",
        logout: "Déconnexion",
        
        
        refineryTitle: "Dépôts de la Raffinerie",
        itemName: "Nom de l'objet",
        quantity: "Quantité",
        addButton: "Ajouter",
        noDeposits: "Aucun dépôt dans la raffinerie",
        saveAll: "💾 Sauvegarder tout",
        quantityLabel: "Quantité :",
        filterDrill: "Foreuse",
        filterPump: "Pompe",
        filterApiary: "Ruche",
        filterPlorts: "Plorts",
        filterAllResources: "Toutes",
        
        
        recipesTitle: "Recettes",
        filterAll: "Toutes",
        filterPurchased: "Achetées",
        filterNotPurchased: "Non achetées",
        sortBy: "Trier par :",
        sortDefault: "Par défaut",
        sortNameAsc: "Nom (A-Z)",
        sortNameDesc: "Nom (Z-A)",
        sortPriceAsc: "Prix croissant",
        sortPriceDesc: "Prix (Élevé à Faible)",
        locked: "Verrouillé",
        totalPrice: "Prix total des recettes non achetées :",
        newbucks: "Nouvodollars",
        purchase: "Acheter",
        purchased: "Acheté",
        addFavorite: "Ajouter aux favoris",
        buyLabFirst: "Commencez à acheter le labo !",
        noPurchasedRecipes: "Aucune recette achetée. Commencez à acheter des recettes !",
        allRecipesPurchased: "Toutes les recettes ont été achetées ! Bravo ! 🎉",
        noRecipes: "Aucune recette disponible.",
        
        
        vacpackTitle: "Améliorations Aspipack",
        vacpackCapacity: "Capacité du Réservoir",
        vacpackRange: "Portée de l'Aspirateur",
        vacpackWater: "Réservoir d'Eau",
        previousUpgradeRequired: "L'amélioration précédente est requise",
        upgradeRemoved: "Amélioration retirée",
        upgradePurchased: "Amélioration achetée",
        
        
        clubTitle: "Club 7Zee",
        currentMoney: "Argent actuel :",
        currentTier: "Palier actuel :",
        level: "Niveau",
        rewards: "Récompenses",
        saveButton: "Sauvegarder",
        unlocked: "✓ Débloqué",
        required: "Requis :",
        
        
        favoritesTitle: "Items Favoris",
        noFavorites: "Aucun favori pour le moment. Ajoutez des recettes en cliquant sur ☆",
        
        
        fillAllFields: "Veuillez remplir tous les champs",
        passwordLength: "Le mot de passe doit contenir au moins 6 caractères",
        loginError: "Erreur de connexion :",
        registerError: "Erreur d'inscription :",
        googleError: "Erreur de connexion Google :",
        saveError: "Erreur lors de la sauvegarde des données",
        loadError: "Erreur de chargement :",
        enterItemName: "Veuillez entrer le nom de l'objet",
        enterValidQuantity: "Veuillez entrer une quantité valide",
        confirmLogout: "Déconnexion",
        confirmLogoutMessage: "Voulez-vous vraiment vous déconnecter ?",
        cancel: "Annuler",
        dataSaved: "Informations sauvegardées !",
        
        
        mustPurchasePreviousTier: "Vous devez acheter le tier précédent d'abord",
        notEnoughMoney: "Pas assez d'argent pour acheter ce tier",
        tierPurchased: "Tier acheté avec succès !",
        tierRemoved: "Tier retiré",
        cannotRemoveTierWithNextPurchased: "Impossible de retirer ce niveau tant que le suivant est acheté.",
        
        
        dlcsTitle: "DLCs",
        dlcOwned: "Possédé",
        dlcBuy: "Marquer comme possédé",
        dlcPrice: "Prix :",
        dlcContent: "Contenu :",
        dlcAdded: "DLC ajouté !",
        dlcRemoved: "DLC retiré",
        
        
        clubRewards: {
            1: "Slime Science Intro",
            2: "Bases du Labo",
            3: "Raffinements Avancés",
            4: "Outils Professionnels",
            5: "Maître Artisan",
            6: "Recherche d'Élite",
            7: "Légende 7Zee"
        },
        
        
        free: "Gratuit",
        included: "Inclus",
        cost: "Coût",
        price: "Prix",
        obtain: "Obtenir",
    obtained: "Obtenu",
        get: "Récupérer",
        
        
        zonesTitle: "Terres Achetées",
        zoneOwned: "Possédée",
        zoneBuy: "Acheter",
        zonePrice: "Prix",
        zoneUnlock: "Débloque",
        zoneRequired: "Le labo est requis pour accéder à cette section",
        zoneAdded: "Terre achetée avec succès !",
        zoneRemoved: "Terre retirée",
        cannotRemoveLab: "Impossible de retirer le labo avec des ressources dans la raffinerie",
        labRequired: "Laboratoire requis",
        labRequiredDesc: "Vous devez acheter le Laboratoire pour accéder à la raffinerie et aux recettes de Slime Science.",
        goToZones: "Aller aux Terres",
        
        
        zoneLab: "Laboratoire",
        zoneOvergrowth: "Jardin Foisonnant",
        zoneGrotto: "Grotte Antique",
        zoneDocks: "Docks Vieux",
        zoneMoss: "Tapis de Mousse",
        zoneDesert: "Désert de Verre",
        zoneReef: "Récif Corallien",
        zoneRuins: "Ruines en Ruines"
    },
    
    en: {
        
        title: "Slime Rancher - Refinery Tracker",
        mainTitle: "Slime Rancher - Refinery Tracker",
        login: "Login",
        register: "Sign Up",
        email: "Email",
        password: "Password",
        loginButton: "Sign In",
        registerButton: "Sign Up",
        googleLogin: "Sign in with Google",
        noAccount: "No account?",
        hasAccount: "Already have an account?",
        signupLink: "Sign up",
        loginLink: "Sign in",
        favoriteAdded: "Added to favorites",
        favoriteRemoved: "Removed from favorites",
        recipePurchased: "Recipe purchased!",
        recipeRemoved: "Recipe removed!",
        
        
        navRefinery: "Refinery",
        navRecipes: "Recipes",
        navVacpack: "Vacpack",
        navClub: "Club 7Zee",
        navDlcs: "DLCs",
        navZones: "Lands",
        navFavorites: "Favorites",
        logout: "Logout",
        
        
        refineryTitle: "Refinery Deposits",
        itemName: "Item name",
        quantity: "Quantity",
        addButton: "Add",
        noDeposits: "No deposits in refinery",
        saveAll: "💾 Save All",
        quantityLabel: "Quantity:",
        filterDrill: "Drill",
        filterPump: "Pump",
        filterApiary: "Apiary",
        filterPlorts: "Plorts",
        filterAllResources: "All",
        
        
        recipesTitle: "Recipes",
        filterAll: "All",
        filterPurchased: "Purchased",
        filterNotPurchased: "Not Purchased",
        sortBy: "Sort by:",
        sortDefault: "Default",
        sortNameAsc: "Name (A-Z)",
        sortNameDesc: "Name (Z-A)",
        sortPriceAsc: "Price (Low to High)",
        sortPriceDesc: "Price (High to Low)",
        locked: "Locked",
        totalPrice: "Total price of unpurchased recipes:",
        newbucks: "Newbucks",
        purchase: "Purchase",
        purchased: "Purchased",
    obtained: "Obtained",
        addFavorite: "Add to favorites",
        buyLabFirst: "Start by buying the lab!",
        noPurchasedRecipes: "No purchased recipes. Start buying recipes!",
        allRecipesPurchased: "All recipes have been purchased! Congratulations! 🎉",
        noRecipes: "No recipes available.",
        
        
        vacpackTitle: "Vacpack Upgrades",
        vacpackCapacity: "Tank Capacity",
        vacpackRange: "Vacuum Range",
        vacpackWater: "Water Tank",
        previousUpgradeRequired: "Previous upgrade required",
        upgradeRemoved: "Upgrade removed",
        upgradePurchased: "Upgrade purchased",
        
        
        clubTitle: "Club 7Zee",
        currentMoney: "Current money:",
        currentTier: "Current tier:",
        level: "Level",
        rewards: "Rewards",
        saveButton: "Save",
        unlocked: "✓ Unlocked",
        required: "Required:",
        
        
        favoritesTitle: "Favorite Items",
        noFavorites: "No favorites yet. Add recipes by clicking on ☆",
        totalRequirements: "Total resources needed:",
        noFavorites: "No favorite recipes. Click ☆ to add some.",
        noRequirements: "No resources required",
        
        
        fillAllFields: "Please fill in all fields",
        passwordLength: "Password must be at least 6 characters",
        loginError: "Login error:",
        registerError: "Registration error:",
        googleError: "Google login error:",
        saveError: "Error saving data",
        loadError: "Loading error:",
        enterItemName: "Please enter the item name",
        enterValidQuantity: "Please enter a valid quantity",
        confirmLogout: "Logout",
        confirmLogoutMessage: "Do you really want to log out?",
        cancel: "Cancel",
        dataSaved: "Information saved!",
        
        
        mustPurchasePreviousTier: "You must purchase the previous tier first",
        notEnoughMoney: "Not enough money to purchase this tier",
        tierPurchased: "Tier purchased successfully!",
        tierRemoved: "Tier removed",
        cannotRemoveTierWithNextPurchased: "Cannot remove this tier while the next one is purchased.",
        
        
        dlcsTitle: "DLCs",
        dlcOwned: "Owned",
        dlcBuy: "Mark as owned",
        dlcPrice: "Price:",
        dlcContent: "Content:",
        dlcAdded: "DLC added!",
        dlcRemoved: "DLC removed",
        
        
        clubRewards: {
            1: "Slime Science Intro",
            2: "Lab Basics",
            3: "Advanced Refinements",
            4: "Professional Tools",
            5: "Master Craftsman",
            6: "Elite Research",
            7: "7Zee Legend"
        },
        
        
        free: "Free",
        included: "Included",
        cost: "Cost",
        price: "Price",
        obtain: "Obtain",
        get: "Get",
        
        
        zonesTitle: "Purchased Lands",
        zoneOwned: "Owned",
        zoneBuy: "Purchase",
        zonePrice: "Price",
        zoneUnlock: "Unlocks",
        zoneRequired: "The lab is required to access this section",
        zoneAdded: "Land purchased successfully!",
        zoneRemoved: "Land removed",
        cannotRemoveLab: "Cannot remove Lab with resources in the refinery",
        labRequired: "Lab Required",
        labRequiredDesc: "You must purchase the Lab to access the refinery and Slime Science recipes.",
        goToZones: "Go to Lands",
        
        
        zoneLab: "Lab",
        zoneOvergrowth: "Overgrowth",
        zoneGrotto: "Grotto",
        zoneDocks: "Docks",
        zoneMoss: "Moss Blanket",
        zoneDesert: "Glass Desert",
        zoneReef: "Slime Sea",
        zoneRuins: "Ancient Ruins"
    },
    
    es: {
        
        title: "Slime Rancher - Rastreador de Refinería",
        mainTitle: "Slime Rancher - Rastreador de Refinería",
        login: "Iniciar sesión",
        register: "Registrarse",
        email: "Correo electrónico",
        password: "Contraseña",
        loginButton: "Iniciar sesión",
        registerButton: "Registrarse",
        googleLogin: "Iniciar sesión con Google",
        noAccount: "¿No tienes cuenta?",
        hasAccount: "¿Ya tienes cuenta?",
        signupLink: "Regístrate",
        loginLink: "Iniciar sesión",
        favoriteAdded: "Añadido a favoritos",
        favoriteRemoved: "Eliminado de favoritos",
        recipePurchased: "¡Receta comprada!",
        recipeRemoved: "¡Receta eliminada!",
        
        
        navRefinery: "Refinería",
        navRecipes: "Recetas",
        navVacpack: "Aspirador",
        navClub: "Club 7Zee",
        navDlcs: "DLCs",
        navZones: "Tierras",
        navFavorites: "Favoritos",
        logout: "Cerrar sesión",
        
        
        refineryTitle: "Depósitos de la Refinería",
        itemName: "Nombre del objeto",
        quantity: "Cantidad",
        addButton: "Agregar",
        noDeposits: "Sin depósitos en refinería",
        saveAll: "💾 Guardar Todo",
        quantityLabel: "Cantidad:",
        filterDrill: "Taladro",
        filterPump: "Bomba",
        filterApiary: "Colmena",
        filterPlorts: "Plorts",
        filterAllResources: "Todas",
        
        
        recipesTitle: "Recetas",
        filterAll: "Todas",
        filterPurchased: "Compradas",
        filterNotPurchased: "No compradas",
        sortBy: "Ordenar por:",
        sortDefault: "Por defecto",
        sortNameAsc: "Nombre (A-Z)",
        sortNameDesc: "Nombre (Z-A)",
        sortPriceAsc: "Precio (Menor a Mayor)",
        sortPriceDesc: "Precio (Mayor a Menor)",
        locked: "Bloqueado",
        totalPrice: "Precio total de recetas no compradas:",
        newbucks: "Newbucks",
        purchase: "Comprar",
        purchased: "Comprado",
        addFavorite: "Añadir a favoritos",
        buyLabFirst: "¡Comienza comprando el laboratorio!",
        noPurchasedRecipes: "No hay recetas compradas. ¡Comienza a comprar recetas!",
        allRecipesPurchased: "¡Todas las recetas han sido compradas! ¡Felicidades! 🎉",
        noRecipes: "No hay recetas disponibles.",
        
        
        vacpackTitle: "Mejoras del Aspirador",
        vacpackCapacity: "Capacidad del Tanque",
        vacpackRange: "Alcance del Aspirador",
        vacpackWater: "Tanque de Agua",
        previousUpgradeRequired: "Se requiere la mejora anterior",
        upgradeRemoved: "Mejora eliminada",
        upgradePurchased: "Mejora comprada",
        
        
        clubTitle: "Club 7Zee",
        currentMoney: "Dinero actual:",
        currentTier: "Nivel actuel:",
        level: "Nivel",
        rewards: "Recompensas",
        saveButton: "Guardar",
        unlocked: "✓ Desbloqueado",
        required: "Requerido:",
        
        
        favoritesTitle: "Objetos Favoritos y Recursos Necesarios",
        totalRequirements: "Recursos totales necesarios:",
        noFavorites: "No hay recetas favoritas. Haz clic en ☆ para añadir.",
        noRequirements: "No se requieren recursos",
        
        
        fillAllFields: "Por favor, rellena todos los campos",
        passwordLength: "La contraseña debe tener al menos 6 caracteres",
        loginError: "Error de inicio de sesión:",
        registerError: "Error de registro:",
        googleError: "Error de inicio de sesión con Google:",
        saveError: "Error al guardar los datos",
        loadError: "Error de carga:",
        enterItemName: "Por favor, introduce el nombre del objeto",
        enterValidQuantity: "Por favor, introduce una cantidad válida",
        confirmLogout: "Cerrar sesión",
        confirmLogoutMessage: "¿Realmente quieres cerrar sesión?",
        cancel: "Cancelar",
        dataSaved: "¡Información guardada!",
        
        
        mustPurchasePreviousTier: "Debes comprar el nivel anterior primero",
        notEnoughMoney: "No tienes suficiente dinero para comprar este nivel",
        tierPurchased: "¡Nivel comprado con éxito!",
        tierRemoved: "Nivel eliminado",
        cannotRemoveTierWithNextPurchased: "No se puede eliminar este nivel mientras el siguiente esté comprado.",
        
        
        dlcsTitle: "DLCs",
        dlcOwned: "Poseído",
        dlcBuy: "Marcar como poseído",
        dlcPrice: "Precio:",
        dlcContent: "Contenido:",
        dlcAdded: "¡DLC añadido!",
        dlcRemoved: "DLC eliminado",
        
        
        clubRewards: {
            1: "Introducción a Slime Science",
            2: "Fundamentos del Laboratorio",
            3: "Refinamientos Avanzados",
            4: "Herramientas Profesionales",
            5: "Maestro Artesano",
            6: "Investigación de Élite",
            7: "Leyenda 7Zee"
        },
        
        
        free: "Gratis",
        included: "Incluido",
        cost: "Costo",
        price: "Precio",
        obtain: "Obtener",
        get: "Conseguir",
        
        
        zonesTitle: "Tierras Compradas",
        zoneOwned: "Poseída",
        zoneBuy: "Comprar",
        zonePrice: "Precio",
        zoneUnlock: "Desbloquea",
        zoneRequired: "Se requiere el laboratorio para acceder a esta sección",
        zoneAdded: "¡Tierra comprada con éxito!",
        zoneRemoved: "Tierra eliminada",
        cannotRemoveLab: "No se puede eliminar el Lab con recursos en la refinería",
        labRequired: "Laboratorio Requerido",
        labRequiredDesc: "Debes comprar el Laboratorio para acceder a la refinería y las recetas de Slime Science.",
        goToZones: "Ir a Tierras",
        
        
        zoneLab: "Laboratoire",
        zoneOvergrowth: "Jardín Exuberante",
        zoneGrotto: "Gruta Antigua",
        zoneDocks: "Muelles Viejos",
        zoneMoss: "Manto de Musgo",
        zoneDesert: "Desierto de Cristal",
        zoneReef: "Arrecife de Coral",
        zoneRuins: "Ruinas Antiguas"
    }
};


let currentLanguage = localStorage.getItem('language') || 'fr';
let languageChangeTimeout = null;


function t(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        value = value?.[k];
    }
    
    return value || key;
}


function changeLanguage(lang, forceUpdate = false) {
    if (currentLanguage === lang && !forceUpdate) return; 
    
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguageFlags();
    
    if (forceUpdate) {
        updatePageTranslations();
    }
    
    
    if (languageChangeTimeout) {
        clearTimeout(languageChangeTimeout);
    }
    
    languageChangeTimeout = setTimeout(() => {
        updatePageTranslations();
        refreshCurrentSection();
        languageChangeTimeout = null;
    }, 100); 
    
    
    const hash = window.location.hash.substring(1) || 'refinery';
    let url;
    
    if (hash === 'refinery') {
        const refineryFilter = typeof currentRefineryFilter !== 'undefined' ? currentRefineryFilter : 'all';
        url = `${window.location.pathname}?lang=${lang}&refineryFilter=${refineryFilter}#${hash}`;
    } else if (hash === 'recipes') {
        const recipeFilter = typeof currentFilter !== 'undefined' ? currentFilter : 'all';
        const recipeSort = typeof currentSort !== 'undefined' ? currentSort : 'default';
        url = `${window.location.pathname}?lang=${lang}&recipeFilter=${recipeFilter}&sort=${recipeSort}#${hash}`;
    } else {
        url = `${window.location.pathname}?lang=${lang}#${hash}`;
    }
    
    window.history.replaceState({}, '', url);
    
    console.log(`Language changed to: ${lang}`);
}


function updateLanguageFlags() {
    document.querySelectorAll('.flag-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}


function updatePageTranslations() {
    
    document.title = t('title');
    
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email' || element.type === 'password' || element.type === 'number')) {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.value = currentLanguage;
    }
}


function refreshCurrentSection() {
    if (!currentUser) return;
    
    const activeSection = document.querySelector('.content-section.active');
    if (!activeSection) return;
    
    const sectionId = activeSection.id;
    
    
    switch(sectionId) {
        case 'refinery-section':
            displayRefineryDeposits();
            break;
        case 'recipes-section':
            displayRecipes(currentFilter);
            break;
        case 'vacpack-section':
            displayVacpackUpgrades();
            break;
        case 'club7zee-section':
            displayClubRewards();
            break;
        case 'zones-section':
            displayZones();
            break;
        case 'dlcs-section':
            displayDlcs();
            break;
        case 'favorites-section':
            displayFavorites();
            break;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    updatePageTranslations();
    updateLanguageFlags();
});
