let currentUser = null;
let userData = {
    refineryDeposits: {}, 
    purchasedRecipes: [],
    favoriteRecipes: [],
    favoriteUpgrades: [],
    favoriteZones: [],
    favoriteDlcs: [],
    currentMoney: 0,
    currentTier: 0,
    purchasedClubTiers: [], 
    ownedDlcs: [], 
    purchasedVacpackUpgrades: [], 
    ownedZones: ['ranch'] 
};

let autoSaveInterval = null;
let lastSaveTime = Date.now();
let hasUnsavedChanges = false;


function formatPrice(priceUSD) {
    if (priceUSD === 0) {
        return t('free');
    }
    
    
    if (typeof cacheManager !== 'undefined' && cacheManager.convertPrice) {
        return cacheManager.convertPrice(priceUSD);
    }
    
    
    return `${priceUSD.toLocaleString()} $`;
}


function hasEnoughResources(ingredients) {
    for (let ingredient of ingredients) {
        const match = ingredient.match(/(.+?)\s*x(\d+)/);
        if (match) {
            const itemName = match[1].trim();
            const required = parseInt(match[2]);
            const available = userData.refineryDeposits[itemName] || 0;
            
            if (available < required) {
                return false;
            }
        }
    }
    return true;
}

function getResourcesPercentage(ingredients) {
    if (!ingredients || ingredients.length === 0) return 100;
    
    let totalRequired = 0;
    let totalAvailable = 0;
    
    for (let ingredient of ingredients) {
        const match = ingredient.match(/(.+?)\s*x(\d+)/);
        if (match) {
            const itemName = match[1].trim();
            const required = parseInt(match[2]);
            const available = userData.refineryDeposits[itemName] || 0;
            
            totalRequired += required;
            totalAvailable += Math.min(available, required);
        }
    }
    
    if (totalRequired === 0) return 100;
    return Math.round((totalAvailable / totalRequired) * 100);
}

function getGradientByPercentage(percentage) {
    if (percentage >= 100) {
        return 'linear-gradient(135deg, #51cf66 0%, #40c057 100%)';
    } else if (percentage >= 75) {
        return 'linear-gradient(135deg, #94d82d 0%, #51cf66 100%)';
    } else if (percentage >= 50) {
        return 'linear-gradient(135deg, #ffd43b 0%, #fab005 100%)';
    } else if (percentage >= 25) {
        return 'linear-gradient(135deg, #ff922b 0%, #fd7e14 100%)';
    } else {
        return 'linear-gradient(135deg, #ff6b6b 0%, #e53e3e 100%)';
    }
}


function setupAutocomplete() {
    
    return;
}


function updateLanguageFlags() {
    document.querySelectorAll('.flag-btn').forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}


auth.onAuthStateChanged(async user => {
    if (user) {
        currentUser = user;
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
        
        
        updateLanguageFlags();
        
        
        await loadUserData();
        updatePageTranslations();
        setupAutocomplete();
        
        
        startAutoSave();
        
        
        handleURLNavigation();
    } else {
        currentUser = null;
        document.getElementById('auth-container').style.display = 'flex';
        document.getElementById('app-container').style.display = 'none';
        
        
        if (autoSaveInterval) {
            clearInterval(autoSaveInterval);
            autoSaveInterval = null;
        }
        
        
        updateLanguageFlags();
        
        updatePageTranslations();
    }
});



function showLogin() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
}

function showRegister() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}


async function loginWithEmail() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        console.error(t('fillAllFields'));
        showError(t('fillAllFields'));
        return;
    }
    
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        console.error(`${t('loginError')} ${error.message}`);
        showError(`${t('loginError')} ${error.message}`);
    }
}


async function registerWithEmail() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    if (!email || !password) {
        console.error(t('fillAllFields'));
        showError(t('fillAllFields'));
        return;
    }
    
    if (password.length < 6) {
        console.error(t('passwordLength'));
        showError(t('passwordLength'));
        return;
    }
    
    try {
        await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
        console.error(`${t('registerError')} ${error.message}`);
        showError(`${t('registerError')} ${error.message}`);
    }
}

async function loginWithGoogle() {
    try {
        await auth.signInWithPopup(googleProvider);
    } catch (error) {
        console.error(`${t('googleError')}: ${error.message}`);
        showError(t('googleError') + ' ' + error.message);
    }
}

async function logout() {
    const confirmed = await showConfirmDialog({
        title: t('confirmLogout') || 'Déconnexion',
        message: t('confirmLogoutMessage') || 'Voulez-vous vraiment vous déconnecter ?',
        confirmText: t('logout') || 'Déconnexion',
        cancelText: t('cancel') || 'Annuler',
        isDanger: true,
        icon: '🚪'
    });
    
    if (confirmed) {
        await auth.signOut();
    }
}





function showSection(sectionName) {
    // Réinitialiser le scroll à 0 lors du changement de section
    window.scrollTo(0, 0);

    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const section = document.getElementById(`${sectionName}-section`);
    if (section) {
        section.classList.add('active');
    }

    const navBtn = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (navBtn) {
        navBtn.classList.add('active');
    }

    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'fr';

    let newUrl;
    if (sectionName === 'refinery') {
        const refineryFilter = currentRefineryFilter || 'all';
        newUrl = `${window.location.pathname}?lang=${lang}&refineryFilter=${refineryFilter}#${sectionName}`;
    } else if (sectionName === 'recipes') {
        const recipeFilter = currentFilter || 'all';
        const recipeSort = currentSort || 'default';
        newUrl = `${window.location.pathname}?lang=${lang}&recipeFilter=${recipeFilter}&sort=${recipeSort}#${sectionName}`;
    } else {
        newUrl = `${window.location.pathname}?lang=${lang}#${sectionName}`;
    }

    window.history.replaceState({}, '', newUrl);

    // Recharge les données utilisateur avant d'afficher la section
    loadUserData().then(() => {
        if (sectionName === 'vacpack') {
            displayVacpackUpgrades();
        } else if (sectionName === 'club7zee') {
            displayClubRewards();
        } else if (sectionName === 'zones') {
            displayZones();
        } else if (sectionName === 'dlcs') {
            displayDlcs();
        } else if (sectionName === 'favorites') {
            displayFavorites();
        } else if (sectionName === 'refinery') {
            displayRefineryDeposits();
        } else if (sectionName === 'recipes') {
            displayRecipes(currentFilter);
        }
    });

    closeMobileMenu();
}


function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    
    navLinks.classList.remove('active');
    burgerMenu.classList.remove('active');
}


function handleURLNavigation() {
    const hash = window.location.hash.substring(1);
    const validSections = ['refinery', 'recipes', 'vacpack', 'club7zee', 'zones', 'dlcs', 'favorites'];
    
    
    const urlParams = new URLSearchParams(window.location.search);
    const refineryFilter = urlParams.get('refineryFilter') || 'all';
    const recipeFilter = urlParams.get('recipeFilter') || 'all';
    const recipeSort = urlParams.get('sort') || 'default';
    
    if (hash && validSections.includes(hash)) {
        showSection(hash);
        
        
        if (hash === 'refinery') {
            currentRefineryFilter = refineryFilter;
            updateFilterButtons('refinery', refineryFilter);
            displayRefineryDeposits();
        } else if (hash === 'recipes') {
            currentFilter = recipeFilter;
            currentSort = recipeSort;
            updateFilterButtons('recipes', recipeFilter);
            updateSortDropdown(recipeSort);
            displayRecipes(recipeFilter);
        } else if (hash === 'vacpack') {
            displayVacpackUpgrades();
        } else if (hash === 'club7zee') {
            displayClubRewards();
        } else if (hash === 'zones') {
            displayZones();
        } else if (hash === 'dlcs') {
            displayDlcs();
        } else if (hash === 'favorites') {
            displayFavorites();
        }
    } else {
        showSection('refinery');
    }
}

function updateSortDropdown(sortValue) {
    const sortSelect = document.getElementById('recipe-sort');
    if (sortSelect) {
        sortSelect.value = sortValue;
    }
}


function updateFilterButtons(section, activeFilter) {
    const sectionElement = document.getElementById(`${section}-section`);
    if (sectionElement) {
        sectionElement.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        
        const selector = section === 'refinery' 
            ? `[onclick="filterRefinery('${activeFilter}')"]`
            : `[onclick="filterRecipes('${activeFilter}')"]`;
        const activeBtn = sectionElement.querySelector(selector);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }
}


window.addEventListener('hashchange', handleURLNavigation);


window.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    let langParam = urlParams.get('lang');
    
    if (!langParam || !['fr', 'en', 'es'].includes(langParam)) {
        langParam = 'fr';
    }
    
    changeLanguage(langParam, true);
    
    
    handleURLNavigation();
});




async function loadUserData() {
    if (!currentUser) return;
    
    try {
        const doc = await db.collection('users').doc(currentUser.uid).get();
        if (doc.exists) {
            userData = { ...userData, ...doc.data() };
            
            
            if (Array.isArray(userData.refineryDeposits)) {
                userData.refineryDeposits = {};
            }
            
            
            if (!userData.purchasedClubTiers) {
                userData.purchasedClubTiers = [];
            }
            
            
            if (!userData.ownedZones) {
                userData.ownedZones = ['ranch'];
            } else if (!userData.ownedZones.includes('ranch')) {
                
                userData.ownedZones.push('ranch');
            }
            
            
            if (!userData.purchasedRecipes) {
                userData.purchasedRecipes = [];
            }
            
            
            if (!userData.purchasedVacpackUpgrades) {
                userData.purchasedVacpackUpgrades = [];
            }
            
            
            if (!userData.ownedDlcs) {
                userData.ownedDlcs = [];
            }
            
            if (!userData.favoriteRecipes) {
                userData.favoriteRecipes = [];
            }
            if (!userData.favoriteUpgrades) {
                userData.favoriteUpgrades = [];
            }
            if (!userData.favoriteZones) {
                userData.favoriteZones = [];
            }
            if (!userData.favoriteDlcs) {
                userData.favoriteDlcs = [];
            }
            
        } else {
            console.log('No existing user data, starting fresh');
            
            
            userData.ownedZones = ['ranch'];
            userData.purchasedRecipes = [];
            userData.purchasedVacpackUpgrades = [];
            userData.ownedDlcs = [];
        }
        
        
        displayRefineryDeposits();
        displayRecipes();
        displayVacpackUpgrades();
        displayFavorites();
        displayClubRewards();
        displayDlcs();
        displayZones();
        
    } catch (error) {
    console.error(`${t('loadError')} ${error.message}`);
    showError(`${t('loadError')} ${error.message}`);
    }
}

async function saveUserData(showMessage = false) {
    if (!currentUser) return;
    
    try {
        await db.collection('users').doc(currentUser.uid).set(userData);
        lastSaveTime = Date.now();
        hasUnsavedChanges = false;
        console.log(t('dataSaved'));
        
        
        if (showMessage) {
            showSaveConfirmation();
        }
    } catch (error) {
    console.error(`${t('saveError')}: ${error.message}`);
    showError(`${t('saveError')} ${error.message}`);
    }
}


function markAsChanged() {
    hasUnsavedChanges = true;
}


function startAutoSave() {
    if (autoSaveInterval) {
        clearInterval(autoSaveInterval);
    }
    
    autoSaveInterval = setInterval(async () => {
        if (hasUnsavedChanges && currentUser) {
            await saveUserData();
            
            setTimeout(() => {
                if (!hasUnsavedChanges && Date.now() - lastSaveTime >= 1000) {
                    showSaveConfirmation();
                }
            }, 1000);
        }
    }, 2000);
}


function showSaveConfirmation() {
    // Utilise le container de notifications pour un rendu cohérent et animation
    const container = document.getElementById('notification-container');
    if (!container) return;
    const notif = document.createElement('div');
    notif.className = 'notification success';
    notif.innerHTML = `<div class="notification-icon"><img src="assets/resources/icon_check.png" style="width:20px;height:20px;vertical-align:middle;"></div><div class="notification-message">${t('dataSaved') || 'Données enregistrées'}</div><button class="notification-close" aria-label="close">&times;</button>`;
    container.appendChild(notif);

    // close handler
    const closeBtn = notif.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notif.style.animation = 'slideOut 0.22s ease-in forwards';
        setTimeout(() => notif.remove(), 240);
    });

    // auto remove after 2s
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.22s ease-in forwards';
        setTimeout(() => notif.remove(), 240);
    }, 2000);
}





let currentRefineryFilter = 'all';
let currentRefinerySort = 'default';

// Initialiser currentRefineryFilter depuis l'URL au chargement
const initialRefineryUrlParams = new URLSearchParams(window.location.search);
if (initialRefineryUrlParams.get('refineryFilter')) {
    currentRefineryFilter = initialRefineryUrlParams.get('refineryFilter');
}

function displayRefineryDeposits() {
    const container = document.getElementById('refinery-grid');
    if (!container) return;
    
    const labWarning = document.getElementById('lab-warning-refinery');
    const labAccess = hasLabAccess();
    
    if (labWarning) {
        labWarning.style.display = labAccess ? 'none' : 'block';
    }
    
    ALL_RESOURCES.forEach(resource => {
        if (!(resource in userData.refineryDeposits)) {
            userData.refineryDeposits[resource] = 0;
        }
    });
    
    const lang = currentLanguage || 'en';
    
    let resourcesToDisplay = ALL_RESOURCES;
    if (currentRefineryFilter !== 'all') {
        resourcesToDisplay = RESOURCE_CATEGORIES[currentRefineryFilter] || ALL_RESOURCES;
    }

    // Tri selon currentRefinerySort
    if (currentRefinerySort === 'name-asc') {
        resourcesToDisplay = [...resourcesToDisplay].sort((a, b) => {
            const nameA = ALL_RESOURCES_TRANSLATIONS[a]?.[lang] || a;
            const nameB = ALL_RESOURCES_TRANSLATIONS[b]?.[lang] || b;
            return nameA.localeCompare(nameB);
        });
    } else if (currentRefinerySort === 'name-desc') {
        resourcesToDisplay = [...resourcesToDisplay].sort((a, b) => {
            const nameA = ALL_RESOURCES_TRANSLATIONS[a]?.[lang] || a;
            const nameB = ALL_RESOURCES_TRANSLATIONS[b]?.[lang] || b;
            return nameB.localeCompare(nameA);
        });
    } else if (currentRefinerySort === 'quantity-asc') {
        resourcesToDisplay = [...resourcesToDisplay].sort((a, b) => {
            return (userData.refineryDeposits[a] || 0) - (userData.refineryDeposits[b] || 0);
        });
    } else if (currentRefinerySort === 'quantity-desc') {
        resourcesToDisplay = [...resourcesToDisplay].sort((a, b) => {
            return (userData.refineryDeposits[b] || 0) - (userData.refineryDeposits[a] || 0);
        });
    }
    
    container.innerHTML = resourcesToDisplay.map(resource => {
        const translatedName = ALL_RESOURCES_TRANSLATIONS[resource] 
            ? ALL_RESOURCES_TRANSLATIONS[resource][lang] 
            : resource;
        
        const isLocked = !labAccess;
            
        return `
        <div class="refinery-resource-card ${isLocked ? 'locked' : ''}">
            ${isLocked ? '<div class="locked-overlay">🔒</div>' : ''}
            <div class="resource-image">
                <img loading="lazy" src="assets/resources/${resource.toLowerCase().replace(/\s+/g, '_')}.png" 
                     alt="${translatedName}"
                     onerror="this.parentElement.innerHTML='🔬'">
            </div>
            <div class="resource-name-display">${translatedName}</div>
            <div class="resource-controls">
                <input type="number" 
                       class="resource-qty-input"
                       id="refinery-${resource.replace(/\s+/g, '_')}" 
                       value="${userData.refineryDeposits[resource] || 0}" 
                       min="0"
                       ${isLocked ? 'disabled' : ''}
                       onchange="${isLocked ? 'return false;' : `updateRefineryQuantity('${resource}', this.value)`}">
                <button class="resource-btn-reset" ${isLocked ? 'disabled' : ''} onclick="${isLocked ? 'return false;' : `updateRefineryQuantity('${resource}', 0)`}" title="Remettre à zéro">⟲</button>
                <div class="resource-controls-buttons">
                    <button class="resource-btn-minus-10 ${isLocked ? 'disabled' : ''}" 
                            onclick="${isLocked ? 'return false;' : `adjustRefineryQuantity('${resource}', -10)`}"
                            ${isLocked ? 'disabled' : ''}
                            title="-10">−10</button>
                    <button class="resource-btn-minus ${isLocked ? 'disabled' : ''}" 
                            onclick="${isLocked ? 'return false;' : `adjustRefineryQuantity('${resource}', -1)`}"
                            ${isLocked ? 'disabled' : ''}>−</button>
                    <button class="resource-btn-plus ${isLocked ? 'disabled' : ''}" 
                            onclick="${isLocked ? 'return false;' : `adjustRefineryQuantity('${resource}', 1)`}"
                            ${isLocked ? 'disabled' : ''}>+</button>
                    <button class="resource-btn-plus-10 ${isLocked ? 'disabled' : ''}" 
                            onclick="${isLocked ? 'return false;' : `adjustRefineryQuantity('${resource}', 10)`}"
                            ${isLocked ? 'disabled' : ''}
                            title="+10">+10</button>
                </div>
            </div>
        </div>`;
    }).join('');
}


function filterRefinery(category) {
    currentRefineryFilter = category;
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'fr';
    const sort = currentRefinerySort || 'default';
    const newUrl = `${window.location.pathname}?lang=${lang}&refineryFilter=${category}&sort=${sort}#refinery`;
    window.history.replaceState({}, '', newUrl);
    document.querySelectorAll('#refinery-section .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    displayRefineryDeposits();
}


function adjustRefineryQuantity(resourceName, delta) {
    const currentValue = userData.refineryDeposits[resourceName] || 0;
    const newValue = Math.max(0, currentValue + delta);
    userData.refineryDeposits[resourceName] = newValue;
    
    
    const input = document.getElementById(`refinery-${resourceName.replace(/\s+/g, '_')}`);
    if (input) {
        input.value = newValue;
    }
    
    
    markAsChanged();
}


function updateRefineryQuantity(resourceName, quantity) {
    userData.refineryDeposits[resourceName] = parseInt(quantity) || 0;
    // Mettre à jour immédiatement l'input correspondant si présent
    const input = document.getElementById(`refinery-${resourceName.replace(/\s+/g, '_')}`);
    if (input) {
        input.value = userData.refineryDeposits[resourceName];
    }
    markAsChanged();
    displayRecipes();
    // Sauvegarder immédiatement et afficher la notif via le container
    saveUserData(true);
}


let saveTimeout;


async function saveAllRefineryDeposits() {
    await saveUserData();
    showSuccess(t('dataSaved'));
    displayRecipes();
}



async function toggleRecipePurchase(recipeId) {
    const recipe = RECIPES_DATA.find(r => r.id === recipeId);
    
    
    // On peut retirer les gratuits aussi, donc on retire la restriction
    
    const index = userData.purchasedRecipes.indexOf(recipeId);
    if (index >= 0) {
        userData.purchasedRecipes.splice(index, 1);
        showInfo(t('recipeRemoved') || 'Recette retirée');
    } else {
        userData.purchasedRecipes.push(recipeId);
        showSuccess(t('recipePurchased') || 'Recette achetée');
    }
    
    markAsChanged();
    await saveUserData();
    displayRecipes(currentFilter);
}

async function toggleRecipeFavorite(recipeId) {
    const index = userData.favoriteRecipes.indexOf(recipeId);
    if (index >= 0) {
        userData.favoriteRecipes.splice(index, 1);
        showInfo(t('favoriteRemoved') || 'Retiré des favoris');
    } else {
        userData.favoriteRecipes.push(recipeId);
        showSuccess(t('favoriteAdded') || 'Ajouté aux favoris');
    }
    
    markAsChanged();
    await saveUserData();
    displayRecipes(currentFilter);
    displayFavorites();
}

async function toggleUpgradeFavorite(upgradeId) {
    const index = userData.favoriteUpgrades.indexOf(upgradeId);
    if (index >= 0) {
        userData.favoriteUpgrades.splice(index, 1);
        showInfo(t('favoriteRemoved') || 'Retiré des favoris');
    } else {
        userData.favoriteUpgrades.push(upgradeId);
        showSuccess(t('favoriteAdded') || 'Ajouté aux favoris');
    }
    
    markAsChanged();
    await saveUserData();
    displayVacpackUpgrades();
    displayFavorites();
}

async function toggleZoneFavorite(zoneId) {
    const index = userData.favoriteZones.indexOf(zoneId);
    if (index >= 0) {
        userData.favoriteZones.splice(index, 1);
        showInfo(t('favoriteRemoved') || 'Retiré des favoris');
    } else {
        userData.favoriteZones.push(zoneId);
        showSuccess(t('favoriteAdded') || 'Ajouté aux favoris');
    }
    
    markAsChanged();
    await saveUserData();
    displayZones();
    displayFavorites();
}

async function toggleDlcFavorite(dlcId) {
    const index = userData.favoriteDlcs.indexOf(dlcId);
    if (index >= 0) {
        userData.favoriteDlcs.splice(index, 1);
        showInfo(t('favoriteRemoved') || 'Retiré des favoris');
    } else {
        userData.favoriteDlcs.push(dlcId);
        showSuccess(t('favoriteAdded') || 'Ajouté aux favoris');
    }
    
    markAsChanged();
    await saveUserData();
    displayDlcs();
    displayFavorites();
}

let currentFilter = 'all';
let currentSort = 'default';

// Initialiser currentFilter et currentSort depuis l'URL au chargement
const initialUrlParams = new URLSearchParams(window.location.search);
if (initialUrlParams.get('recipeFilter')) {
    currentFilter = initialUrlParams.get('recipeFilter');
}
if (initialUrlParams.get('sort')) {
    currentSort = initialUrlParams.get('sort');
}

function sortRecipes(sortType) {
    currentSort = sortType;
    
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'fr';
    const filter = urlParams.get('recipeFilter') || 'all';
    const newUrl = `${window.location.pathname}?lang=${lang}&recipeFilter=${filter}&sort=${sortType}#recipes`;
    window.history.replaceState({}, '', newUrl);
    
    displayRecipes(currentFilter);
}

function filterRecipes(filter) {
    currentFilter = filter;
    
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'fr';
    const sort = urlParams.get('sort') || 'default';
    const newUrl = `${window.location.pathname}?lang=${lang}&recipeFilter=${filter}&sort=${sort}#recipes`;
    window.history.replaceState({}, '', newUrl);
    
    
    document.querySelectorAll('#recipes-section .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    displayRecipes(filter);
}

function displayRecipes(filter) {
    const container = document.getElementById('recipes-list');
    const lang = currentLanguage || 'en';
    
    const labWarning = document.getElementById('lab-warning-recipes');
    if (labWarning) {
        labWarning.style.display = hasLabAccess() ? 'none' : 'block';
    }
    
    let filteredRecipes = RECIPES_DATA;
    if (filter === 'purchased') {
        // Inclure toutes les recettes dans le filtre 'purchased', y compris les gratuites si achetées
        filteredRecipes = RECIPES_DATA.filter(r => userData.purchasedRecipes.includes(r.id));
    } else if (filter === 'not-purchased') {
        filteredRecipes = RECIPES_DATA.filter(r => !userData.purchasedRecipes.includes(r.id));
    }
    
    
    if (currentSort !== 'default') {
        filteredRecipes = [...filteredRecipes]; 
        
        switch(currentSort) {
            case 'name-asc':
                filteredRecipes.sort((a, b) => {
                    const nameA = RECIPES_TRANSLATIONS[a.name] ? RECIPES_TRANSLATIONS[a.name][lang] : a.name;
                    const nameB = RECIPES_TRANSLATIONS[b.name] ? RECIPES_TRANSLATIONS[b.name][lang] : b.name;
                    return nameA.localeCompare(nameB);
                });
                break;
            case 'name-desc':
                filteredRecipes.sort((a, b) => {
                    const nameA = RECIPES_TRANSLATIONS[a.name] ? RECIPES_TRANSLATIONS[a.name][lang] : a.name;
                    const nameB = RECIPES_TRANSLATIONS[b.name] ? RECIPES_TRANSLATIONS[b.name][lang] : b.name;
                    return nameB.localeCompare(nameA);
                });
                break;
            case 'price-asc':
                filteredRecipes.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredRecipes.sort((a, b) => b.price - a.price);
                break;
            case 'stock-desc':
                filteredRecipes.sort((a, b) => {
                    // Trie par quantité produisible (stock max possible)
                    const getQty = recipe => Math.min(...recipe.ingredients.map(ing => {
                        const parts = ing.split(' x');
                        const resourceName = parts[0];
                        const requiredQty = parseInt(parts[1]);
                        const currentQty = userData.refineryDeposits[resourceName] || 0;
                        return Math.floor(currentQty / requiredQty);
                    }));
                    return getQty(b) - getQty(a);
                });
                break;
        }
    }
    
    
    if (filteredRecipes.length === 0) {
        let emptyMessage = '';
        const labAccess = hasLabAccess();
        
        if (!labAccess) {
            emptyMessage = t('buyLabFirst') || 'Commencez à acheter le labo !';
        } else if (filter === 'purchased') {
            emptyMessage = t('noPurchasedRecipes') || 'Aucune recette achetée. Commencez à acheter des recettes !';
        } else if (filter === 'not-purchased') {
            emptyMessage = t('allRecipesPurchased') || 'Toutes les recettes ont été achetées ! Bravo ! 🎉';
        } else {
            emptyMessage = t('noRecipes') || 'Aucune recette disponible.';
        }
        container.innerHTML = `<div class="empty-message">${emptyMessage}</div>`;
        return;
    }
    
    container.innerHTML = filteredRecipes.map(recipe => {
        const isPurchased = userData.purchasedRecipes.includes(recipe.id);
        const isFavorite = userData.favoriteRecipes.includes(recipe.id);
        const hasResources = hasEnoughResources(recipe.ingredients);
        const resourcesPercentage = getResourcesPercentage(recipe.ingredients);
        const gradient = getGradientByPercentage(resourcesPercentage);
        const labAccess = hasLabAccess();
        const isFree = recipe.price === 0;
        const isLocked = !labAccess;
        const cannotTogglePurchase = isLocked;
        const cannotToggleFavorite = isLocked;
        
        
        const translatedName = RECIPES_TRANSLATIONS[recipe.name]
            ? RECIPES_TRANSLATIONS[recipe.name][lang]
            : recipe.name;
        
        
        const translatedIngredients = recipe.ingredients.map(ing => {
            const parts = ing.split(' x');
            const resourceName = parts[0];
            const requiredQty = parseInt(parts[1]);
            const currentQty = userData.refineryDeposits[resourceName] || 0;
            const translatedResource = ALL_RESOURCES_TRANSLATIONS[resourceName]
                ? ALL_RESOURCES_TRANSLATIONS[resourceName][lang]
                : resourceName;
            const hasEnough = currentQty >= requiredQty;
            const colorClass = hasEnough ? 'ingredient-sufficient' : 'ingredient-insufficient';
            const resourceIcon = `assets/resources/${resourceName.toLowerCase().replace(/\s+/g, '_')}.png`;
            return `<span class="${colorClass}"><img src="${resourceIcon}" class="ingredient-icon" onerror="this.style.display='none'"> ${translatedResource}: ${currentQty}/${requiredQty}</span>`;
        }).join('<br>');
        
        // Calculer combien de fois on peut produire la recette avec le stock actuel
        const producibleQty = Math.min(...recipe.ingredients.map(ing => {
            const parts = ing.split(' x');
            const resourceName = parts[0];
            const requiredQty = parseInt(parts[1]);
            const currentQty = userData.refineryDeposits[resourceName] || 0;
            return Math.floor(currentQty / requiredQty);
        }));
        
        // Utilise la traduction selon la langue
        const producibleLabel = producibleQty > 0
            ? (PRODUCIBLE_TRANSLATIONS.canProduce[lang] || 'Quantité produisible')
            : (PRODUCIBLE_TRANSLATIONS.cannotProduce[lang] || 'Impossible à produire');
        
        // Détermine le fond à appliquer : vert si ressources, rouge si manquant, sinon violet
        // Couleur de fond pour l'image
        let imageBg = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        if (hasResources) {
            imageBg = 'linear-gradient(135deg, rgba(81, 207, 102, 0.95) 0%, rgba(46, 184, 92, 0.95) 100%)'; // vert
        } else {
            imageBg = 'linear-gradient(135deg, rgba(255, 107, 107, 0.95) 0%, rgba(229, 62, 62, 0.95) 100%)'; // rouge
        }
        return `
            <div class="recipe-card ${hasResources ? 'has-resources' : 'missing-resources'} ${isLocked ? 'locked' : ''} ${isPurchased ? 'owned' : ''}">
                ${isLocked ? '<div class="locked-overlay">🔒</div>' : ''}
                <div class="recipe-header">
                    <h3 class="recipe-name">${translatedName}</h3>
                    <div class="recipe-price-badge">
                        ${isFree ? (t('free') || 'Gratuit') : formatPrice(recipe.price)}
                        ${isPurchased ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                    </div>
                </div>
                <div class="recipe-image-container" style="background: ${imageBg};">
                    <img loading="lazy" src="assets/resources/${recipe.name.toLowerCase().replace(/\s+/g, '_').replace(/\(/g, '').replace(/\)/g, '')}.png" 
                         alt="${translatedName}"
                         onerror="this.parentElement.innerHTML='${recipe.icon}'"
                         class="recipe-img">
                </div>
                <div class="recipe-ingredients">
                    ${translatedIngredients}
                    <div class="recipe-producible">${producibleLabel} ${producibleQty > 0 ? `<b>${producibleQty}</b>` : ''}</div>
                </div>
                <div class="recipe-actions">
                    <button class="btn-purchase ${isPurchased ? 'purchased' : ''} ${cannotTogglePurchase ? 'disabled' : ''}" 
                            onclick="${cannotTogglePurchase ? 'return false;' : `toggleRecipePurchase(${recipe.id})`}" 
                            ${cannotTogglePurchase ? 'disabled' : ''}>
                        ${isLocked && !isFree ? ('🔒 ' + (t('locked') || 'Verrouillé'))
                            : (isFree && isPurchased ? (t('obtained') || 'Obtenu')
                                : (isPurchased ? t('purchased') : (isFree ? t('obtain') : t('purchase'))))}
                    </button>
                    <button class="btn-favorite ${isFavorite ? 'active' : ''} ${cannotToggleFavorite ? 'disabled' : ''}" 
                            onclick="${cannotToggleFavorite ? 'return false;' : `toggleRecipeFavorite(${recipe.id})`}"
                            ${cannotToggleFavorite ? 'disabled' : ''}
                            title="${t('addFavorite')}">
                        ${isFavorite ? '★' : '☆'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    
    const totalPrice = RECIPES_DATA
        .filter(r => !userData.purchasedRecipes.includes(r.id))
        .reduce((sum, r) => sum + r.price, 0);
    
    document.getElementById('total-unpurchased-price').textContent = totalPrice.toLocaleString();
}



async function toggleClubTierPurchase(tierNumber) {
    const tier = CLUB_7ZEE_REWARDS.find(r => r.tier === tierNumber);
    if (!tier) return;
    
    
    if (tierNumber > 1) {
        const previousTierPurchased = userData.purchasedClubTiers.includes(tierNumber - 1);
        if (!previousTierPurchased) {
            console.error(t('mustPurchasePreviousTier'));
            showWarning(t('mustPurchasePreviousTier'));
            return;
        }
    }
    
    const index = userData.purchasedClubTiers.indexOf(tierNumber);
    if (index >= 0) {
        // Vérifie si le niveau supérieur est acheté
        const nextTierPurchased = userData.purchasedClubTiers.includes(tierNumber + 1);
        if (nextTierPurchased) {
            showWarning(t('cannotRemoveTierWithNextPurchased'));
            return;
        }
        userData.purchasedClubTiers.splice(index, 1);
        showInfo(t('tierRemoved'));
    } else {
        userData.purchasedClubTiers.push(tierNumber);
        showSuccess(t('tierPurchased'));
    }
    
    markAsChanged();
    await saveUserData();
    displayClubRewards();
}

function displayClubRewards() {
    const container = document.getElementById('club-rewards');
    if (!container) {
        console.error('Club rewards container not found');
        return;
    }
    
    if (typeof CLUB_7ZEE_REWARDS === 'undefined') {
        console.error('CLUB_7ZEE_REWARDS is not defined');
        return;
    }
    
    const lang = currentLanguage || 'en';
    
    container.innerHTML = CLUB_7ZEE_REWARDS.map((reward, index) => {
        const isPurchased = userData.purchasedClubTiers.includes(reward.tier);
        const canPurchase = reward.tier === 1 || userData.purchasedClubTiers.includes(reward.tier - 1);
        const rewardName = reward.name;
        
        
        const tierPrice = index === 0 
            ? reward.required 
            : reward.required - CLUB_7ZEE_REWARDS[index - 1].required;
        
        
        const translatedRewards = reward.rewards.map(rewardItem => {
            return CLUB_REWARDS_TRANSLATIONS[rewardItem]
                ? CLUB_REWARDS_TRANSLATIONS[rewardItem][lang]
                : rewardItem;
        });
        
        return `
            <div class="club-tier-card ${isPurchased ? 'tier-purchased' : ''} ${canPurchase && !isPurchased ? 'tier-available' : ''} ${!canPurchase && !isPurchased ? 'locked' : ''}">
                ${!canPurchase && !isPurchased ? '<div class="locked-overlay">🔒</div>' : ''}
                <div class="tier-header">
                    <div class="tier-badge">${t('level')} ${reward.tier}</div>
                    <div class="tier-price">
                        ${tierPrice.toLocaleString()} <img src="assets/resources/iconNewBuck.png" alt="Newbucks" class="currency-icon">
                        ${isPurchased ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                    </div>
                </div>
                
                <div class="tier-content">
                    <h3 class="tier-title">${rewardName}</h3>
                    
                    <div class="tier-rewards">
                        <h4 class="rewards-title">${t('rewards') || 'Récompenses'}</h4>
                        <ul class="rewards-list">
                            ${translatedRewards.map(r => `<li><span class="reward-bullet">◆</span> ${r}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <button class="btn-tier-action ${isPurchased ? 'tier-purchased' : ''}" 
                        onclick="toggleClubTierPurchase(${reward.tier})"
                        ${!canPurchase && !isPurchased ? 'disabled' : ''}>
                    ${isPurchased ? t('purchased') : '<span class="btn-icon">🛒</span> ' + t('purchase')}
                </button>
            </div>
        `;
    }).join('');
}



async function toggleDlcOwnership(dlcId) {
    const dlc = SLIME_RANCHER_DLCS.find(d => d.id === dlcId);
    
    
    // On peut retirer les gratuits aussi, donc on retire la restriction
    
    const index = userData.ownedDlcs.indexOf(dlcId);
    if (index >= 0) {
        userData.ownedDlcs.splice(index, 1);
        showInfo(t('dlcRemoved') || 'DLC retiré');
    } else {
        userData.ownedDlcs.push(dlcId);
        showSuccess(t('dlcAdded') || 'DLC ajouté');
    }
    
    markAsChanged();
    await saveUserData();
    displayDlcs();
}

function displayDlcs() {
    const container = document.getElementById('dlcs-list');
    if (!container) {
        console.error('DLC container not found');
        return;
    }
    
    if (typeof SLIME_RANCHER_DLCS === 'undefined') {
        console.error('SLIME_RANCHER_DLCS is not defined');
        return;
    }
    
    const lang = currentLanguage || 'en';
    
    // Trier les DLCs : gratuits d'abord, puis payants
    const sortedDlcs = [...SLIME_RANCHER_DLCS].sort((a, b) => {
        if (a.price === 0 && b.price !== 0) return -1;
        if (a.price !== 0 && b.price === 0) return 1;
        return 0;
    });
    
    container.innerHTML = sortedDlcs.map(dlc => {
        const isOwned = userData.ownedDlcs.includes(dlc.id);
        const isFavorite = userData.favoriteDlcs.includes(dlc.id);
        const isFree = dlc.price === 0;
        
        
        const translatedName = DLC_TRANSLATIONS[dlc.name]
            ? DLC_TRANSLATIONS[dlc.name][lang]
            : dlc.name;
        
        
        const translatedContent = dlc.content.map(item => {
            return DLC_TRANSLATIONS[item]
                ? DLC_TRANSLATIONS[item][lang]
                : item;
        });
        
        // Map des noms d'images personnalisés
        const imageMap = {
            'galactic-bundle': 'dlc_galactic.png',
            'secret-style-pack': 'dlc_secret_style_pack.jpg'
        };
        const imageName = imageMap[dlc.id] || `dlc_${dlc.id}.png`;
        
        return `
            <div class="dlc-card ${isOwned ? 'owned' : ''} ${isFree ? 'free' : ''}">
                <div class="dlc-header">
                    <h3 class="dlc-name">${translatedName}</h3>
                    <div class="dlc-price">
                        ${isFree ? (t('free') || 'Gratuit') : formatPrice(dlc.price)}
                        ${isOwned ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                    </div>
                </div>
                <div class="dlc-image-container">
                    <img loading="lazy" src="assets/resources/${imageName}" alt="${translatedName}" class="dlc-img" onerror="this.parentElement.innerHTML='🎮'">
                </div>
                <div class="dlc-content">
                    <h4>${t('dlcContent')}</h4>
                    <ul>
                        ${translatedContent.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="dlc-actions">
                    <button class="btn-dlc ${isOwned ? 'owned' : ''}" 
                            onclick="toggleDlcOwnership('${dlc.id}')">
                        ${isFree ? (isOwned ? (t('obtained') || 'Obtenu') : (t('obtain') || 'Obtenir')) : (isOwned ? t('dlcOwned') : t('dlcBuy'))}
                    </button>
                    <button class="btn-favorite" onclick="toggleDlcFavorite('${dlc.id}')" title="${t('addFavorite')}">
                        ${isFavorite ? '★' : '☆'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}



function hasLabAccess() {
    return userData.ownedZones && userData.ownedZones.includes('lab');
}

async function toggleZone(zoneId) {
    const index = userData.ownedZones.indexOf(zoneId);
    if (index >= 0) {
        if (zoneId === 'lab') {
            const hasDeposits = Object.values(userData.refineryDeposits).some(qty => qty > 0);
            if (hasDeposits) {
                showError(t('cannotRemoveLab') || 'Impossible de retirer le labo avec des ressources dans la raffinerie');
                return;
            }
        }
        userData.ownedZones.splice(index, 1);
        showInfo(t('zoneRemoved') || 'Terre retirée');
    } else {
        userData.ownedZones.push(zoneId);
        showSuccess(t('zoneAdded') || 'Terre achetée');
    }
    
    markAsChanged();
    await saveUserData();
    displayZones();
    
    displayRefineryDeposits();
    displayRecipes();
}

function displayZones() {
    const container = document.getElementById('zones-list');
    if (!container) {
        console.error('Zones container not found');
        return;
    }
    
    if (typeof ZONES_DATA === 'undefined') {
        console.error('ZONES_DATA is not defined');
        return;
    }
    
    const lang = currentLanguage || 'en';
    
    container.innerHTML = ZONES_DATA.map(zone => {
        const isOwned = userData.ownedZones.includes(zone.id);
        const isFree = zone.price === 0;
        const isFavorite = userData.favoriteZones.includes(zone.id);
        
        
        const translatedName = ZONES_TRANSLATIONS[zone.nameKey]
            ? ZONES_TRANSLATIONS[zone.nameKey][lang]
            : zone.nameKey;
        
        
        const zoneImage = zone.image || `iconExpan${zone.id.charAt(0).toUpperCase() + zone.id.slice(1)}.png`;
        
        return `
            <div class="zone-card ${isOwned && !isFree ? 'owned' : ''} ${isFree ? 'free' : ''}">
                <div class="zone-header">
                    <h3 class="zone-name">${translatedName}</h3>
                    <div class="zone-price-badge">
                        ${isFree ? (t('included') || 'Inclus') : formatPrice(zone.price)}
                        ${isOwned && !isFree ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                    </div>
                </div>
                <div class="zone-image-container">
                    <img loading="lazy" src="assets/resources/${zoneImage}" alt="${translatedName}" class="zone-img">
                </div>
                ${zone.unlocks.length > 0 ? `
                    <div class="zone-content">
                        <h4>${t('zoneUnlock') || 'Débloque'}</h4>
                        <ul>
                            ${zone.unlocks.map(unlock => {
                                const unlockTranslation = (typeof ZONE_UNLOCKS_TRANSLATIONS !== 'undefined' && ZONE_UNLOCKS_TRANSLATIONS[unlock] && ZONE_UNLOCKS_TRANSLATIONS[unlock][lang]) ? ZONE_UNLOCKS_TRANSLATIONS[unlock][lang] : unlock;
                                return `<li>${unlockTranslation}</li>`;
                            }).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${!isFree ? `
                    <div class="zone-actions">
                        <button class="btn-zone ${isOwned ? 'owned' : ''}" 
                                onclick="toggleZone('${zone.id}')">
                            ${isOwned ? (t('zoneOwned') || 'Acheté') : (t('zoneBuy') || 'Acheter')}
                        </button>
                        <button class="btn-favorite" onclick="toggleZoneFavorite('${zone.id}')" title="${t('addFavorite')}">
                            ${isFavorite ? '★' : '☆'}
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

function canPurchaseUpgrade(upgrade) {
    // Si c'est gratuit et déjà acheté, on ne peut pas le retirer
    if (upgrade.price === 0 && userData.purchasedVacpackUpgrades.includes(upgrade.id)) {
        return false;
    }
    
    // Vérifier si l'amélioration précédente est achetée
    const previousUpgrade = VACPACK_UPGRADES.find(u => 
        u.category === upgrade.category && u.level === upgrade.level - 1
    );
    
    // Si il y a une amélioration précédente et qu'elle n'est pas achetée, on ne peut pas acheter celle-ci
    if (previousUpgrade && !userData.purchasedVacpackUpgrades.includes(previousUpgrade.id)) {
        return false;
    }
    
    return true;
}

async function toggleVacpackUpgrade(upgradeId) {
    const upgrade = VACPACK_UPGRADES.find(u => u.id === upgradeId);
    if (!upgrade) return;
    
    
    if (upgrade.price === 0 && userData.purchasedVacpackUpgrades.includes(upgradeId)) {
        return;
    }
    
    
    const previousUpgrade = VACPACK_UPGRADES.find(u => 
        u.category === upgrade.category && u.level === upgrade.level - 1
    );
    
    if (previousUpgrade && !userData.purchasedVacpackUpgrades.includes(previousUpgrade.id)) {
        showError(t('previousUpgradeRequired') || 'Amélioration précédente requise');
        return;
    }
    
    const index = userData.purchasedVacpackUpgrades.indexOf(upgradeId);
    if (index >= 0) {
        userData.purchasedVacpackUpgrades.splice(index, 1);
        showInfo(t('upgradeRemoved') || 'Amélioration retirée');
    } else {
        userData.purchasedVacpackUpgrades.push(upgradeId);
        showSuccess(t('upgradePurchased') || 'Amélioration achetée');
    }
    
    markAsChanged();
    await saveUserData();
    displayVacpackUpgrades();
}

function displayVacpackUpgrades() {
    const container = document.getElementById('vacpack-upgrades');
    if (!container) {
        console.error('Vacpack container not found');
        return;
    }
    
    if (typeof VACPACK_UPGRADES === 'undefined') {
        console.error('VACPACK_UPGRADES is not defined');
        return;
    }
    
    const lang = currentLanguage || 'en';
    
    
    const categories = ['capacity', 'range', 'water', 'health', 'energy', 'ammo', 'movement', 'special', 'booster'];
    
    container.innerHTML = categories.map(category => {
        const upgrades = VACPACK_UPGRADES.filter(u => u.category === category);
        if (upgrades.length === 0) return '';
        
        const categoryName = VACPACK_CATEGORY_TRANSLATIONS[category]
            ? VACPACK_CATEGORY_TRANSLATIONS[category][lang]
            : category;
        
        return `
            <div class="vacpack-category">
                <h3 class="vacpack-category-title">${categoryName}</h3>
                <div class="vacpack-upgrades-list">
                    ${upgrades.map((upgrade, index) => {
                        const isPurchased = userData.purchasedVacpackUpgrades.includes(upgrade.id);
                        
                        
                        const hasLevels = upgrades.length > 1 && upgrades.some(u => u.level > 1);
                        let canPurchase = true;
                        
                        if (hasLevels) {
                            const previousUpgrade = index > 0 ? upgrades[index - 1] : null;
                            canPurchase = !previousUpgrade || userData.purchasedVacpackUpgrades.includes(previousUpgrade.id);
                        }
                        
                        const translatedName = VACPACK_TRANSLATIONS[upgrade.name]
                            ? VACPACK_TRANSLATIONS[upgrade.name][lang]
                            : upgrade.name;
                        
                        const isFavorite = userData.favoriteUpgrades.includes(upgrade.id);
                        const isFree = upgrade.price === 0;
                        
                        return `
                            <div class="vacpack-upgrade-card ${isPurchased ? 'owned' : ''} ${!canPurchase && !isPurchased ? 'locked' : ''} ${isFree ? 'free' : ''}">
                                ${!canPurchase && !isPurchased ? '<div class="locked-overlay">🔒</div>' : ''}
                                <div class="upgrade-header">
                                    <h3 class="upgrade-name">${translatedName}</h3>
                                    <div class="upgrade-price-badge">
                                        ${isFree ? (t('free') || 'Gratuit') : formatPrice(upgrade.price)}
                                        ${isPurchased ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                                    </div>
                                </div>
                                <div class="upgrade-image-container">
                                    <img loading="lazy" src="assets/resources/vacpack_${category}_${upgrade.level || upgrade.id}.png" 
                                         alt="${translatedName}" class="upgrade-img"
                                         onerror="this.parentElement.innerHTML='${upgrade.icon}'">
                                </div>
                                <div class="upgrade-actions">
                                    <button class="btn-upgrade ${isPurchased ? 'owned' : ''}"
                                            onclick="toggleVacpackUpgrade(${upgrade.id})"
                                            ${!canPurchase && !isPurchased ? 'disabled' : ''}>
                                        ${isPurchased ? t('purchased') : (isFree ? t('obtain') : t('purchase'))}
                                    </button>
                                    <button class="btn-favorite ${isFavorite ? 'active' : ''}" onclick="toggleUpgradeFavorite(${upgrade.id})" title="${t('addFavorite')}">
                                        ${isFavorite ? '★' : '☆'}
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).filter(html => html !== '').join('');
}



function displayFavorites() {
    const favoritesContainer = document.getElementById('favorites-list');
    if (!favoritesContainer) {
        console.error('Favorites container not found');
        return;
    }
    
    const lang = currentLanguage || 'en';
    const favoriteRecipes = RECIPES_DATA.filter(r => userData.favoriteRecipes.includes(r.id));
    const favoriteUpgrades = VACPACK_UPGRADES.filter(u => userData.favoriteUpgrades.includes(u.id));
    const favoriteZones = ZONES_DATA.filter(z => userData.favoriteZones.includes(z.id));
    const favoriteDlcs = SLIME_RANCHER_DLCS.filter(d => userData.favoriteDlcs.includes(d.id));
    
    const totalFavorites = favoriteRecipes.length + favoriteUpgrades.length + favoriteZones.length + favoriteDlcs.length;
    
    if (totalFavorites === 0) {
        favoritesContainer.innerHTML = `<div class="empty-message">${t('noFavorites') || 'Aucun favori pour le moment. Ajoutez des éléments en cliquant sur ☆'}</div>`;
        return;
    }
    
    let content = '';
    
    if (favoriteRecipes.length > 0) {
        content += `<h3 class="favorites-category-title">${t('recipesTitle') || 'Recettes'}</h3>`;
        content += `<div class="recipes-grid">`;
        content += favoriteRecipes.map(recipe => {
            const isPurchased = userData.purchasedRecipes.includes(recipe.id);
            const isFree = recipe.price === 0;
            const hasResources = hasEnoughResources(recipe.ingredients);
            const resourcesPercentage = getResourcesPercentage(recipe.ingredients);
            const gradient = getGradientByPercentage(resourcesPercentage);
            
            const translatedName = RECIPES_TRANSLATIONS[recipe.name]
                ? RECIPES_TRANSLATIONS[recipe.name][lang]
                : recipe.name;
            
            const translatedIngredients = recipe.ingredients.map(ing => {
                const parts = ing.split(' x');
                const resourceName = parts[0];
                const requiredQty = parseInt(parts[1]);
                const currentQty = userData.refineryDeposits[resourceName] || 0;
                const translatedResource = ALL_RESOURCES_TRANSLATIONS[resourceName]
                    ? ALL_RESOURCES_TRANSLATIONS[resourceName][lang]
                    : resourceName;
                const hasEnough = currentQty >= requiredQty;
                const colorClass = hasEnough ? 'ingredient-sufficient' : 'ingredient-insufficient';
                
                const resourceIcon = `<img src="assets/resources/${resourceName.toLowerCase().replace(/\s+/g, '_')}.png" class="ingredient-icon" alt="${resourceName}" onerror="this.style.display='none'">`;
                return `<span class="${colorClass}">${resourceIcon}${translatedResource}: ${currentQty}/${requiredQty}</span>`;
            }).join('<br>');
            
            // Calculer combien de fois on peut produire la recette avec le stock actuel
            const producibleQty = Math.min(...recipe.ingredients.map(ing => {
                const parts = ing.split(' x');
                const resourceName = parts[0];
                const requiredQty = parseInt(parts[1]);
                const currentQty = userData.refineryDeposits[resourceName] || 0;
                return Math.floor(currentQty / requiredQty);
            }));
            
            return `
                <div class="recipe-card ${hasResources ? 'has-resources' : 'missing-resources'} ${isPurchased ? 'owned' : ''}" style="background: ${gradient};">
                    <div class="recipe-header">
                        <h3 class="recipe-name">${translatedName}</h3>
                        <div class="recipe-price-badge">
                            ${isFree ? (t('free') || 'Gratuit') : formatPrice(recipe.price)}
                            ${isPurchased ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                        </div>
                    </div>
                    <div class="recipe-image-container">
                        <img loading="lazy" src="assets/resources/${recipe.name.toLowerCase().replace(/\s+/g, '_').replace(/\(/g, '').replace(/\)/g, '')}.png" 
                             alt="${translatedName}" class="recipe-img"
                             onerror="this.parentElement.innerHTML='${recipe.icon}'">
                    </div>
                    <div class="recipe-content">
                        <div class="recipe-ingredients">${translatedIngredients}</div>
                    </div>
                    <div class="recipe-actions">
                        <button class="btn-recipe ${isPurchased ? 'owned' : ''}" 
                                onclick="toggleRecipePurchase(${recipe.id})">
                            ${isPurchased ? t('purchased') : (isFree ? t('obtain') : t('purchase'))}
                        </button>
                        <button class="btn-favorite active" 
                                onclick="toggleRecipeFavorite(${recipe.id})"
                                title="${t('removeFavorite') || 'Retirer des favoris'}">
                            ★
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        content += `</div>`;
    }
    
    if (favoriteUpgrades.length > 0) {
        content += `<h3 class="favorites-category-title">${t('vacpackTitle') || 'Améliorations Aspipack'}</h3>`;
        content += `<div class="vacpack-grid">`;
        content += favoriteUpgrades.map(upgrade => {
            const isPurchased = userData.purchasedVacpackUpgrades.includes(upgrade.id);
            const isFree = upgrade.price === 0;
            const isLocked = !canPurchaseUpgrade(upgrade);
            
            const translatedName = VACPACK_TRANSLATIONS[upgrade.name]
                ? VACPACK_TRANSLATIONS[upgrade.name][lang]
                : upgrade.name;
            
            return `
                <div class="vacpack-upgrade-card ${isPurchased ? 'owned' : ''} ${isLocked ? 'locked' : ''} ${isFree ? 'free' : ''}">
                    ${isLocked && !isPurchased ? '<div class="locked-overlay">🔒</div>' : ''}
                    <div class="upgrade-header">
                        <h3 class="upgrade-name">${translatedName}</h3>
                        <div class="upgrade-price-badge">
                            ${isFree ? (t('free') || 'Gratuit') : formatPrice(upgrade.price)}
                            ${isPurchased ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                        </div>
                    </div>
                    <div class="upgrade-image-container">
                        <img loading="lazy" src="assets/resources/vacpack_${upgrade.category}_${upgrade.level || upgrade.id}.png" 
                             alt="${translatedName}" class="upgrade-img"
                             onerror="this.parentElement.innerHTML='${upgrade.icon}'">
                    </div>
                    <div class="upgrade-actions">
                        <button class="btn-upgrade ${isPurchased ? 'owned' : ''}" 
                                onclick="toggleVacpackUpgrade(${upgrade.id})"
                                ${isLocked && !isPurchased ? 'disabled' : ''}>
                            ${isPurchased ? t('purchased') : (isFree ? t('obtain') : t('purchase'))}
                        </button>
                        <button class="btn-favorite active" 
                                onclick="toggleUpgradeFavorite(${upgrade.id})" 
                                title="${t('removeFavorite') || 'Retirer des favoris'}">
                            ★
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        content += `</div>`;
    }
    
    if (favoriteZones.length > 0) {
        content += `<h3 class="favorites-category-title">${t('zonesTitle') || 'Terres'}</h3>`;
        content += `<div class="zones-grid">`;
        content += favoriteZones.map(zone => {
            const isOwned = userData.ownedZones.includes(zone.id);
            const isFree = zone.price === 0;
            const isFavorite = userData.favoriteZones.includes(zone.id);
            const translatedName = ZONES_TRANSLATIONS[zone.nameKey]
                ? ZONES_TRANSLATIONS[zone.nameKey][lang]
                : zone.nameKey;
            const zoneImage = zone.image || `iconExpan${zone.id.charAt(0).toUpperCase() + zone.id.slice(1)}.png`;
            
            return `
                <div class="zone-card ${isOwned && !isFree ? 'owned' : ''} ${isFree ? 'free' : ''}">
                    <div class="zone-header">
                        <h3 class="zone-name">${translatedName}</h3>
                        <div class="zone-price-badge">
                            ${isFree ? (t('included') || 'Inclus') : formatPrice(zone.price)}
                            ${isOwned && !isFree ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                        </div>
                    </div>
                    <div class="zone-image-container">
                        <img loading="lazy" src="assets/resources/${zoneImage}" alt="${translatedName}" class="zone-img">
                    </div>
                    ${zone.unlocks.length > 0 ? `
                        <div class="zone-content">
                            <h4>${t('zoneUnlock') || 'Débloque'}</h4>
                            <ul>
                                ${zone.unlocks.map(unlock => `<li>${unlock}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${!isFree ? `
                        <div class="zone-actions">
                            <button class="btn-zone ${isOwned ? 'owned' : ''}" 
                                    onclick="toggleZone('${zone.id}')">
                                ${isOwned ? (t('zoneOwned') || 'Acheté') : (t('zoneBuy') || 'Acheter')}
                            </button>
                            <button class="btn-favorite" onclick="toggleZoneFavorite('${zone.id}')" title="${t('addFavorite')}">
                                ${isFavorite ? '★' : '☆'}
                            </button>
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');
        content += `</div>`;
    }
    
    if (favoriteDlcs.length > 0) {
        content += `<h3 class="favorites-category-title">${t('dlcsTitle') || 'DLCs'}</h3>`;
        content += `<div class="dlcs-grid">`;
        content += favoriteDlcs.map(dlc => {
            const isOwned = userData.ownedDlcs.includes(dlc.id);
            const isFree = dlc.price === 0;
            const isFavorite = userData.favoriteDlcs.includes(dlc.id);
            const translatedName = DLC_TRANSLATIONS[dlc.name]
                ? DLC_TRANSLATIONS[dlc.name][lang]
                : dlc.name;
            
            const translatedContent = dlc.content.map(item => {
                return DLC_TRANSLATIONS[item]
                    ? DLC_TRANSLATIONS[item][lang]
                    : item;
            });
            
            // Map des noms d'images personnalisés
            const imageMap = {
                'galactic-bundle': 'dlc_galactic.png',
                'secret-style-pack': 'dlc_secret_style_pack.jpg'
            };
            const imageName = imageMap[dlc.id] || `dlc_${dlc.id}.png`;
            
            return `
                <div class="dlc-card ${isOwned ? 'owned' : ''} ${isFree ? 'free' : ''}">
                    <div class="dlc-header">
                        <h3 class="dlc-name">${translatedName}</h3>
                        <div class="dlc-price">
                            ${isFree ? (t('free') || 'Gratuit') : formatPrice(dlc.price)}
                            ${isOwned ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                        </div>
                    </div>
                    <div class="dlc-image-container">
                        <img loading="lazy" src="assets/resources/${imageName}" alt="${translatedName}" class="dlc-img" onerror="this.parentElement.innerHTML='🎮'">
                    </div>
                    <div class="dlc-content">
                        <h4>${t('dlcContent')}</h4>
                        <ul>
                            ${translatedContent.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="dlc-actions">
                        <button class="btn-dlc ${isOwned ? 'owned' : ''}" 
                                onclick="toggleDlcOwnership('${dlc.id}')">
                            ${isFree ? (isOwned ? (t('obtained') || 'Obtenu') : (t('obtain') || 'Obtenir')) : (isOwned ? t('dlcOwned') : t('dlcBuy'))}
                        </button>
                        <button class="btn-favorite active" onclick="toggleDlcFavorite('${dlc.id}')" title="${t('removeFavorite') || 'Retirer des favoris'}">
                            ★
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        content += `</div>`;
    }
    
    favoritesContainer.innerHTML = content;
}


// Sauvegarder avant de quitter la page
window.addEventListener('beforeunload', async (e) => {
    // Sauvegarder la position de scroll
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    
    if (hasUnsavedChanges && currentUser) {
        e.preventDefault();
        await saveUserData();
    }
});


window.addEventListener('load', () => {
    // Restaurer la position de scroll après le chargement
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
        setTimeout(() => {
            window.scrollTo(0, parseInt(savedScrollPosition));
        }, 100);
    }
});

// Gérer la visibilité du bouton scroll to top
window.addEventListener('scroll', () => {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
});

// Fonction pour remonter en haut de la page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function sortRefineryDeposits(sortType) {
    currentRefinerySort = sortType;
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'fr';
    const filter = currentRefineryFilter || 'all';
    const newUrl = `${window.location.pathname}?lang=${lang}&refineryFilter=${filter}&sort=${sortType}#refinery`;
    window.history.replaceState({}, '', newUrl);
    displayRefineryDeposits();
}
