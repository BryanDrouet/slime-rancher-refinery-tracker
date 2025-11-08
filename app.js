
let currentUser = null;
let userData = {
    refineryDeposits: {}, 
    purchasedRecipes: [],
    favoriteRecipes: [],
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
        document.getElementById('user-email').textContent = user.email;
        
        
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
    if (confirm(t('confirmLogout'))) {
        await auth.signOut();
    }
}





function showSection(sectionName) {
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
    
    
    window.location.hash = sectionName;
    
    
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
    
    if (hash && validSections.includes(hash)) {
        showSection(hash);
        
        
        if (hash === 'refinery') {
            currentRefineryFilter = refineryFilter;
            updateFilterButtons('refinery', refineryFilter);
            displayRefineryDeposits();
        } else if (hash === 'recipes') {
            currentFilter = recipeFilter;
            updateFilterButtons('recipes', recipeFilter);
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
    const langParam = urlParams.get('lang');
    
    if (langParam && ['fr', 'en', 'es'].includes(langParam)) {
        changeLanguage(langParam);
    }
    
    
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
            RECIPES_DATA.filter(r => r.price === 0).forEach(recipe => {
                if (!userData.purchasedRecipes.includes(recipe.id)) {
                    userData.purchasedRecipes.push(recipe.id);
                }
            });
            
            
            if (!userData.purchasedVacpackUpgrades) {
                userData.purchasedVacpackUpgrades = [];
            }
            VACPACK_UPGRADES.filter(u => u.price === 0).forEach(upgrade => {
                if (!userData.purchasedVacpackUpgrades.includes(upgrade.id)) {
                    userData.purchasedVacpackUpgrades.push(upgrade.id);
                }
            });
            
            
            if (!userData.ownedDlcs) {
                userData.ownedDlcs = [];
            }
            SLIME_RANCHER_DLCS.filter(d => d.price === 0).forEach(dlc => {
                if (!userData.ownedDlcs.includes(dlc.id)) {
                    userData.ownedDlcs.push(dlc.id);
                }
            });
            
            console.log('User data loaded successfully');
        } else {
            console.log('No existing user data, starting fresh');
            
            
            userData.ownedZones = ['ranch'];
            userData.purchasedRecipes = RECIPES_DATA.filter(r => r.price === 0).map(r => r.id);
            userData.purchasedVacpackUpgrades = VACPACK_UPGRADES.filter(u => u.price === 0).map(u => u.id);
            userData.ownedDlcs = SLIME_RANCHER_DLCS.filter(d => d.price === 0).map(d => d.id);
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
        showError(t('saveError'));
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
    const existingMsg = document.getElementById('save-confirmation');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    const msg = document.createElement('div');
    msg.id = 'save-confirmation';
    msg.className = 'save-confirmation';
    msg.innerHTML = `<img src="assets/resources/icon_check.png" class="check-icon"> ${t('dataSaved') || 'Données enregistrées'}`;
    document.body.appendChild(msg);
    
    setTimeout(() => {
        msg.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        msg.classList.remove('show');
        setTimeout(() => msg.remove(), 300);
    }, 2000);
}





let currentRefineryFilter = 'all';

function displayRefineryDeposits() {
    const container = document.getElementById('refinery-grid');
    if (!container) return;
    
    
    if (!hasLabAccess()) {
        container.innerHTML = `
            <div class="zone-locked-message">
                <div class="locked-icon">🔒</div>
                <h3 data-i18n="labRequired"></h3>
                <p data-i18n="labRequiredDesc"></p>
                <button class="btn-primary" onclick="showSection('zones')">
                    <span data-i18n="goToZones"></span>
                </button>
            </div>
        `;
        updatePageTranslations();
        return;
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
    
    container.innerHTML = resourcesToDisplay.map(resource => {
        const translatedName = ALL_RESOURCES_TRANSLATIONS[resource] 
            ? ALL_RESOURCES_TRANSLATIONS[resource][lang] 
            : resource;
            
        return `
        <div class="refinery-resource-card">
            <div class="resource-image">
                <img loading="lazy" src="assets/resources/${resource.toLowerCase().replace(/\s+/g, '_')}.png" 
                     alt="${translatedName}"
                     onerror="this.parentElement.innerHTML='🔬'">
            </div>
            <div class="resource-name-display">${translatedName}</div>
            <div class="resource-controls">
                <button class="resource-btn-minus" onclick="adjustRefineryQuantity('${resource}', -1)">−</button>
                <input type="number" 
                       class="resource-qty-input"
                       id="refinery-${resource.replace(/\s+/g, '_')}" 
                       value="${userData.refineryDeposits[resource] || 0}" 
                       min="0"
                       onchange="updateRefineryQuantity('${resource}', this.value)">
                <button class="resource-btn-plus" onclick="adjustRefineryQuantity('${resource}', 1)">+</button>
            </div>
        </div>`;
    }).join('');
}


function filterRefinery(category) {
    currentRefineryFilter = category;
    
    
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('refineryFilter', category);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
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
    
    markAsChanged();
    
    
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        displayRecipes();
    }, 500);
}


let saveTimeout;


async function saveAllRefineryDeposits() {
    await saveUserData();
    showSuccess(t('dataSaved'));
    displayRecipes();
}



async function toggleRecipePurchase(recipeId) {
    const recipe = RECIPES_DATA.find(r => r.id === recipeId);
    
    
    if (recipe && recipe.price === 0 && userData.purchasedRecipes.includes(recipeId)) {
        return;
    }
    
    const index = userData.purchasedRecipes.indexOf(recipeId);
    if (index >= 0) {
        userData.purchasedRecipes.splice(index, 1);
    } else {
        userData.purchasedRecipes.push(recipeId);
    }
    
    markAsChanged();
    await saveUserData();
    displayRecipes(currentFilter);
}

async function toggleRecipeFavorite(recipeId) {
    const index = userData.favoriteRecipes.indexOf(recipeId);
    if (index >= 0) {
        userData.favoriteRecipes.splice(index, 1);
    } else {
        userData.favoriteRecipes.push(recipeId);
    }
    
    markAsChanged();
    await saveUserData();
    displayRecipes(currentFilter);
    displayFavorites();
}

let currentFilter = 'all';
let currentSort = 'default';

function sortRecipes(sortType) {
    currentSort = sortType;
    displayRecipes(currentFilter);
}

function filterRecipes(filter) {
    currentFilter = filter;
    
    
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('recipeFilter', filter);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
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
    
    let filteredRecipes = RECIPES_DATA;
    if (filter === 'purchased') {
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
        }
    }
    
    
    if (filteredRecipes.length === 0) {
        let emptyMessage = '';
        if (filter === 'purchased') {
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
        const labAccess = hasLabAccess();
        const isLocked = !labAccess && recipe.price > 0; 
        
        
        const translatedName = RECIPES_TRANSLATIONS[recipe.name]
            ? RECIPES_TRANSLATIONS[recipe.name][lang]
            : recipe.name;
        
        
        const translatedIngredients = recipe.ingredients.map(ing => {
            const parts = ing.split(' x');
            const resourceName = parts[0];
            const quantity = parts[1];
            const translatedResource = ALL_RESOURCES_TRANSLATIONS[resourceName]
                ? ALL_RESOURCES_TRANSLATIONS[resourceName][lang]
                : resourceName;
            return `${translatedResource} x${quantity}`;
        }).join(', ');
        
        return `
            <div class="recipe-card ${hasResources ? 'has-resources' : 'missing-resources'} ${isLocked ? 'locked' : ''}">
                ${isLocked ? '<div class="locked-overlay">🔒</div>' : ''}
                <div class="recipe-image">
                    <img loading="lazy" src="assets/resources/${recipe.name.toLowerCase().replace(/\s+/g, '_').replace(/\(/g, '').replace(/\)/g, '')}.png" 
                         alt="${translatedName}"
                         onerror="this.parentElement.innerHTML='${recipe.icon}'">
                </div>
                <div class="recipe-content">
                    <div class="recipe-name">${translatedName}</div>
                    <div class="recipe-price">${formatPrice(recipe.price)}</div>
                    <div class="recipe-ingredients">
                        ${translatedIngredients}
                    </div>
                    <div class="recipe-actions">
                        <button class="btn-purchase ${isPurchased ? 'purchased' : ''} ${isLocked ? 'disabled' : ''}" 
                                onclick="${isLocked ? 'return false;' : `toggleRecipePurchase(${recipe.id})`}"
                                ${isLocked ? 'disabled' : ''}>
                            ${isLocked ? '🔒 ' + (t('locked') || 'Verrouillé') : (isPurchased ? t('purchased') : (recipe.price === 0 ? t('obtain') : t('purchase')))}
                        </button>
                        <button class="btn-favorite ${isFavorite ? 'active' : ''} ${isLocked ? 'disabled' : ''}" 
                                onclick="${isLocked ? 'return false;' : `toggleRecipeFavorite(${recipe.id})`}"
                                ${isLocked ? 'disabled' : ''}
                                title="${t('addFavorite')}">
                            ${isFavorite ? '★' : '☆'}
                        </button>
                    </div>
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
    console.log('displayClubRewards() called');
    const container = document.getElementById('club-rewards');
    if (!container) {
        console.error('Club rewards container not found');
        return;
    }
    
    if (typeof CLUB_7ZEE_REWARDS === 'undefined') {
        console.error('CLUB_7ZEE_REWARDS is not defined');
        return;
    }
    
    console.log('Club rewards count:', CLUB_7ZEE_REWARDS.length);
    
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
            <div class="club-tier-card ${isPurchased ? 'tier-purchased' : ''} ${canPurchase && !isPurchased ? 'tier-available' : ''}">
                <div class="tier-header">
                    <div class="tier-badge">${t('level')} ${reward.tier}</div>
                    <div class="tier-status">
                        ${isPurchased ? '<span class="status-icon"><img src="assets/resources/icon_check.png" class="check-icon-small"></span>' : ''}
                    </div>
                </div>
                
                <div class="tier-content">
                    <h3 class="tier-title">${rewardName}</h3>
                    <div class="tier-price">${tierPrice.toLocaleString()} <img src="assets/resources/iconNewBuck.png" alt="Newbucks" class="currency-icon"></div>
                    
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
                    ${isPurchased ? '<span class="btn-icon"><img src="assets/resources/icon_check.png" class="check-icon-small"></span> ' + t('purchased') : '<span class="btn-icon">🛒</span> ' + t('purchase')}
                </button>
            </div>
        `;
    }).join('');
}



async function toggleDlcOwnership(dlcId) {
    const dlc = SLIME_RANCHER_DLCS.find(d => d.id === dlcId);
    
    
    if (dlc && dlc.price === 0 && userData.ownedDlcs.includes(dlcId)) {
        return;
    }
    
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
    console.log('displayDlcs() called');
    const container = document.getElementById('dlcs-list');
    if (!container) {
        console.error('DLC container not found');
        return;
    }
    
    if (typeof SLIME_RANCHER_DLCS === 'undefined') {
        console.error('SLIME_RANCHER_DLCS is not defined');
        return;
    }
    
    console.log('DLCs count:', SLIME_RANCHER_DLCS.length);
    
    const lang = currentLanguage || 'en';
    
    container.innerHTML = SLIME_RANCHER_DLCS.map(dlc => {
        const isOwned = userData.ownedDlcs.includes(dlc.id);
        
        
        const translatedName = DLC_TRANSLATIONS[dlc.name]
            ? DLC_TRANSLATIONS[dlc.name][lang]
            : dlc.name;
        
        
        const translatedContent = dlc.content.map(item => {
            return DLC_TRANSLATIONS[item]
                ? DLC_TRANSLATIONS[item][lang]
                : item;
        });
        
        return `
            <div class="dlc-card ${isOwned ? 'owned' : ''}">
                <div class="dlc-header">
                    <h3 class="dlc-name">${translatedName}</h3>
                    <div class="dlc-price">${formatPrice(dlc.price)}</div>
                </div>
                <div class="dlc-content">
                    <h4>${t('dlcContent')}</h4>
                    <ul>
                        ${translatedContent.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn-dlc ${isOwned ? 'owned' : ''}" 
                        onclick="toggleDlcOwnership('${dlc.id}')">
                    ${isOwned ? t('dlcOwned') : t('dlcBuy')}
                </button>
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
            const hasDeposits = Object.keys(userData.refineryDeposits).length > 0;
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
    console.log('displayZones() called');
    const container = document.getElementById('zones-list');
    if (!container) {
        console.error('Zones container not found');
        return;
    }
    
    if (typeof ZONES_DATA === 'undefined') {
        console.error('ZONES_DATA is not defined');
        return;
    }
    
    console.log('Zones count:', ZONES_DATA.length);
    
    
    const labWarning = document.getElementById('lab-warning');
    if (labWarning) {
        labWarning.style.display = hasLabAccess() ? 'none' : 'block';
    }
    
    const lang = currentLanguage || 'en';
    
    container.innerHTML = ZONES_DATA.map(zone => {
        const isOwned = userData.ownedZones.includes(zone.id);
        const isFree = zone.price === 0;
        
        
        const translatedName = ZONES_TRANSLATIONS[zone.nameKey]
            ? ZONES_TRANSLATIONS[zone.nameKey][lang]
            : zone.nameKey;
        
        
        const zoneImage = zone.image || `iconExpan${zone.id.charAt(0).toUpperCase() + zone.id.slice(1)}.png`;
        
        return `
            <div class="zone-card ${isOwned ? 'owned' : ''} ${isFree ? 'free' : ''}">
                <div class="zone-image-container">
                    <img loading="lazy" src="assets/resources/${zoneImage}" alt="${translatedName}" class="zone-img">
                    ${isOwned ? '<div class="zone-owned-badge"><img src="assets/resources/icon_check.png" class="check-icon-small"></div>' : ''}
                </div>
                <div class="zone-header">
                    <div class="zone-title-wrapper">
                        <h3 class="zone-name">${translatedName}</h3>
                        <div class="zone-price">${formatPrice(zone.price)}</div>
                    </div>
                </div>
                ${zone.unlocks.length > 0 ? `
                    <div class="zone-content">
                        <h4>${t('zoneUnlock') || 'Débloque'}</h4>
                        <ul>
                            ${zone.unlocks.map(unlock => `<li>${unlock}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                <button class="btn-zone ${isOwned ? 'owned' : ''} ${isFree ? 'disabled' : ''}" 
                        onclick="${isFree ? 'return false;' : `toggleZone('${zone.id}')`}"
                        ${isFree ? 'disabled' : ''}>
                    ${isOwned ? '<img src="assets/resources/icon_check.png" class="check-icon-small"> ' + (t('zoneOwned') || 'Acheté') : (isFree ? (t('included') || 'Inclus') : (t('zoneBuy') || 'Acheter'))}
                </button>
            </div>
        `;
    }).join('');
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
    console.log('displayVacpackUpgrades() called');
    const container = document.getElementById('vacpack-upgrades');
    if (!container) {
        console.error('Vacpack container not found');
        return;
    }
    
    if (typeof VACPACK_UPGRADES === 'undefined') {
        console.error('VACPACK_UPGRADES is not defined');
        return;
    }
    
    console.log('Vacpack upgrades count:', VACPACK_UPGRADES.length);
    
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
                        
                        return `
                            <div class="vacpack-upgrade-card ${isPurchased ? 'purchased' : ''} ${canPurchase && !isPurchased ? 'available' : ''}">
                                <div class="upgrade-icon">
                                    <img loading="lazy" src="assets/resources/vacpack_${category}_${upgrade.level || upgrade.id}.png" 
                                         alt="${translatedName}"
                                         onerror="this.parentElement.innerHTML='${upgrade.icon}'">
                                </div>
                                <div class="upgrade-details">
                                    <div class="upgrade-name">${translatedName}</div>
                                    <div class="upgrade-price">${formatPrice(upgrade.price)}</div>
                                </div>
                                <button class="btn-upgrade ${isPurchased ? 'purchased' : ''}"
                                        onclick="toggleVacpackUpgrade(${upgrade.id})"
                                        ${!canPurchase && !isPurchased ? 'disabled' : ''}>
                                    ${isPurchased ? '<img src="assets/resources/icon_check.png" class="check-icon-small"> ' + t('purchased') : (upgrade.price === 0 ? t('obtain') : t('purchase'))}
                                </button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).filter(html => html !== '').join('');
}



function displayFavorites() {
    console.log('displayFavorites() called');
    const favoritesContainer = document.getElementById('favorites-list');
    if (!favoritesContainer) {
        console.error('Favorites container not found');
        return;
    }
    
    const lang = currentLanguage || 'en';
    const favoriteRecipes = RECIPES_DATA.filter(r => userData.favoriteRecipes.includes(r.id));
    
    if (favoriteRecipes.length === 0) {
        favoritesContainer.innerHTML = `<div class="empty-message">${t('noFavorites') || 'Aucun favori pour le moment. Ajoutez des recettes en cliquant sur ☆'}</div>`;
        return;
    }
    
    
    favoritesContainer.innerHTML = `
        <div class="recipes-grid">
            ${favoriteRecipes.map(recipe => {
                const isPurchased = userData.purchasedRecipes.includes(recipe.id);
                const hasResources = hasEnoughResources(recipe.ingredients);
                
                const translatedName = RECIPES_TRANSLATIONS[recipe.name]
                    ? RECIPES_TRANSLATIONS[recipe.name][lang]
                    : recipe.name;
                
                const translatedIngredients = recipe.ingredients.map(ing => {
                    const parts = ing.split(' x');
                    const resourceName = parts[0];
                    const quantity = parts[1];
                    const translatedResource = ALL_RESOURCES_TRANSLATIONS[resourceName]
                        ? ALL_RESOURCES_TRANSLATIONS[resourceName][lang]
                        : resourceName;
                    return `${translatedResource} x${quantity}`;
                }).join(', ');
                
                return `
                    <div class="recipe-card ${hasResources ? 'has-resources' : 'missing-resources'}">
                        <div class="recipe-image">
                            <img loading="lazy" src="assets/resources/${recipe.name.toLowerCase().replace(/\s+/g, '_').replace(/\(/g, '').replace(/\)/g, '')}.png" 
                                 alt="${translatedName}"
                                 onerror="this.parentElement.innerHTML='${recipe.icon}'">
                        </div>
                        <div class="recipe-content">
                            <div class="recipe-name">${translatedName}</div>
                            <div class="recipe-price">${formatPrice(recipe.price)}</div>
                            <div class="recipe-ingredients">${translatedIngredients}</div>
                            <div class="recipe-actions">
                                <button class="btn-purchase ${isPurchased ? 'purchased' : ''}" 
                                        onclick="toggleRecipePurchase(${recipe.id})">
                                    ${isPurchased ? t('purchased') : (recipe.price === 0 ? t('obtain') : t('purchase'))}
                                </button>
                                <button class="btn-favorite active" 
                                        onclick="toggleRecipeFavorite(${recipe.id})"
                                        title="${t('removeFavorite') || 'Retirer des favoris'}">
                                    ★
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}


window.addEventListener('load', () => {
    displayRecipes('all');
});
